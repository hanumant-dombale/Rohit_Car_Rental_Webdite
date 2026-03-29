import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About Us', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Contact', sectionId: 'contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [isShrunk, setIsShrunk] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        function onScroll() {
            setIsShrunk(window.scrollY > 72)
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    function goToSection(sectionId) {
        const nextHash = `#${sectionId}`
        setOpen(false)

        if (location.pathname === '/' && location.hash === nextHash) {
            const section = document.getElementById(sectionId)
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return
        }

        navigate(`/${nextHash}`)
    }

    function isActive(sectionId) {
        return location.hash === `#${sectionId}` || (location.hash === '' && sectionId === 'home')
    }

    const desktopNavItemClass = (sectionId) =>
        `h-auto p-0 font-medium transition-colors hover:bg-transparent focus-visible:bg-transparent active:bg-transparent ${isShrunk ? 'text-sm' : 'text-base'} ${
            isActive(sectionId) ? 'text-[#ff7a1a] underline decoration-2 underline-offset-8 hover:text-[#ff7a1a] focus-visible:text-[#ff7a1a]' : 'text-white hover:text-[#ff7a1a] focus-visible:text-[#ff7a1a]'
        }`

    const mobileNavItemClass = (sectionId) => `block h-auto w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors ${isActive(sectionId) ? 'bg-white/10 text-[#ff7a1a] hover:bg-white/10 hover:text-[#ff7a1a]' : 'text-white hover:bg-white/5 hover:text-[#ff7a1a]'}`

    return (
        <header className={`animate-soft-fade fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isShrunk ? 'px-4 pt-4 sm:px-6 lg:px-8' : 'px-0 pt-0'}`}>
            <div
                className={`mx-auto flex items-center justify-between gap-4 border-white/10 bg-slate-950/50 backdrop-blur-xl transition-all duration-300 ${
                    isShrunk ? 'max-w-7xl rounded-full border px-6 py-3 shadow-[0_18px_48px_rgba(15,23,42,0.28)]' : 'max-w-none border-b px-6 py-5 shadow-none sm:px-8 lg:px-10'
                }`}
            >
                <Button type="button" variant="ghost" onClick={() => goToSection('home')} className="h-auto p-0 hover:bg-transparent">
                    <img src="src\assets\logo.png" alt="TravelWala logo" className={`w-auto object-contain transition-all duration-300 ${isShrunk ? 'h-10 sm:h-11' : 'h-12 sm:h-16'}`} />
                    <span className={`font-bold tracking-tight text-white transition-all duration-300 ${isShrunk ? 'text-xl' : 'text-[28px]'}`}>
                        Travel<span className="text-[#ff7a1a]">Wala</span>
                    </span>
                </Button>

                <nav className={`hidden items-center transition-all duration-300 lg:flex ${isShrunk ? 'gap-8' : 'gap-12'}`}>
                    {navItems.map((item) => (
                        <Button key={item.sectionId} type="button" variant="ghost" onClick={() => goToSection(item.sectionId)} className={desktopNavItemClass(item.sectionId)}>
                            {item.label}
                        </Button>
                    ))}
                </nav>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen((current) => !current)}
                    className={`inline-flex text-white hover:bg-white/15 hover:text-white lg:hidden ${isShrunk ? 'rounded-full border border-white/10 bg-white/10' : 'rounded-xl border border-white/10 bg-white/10'}`}
                    aria-label="Toggle navigation"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {open ? (
                <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-slate-950/90 px-5 py-4 text-white backdrop-blur-xl lg:hidden">
                    <div className="space-y-3">
                        {navItems.map((item) => (
                            <Button key={item.sectionId} type="button" variant="ghost" onClick={() => goToSection(item.sectionId)} className={mobileNavItemClass(item.sectionId)}>
                                {item.label}
                            </Button>
                        ))}
                    </div>
                </div>
            ) : null}
        </header>
    )
}
