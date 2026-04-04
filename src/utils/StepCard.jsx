export default function StepCard({ icon: Icon, title, description }) {
    return (
        <div className="flex gap-4 bg-white p-5 shadow rounded-xl">
            <Icon className="text-[#ff7a1a]" />
            <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </div>
    )
}
