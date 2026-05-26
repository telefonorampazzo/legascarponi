import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    const { data: html } = await axios.get(
      'https://leghe.fantacalcio.it/lega-scarponi-remastered?id=3054',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      }
    )

    const pos = html.indexOf('Herta Vernello')

    return NextResponse.json({
      found: pos !== -1,
      snippet:
        pos !== -1
          ? html.substring(pos - 500, pos + 3000)
          : 'not found',
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error:
        error instanceof Error ? error.message : 'Unknown error',
    })
  }
}