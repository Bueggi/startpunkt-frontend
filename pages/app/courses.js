import CourseDisplayElement from '@/components/CourseDisplayElement'
import DashboardLayout from '@/components/DashboardLayout'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import React from 'react'

const courses = ({ courses }) => {
    return (
        <DashboardLayout>
            <div className="px-8 py-12">

                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>

                    {courses.map((el, i) => {
                        return <CourseDisplayElement course={el} key={i} />
                    })}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default courses

export const getServerSideProps = async ({ req, res }) => {
    const { token } = await parseCookies(req)
    const courseReq = await fetch(`${API_URL}/courses`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const courses = await courseReq.json()

    return {
        props: {
            courses
        }
    }
}