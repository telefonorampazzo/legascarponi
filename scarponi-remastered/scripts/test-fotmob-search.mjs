const res = await fetch(
  'https://www.fotmob.com/searchapi/suggest?term=Leao'
)

console.log('STATUS:', res.status)

const text = await res.text()

console.log(text.slice(0, 2000))