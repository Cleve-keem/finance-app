import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function FormInput({ name, type, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div>
      {type !== "password" ? (
        <input
          className="shadow-sm w-full px-5 py-3 mb-5 rounded-[5px]"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      ) : (
        <div className="relative flex items-center mb-5">
          <input
            className="shadow-sm w-full px-5 py-3 rounded-[5px]"
            type={showPassword ? "text" : type}
            name={name}
            placeholder={placeholder}
          />
          <span
            onClick={toggleVisibility}
            role="button"
            className="text-xl block absolute right-3.5 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
      )}
    </div>
  );
}
