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