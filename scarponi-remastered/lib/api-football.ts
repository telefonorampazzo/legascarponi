export async function apiFootball(
  endpoint: string
) {

  try {

    const res = await fetch(
      `https://v3.football.api-sports.io/${endpoint}`,
      {
        headers: {
          'x-apisports-key':
            process.env.API_FOOTBALL_KEY!,
        },

        next: {
          revalidate: 3600,
        },

        cache: 'force-cache',
      }
    )

    if (!res.ok) {

      console.error(
        'API Football Error:',
        res.status
      )

      return {
        response: [],
      }

    }

    return await res.json()

  } catch (error) {

    console.error(
      'API Football Fetch Error:',
      error
    )

    return {
      response: [],
    }

  }

}