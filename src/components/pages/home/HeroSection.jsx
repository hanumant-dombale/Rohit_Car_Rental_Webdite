import homeSection from '@/assets/home_section.png'
import { MapPin, CalendarDays, Star, User, Phone, TimerIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HeroField from '@/utils/HeroField'
import { useState } from 'react'

export default function HeroSection() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        pickup: '',
        drop: '',
        date: '',
        time: '',
    })

    const handleChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const handleWhatsApp = () => {
        const message = `🚗 *New Booking Request*

        👤 *Name:* ${form.name || '-'}
        📞 *Phone:* ${form.phone || '-'}

        📍 *Pickup:* ${form.pickup || '-'}
        📍 *Drop:* ${form.drop || '-'}

        📅 *Date:* ${form.date || '-'}
        ⏰ *Time:* ${form.time || '-'}

        Thank you 🙏`

        console.log(message)
    }

    return (
        <section id="home" className="relative isolate overflow-hidden bg-slate-950 px-6 pb-14 pt-28 sm:px-8 lg:px-10 lg:pt-32">
            <div className="mx-auto max-w-7xl">
                <div className="animate-soft-fade absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${homeSection})` }} />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,15,29,0.88)_0%,rgba(8,15,29,0.72)_42%,rgba(8,15,29,0.2)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,26,0.28),transparent_30%)]" />

                <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="max-w-2xl text-white">
                        <span className="animate-soft-rise inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Reliable city and outstation rides</span>

                        <h1 className="animate-soft-rise animate-delay-100 mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Your Trusted <span className="text-[#ff7a1a]">Car Rental</span>
                            <br />
                            &amp; <span className="text-[#ff7a1a]">Booking Service</span>
                        </h1>

                        <p className="animate-soft-rise animate-delay-200 mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">Reliable, affordable, and safe rides across India with easy booking, flexible car options, and driver support you can trust.</p>

                        <div className="animate-soft-rise animate-delay-300 mt-10 max-w-2xl rounded-[28px] bg-white p-6 text-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.28)] sm:p-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <HeroField icon={User} label="Full Name" placeholder="Enter your name" onChange={(value) => handleChange('name', value)} />

                                <HeroField icon={Phone} label="Contact Number" placeholder="Enter mobile number" onChange={(value) => handleChange('phone', value)} />

                                <HeroField icon={MapPin} label="Pickup Location" placeholder="Enter pickup location" onChange={(value) => handleChange('pickup', value)} />

                                <HeroField icon={MapPin} label="Drop Location" placeholder="Enter drop location" onChange={(value) => handleChange('drop', value)} />

                                <HeroField icon={CalendarDays} label="Pickup Date" placeholder="Select date" type="date" onChange={(value) => handleChange('date', value)} />

                                <HeroField icon={TimerIcon} label="Pickup Time" placeholder="Select time" type="time" onChange={(value) => handleChange('time', value)} />
                                <div />
                            </div>

                            <div className="flex justify-center mt-6">
                                <Button onClick={handleWhatsApp} className="h-auto rounded-2xl bg-orange-500 px-10 py-4 text-base font-semibold text-white hover:bg-[#1ebe5d]">
                                    Book on Trip
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden min-h-[460px] lg:block">
                        <div className="animate-soft-fade absolute inset-x-8 top-10 h-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.38),transparent_64%)] blur-2xl" />

                        <img src={homeSection} alt="TravelWala rental vehicle" className="animate-soft-rise animate-delay-200 animate-float absolute bottom-0 right-0 w-full max-w-3xl rounded-[28px] opacity-95 mix-blend-screen" />

                        <div className="animate-soft-rise animate-delay-400 absolute left-0 top-12 max-w-xs rounded-[24px] border border-white/10 bg-slate-950/65 p-5 backdrop-blur-md shadow-xl">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">Trusted by riders</p>

                            <div className="mt-4 flex items-center gap-3">
                                <div className="flex text-[#ffb347]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-sm text-white/80">4.9 service rating</span>
                            </div>

                            <p className="mt-4 text-sm leading-6 text-white/70">Verified drivers, flexible bookings, and support built for local and outstation travel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
