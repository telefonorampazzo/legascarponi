import Image from 'next/image'
import { apiFootball } from '@/lib/api-football'

export default async function TestPage() {

  const data = await apiFootball(
    'players?search=lautaro&league=135&season=2024'
  )

  console.log(data)

  const player =
    data.response?.[0]

  if (!player) {

    return (
      <main className="bg-black text-white p-20">
        Nessun giocatore trovato
      </main>
    )

  }

  return (

    <main className="bg-black text-white p-20">

      <div className="max-w-sm">

        <Image
          src={player.player.photo}
          alt={player.player.name}
          width={400}
          height={400}
          className="rounded-3xl"
        />

        <h1 className="text-4xl font-black mt-6">
          {player.player.name}
        </h1>

      </div>

    </main>

  )

}