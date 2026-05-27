'use client'

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type Props = {
  data: {
    date: string
    points: number
  }[]
}

export default function TeamPerformanceChart({
  data,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-black">
          Performance Trend
        </h3>

        <p className="text-zinc-500 mt-2">
          Andamento punti nel tempo
        </p>
      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <XAxis
              dataKey="date"
              stroke="#71717a"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#71717a"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: '#09090b',
                border: '1px solid #27272a',
                borderRadius: '16px',
                color: '#fff',
              }}
            />

            <Line
              type="monotone"
              dataKey="points"
              stroke="#00d4ff"
              strokeWidth={4}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  )
}