import { CarFront, Clock3, MapPinned, ShieldCheck } from 'lucide-react'

const services = [
    {
        title: 'Local Rentals',
        description: 'Flexible cars for city travel, meetings, shopping, and day-long bookings.',
        icon: CarFront,
    },
    {
        title: 'Outstation Trips',
        description: 'Comfortable long-distance rides with dependable drivers and clear pricing.',
        icon: MapPinned,
    },
    {
        title: 'Corporate Travel',
        description: 'Repeatable booking support for office commute, guests, and scheduled pickups.',
        icon: Clock3,
    },
    {
        title: 'Safe Ride Support',
        description: 'Verified drivers, tracked routes, and responsive help throughout the trip.',
        icon: ShieldCheck,
    },
]

export default function Services() {
    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[32px] bg-white px-6 py-14 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:px-8 lg:px-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">Services</p>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Travel services built for everyday use</h1>
                    <p className="mt-4 text-base leading-7 text-slate-500">The home page now carries the primary marketing layout. This route stays simple and reusable for listing focused service categories.</p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {services.map(({ title, description, icon: Icon }) => (
                        <article key={title} className="rounded-[26px] border border-slate-100 bg-[#fffaf5] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff1e5] text-[#ff7a1a]">
                                <Icon size={28} strokeWidth={2.1} />
                            </div>
                            <h2 className="mt-5 text-xl font-semibold text-slate-950">{title}</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
