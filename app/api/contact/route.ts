import { google } from "googleapis"
import { NextResponse } from "next/server"

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    ),
  },
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      phone,
      service,
      message,
    } = body

    const sheets = google.sheets({
      version: "v4",
      auth,
    })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            phone,
            service,
            message,
            new Date().toLocaleString(),
          ],
        ],
      },
    })

    return NextResponse.json({
      success: true,
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}