import { NextResponse } from 'next/server'
import axios from 'axios'
import * as cheerio from 'cheerio'

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

    const $ = cheerio.load(html)

    const bodyText = $('body').text()

    return NextResponse.json({
      success: true,
      containsWinner: bodyText.includes('Herta Vernello'),
      containsClassifica: bodyText.toLowerCase().includes('classifica'),
      preview: bodyText.substring(0, 2000),
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}