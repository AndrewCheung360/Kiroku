'use server'
import { cookies } from 'next/headers'
import { createClient } from '../../../utils/supabase/server'

export async function getUser(){
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const user = (await supabase.auth.getSession()).data.session?.user
  return user
}