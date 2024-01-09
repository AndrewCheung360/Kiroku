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
            <label htmlFor={name} className="text-xs font-semibold text-gray-500">
              {label}
            </label>
            <ForgotPassword />
          </div>
        ) : (
          <label htmlFor={name} className="text-xs font-semibold text-gray-500">{label}</label>
        )}
        <input
          className="border-2 border-gray-200 rounded-lg w-full h-[50%] px-4 py-4 placeholder:text-sm focus:outline-gray-400"
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
