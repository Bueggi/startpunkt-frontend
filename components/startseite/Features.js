import { CheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const features = [
    {
        name: 'Die 3 wichtigsten Fragen',
        description: 'Diese drei Fragen werden in JEDEM Bewerbungsgespräch geführt. Ohne es zu wissen kannst du dich schon hier ins Aus katpultieren, wenn du dich nicht richtig darauf vorbereitest!',
    },
    {
        name: 'Job-Listings lesen lernen',
        description: 'Recruiter verstecken die wichtigsten Informationen in Job-Listings in komplizierten, verklausulierten Sätzen! Hier lernst du die Sprache der Recruiter zu sprechen'
    },
    {
        name: 'Bewerbungen schnell schreiben',
        description: 'Hier lernst du, wie du deine Unterlagen so organisierst, dass du jede Bewerbung in unter einer Stunde fertig hast!',
    },
    { name: 'EntscheiderInnen überzeugen', description: 'Wenn du weißt, wie EntscheiderInnen denken, kannst du auch besser dafür sorgen, dass du einen bleibenden Eindruck hinterlässt1' },
    { name: 'Red Flags erkennen', description: 'Bei deiner Karriere sparst du besonders viel Zeit, wenn du nicht in die fiesen Karriere-Bremsen-Fallen tappst. Hier lernst du die größten Red Flags im Bewerbungsprozess' },
    { name: 'Die richtigen Worten nach dem Bewerbungsgespräch', description: 'Das Gespräch ist vorbei - hier ist deine große Chance noch einmal zu punkten! Diese Chance lassen aber viele ungenutzt. Du erfährst hier, was du sagen musst, um im Gedächtnis zu bleiben!' },
]

export default function Fatures() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div>
                    <h2 className="text-base font-semibold text-green-600 uppercase tracking-wide">Alles, was du wissen musst</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">Das wirst du lernen!</p>
                    <p className="mt-4 text-lg text-gray-500">
                        Ein Online-Kurs ist nur so gut wie das Ergebnis, das er den TeilnehmerInnen bringt. Ich bin mir sicher, dass du wertvolle Nuggets in den Videos finden wirst - um dich ein wenig neugierig zu machen, habe ich hier ein paar spannende Tipps parat, die im Kurs auf dich warten.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div >
            <Link href="/account/register">
                <a
                    className="w-full mb-12 max-w-lg mx-auto justify-self-center flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                    Klingt das gut? Dann melde dich hier an!
                </a>
            </Link>
        </div>
    )
}