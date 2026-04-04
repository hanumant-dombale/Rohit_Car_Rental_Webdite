export default function FeatureCard({ icon: Icon, title, description, compact = false }) {
    return (
        <article className={`rounded-xl bg-white shadow ${compact ? 'flex gap-4 p-4' : 'p-6 text-center'}`}>
            <div className="text-[#ff7a1a]">
                <Icon size={26} />
            </div>
            <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </article>
    )
}
