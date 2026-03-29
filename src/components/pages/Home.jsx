import homeSection from '../../assets/home_section.png'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BadgeCheck, CalendarDays, CarFront, Clock3, MapPin, PhoneCall, Route, Search, ShieldCheck, Star, UserRoundPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featureStrip = [
    {
        title: 'Safe & Verified Drivers',
        description: 'Background-checked drivers with professional support on every trip.',
        icon: ShieldCheck,
    },
    {
        title: 'Affordable Pricing',
        description: 'Clear fares, practical packages, and rental plans built for daily use.',
        icon: BadgeCheck,
    },
    {
        title: '24/7 Customer Support',
        description: 'Quick help for bookings, driver updates, and ride changes anytime.',
        icon: PhoneCall,
    },
]

const chooseUs = [
    {
        title: 'Safe & Verified Drivers',
        description: 'Choose trained drivers and trusted vehicles for every local or outstation trip.',
        icon: ShieldCheck,
    },
    {
        title: 'Easy Booking Process',
        description: 'Search routes, confirm your slot, and manage your pickup in a few steps.',
        icon: Search,
    },
    {
        title: 'Multiple Car Options',
        description: 'Pick compact, sedan, or family-friendly rides based on budget and comfort.',
        icon: CarFront,
    },
    {
        title: '24/7 Customer Support',
        description: 'Get updates, booking help, and trip assistance without waiting on business hours.',
        icon: Clock3,
    },
]

const steps = [
    {
        title: 'Book a Car',
        description: 'Choose pickup and drop locations, then select the right car for your trip.',
        icon: CarFront,
    },
    {
        title: 'Track Your Ride',
        description: 'Stay updated with driver timing and ride progress from booking to arrival.',
        icon: Route,
    },
    {
        title: 'Arrive Safely',
        description: 'Complete your ride comfortably with simple payment options at the end.',
        icon: MapPin,
    },
]

const driverBenefits = ['Earn more with daily booking requests', 'Choose a schedule that fits your availability', 'Get weekly payouts and clear earning records', 'Receive ongoing support from the TravelWala team']

function SectionTitle({ title, accent, description, align = 'center' }) {
    return (
        <div className={`space-y-3 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {title} <span className="text-[#ff7a1a]">{accent}</span>
            </h2>
            <p className={`${align === 'center' ? 'mx-auto' : ''} max-w-2xl text-sm text-slate-500 sm:text-base`}>{description}</p>
        </div>
    )
}

function FeatureCard({ icon: Icon, title, description, compact = false }) {
    return (
        <article className={`rounded-[28px] border border-white/70 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${compact ? 'flex items-start gap-4 p-5' : 'p-6 text-center'}`}>
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff1e5] text-[#ff7a1a] ${compact ? '' : 'mx-auto mb-5'}`}>
                <Icon size={28} strokeWidth={2.1} />
            </div>
            <div className={compact ? 'space-y-2' : 'space-y-3'}>
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-500">{description}</p>
            </div>
        </article>
    )
}

function StepCard({ icon: Icon, title, description }) {
    return (
        <article className="rounded-[26px] border border-[#eef2f7] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#fff1e5] text-[#ff7a1a]">
                <Icon size={28} strokeWidth={2.1} />
            </div>
            <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
        </article>
    )
}

function HeroField({ icon: Icon, placeholder, type = 'text' }) {
    return (
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
            <span className="text-[#ff7a1a]">
                <Icon size={18} strokeWidth={2.2} />
            </span>
            <input type={type} placeholder={placeholder} className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />
        </label>
    )
}

export default function Home() {
    const location = useLocation()

    useEffect(() => {
        const sectionId = location.hash ? location.hash.slice(1) : 'home'
        const section = document.getElementById(sectionId)

        if (section) {
            requestAnimationFrame(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' })
            })
        }
    }, [location.hash])

    return (
        <div className="w-full">
            <section id="home" className="relative isolate overflow-hidden bg-slate-950 px-6 pb-14 pt-28 sm:px-8 lg:px-10 lg:pt-32">
                <div className="mx-auto max-w-7xl">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${homeSection})` }} />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,15,29,0.88)_0%,rgba(8,15,29,0.72)_42%,rgba(8,15,29,0.2)_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,26,0.28),transparent_30%)]" />

                    <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="max-w-2xl text-white">
                            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Reliable city and outstation rides</span>
                            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                                Your Trusted <span className="text-[#ff7a1a]">Car Rental</span>
                                <br />
                                &amp; <span className="text-[#ff7a1a]">Booking Service</span>
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">Reliable, affordable, and safe rides across India with easy booking, flexible car options, and driver support you can trust.</p>

                            <div className="mt-10 max-w-2xl rounded-[28px] bg-white p-4 text-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.28)] sm:p-5">
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="md:col-span-2">
                                        <HeroField icon={MapPin} placeholder="Pickup Location" />
                                    </div>
                                    <HeroField icon={MapPin} placeholder="Drop Location" />
                                    <HeroField icon={CalendarDays} placeholder="Tue, Apr 23, 01:00 PM" type="text" />
                                </div>
                                <Button className="mt-4 h-auto w-full rounded-2xl bg-[#ff7a1a] px-6 py-4 text-base font-semibold text-white hover:bg-[#ea6a0c] sm:w-auto sm:min-w-60">Search Car</Button>
                            </div>
                        </div>

                        <div className="relative hidden min-h-[460px] lg:block">
                            <div className="absolute inset-x-8 top-10 h-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.38),transparent_64%)] blur-2xl" />
                            <img src={homeSection} alt="TravelWala rental vehicle" className="absolute bottom-0 right-0 h-auto w-full max-w-3xl rounded-[28px] object-cover opacity-95 mix-blend-screen" />
                            <div className="absolute left-0 top-12 max-w-xs rounded-[24px] border border-white/10 bg-slate-950/65 p-5 backdrop-blur-md">
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">Trusted by riders</p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="flex text-[#ffb347]">
                                        <Star size={18} fill="currentColor" />
                                        <Star size={18} fill="currentColor" />
                                        <Star size={18} fill="currentColor" />
                                        <Star size={18} fill="currentColor" />
                                        <Star size={18} fill="currentColor" />
                                    </div>
                                    <span className="text-sm text-white/80">4.9 service rating</span>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-white/70">Verified drivers, flexible bookings, and support built for local and outstation travel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-100 bg-[#fffaf5] px-6 py-6 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-4 lg:grid-cols-3">
                        {featureStrip.map((item) => (
                            <FeatureCard key={item.title} {...item} compact />
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle title="Why Choose" accent="TravelWala?" description="A clean booking flow, trusted drivers, and practical rental options for personal and business trips." />

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {chooseUs.map((item) => (
                            <FeatureCard key={item.title} {...item} />
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Button className="h-auto rounded-2xl bg-[#ff7a1a] px-8 py-4 text-base font-semibold text-white hover:bg-[#ea6a0c]">Book Your Ride Now</Button>
                    </div>
                </div>
            </section>

            <section id="services" className="bg-[#fcf7f1] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 xl:grid-cols-[1fr_1.05fr]">
                        <div>
                            <SectionTitle title="How It" accent="Works" description="A simple booking journey designed to stay readable and easy to extend." align="left" />
                            <div className="mt-10 grid gap-5 md:grid-cols-3 xl:grid-cols-1">
                                {steps.map((item) => (
                                    <StepCard key={item.title} {...item} />
                                ))}
                            </div>
                            <Button variant="outline" className="mt-8 h-auto rounded-2xl border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-950 shadow-sm hover:border-[#ff7a1a] hover:bg-white hover:text-[#ff7a1a]">
                                Book Your Ride Now
                            </Button>
                        </div>

                        <aside className="relative overflow-hidden rounded-[34px] bg-slate-950 p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)]">
                            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${homeSection})` }} />
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,15,29,0.92),rgba(20,36,58,0.76))]" />
                            <div className="absolute right-[-10%] top-[18%] h-72 w-72 rounded-full bg-[#ff7a1a]/25 blur-3xl" />

                            <div className="relative max-w-lg">
                                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
                                    <UserRoundPlus size={14} />
                                    Drive with TravelWala
                                </p>
                                <h3 className="mt-6 text-3xl font-bold sm:text-4xl">Join Our Team &amp; Start Earning Today</h3>
                                <p className="mt-4 text-base leading-7 text-white/75">Driver onboarding, flexible work timing, and weekly payouts in a support-first system.</p>

                                <ul className="mt-8 space-y-4">
                                    {driverBenefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                                            <span className="mt-1 rounded-full bg-[#ff7a1a] p-1 text-white">
                                                <BadgeCheck size={12} />
                                            </span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Button className="h-auto rounded-2xl bg-[#ff7a1a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#ea6a0c]">Register as Driver</Button>
                                    <Button variant="outline" className="h-auto rounded-2xl border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white">
                                        Download App
                                    </Button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}
