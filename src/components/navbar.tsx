import Link from 'next/link'


export default function Navbar() {
  return (
    <>
      <nav className = "fixed px-8 py-6 w-full">
        <div className = "flex justify-between items-center">
        <div className = "flex gap-4 items-center">
            <Link href="/">
                <div className = " hover:bg-gray-100 rounded-xl px-3 py-2">
                <span className="text-3xl font-bold">manga</span>
                <span className="inline-block text-3xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-400 text-transparent bg-clip-text">spot</span>
                </div>
                
            </Link>
            <Link href="/collection">
                
                <span className="hover:bg-gray-100 rounded-xl px-3 py-2 text-lg font-semibold">Collection</span>
            </Link>
            <Link href="/explore">
                <span className=" hover:bg-gray-100 rounded-xl px-3 py-2 text-lg font-semibold">Explore</span>
            </Link>
        </div>
        <div>
            Sign in
        </div>
        </div>
        
      </nav>
    </>
  )
}