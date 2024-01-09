import { createClient } from '../../../../utils/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  })

  if (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}