const res = await fetch(
  'https://www.fotmob.com/players/577912'
)

const html = await res.text()

const ratingMatch = html.match(
  /"title":"Rating".*?"value":([0-9.]+)/
)

const matchesMatch = html.match(
  /"title":"Matches".*?"value":([0-9]+)/
)

console.log('RATING:', ratingMatch?.[1])
console.log('MATCHES:', matchesMatch?.[1])