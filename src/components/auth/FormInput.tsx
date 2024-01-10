"use client";

import ForgotPassword from "./ForgotPassword";

type FormInputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

export default function FormInput({ name, label, type, placeholder }: FormInputProps) {
  return (
    <>
      <div className="h-[20%] w-full flex flex-col gap-1 ">
        {name === "password" ? (
          <div className="flex justify-between w-full">
            <label htmlFor={name} className="text-xs font-semibold text-slate-500 dark:text-white">
              {label}
            </label>
            <ForgotPassword />
          </div>
        ) : (
          <label htmlFor={name} className="text-xs font-semibold text-slate-500 dark:text-white">{label}</label>
        )}
        <input
          className="border-2 border-slate-200 dark:bg-slate-800 rounded-lg w-full h-[50%] px-4 py-4 placeholder:text-sm focus:outline-slate-400"
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
