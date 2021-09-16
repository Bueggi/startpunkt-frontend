import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DashboardLayout from '../../components/DashboardLayout'
import { API_URL } from '../../config/index'
import qs from 'qs'
import { parseCookies } from '@/helpers/index'
import AuthContext from '@/context/authContext'
import NewsListComponent from '@/components/NewsListComponent'
import Pagination from '@/components/Pagination'

const Dashboard = ({ courses, token, posts, total, page }) => {
    const { user } = useContext(AuthContext)
    const router = useRouter()

    const [loading, setLoading] = useState(true)

    return (
        <DashboardLayout title={'Alle Kurse'}>
            {!user ? <h1>Not Authorized</h1> :
                <div className="flex-1 flex items-stretch overflow-y-auto pb-12">
                    <main className="flex-1 overflow-y-auto main-background">

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

                                <h2 className="bg-white opacity-100 justify-self-center text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mt-12">Willkommen zurück, {user.username}</h2>
                                <h2 className="bg-white opacity-100 justify-self-center text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mt-2">Diese Neuigkeiten erwarten dich bei startpunkt</h2>
                                {posts && posts.length && posts.map(post => {
                                    return <NewsListComponent
                                        title={post.title}
                                        body={post.body}
                                        created={post.created_at}
                                        image={post.image} />
                                })}
                                <Pagination page={page} total={total} />
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
                                <h4>Du hast noch keine Kurse in deinem Portfolio</h4>}
                        </nav>
                    </aside>
                </div>
            }
        </DashboardLayout>
    )
}

export default Dashboard

export const getServerSideProps = async ({ req, res, query: { page = 1 } }) => {
    const { token } = await parseCookies(req)

    const maxNews = 5;
    const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

    // Fetch total/count
    const totalRes = await fetch(`${API_URL}/news-posteds/count`)
    const total = await totalRes.json()

    const postReq = await fetch(`${API_URL}/news-posteds?_limit=${maxNews}&_start=${start}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const posts = await postReq.json()

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
        props: { courses, token, posts, total, page }
    }
}
