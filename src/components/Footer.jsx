import { NavLink } from 'react-router-dom'
import { CarFront, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const footerLinks = {
    company: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
    ],
    services: ['Economy Rides', 'Outstation Travel', 'Corporate Trips', 'Car Rentals'],
}

const socialLinks = [
    { label: 'Facebook', icon: Facebook },
    { label: 'Twitter', icon: Twitter },
    { label: 'Instagram', icon: Instagram },
]

export default function Footer() {
    return (
        <footer id="contact" className="bg-[linear-gradient(135deg,#0b1424,#18253b)] text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr_0.9fr_0.9fr]">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a1a] text-white shadow-[0_12px_28px_rgba(255,122,26,0.4)]">
                                <CarFront size={24} strokeWidth={2.1} />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Travel<span className="text-[#ff7a1a]">Wala</span>
                            </h2>
                        </div>
                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">Reliable car rentals and booking support for local travel, airport transfers, and outstation rides.</p>
                        <div className="mt-6 flex gap-3">
                            {socialLinks.map(({ label, icon: Icon }) => (
                                <button key={label} type="button" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-[#ff7a1a] hover:text-[#ff7a1a]">
                                    <Icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Company</h3>
                        <div className="mt-5 space-y-3 text-sm text-slate-300">
                            {footerLinks.company.map((item) => (
                                <NavLink key={item.path} to={item.path} className="block transition hover:text-[#ff7a1a]">
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Our Services</h3>
                        <div className="mt-5 space-y-3 text-sm text-slate-300">
                            {footerLinks.services.map((service) => (
                                <p key={service}>{service}</p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <div className="mt-5 space-y-4 text-sm text-slate-300">
                            <p className="flex items-start gap-3">
                                <Phone size={16} className="mt-0.5 text-[#ff7a1a]" />
                                <span>+91 99775 3310</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <Mail size={16} className="mt-0.5 text-[#ff7a1a]" />
                                <span>support@travelwala.in</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 text-[#ff7a1a]" />
                                <span>Mumbai, India</span>
                            </p>
                        </div>
                        <button className="mt-6 rounded-xl bg-[#ff7a1a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ea6a0c]">Call Us Now</button>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 py-4 text-sm text-slate-400">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p>© {new Date().getFullYear()} TravelWala. All rights reserved.</p>
                        <div className="flex gap-5">
                            <span>Privacy Policy</span>
                            <span>Terms & Conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
