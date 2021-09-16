import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import Header from './startseite/Header'
import Footer from './startseite/Footer'


export default function Example({ children }) {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}