import { steps } from '@/data/homeData'
import SectionTitle from '@/utils/SectionTitle'
import StepCard from '@/utils/StepCard'

export default function ServicesSection() {
    return (
        <section className="p-10 bg-[#fcf7f1]">
            <SectionTitle title="How It" accent="Works" align="left" />

            <div className="grid md:grid-cols-3 gap-4 mt-6">
                {steps.map((item) => (
                    <StepCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}
