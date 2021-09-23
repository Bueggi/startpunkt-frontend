import ReactMarkdown from 'react-markdown'
import dateFormat from 'dateformat'

dateFormat.i18n = {
    dayNames: [
        "Son",
        "Mon",
        "Die",
        "Mit",
        "Do",
        "Fre",
        "Sam",
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
    ],
    monthNames: [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez",
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
};

export default function NewsListComponent({ title, body, created, image }) {


    const date = dateFormat(created, 'fullDate')
    const difference = () => {
        const today = new Date.now;
        const diffTime = Math.abs(today - created);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays < 7
    }

    return (
        <div className="w-11/12 xl:w-1/2 justify-self-end xl:mr-24 mx-6 opacity-100 overflow-hidden rounded-lg divide-y divide-gray-200 shadow-2xl px-auto mt-12 border bg-gray-50">
            <div className="px-4 py-5 sm:px-6 bg-white">
                {/* Content goes here */}
                {/* We use less vertical padding on card headers on desktop than on body sections */}
                <div className="bg-white px-4 border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-4 flex justify-between items-center flex-col flex-wrap sm:flex-nowrap">
                        <div className="ml-4 mt-4 flex">
                            <h3 className="flex-1 text-lg leading-6 font-medium text-gray-900">{title}</h3>
                            {difference &&
                                <span className="inline-flex items-center justify-center mx-8 float-right px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">
                                    NEW
                                </span>}

                        </div>
                        <div className="ml-4 flex-shrink-0 text-sm text-gray-400">
                            Gepostet am {date}
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-5 sm:p-6"><ReactMarkdown>{body}</ReactMarkdown></div>
        </div>
    )
}