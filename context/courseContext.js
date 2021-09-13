import React, { createContext, useEffect, useState } from 'react'
import lectionNavigationWrapper from '@/utils/lectionNavigationWrapper'


const CourseContext = createContext()


export const CourseProvider = ({ children }) => {

    const [course, setCourse] = useState(null)
    const [lectionNavigation, setLectionNavigation] = useState(null)
    const [title, setTitle] = useState('Aktuelles Video')
    const [description, setDescription] = useState('Aktuelle Videobeschreibung')
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed?v=p4dp_wMtfw0')

    useEffect(() => {
        lectionNavigationSetter()
        console.log('ich bin der stresser, sorry')
    }, [course])

    // Get Navigation for courses
    const lectionNavigationSetter = () => {
        const lectionNav = course !== null
            && course.lections.map((lection, i) => {

                if (!lection.lessons || !lection.lessons.length) {
                    return {
                        name: lection.title,
                        href: '#',
                        current: false
                    }
                }


                const lessonChildren = lection.lessons.map((lesson, i) => {
                    if (lesson.public) {
                        return {
                            name: lesson.title,
                            href: '#',
                            videoUrl: lesson.videoUrl,
                            description: lesson.description
                        }
                    }
                    else {
                        return null
                    }
                })

                return {
                    name: lection.title,
                    href: '#',
                    current: false,
                    children: lessonChildren
                }
            })

        setLectionNavigation(lectionNav)
    }



    return (<CourseContext.Provider value={
        {
            course,
            setCourse,
            lectionNavigation,
            videoUrl,
            setVideoUrl,
            title,
            setTitle,
            description,
            setDescription
        }
    }
    >
        {children}
    </CourseContext.Provider>)
}

export default CourseContext
