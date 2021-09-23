import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Link from 'next/link'

export default function Pagination({ total, page }) {
    const [activePage, setActivePage] = useState(page)
    const maxPerPage = 5
    const pages = Math.ceil(total / maxPerPage)
    const pagesArray = pages === 0 ? 1 : Array.from(Array(pages).keys())

    return (
        <div className="mt-8 mx-24 bg-white px-4 py-3 flex items-center justify-self-end sm:px-6">

            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                    {pagesArray.map((el, i) => {
                        return (<Link href={`/app?page=${i + 1}`} key={i}>
                            <a
                                aria-current="page"
                                className={`z-10 ${parseInt(page) === i + 1 ? "bg-indigo-100 border-indigo-700 text-indigo-800" : "bg-indigo-50 border-indigo-500 text-indigo-600"} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                            >
                                {i + 1}
                            </a>
                        </Link>)
                    })}

                </nav>
            </div>
        </div>
    )
}