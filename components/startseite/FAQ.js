const faqs = [
    {
        id: 1,
        question: "Ist der Kurs wirklich kostenlos?",
        answer:
            "Ja, der Kurs ist für TeilnehmerInnen wirklich komplett kostenlos",
    },
    {
        id: 2,
        question: "Ist eine Anstellung mit den Techniken dieses Kurses wirklich garantiert?",
        answer:
            "Nein, eine Anstellung können wir natürlich nicht garantieren. Aber die Chancen steigen durch das, was du im Kurs lernst, erheblich.",
    },
    {
        id: 3,
        question: "Kannst du persönlich über meine Bewerbung schauen?",
        answer:
            "Aufgrund der hohen Nachfrage ist das leider nicht möglich",
    },
    {
        id: 4,
        question: "Wie viel Zeit muss ich investieren, um Ergebnisse zu sehen?",
        answer:
            "Der Kurs dauert etwa 3 Stunden, erste Ergebnisse wirst du schon nach wenige Wochen in deinem Bewerbungsprozess bemerken",
    },
    {
        id: 5,
        question: "Ich habe XYZ studiert - gilt das auch für mich?",
        answer:
            "Grundsätzlich hilft dir dieser Kurs bei den meisten akademischen Studiengängen eine Anstellung zu finden. Wir haben zum Beispiel schon gute Erfahrungen mit AbsolventInnen in Sozialer Arbeit, Informatik oder Sportwissenschaft sammeln können.",
    },
    {
        id: 6,
        question: "Wo finde ich die LogIn-Area?",
        answer:
            "Klicke dazu einfach auf den LogIn-Button in der Navigationsleiste",
    },
    // More questions...
]

export default function FAQ() {
    return (
        <div className="bg-green-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
                    <p className="mt-4 text-gray-100">
                        Möglicherweise haben wir noch nicht alle offenen Fragen geklärt - In dieser Sektion gehen wir auf die am häufigsten gestellten Fragen ein. Die Liste wird fortlaufend erweitert.
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="font-semibold text-white">{faq.question}</dt>
                                <dd className="mt-3 text-gray-100">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}