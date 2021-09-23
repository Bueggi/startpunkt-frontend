import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { useRouter } from 'next/router'

const MyCourses = () => {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <DashboardLayout>
            MyCourses
        </DashboardLayout>
    )
}

export default MyCourses
