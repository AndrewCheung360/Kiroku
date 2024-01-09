'use server'
import { headers, cookies } from 'next/headers'
import { createClient } from '../../../utils/supabase/server'
import { redirect } from 'next/navigation'

export async function emailSignin(formData : FormData){
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
        return redirect('/')
      }
  
    return redirect('/dashboard')
}

export async function emailSignup(formData : FormData){
  const origin = headers().get('origin')
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

    if (error) {
      console.log(error)
        return redirect('/')
      }
  
    return redirect('/dashboard')
}

export async function signOut(){
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  await supabase.auth.signOut()
  return redirect('/')
}

export async function getUser(){
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const user = (await supabase.auth.getSession()).data.session?.user
  return user
}