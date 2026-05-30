import dotenv from 'dotenv'

const result = dotenv.config({
  path: '.env.local',
})

console.log(result)

console.log(
  'URL:',
  process.env.NEXT_PUBLIC_SUPABASE_URL
)

console.log(
  'SERVICE:',
  process.env.SUPABASE_SERVICE_ROLE_KEY
)