import React from 'react'
import {
    GlobeAltIcon,
    ScaleIcon,
    LightningBoltIcon
} from '@heroicons/react/solid'
import Link from 'next/link'

const Pacing = () => {
    const features = [
        {
            name: '... die Sprache von Unternehmen zielgenau zu entschlüsseln!',
            description:
                '"Wir suchen einen kreativen, dynamischen, engagierten Mitarbeitenden"... Ja, ok - welches Unternehmen sucht das nicht!? Solche Sätze findest du aber in quasi jeder Anzeige. Daraus lässt sich aber nur schwer herauslesen: Welchen Typ Mensch sucht das Unternehmen wirklich? Die Antwort auf diese Frage ist einfach zu entschlüsseln, wenn du die Sprache von Recruitern entschlüsseln kannst!',
            icon: LightningBoltIcon,
        },
        {
            name: '... genau zu wissen, wie deine Bewerbung positiv auffällt',
            description:
                '"Sehr geehrte Damen und Herren,"... So weit kommen die Meisten bei Ihrer Bewerbung - aber was dann? Egal ob im Großkonzern oder im kleinen Startup - wenn deine Bewerbung nicht direkt überzeugt, hast du keine Chance! Mit ein paar einfachen Tricks schaffst du es aber positiv aus der Menge der Bewerbungen herauszustechen ohne die ständig gleichen Floskeln verwenden zu müssen!',
            icon: GlobeAltIcon,
        },
        {
            name: '... im Bewerbungsgespräch mit deiner Persönlichkeit zu glänzen!',
            description:
                '"Was sind Deine Schwächen?" - "Schokolade".... GÄHN! Diese platten Antworten haben Unternehmen schon tausendmal gehört! Da fällst du besser mit innovativeren Antworten auf! Vor allem auf drei Fragen musst du dich vorbereiten! Sie werden in jedem Bewerbungsgespräch gefragt und schon bei diesem Punkt fallen die meisten Bewerber aus dem Raster! Welche Fragen das sind und was du antworten kannst, verraten wir dir im Kurs!',
            icon: ScaleIcon,
        }
    ]

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Dein Weg zum Traumjob</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Wie schön wäre es....
                    </p>
                    <div className="py-12 bg-white">
                        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 text-left">
                                {features.map((feature) => (
                                    <div key={feature.name}>
                                        <dt>
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="lg:max-w-xs mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-12 grid-cols-1 items-center justify-center justify-items-center place-items-center">
                            <p className="mt-3 mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                Wie du all diese Punkte sicher beherrschst und in jedem Bewerbungsprozess als einer der Top-Kanidaten gilst zeige ich dir Schritt für Schritt!
                            </p>
                            <Link href="/account/register">
                                <a
                                    className="mx-auto mt-8 rounded-md shadow max-w-2xl lg:max-w-lg w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 font-bold"
                                >
                                    Hier lernst du alles, was du brauchst, um deinen Traumjob zu ergattern!
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pacing
