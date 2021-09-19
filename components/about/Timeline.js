import React from 'react'

export const Timeline = () => {
    const timelineEvents = [
        {
            title: 'Master in Psychologie',
            event: 'In Heidelberg habe ich meinen Master in Psychologie absolviert. Mein Themengebiet war XXXXX.'
        },
        {
            title: 'Erster Job - Ein Reinfall',
            event: 'Ich hätte es wissen müssen - dieser Job war eine reine Qual. Aber ich habe die Anzeichen nicht erkannt.'
        },
        {
            title: 'Mein nächster Job war ein Traumjob',
            event: 'Bei der Agentur BLUPRNT habe ich genau den Job gefunden, der mir Spaß macht. Viel Action, viel Verantwortung, viel Spaß!'
        },
        {
            title: 'Karriere-Aufstieg',
            event: 'Nach 2 Jahren als Consultant habe ich den Aufstieg geschafft: Ich bin Head Of Business Development bei BLUPRNT'
        },
    ]

    return (
        <div>
            <div className="container bg-gray-50 mx-auto w-full h-full my-12">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
                    {timelineEvents.map((el, i) => {
                        if (i % 2 !== 0) {
                            return (<div className="mb-8 flex justify-between items-center w-full right-timeline" key={i}>
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">{i + 1}</h1>
                                </div>
                                <div className="order-1 bg-green-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">{el.title}</h3>
                                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{el.event}</p>
                                </div>
                            </div>)
                        }
                        else {
                            return (<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" key={i}>
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto text-white font-semibold text-lg">{i + 1}</h1>
                                </div>
                                <div className="order-1 bg-green-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">{el.title}</h3>
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">{el.event}</p>
                                </div>
                            </div>)
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline