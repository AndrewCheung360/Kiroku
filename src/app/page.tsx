import Image from 'next/image'
import Header from '../components/Header'
export default function Home() {
  return (
    <>
    <Header />
    <div className = "flex-col h-screen py-36">
      <div className = "flex flex-col gap-10 h-full">
      <div className = "text-center h-[80%]">
        <h1 className = "text-8xl font-bold text-slate-900 dark:text-white"> The go-to spot for</h1>
        <h1 className = " animate-text h-full text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text"> tracking manga </h1>
      </div>
      <div className = "flex justify-center">
        <span className = "font-semibold text-slate-800 text-xl dark:text-white">
        Effortlessly track, discover, and read your favorite titles.
        </span>
      </div>
      <div className = "flex justify-center items-center gap-4">
        <button className = "py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-md">
          <span className = "text-white font-semibold">
            Get Started
          </span>
        </button>
        <button className = "py-3 px-6 bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 dark:bg-transparent dark:border-2  rounded-md"> 
          <span className = "text-white font-semibold">
            Demo
          </span>
        </button>
      </div>
      </div>
      
    </div>
    </>
  )
}
