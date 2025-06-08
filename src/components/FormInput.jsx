import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useOutletContext } from "react-router";

export default function FormInput({ name, type, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, errors } = useOutletContext();

  function toggleVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="mb-5">
      {type !== "password" ? (
        <input
          className="shadow-sm w-full px-5 py-3 rounded-[5px] mb-0.5"
          type={type}
          name={name}
          placeholder={placeholder}
          {...register(name, { required: `field is required` })}
        />
      ) : (
        <div className="relative flex items-center mb-0.5">
          <input
            className="shadow-sm w-full px-5 py-3 rounded-[5px]"
            type={showPassword ? "text" : type}
            name={name}
            placeholder={placeholder}
            {...register(name, {
              required: `field is required`,
              minLength: {
                value: 8,
                message: "password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                message:
                  "must contain uppercase, lowercase, number, and special character",
              },
            })}
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
      {errors?.[name] && <p className="">{errors?.[name].message}</p>}
    </div>
  );
}
