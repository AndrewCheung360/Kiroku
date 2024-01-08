"use client";
import { useModal } from "../../providers/ModalProvider";

export default function AuthButton() {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      {/* <button
        onClick={() => {
          openModal();
        }}
        className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white font-semibold py-2 px-4 rounded "
      >
        Log In
      </button> */}
      <button onClick = {() => {
        openModal()
      }} className="relative flex px-4 py-2 rounded-lg items-center justify-center border-2 hover:border-0 border-gray-400 text-gray-800 overflow-hidden hover:text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-500 before:duration-500 before:ease-out hover:shadow-orange-500 hover:before:h-56 hover:before:w-56">
      <span className="relative z-10 font-semibold">Log in</span>
    </button>
    </>
  );
}
