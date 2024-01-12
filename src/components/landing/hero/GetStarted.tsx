'use client'
import { useModal } from '../../../providers/ModalProvider'

export default function GetStarted(){
    const { openModal } = useModal()
    return(
        <>
        <button onClick = {() => {
            openModal()
        }} className="py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-md">
            <span className="text-white font-semibold">Get started</span>
          </button>
        </>
    )
}