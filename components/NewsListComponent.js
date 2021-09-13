export default function NewsListComponent({ title, body, created, image }) {
    return (
        <div className="sm:w-min-max w-full  bg-white overflow-hidden rounded-lg divide-y divide-gray-200 shadow-2xl px-auto mt-6 border">
            <div className="px-4 py-5 sm:px-6">
                {/* Content goes here */}
                {/* We use less vertical padding on card headers on desktop than on body sections */}
                <div className="bg-white px-4 border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                        <div className="ml-4 mt-4">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                        </div>
                        <div className="ml-4 mt-4 flex-shrink-0">
                            <button
                                type="button"
                                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Create new job
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-5 sm:p-6">{body}</div>
        </div>
    )
}