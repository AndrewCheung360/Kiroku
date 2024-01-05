import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className = "flex-col h-screen py-36">
      <div className = "text-center h-full">
        <h1 className = "text-6xl font-bold"> The go-to spot for</h1>
        <h1 className = "h-full inline-block text-6xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-400 text-transparent bg-clip-text"> tracking manga </h1>
      </div>
    </div>
    </>
  )
}
