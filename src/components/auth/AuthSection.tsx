import { createClient } from '../../../utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AuthButton from './AuthButton'
import AuthModal from './AuthModal'

export default async function AuthSection() {
    const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/')
  }
    return(
        user ? (
            <div>
                Sign out
            </div>
        ) : (
            <div>
                <AuthButton/>
                <AuthModal/>
            </div>
        )
    )
}