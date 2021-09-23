import React, { useContext } from 'react'
import { API_URL, NEXT_CLIENT_URL } from '../config/index'
import Link from 'next/link'
import AuthContext from '@/context/authContext'

const CourseDisplayElement = ({ course }) => {
    const { user, login } = useContext(AuthContext)
    console.log(user, course)


    return (
        <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="">
                <img className="bg-gray-300 flex-shrink-0" src={course.thumbnail.formats.medium.url} alt="" />
            </div>
            <div className="flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-lg font-medium truncate">{course.title}</h3>
                        <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                            {course.price} EUR
                        </span>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">{course.description}</p>
                    <div>
                        <Link href={`${NEXT_CLIENT_URL}/app/${course.slug}`}>
                            Hier den Kurs anschauen
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseDisplayElement