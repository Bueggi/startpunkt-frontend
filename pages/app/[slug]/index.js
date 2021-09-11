import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import qs from 'qs'
import { API_URL } from '@/config/index'
import DashboardLayout from '@/components/DashboardLayout'
import { Disclosure } from '@headlessui/react'
import CourseContext from 'context/courseContext'
import LectionNavigationWrapper from '@/utils/lectionNavigationWrapper'



const CoursePage = ({ courseRequested }) => {
    const {
        course,
        setCourse,
        lectionNavigation,
        title,
        videoUrl,
        description } = useContext(CourseContext)


    useEffect(() => {
        setCourse(courseRequested)
    }, [course])


    console.log('title', title)
    return (
        <DashboardLayout>

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


                        <iframe
                            width="100%"
                            height="900px"
                            src={videoUrl}
                            title={title}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                        {course && title}
                    </section>
                </main>

                {/* Secondary column (hidden on smaller screens) */}
                <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
                    <nav className="flex-1 px-2 space-y-1 bg-white pt-6 text-lg" aria-label="Sidebar">
                        <h1 className='text-2xl'>Kursinhalte</h1>
                        <LectionNavigationWrapper navigation={lectionNavigation} colorScheme={'light'} />
                    </nav>
                </aside>
            </div>




        </DashboardLayout >
    )
}



export async function getServerSideProps({ params: { slug }, req }) {
    console.log(req.headers.cookie)
    const conditions = qs.stringify({
        _where: {
            _and: [
                { public: true },
                { slug: slug }
            ]
        }
    })
    const res = await fetch(`${API_URL}/courses?${conditions}`)
    const course = await res.json()

    return {
        props: {
            courseRequested: course[0],
        }
    }
}

export default CoursePage
