import { useState } from "react";
import { GrTransaction } from "react-icons/gr";
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
    <div>
      <header className="flex items-center justify-between shadow-md px-2 mb-3">
        <div className="size-20">
          <img src="/finance.jpg" alt="finance logo" />
        </div>
        <button onClick={openNav} className="flex flex-col gap-1">
          <div
            className={`block w-8 h-1 bg-black ${
              isNavOpen ? "-rotate-50" : ""
            } transition-all duration-500`}
          />
          <div
            className={`block w-8 h-1 bg-black ${
              isNavOpen ? "hidden" : ""
            } transition-all duration-500`}
          />
          <div
            className={`block w-8 h-1 bg-black ${
              isNavOpen ? "rotate-50" : ""
            } transition-all duration-500`}
          />
        </button>
        <nav
          className={`absolute top-0 left-0 w-[50%] bottom-0 bg-zinc-900 text-zinc-50 shadow-md ${direction} transition-all duration-500`}
        >
          <h1 className="text-2xl font-bold ml-5 mt-5 mb-9">Finance</h1>
          <ul className="flex flex-col w-[85%]">
            <li className="py-3 hover:bg-amber-100 hover:text-zinc-900 hover:rounded-tr-2xl hover:rounded-br-2xl cursor-pointer">
              <NavLink to="/dashboard" className="nav-link">
                <span>
                  <IoHome />
                </span>
                <span>Overwiew</span>
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink to="/transactions" className="nav-link">
                <span>
                  <GrTransaction />
                </span>
                <span>Transactions</span>
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink className="nav-link">
                <GrTransaction />
                <span>Budgets</span>
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink className="nav-link">
                <GrTransaction />
                <span>Pots</span>
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink className="nav-link">
                <GrTransaction />
                <span>Recurring Bills</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
