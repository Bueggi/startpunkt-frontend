import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DashboardLayout from '../../components/DashboardLayout'
import { API_URL } from '../../config/index'
import CourseDisplayElement from '@/components/CourseDisplayElement'
import qs from 'qs'
import { parseCookies } from '@/helpers/index'
import AuthContext from '@/context/authContext'
import NewsListComponent from '@/components/NewsListComponent'

const Dashboard = ({ courses, token, posts }) => {
    const { user } = useContext(AuthContext)
    const router = useRouter()

    const [loading, setLoading] = useState(true)


    useEffect(async () => {
        setLoading(true)

        // TODO - get all news 

        // TODO - get all courses that the person has subscribed to


        setLoading(false)
    }, [])


    return (
        <DashboardLayout title={'Alle Kurse'}>
            {!user ? <h1>Not Authorized</h1> :
                <div className="flex-1 flex items-stretch overflow-y-auto">
                    <main className="flex-1 overflow-y-auto">

                        {/* Primary column */}
                        <section
                            aria-labelledby="primary-heading"
                            className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
                        >
                            <h1
                                id="primary-heading"
                                className="sr-only">
                            </h1>
                            <div className="grid justify-center">
                                {posts && posts.length && posts.map(post => {
                                    return <NewsListComponent
                                        title={post.title}
                                        body={post.body}
                                        created={post.created_at}
                                        image={post.image} />
                                })}
                            </div>
                        </section>
                    </main>

                    {/* Secondary column (hidden on smaller screens) */}
                    <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
                        <nav className="flex-1 px-2 space-y-1 bg-white pt-6 text-lg" aria-label="Sidebar">
                            <h1 className='text-2xl'>Deine Kurse</h1>
                            {user.courses && user.courses.length ?
                                user.courses.map(el => el)
                                :
                                <h2>Du hast noch keine Kurse in deinem Portfolio</h2>}
                        </nav>
                    </aside>
                </div>
            }
        </DashboardLayout>
    )
}

export default Dashboard

export const getServerSideProps = async ({ req, res }) => {
    const { token } = await parseCookies(req)

    const postReq = await fetch(`${API_URL}news-posteds`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const posts = await postReq.json()

    console.log(`${API_URL}news-posteds`, posts)

    const conditions = qs.stringify({
        _where:
        {
            _and: [
                { public: true }
            ]
        }
    })
    const serverRes = await fetch(`${API_URL}/courses?${conditions}`)
    const courses = await serverRes.json()


    return {
        props: { courses, token, posts }
    }
}
