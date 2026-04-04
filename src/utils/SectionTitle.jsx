export default function SectionTitle({ title, accent, description, align = 'center' }) {
    return (
        <div className={`space-y-3 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            <h2 className="text-3xl font-bold text-slate-950">
                {title} <span className="text-[#ff7a1a]">{accent}</span>
            </h2>
            <p className="max-w-2xl text-sm text-slate-500">{description}</p>
        </div>
    )
}
