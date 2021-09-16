import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'

const HeroSection = () => {
    return (
        <main className="lg:relative">
            <div className="mx-auto w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16 lg:px-24">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block xl:inline">Der bessere Weg deine</span>{' '}
                        <span className="block text-green-600 xl:inline">Karriere zu starten</span>
                    </h1>
                    <h1 className="text-xl tracking-tight font-bold text-gray-700 sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl mt-4">
                        <span className="block xl:inline">Erfahre wie du als Berufsanfänger mit deiner Bewerbung überzeugst und im Gespräch mit EntscheiderInnen beeindruckst!</span>{' '}
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Wie schaffe ich es mich aus dem Pool von Bewerbern hervorzuheben? Wie kann ich einen Job finden, der mich glücklich macht? Und wie kann ich dafür sorgen, dass ich in meinen ersten Berufsjahren besonders positiv wahrgenommen werde? Junge Berufsanfänger haben viele Fragen. Wir haben die Antworten. Klicke auf den Button und lerne, wie du dich in einer schnellebigen Berufswelt den Weg zu deinem Traumjob findest
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link href="/account/register">
                                <a
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Klicke hier, um mehr zu erfahren
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    alt=""
                />
            </div>
        </main>
    )
}

export default HeroSection
