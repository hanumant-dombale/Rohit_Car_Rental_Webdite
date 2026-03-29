import { NavLink } from 'react-router-dom'
import { navbarData } from '@/data/navbar.js'
import { useState } from 'react'
import { CarFront, LogIn, Menu, X } from 'lucide-react'

function LogoMark() {
    return (
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff7a1a] text-white shadow-[0_12px_28px_rgba(255,122,26,0.45)]">
            <CarFront size={22} strokeWidth={2.2} />
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-slate-950/55 px-5 py-4 backdrop-blur-xl sm:px-6">
                <div className="flex items-center justify-between gap-4">
                    <NavLink to={navbarData.logo.path} className="flex items-center gap-3">
                        <LogoMark />
                        <span className="text-2xl font-bold tracking-tight text-white">
                            Travel<span className="text-[#ff7a1a]">Wala</span>
                        </span>
                    </NavLink>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navbarData.items.map((item) => (
                            <NavLink key={item.path} to={item.path} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-[#ff7a1a]' : 'text-white/80 hover:text-white'}`}>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <button className="rounded-xl bg-[#ff7a1a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ea6a0c]">Register as Driver</button>
                        <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                            <LogIn size={16} />
                            Login
                        </button>
                    </div>

                    <button type="button" onClick={() => setOpen((current) => !current)} className="inline-flex rounded-xl border border-white/10 bg-white/10 p-2 text-white lg:hidden" aria-label="Toggle navigation">
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {open ? (
                    <div className="mt-4 space-y-4 border-t border-white/10 pt-4 text-white lg:hidden">
                        {navbarData.items.map((item) => (
                            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-xl px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-white/10 text-[#ff7a1a]' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}>
                                {item.label}
                            </NavLink>
                        ))}
                        <div className="grid gap-3 pt-2 sm:grid-cols-2">
                            <button className="rounded-xl bg-[#ff7a1a] px-4 py-3 text-sm font-semibold text-white">Register as Driver</button>
                            <button className="rounded-xl border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-slate-950">Login</button>
                        </div>
                    </div>
                ) : null}
            </div>
        </header>
    )
}
