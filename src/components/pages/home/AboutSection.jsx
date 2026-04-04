import { chooseUs } from '@/data/homeData'
import FeatureCard from '@/utils/FeatureCard'
import SectionTitle from '@/utils/SectionTitle'

export default function AboutSection() {
    return (
        <section className="p-10 bg-white">
            <SectionTitle title="Why Choose" accent="TravelWala?" />

            <div className="grid md:grid-cols-4 gap-6 mt-8">
                {chooseUs.map((item) => (
                    <FeatureCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}
