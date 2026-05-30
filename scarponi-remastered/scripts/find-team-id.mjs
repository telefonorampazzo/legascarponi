const teams = [
  'Cagliari',
  'Cremonese',
  'Parma',
  'Pisa',
  'Sassuolo',
  'Lecce',
  'Genoa',
  'Fiorentina'
]

for (const team of teams) {
  const url =
    `https://www.fotmob.com/api/searchapi/suggest?term=${encodeURIComponent(team)}`

  const res = await fetch(url)
  const data = await res.json()

  console.log('\n', team)
  console.log(JSON.stringify(data, null, 2))
}