import { driverBenefits } from '../../../data/homeData'
import { Button } from '@/components/ui/button'

export default function DriverSection() {
    return (
        <section className="bg-slate-950 text-white p-10">
            <h2 className="text-3xl font-bold">Join & Earn</h2>

            <ul className="mt-6 space-y-3">
                {driverBenefits.map((item) => (
                    <li key={item}>✔ {item}</li>
                ))}
            </ul>

            <Button className="mt-6 bg-[#ff7a1a]">Register</Button>
        </section>
    )
}
