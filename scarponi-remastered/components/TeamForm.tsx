type Props = {
  wins: number
  draws: number
  losses: number
}

export default function TeamForm({
  wins,
  draws,
  losses,
}: Props) {

  const form = [
    ...Array(Math.min(wins, 5)).fill('W'),
    ...Array(Math.min(draws, 3)).fill('D'),
    ...Array(Math.min(losses, 3)).fill('L'),
  ].slice(0, 5)

  const score =
    wins * 3 +
    draws -
    losses

  let label = 'Balanced'
  let color = 'text-zinc-400'

  if (score >= 10) {
    label = '🔥 HOT'
    color = 'text-green-400'
  }

  if (score <= 2) {
    label = '🥶 COLD'
    color = 'text-red-400'
  }

  return (
    <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-2xl font-black">
            Momentum
          </h3>

          <p className="text-zinc-500 mt-2">
            Forma recente squadra
          </p>
        </div>

        <div className={`font-black text-xl ${color}`}>
          {label}
        </div>

      </div>

      <div className="flex gap-3 mt-8">

        {form.map((item, index) => (
          <div
            key={index}
            className={`
              w-14 h-14 rounded-2xl flex items-center justify-center
              font-black text-lg border
              ${
                item === 'W'
                  ? 'bg-green-500/20 border-green-500 text-green-400'
                  : item === 'D'
                  ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400'
                  : 'bg-red-500/20 border-red-500 text-red-400'
              }
            `}
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  )
}