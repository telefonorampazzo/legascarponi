const res = await fetch(
  'https://www.fotmob.com/api/playerData?id=577912'
)

console.log('STATUS:', res.status)

const text = await res.text()

console.log(text.slice(0, 500))