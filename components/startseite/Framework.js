import {
    HeartIcon,
    PencilAltIcon,
    SearchIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

const features = [
    { description: 'Wie findest du Stellenanzeigen und Jobs, die zu deinem Profil passen und bei denen du große Chancen hast zum Gespräch eingeladen zu werden?', name: '1. Die passenden Bewerbungen finden', icon: SearchIcon },
    { description: 'Wie schaffst du es mit deiner Bewerbung aus dem Pool der vielen Bewerbungen positiv hervorzustechen?', name: '2. Die perfekte Bewerbung schreiben', icon: PencilAltIcon },
    { description: 'Wie schaffst du es bei einem Bewerbungsgespräch positiv aufzufallen und den Entscheidenden im Kopf zu bleiben?', name: '3. Beim Bewerbungsgespräch überzeugen', icon: HeartIcon },
]

export default function Framework() {
    return (
        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-green-600 uppercase">Wie du schon mit der ersten Bewerbung punktest!</h2>
                <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Dein Weg zum Traumjob: Die 3 Phasen der erfolgreichen Bewerbung
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Beim Sichten von über 100 Bewerbungen habe ich festgestellt: Viele BewerberInnen machen die gleichen Fehler, die verhindern, dass sie ihren Traumjob bekommen. Diese Fehler sind leicht vermeidbar! Damit du diese Fehler nicht machst, habe ich einen Online-Kurs konzipiert, der dich
                    Schritt für Schritt durch den Bewerbungsprozess führt - den <span className='font-bold'>startpunkt Einsteiger Kurs</span>. Dieser Kurs führt dich durch die drei wichtigsten Phasen des Bewerbungsprozesses.
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Wenn du die Tipps aus diesem Kurs befolgst, ist es nur eine Frage der Zeit, bis du erfolgreich in die Berufswelt gestartet bist!
                    </p>
                    <Link href="/account/register">
                        <a
                            className="mx-auto mt-8 rounded-md shadow max-w-2xl lg:max-w-lg w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 font-bold"
                        >
                            Hier kannst du dich kostenlos zum Kurs anmelden!
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}