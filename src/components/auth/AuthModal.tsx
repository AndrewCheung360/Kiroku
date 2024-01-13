"use client";
import { useModal } from "../../providers/ModalProvider";
import AuthForm from "./AuthForm";

export default function AuthModal() {
  const { isModalOpen, closeModal } = useModal();
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "modal-bg") {
      closeModal();
    }
  };
  return isModalOpen ? (
    <>
      <div
        id="modal-bg"
        onClick={handleClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center w-screen h-screen z-20"
      >
        <AuthForm />
      </div>
    </>
  ) : (
    false
  );
}
