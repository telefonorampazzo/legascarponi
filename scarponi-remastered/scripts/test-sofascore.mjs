const PLAYER_ID = '592794'

const url =
  `https://api.sofascore.com/api/v1/player/${PLAYER_ID}`

const res = await fetch(url, {
  headers: {
    'user-agent': 'Mozilla/5.0'
  }
})

console.log('Status:', res.status)

const text = await res.text()

console.log(text.slice(0, 1000))