import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { API_URL } from '../../config/index'
import CourseDisplayElement from '@/components/CourseDisplayElement'
import qs from 'qs'

const Dashboard = ({ courses }) => {
    return (
        <DashboardLayout title={'Alle Kurse'}>
            <h2>Kurse, die du gekauft hast</h2>
            <h2>Kurse, die dich interessieren könnten</h2>

            <ul role="list" className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses && courses.length && courses.map((course, i) => <CourseDisplayElement course={course} key={i} />)}
            </ul>
        </DashboardLayout>
    )
}

export default Dashboard

export const getServerSideProps = async () => {
    const conditions = qs.stringify({
        _where:
        {
            _and: [
                { public: true }
            ]
        }
    })
    const res = await fetch(`${API_URL}/courses?${conditions}`)
    const courses = await res.json()

    console.log(courses.lections)

    return {
        props: { courses }
    }
}
