import { useState } from "react";
import { CiBank } from "react-icons/ci";
import { FaChartPie } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { HiCreditCard } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { NavLink, Outlet } from "react-router";

export default function AppLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [direction, setDirection] = useState("-translate-x-full");

  function openNav() {
    setDirection((prev) =>
      prev === "-translate-x-full" ? "" : "-translate-x-full"
    );
    setIsNavOpen((prev) => !prev);
  }

  return (
    <div className="h-screen">
      <header className="fixed left-0 right-0 bg-zinc-50">
        <div className="flex items-center justify-between shadow-md px-2">
          <div className="size-15">
            <img src="/finance-logo.png"lt="finance logo" />
          </div>
          <button
            onClick={openNav}
            className="flex flex-col gap-1 relative w-8"
          >
            <div
              className={`absolute w-6 h-[2px] bg-black origin-center transition-all duration-500 left-0 ${
                isNavOpen ? "-rotate-45 top-3" : "top-0"
              }`}
            />
            <div
              className={`absolute w-8 h-[2px] bg-black transition-all duration-500 left-0 ${
                isNavOpen ? "opacity-0" : ""
              } `}
            />
            <div
              className={`absolute block w-6 h-[2px] bg-black origin-center transition-all duration-500 left-0 ${
                isNavOpen ? "rotate-45 top-3.5" : "top-4"
              }`}
            />
          </button>
        </div>
        <nav
          className={`absolute h-screen top-0 left-0 w-[50%] bg-zinc-900 text-zinc-50 shadow-md ${direction} transition-all duration-500`}
        >
          <h1 className="text-2xl font-bold ml-5 mt-5 mb-9">Finance</h1>
          <ul className="flex flex-col w-[85%]">
            <li className="py-3 hover:bg-amber-100 hover:text-zinc-900 hover:rounded-tr-2xl hover:rounded-br-2xl cursor-pointer">
              <NavLink onClick={openNav} to="/dashboard" className="nav-link">
                <span>
                  <IoHome />
                </span>
                <span>Overwiew</span>
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                onClick={openNav}
                to="/transactions"
                className="nav-link"
              >
                <span>
                  <GrTransaction />
                </span>
                <span>Transactions</span>
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink onClick={openNav} to="/budgets" className="nav-link">
                <FaChartPie />
                <span>Budgets</span>
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink onClick={openNav} to="/pots" className="nav-link">
                <CiBank />
                <span>Pots</span>
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                onClick={openNav}
                to="/recurringbills"
                className="nav-link"
              >
                <HiCreditCard />
                <span>Recurring Bills</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pt-15">
        <Outlet />
      </main>
    </div>
  );
}
