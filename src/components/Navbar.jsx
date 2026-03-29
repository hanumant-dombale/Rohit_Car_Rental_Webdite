import { useState } from 'react'
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
    const location = useLocation()
    const navigate = useNavigate()

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

    return (
        <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/35 px-6 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                <Button type="button" variant="ghost" onClick={() => goToSection('home')} className="h-auto p-0 hover:bg-transparent">
                    <img src="/logo.png" alt="TravelWala logo" className="h-12 w-auto object-contain sm:h-14" />
                    <span className="text-2xl font-bold tracking-tight text-white">
                        Travel<span className="text-[#ff7a1a]">Wala</span>
                    </span>
                </Button>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <Button key={item.sectionId} type="button" variant="ghost" onClick={() => goToSection(item.sectionId)} className={`h-auto p-0 text-sm font-medium transition ${isActive(item.sectionId) ? 'text-[#ff7a1a]' : 'text-white/80 hover:text-white'}`}>
                            {item.label}
                        </Button>
                    ))}
                </nav>

                <Button type="button" variant="ghost" size="icon" onClick={() => setOpen((current) => !current)} className="inline-flex rounded-xl border border-white/10 bg-white/10 text-white hover:bg-white/15 hover:text-white lg:hidden" aria-label="Toggle navigation">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {open ? (
                <div className="mx-auto mt-4 max-w-7xl space-y-4 border-t border-white/10 pt-4 text-white lg:hidden">
                    {navItems.map((item) => (
                        <Button
                            key={item.sectionId}
                            type="button"
                            variant="ghost"
                            onClick={() => goToSection(item.sectionId)}
                            className={`block h-auto w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition ${isActive(item.sectionId) ? 'bg-white/10 text-[#ff7a1a]' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
            ) : null}
        </header>
    )
}
