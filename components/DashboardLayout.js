import { Fragment, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '@/context/authContext'
import { Menu, Transition } from '@headlessui/react'
import {
    CollectionIcon,
    HomeIcon,
    MenuAlt2Icon,
    PlusIcon,
    ViewGridIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import MobileMenu from './MobileMenu'
import Link from 'next/link'


const sidebarNavigation = [
    { name: 'Home', href: '/app', icon: HomeIcon, current: true },
    { name: 'Alle Kurse', href: '/app/courses', icon: ViewGridIcon, current: false },
    { name: 'Meine Kurse', href: '/app/myCourses', icon: CollectionIcon, current: false },
]
const userNavigation = [
    { name: 'Profil', href: '/profile' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileCourseMenu, setMobileCourseMenu] = useState([])

    const router = useRouter()

    const { user, logout } = useContext(AuthContext)
    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden">
            {/* Narrow sidebar */}
            <div className="hidden w-28 bg-green-700 overflow-y-auto md:block">
                <div className="w-full py-6 flex flex-col items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                            alt="Workflow"
                        />
                    </div>
                    <div className="flex-1 mt-6 w-full px-2 space-y-1">
                        {sidebarNavigation.map((item, i) => {
                            if (router.pathname === item.href) {
                                item.current = true
                            }
                            else {
                                item.current = false
                            }

                            return (
                                <Link href={item.href} key={i}>
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-green-800 text-white' : 'text-green-100 hover:bg-green-800 hover:text-white',
                                            'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-white' : 'text-green-300 group-hover:text-white',
                                                'h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span className="mt-2">{item.name}</span>
                                    </a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

            <MobileMenu mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                sidebarNavigation={sidebarNavigation}
                classNames={classNames}
                mobileCourseMenu={mobileCourseMenu} />

            {/* Content area */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                <header className="w-full">
                    <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 md:hidden"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Sidebar öffnen</span>
                            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 flex justify-between px-4 sm:px-6">
                            <div className="flex-1 flex">
                                <form className="w-full flex md:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search all files
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            <SearchIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            name="search-field"
                                            id="search-field"
                                            className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative flex-shrink-0">
                                    <div>
                                        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                            <a
                                                onClick={() => logout()}
                                                className='block px-4 py-2 text-sm text-gray-700'>
                                                Logout
                                            </a>
                                        </Menu.Items>

                                    </Transition>
                                </Menu>

                                <button
                                    type="button"
                                    className="flex bg-green-600 p-1 rounded-full items-center justify-center text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    <PlusIcon className="h-6 w-6" aria-hidden="true" />
                                    <span className="sr-only">Add file</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main content */}
                <div classNames="overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    )
}