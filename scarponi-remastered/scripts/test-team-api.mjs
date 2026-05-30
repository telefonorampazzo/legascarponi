const res = await fetch(
  'https://www.fotmob.com/api/data/teams?id=9875'
)

const json = await res.json()

console.log(
  JSON.stringify(
    json.squad,
    null,
    2
  ).slice(0, 10000)
)