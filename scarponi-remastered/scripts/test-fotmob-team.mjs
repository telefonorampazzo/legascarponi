const res = await fetch(
  'https://www.fotmob.com/teams/9825/overview/inter'
)

console.log('STATUS:', res.status)

const html = await res.text()

console.log(
  html.includes('Lautaro'),
  html.includes('Martinez'),
  html.includes('playerId')
)

console.log(html.slice(0, 5000))