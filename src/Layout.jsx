import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function Layout() {
    return (
        <div
            className="
        min-h-screen w-full
        flex flex-col
        bg-[linear-gradient(180deg,#f7efe6_0%,#fff8f1_32%,#f5efe8_100%)]
        text-slate-950
      "
        >
            <Navbar />

            <main className="flex-1 w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
