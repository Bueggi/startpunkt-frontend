import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import PageLayout from '@/components/PageLayout'
import Timeline from '@/components/about/Timeline'
import { useRouter } from 'next/router'


export default function About() {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <PageLayout>


            <div className="min-h-screen bg-gray-50">

                <main className="overflow-hidden">
                    {/* Header */}
                    <div className="bg-gray-50">
                        <div className="py-24 lg:py-32">
                            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                    Über Konstantin
                                </h1>
                                <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                                    Hier erfahrt ihr mehr über meinen Werdegang
                                </p>
                            </div>
                        </div>
                    </div>

                    <Timeline />

                </main>
            </div>
        </PageLayout>
    )
}