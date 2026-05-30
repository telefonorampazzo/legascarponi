import dotenv from 'dotenv'

dotenv.config({
  path: '.env.local',
})

import axios from 'axios'

async function test() {

  try {

    const response =
      await axios.get(
        'https://www.fantacalcio.it/statistiche-serie-a',
        {
          headers: {
            'User-Agent':
              'Mozilla/5.0',
          },
        }
      )

    const html =
      response.data

    console.log(
      html.slice(0, 5000)
    )

  } catch (err) {

    console.error(err)

  }

}

test()