import { AcademicCapIcon, FastForwardIcon, NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const supportLinks = [
    {
        name: 'Studium - Das Ende in Sicht?',
        href: '#',
        description:
            'Du hast gerade dein Studium beendet oder stehst kurz vor dessen Abschluss. Sorry, für Nicht-Akademische Berufe sind wir keine Experten. Aber wenn du einen Bachelor oder Master in der Tasche hast, ist der startpunkt Einsteiger Kurs genau das Richtige für dich!',
        icon: AcademicCapIcon,
    },
    {
        name: 'Karriere mit Ambition!',
        href: '#',
        description:
            'Du möchtest eine Traum-Karriere und bist auch bereit dafür Zeit und Schweißperlen zu investieren? Wir können dir nicht dabei helfen die Karriere-Leiter in einer Behörde hochzuklettern. Aber wenn du bereit bist für deine Traum-Karriere zu arbeiten, hat dieser Kurs wertvolle Nuggets für dich!',
        icon: FastForwardIcon,
    },
    {
        name: 'Bereitschaft mutig zu sein!',
        href: '#',
        description:
            'Wer nicht wagt, der nicht gewinnt! Dieses Sprichwort gilt auch bei Bewerbungen. Wenn du den startpunkt Einsteiger Kurs durchläufst, werden dich einige Challenges erwarten, die dich aus deiner Comfort-Zone bringen. Bist du bereit dafür?',
        icon: NewspaperIcon,
    },
]

export default function Qualifier() {
    return (
        <div className="bg-white">
            <div className="relative pb-32 bg-green-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-green-900 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Für wen ist der startpunkt Einsteiger-Kurs geeignet?</h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        Nicht jeder wird gleich viel von diesem kostenlosen Kurs profitieren. Wenn einer oder mehrere Punkte auf dich zutreffen, dann kannst du dir sicher sein, dass dieser Kurs wertvolle Informationen für dich bereit hält
                    </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {supportLinks.map((link) => (
                        <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div className="absolute top-0 p-5 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
                                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                <p className="mt-4 text-base text-gray-500">{link.description}</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <Link href='/account/register'>
                                    <a lassName="text-base font-medium text-green-700 hover:text-green-600">
                                        Los geht's!<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}