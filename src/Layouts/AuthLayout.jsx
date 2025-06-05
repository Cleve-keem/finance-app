import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router";
import Socials from "../components/Socials";

export default function AuthLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("/login");
  return (
    <div className="w-full px-8">
      <div className="w-[90%] mx-auto py-10 relative">
        {!isLoginPage && (
          <Link to="/login" className="absolute text-xl">
            <FaArrowLeftLong />
          </Link>
        )}
        <div className="flex justify-center">
          <div className="size-30 my-5">
            <img
              src="/finance.jpg"
              alt="finance logo"
              className="w-full h-full block object-center object-cover"
            />
          </div>
        </div>
        <p className="text-xl font-semibold">
          {isLoginPage ? "Login to your Account" : "Create your Account"}
        </p>
        <div className="my-3">
          <Outlet />
        </div>
        <div className="flex flex-col gap-9 py-10">
          <div className="flex items-center justify-center gap-1 text-zinc-500">
            <div className="w-3 h-[1px] bg-zinc-500" />
            <p>
              Or <span>{isLoginPage ? "Sign in" : "Sign up"} </span>with
            </p>
            <div className="w-3 h-[1px] bg-zinc-500" />
          </div>
          <Socials />
        </div>
        {isLoginPage && (
          <p className="text-center my-7">
            Don't have an account?
            <Link to="/register" className="ml-1 text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
