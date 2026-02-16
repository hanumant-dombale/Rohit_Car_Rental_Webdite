import './index.css'

const perks = [
  {
    title: 'Flexible pickup',
    detail: 'Airport, hotel, or doorstep delivery within the hour in select cities.',
  },
  {
    title: 'Transparent pricing',
    detail: 'Flat daily rates with insurance included and no surprise fees.',
  },
  {
    title: '24/7 support',
    detail: 'Live help whenever you need roadside assistance or trip changes.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-orange-600">Rohit Car Rental Service</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Drive the car you want, when you want it.
              </h1>
              <p className="mt-4 text-base text-slate-600">
                Book in minutes, pick up anywhere, and hit the road with insurance and roadside support built in.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                  Start a booking
                </button>
                <button className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500">
                  View fleet
                </button>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Weekend special</p>
                  <p className="mt-1 text-3xl font-bold text-slate-900">$49/day</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Unlimited miles
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Compact and sedan classes with free pickup within 10 miles. No fees if plans change.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Available through Sunday
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-inner"
              >
                <h3 className="text-sm font-semibold text-slate-900">{perk.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{perk.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
