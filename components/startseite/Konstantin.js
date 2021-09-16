import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

const features = [
    {
        name: 'Analytics',
        href: '#',
        description: 'Get a better understanding of where your traffic is coming from.',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        href: '#',
        description: 'Speak directly to your customers in a more meaningful way.',
        icon: CursorClickIcon,
    },
    { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        href: '#',
        description: "Connect with third-party tools that you're already using.",
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        href: '#',
        description: 'Build strategic funnels that will drive your customers to convert',
        icon: RefreshIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Konstantin() {
    return (
        <div className="relative bg-gray-50">
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">Hi, mein Name ist</span>{' '}
                            <span className="block text-green-600 xl:inline">Konstantin</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Als ich meine Masterarbeit in Psychologie abgegeben hatte habe ich mir die Frage gestellt: Was kommt jetzt? Als Therapeuth wollte ich auf keinen Fall arbeiten. Rectruiter? Auch nicht mein Ding.
                            Seit über 5 Jahren arbeite ich nun als UX-Consultant. Was genau das ist? Ja, so genau wusste ich das auch nicht, als ich damit begonnen habe.
                        </p>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Heute bin ich Head Of Business Development in einer Consulting-Agentur. Klingt cool, oder? Macht auch mächtig Spaß! Aber um in diese Führungsposition zu gelangen, musste ich viele Fehler machen, die mir geholfen haben, meine Karriere voranzubringen.
                            Heute führe ich ein Team von 7 Personen, hauptsächlich Berufseinsteiger. Regelmässig bekomme ich Bewerbungen von Studierenden, die nach dem Abschluss bei uns arbeiten möchten.
                        </p>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Mir fällt auf: Viele BewerberInnen machen <span className='font-bold'>genau die gleichen Fehler, die ich auch gemacht habe!</span> Dabei sind diese Fehler so einfach zu vermeiden.
                        </p>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Aus diesem Grund habe ich "startpunkt" gegründet. Ein Podcast, der Berufsanfängern dabei helfen soll ihre ersten Schritte in einer tollen Karriere zu gehen.
                            Immer wieder bekomme ich die Frage: "Kannst du mir mal von Anfang bis Ende erklären, wie ich Job-Ausschreibungen filtern kann, die zu mir passen, Top-Bewerbungen für diese Anzeigen schreibe und mich im Bewerbungsgespräch perfekt verkaufe?"
                            Ja, kann ich! Daher habe ich den startpunkt Einsteiger-Kurs für dich erstellt, damit du genau diese Punkte lernen kannst. Das Beste ist: <span className='font-bold'>Dieser Kurs ist komplett kostenlos!</span>
                        </p>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Also worauf wartest du? Melde dich noch heute an!
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link href="/account/register">
                                    <a
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 font-bold"
                                    >
                                        Sichere dir hier den kostenlosen startpunkt Einsteiger-Kurs
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex align-items-center items-center">
                    <div className="mx-auto px-auto">
                        <Image
                            className="shadow-xl rounded-lg border"
                            width={500}
                            height={600}
                            src="/images/Konstantin.png"
                            alt=""
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}