import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className = "flex-col h-screen py-36">
      <div className = "text-center h-full">
        <h1 className = "text-6xl font-bold text-gray-800 dark:text-white"> The go-to spot for</h1>
        <h1 className = " animate-text h-full text-6xl font-bold bg-gradient-to-r from-orange-200 via-orange-500 to-orange-200 text-transparent bg-clip-text"> tracking manga </h1>
      </div>
    </div>
    </>
  )
}
