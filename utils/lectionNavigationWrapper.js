import { Disclosure } from '@headlessui/react'
import CourseContext from '@/context/courseContext'
import { useContext } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const LectionNavigationWrapper = ({ colorScheme = 'light' }) => {

    const colors = {
        dark: {
            text: '',
            background: ''
        },

        light: {
            text: 'text-gray-900',
            background: 'bg-gray-100'
        }
    }
    const { setVideoUrl, setDescription, setTitle, lectionNavigation } = useContext(CourseContext)


    return <div>

        {lectionNavigation && lectionNavigation.length && lectionNavigation.map((item, i) =>
            !item.children ? (
                <div key={item.name}>
                    <a
                        className={classNames(
                            item.current
                                ? 'bg-indigo-100 text-gray-900'
                                : 'bg-indigo-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                        )}
                    >
                        {i + 1}{`. `}{item.name}
                    </a>
                </div>
            ) : (
                <Disclosure as="div" key={item.name} className="space-y-1">
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                className={classNames(
                                    item.current
                                        ? 'bg-green-900 text-gray-900'
                                        : 'bg-green-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                    'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
                                )}
                            >
                                <svg
                                    className={classNames(
                                        open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                        'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                    )}
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                </svg>
                                {item.name}
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                                {item.children && item.children.map((subItem, i) => (
                                    <a
                                        key={subItem.name}
                                        onClick={(e) => {
                                            console.log(subItem)
                                            setVideoUrl(subItem.videoUrl)
                                            setDescription(subItem.description)
                                            setTitle(subItem.name)
                                        }}
                                        href='#'
                                        className="active:bg-green-700 group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        {i + 1}{`. `}{subItem.name}
                                    </a>
                                ))}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            )
        )}
    </div>
}


export default LectionNavigationWrapper