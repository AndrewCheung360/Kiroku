"use client";
import { useModal } from "../../providers/ModalProvider";

export default function DashButton() {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <button
        onClick={() => {
          openModal();
        }}
        className={`relative flex px-4 py-2 rounded-lg items-center justify-center border-2 hover:border-0  before:text-white overflow-hidden hover:text-white hover:shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:duration-500 before:ease-out hover:shadow-blue-400 hover:before:h-56 hover:before:w-56 text-slate-900 border-slate-400 dark:text-white
          `}
      >
        <span className="relative z-10 text-lg font-semibold">Dashboard</span>
      </button>
    </>
  );
}
