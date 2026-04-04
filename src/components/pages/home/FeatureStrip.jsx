import { featureStrip } from '@/data/homeData'
import FeatureCard from '@/utils/FeatureCard'

export default function FeatureStrip() {
    return (
        <section className="p-6 bg-[#fffaf5] grid md:grid-cols-3 gap-4">
            {featureStrip.map((item) => (
                <FeatureCard key={item.title} {...item} compact />
            ))}
        </section>
    )
}
