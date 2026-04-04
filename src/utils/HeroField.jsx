import { useState } from 'react'
import { format } from 'date-fns'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'

export default function HeroField({ icon: Icon, label, placeholder, type = 'text', onChange }) {
    const [date, setDate] = useState()
    const [time, setTime] = useState('')

    if (type === 'date') {
        return (
            <div className="space-y-2">
                <Label className="text-slate-700">{label}</Label>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="w-full justify-start pl-10 h-12 relative bg-white text-slate-900 border border-slate-200 hover:bg-white">
                            <Icon className="absolute left-4 text-[#ff7a1a]" size={18} />
                            <span className={date ? 'text-slate-900' : 'text-slate-400'}>{date ? format(date, 'PPP') : placeholder}</span>
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="bg-white text-slate-900 border border-slate-200 shadow-lg">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(value) => {
                                setDate(value)
                                onChange?.(value ? format(value, 'PPP') : '')
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        )
    }

    if (type === 'time') {
        const times = Array.from({ length: 24 * 2 }, (_, i) => {
            const hours = Math.floor(i / 2)
            const minutes = i % 2 === 0 ? '00' : '30'
            const ampm = hours >= 12 ? 'PM' : 'AM'
            const h = hours % 12 === 0 ? 12 : hours % 12
            return `${h}:${minutes} ${ampm}`
        })

        return (
            <div className="space-y-2">
                <Label className="text-slate-700">{label}</Label>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="w-full justify-start pl-10 h-12 relative bg-white text-slate-900 border border-slate-200 hover:bg-white">
                            <Icon className="absolute left-4 text-[#ff7a1a]" size={18} />
                            <span className={time ? 'text-slate-900' : 'text-slate-400'}>{time || placeholder}</span>
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-56 max-h-60 overflow-y-auto bg-white p-2">
                        <div className="grid gap-1">
                            {times.map((t, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setTime(t)
                                        onChange?.(t)
                                    }}
                                    className="text-left px-3 py-2 rounded-md hover:bg-orange-100 text-sm"
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        )
    }

    return (
        <div className="space-y-2">
            <Label className="text-slate-700">{label}</Label>

            <div className="relative">
                <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff7a1a]" />
                <Input placeholder={placeholder} onChange={(e) => onChange?.(e.target.value)} className="pl-10 h-12 bg-white text-slate-900 border-slate-200 placeholder:text-slate-400 focus-visible:ring-[#ff7a1a]" />
            </div>
        </div>
    )
}
