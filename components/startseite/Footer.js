import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const footerNavigation = {
    course: [
        { name: 'Login', href: '/account/login' },
        { name: 'Registrieren', href: '/account/register' },
        { name: 'Kurs Dashboard', href: '/app' },
    ],
    support: [
        { name: 'Kontakt', href: '/contact' },
    ],
    company: [
        { name: 'Über Konstantin', href: '/about' },
    ],
    legal: [
        { name: 'Impressum', href: '/impressum' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/konstantin.knoess/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Apple Podcast',
            href: 'https://podcasts.apple.com/us/podcast/startpunkt-der-podcast-f%C3%BCr-berufseinsteiger/id1510413589',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <defs xmlns="http://www.w3.org/2000/svg"><linearGradient id="linear-gradient" x1="567.48" y1="-4.48" x2="563.14" y2="513.88" gradientTransform="matrix(1, 0, 0, -1, -309.35, 513.86)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#822cbe" /><stop offset="1" stop-color="#d772fb" /></linearGradient></defs>
                    <path fillRule="evenodd" clipRule="evenodd" d="M240.44,448.26c-15.27-5.46-18.54-12.88-24.81-56.38-7.28-50.55-8.87-81.84-4.65-91.75,5.59-13.14,20.78-20.6,42-20.68,21.07-.09,36.39,7.44,42,20.68,4.24,9.89,2.65,41.2-4.64,91.75-4.95,35.32-7.67,44.25-14.5,50.25-9.38,8.31-22.69,10.61-35.32,6.14Zm-65.22-51.87c-52.73-25.94-86.51-69.82-98.79-128.2-3.07-15.07-3.59-51-.69-64.84,7.68-37.11,22.36-66.13,46.75-91.79,35.15-37.06,80.37-56.65,130.7-56.65,49.82,0,94.86,19.23,129.16,55.18,26.1,27.13,40.77,55.84,48.28,93.67,2.56,12.59,2.56,46.92.17,61.08a181.4,181.4,0,0,1-69.1,113c-13,9.79-44.7,26.89-49.82,26.89-1.88,0-2.05-1.94-1.19-9.81,1.53-12.63,3.07-15.25,10.23-18.26,11.44-4.77,30.89-18.63,42.83-30.61a163,163,0,0,0,42.82-75.41c4.44-17.57,3.93-56.64-1-74.73C390,138.36,343.1,93.66,285.61,81.72c-16.73-3.42-47.1-3.42-64,0-58.18,11.94-106.29,58.86-121,117.89-3.92,16-3.92,55.11,0,71.15,9.73,39.07,35,74.9,68.08,96.23a147.45,147.45,0,0,0,17.58,10.07c7.16,3.07,8.7,5.63,10.06,18.25.85,7.68.68,9.9-1.19,9.9-1.2,0-9.9-3.75-19.11-8.19ZM175.9,327c-17.75-14.16-33.44-39.28-39.93-63.91-3.92-14.88-3.92-43.17.17-58,10.75-40.06,40.27-71.12,81.22-85.71,14-4.94,45-6,62.27-2.25C339,130.33,381.15,189.79,373,248.77c-3.24,23.77-11.43,43.29-25.93,61.42-7.17,9.16-24.57,24.54-27.64,24.54-.51,0-1-5.8-1-12.87V309l8.88-10.58c33.44-40.06,31.05-96-5.46-132.74-14.16-14.29-30.54-22.69-51.7-26.56-13.65-2.53-16.55-2.53-30.88-.17-21.76,3.55-38.61,12-53.58,26.78C148.94,202,146.55,258.29,180,298.38L188.8,309v13c0,7.17-.57,13-1.27,13s-5.63-3.41-10.92-7.68Zm59.2-69.66c-15.18-7.07-23.37-20.39-23.54-37.76,0-15.61,8.7-29.23,23.71-37.2,9.56-5,26.45-5,36,0a46.34,46.34,0,0,1,22.18,26.85c9.9,33.65-25.76,63.13-58,48.07Z" transform="translate(-0.14 -0.14)" />
                    <circle xmlns="http://www.w3.org/2000/svg" class="cls-2" cx="255.74" cy="221.24" r="42.55" />
                    <path xmlns="http://www.w3.org/2000/svg" class="cls-2" d="M260,280.42a83.61,83.61,0,0,1,14.25,2.9,51.55,51.55,0,0,1,14.26,7.13c3.76,2.73,6.49,5.56,8.19,9s2.56,7.54,3.07,14.25c.34,6.72.34,16-1.19,33.44s-4.61,42.79-7,59.08-4.09,23.55-6.31,28.84a25.82,25.82,0,0,1-18.94,16.55,41,41,0,0,1-9.89.85,42.41,42.41,0,0,1-9.9-.85c-3.92-.86-9-2.39-12.8-5.46-3.92-3.07-6.48-7.51-8.53-13.31s-3.58-12.8-5.63-26.79-4.78-34.8-6.48-50.67-2.39-26.79-2.53-34.13.17-11,1-14.5a28.93,28.93,0,0,1,4.09-9.38,31.14,31.14,0,0,1,6.83-7,27.87,27.87,0,0,1,8-4.3A60.8,60.8,0,0,1,241.35,283c4.43-.85,9.55-1.7,12.18-2.05a13.34,13.34,0,0,1,5.56,0Z" transform="translate(-0.14 -0.14)" />
                </svg>
            ),
        },
    ],
}

const Footer = () => {
    return (
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <img
                            className="h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
                            alt="Company name"
                        />
                        <p className="text-gray-500 text-base">
                            Wir helfen Berufsanfängern ihren Traumjob zu bekommen!
                        </p>
                        <div className="flex space-x-6">
                            {footerNavigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Kurs</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.course.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href}>
                                                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 py-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; 2021 startpunkt, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
