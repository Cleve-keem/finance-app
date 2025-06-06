import { IoHome } from "react-icons/io5";
import { NavLink, Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <header className="flex items-center justify-between shadow-md px-2 mb-3">
        <div className="size-20">
          <img src="/finance.jpg" alt="finance logo" />
        </div>
        <button className="flex flex-col gap-1">
          <div className="block w-8 h-1 bg-black" />
          <div className="block w-8 h-1 bg-black" />
          <div className="block w-8 h-1 bg-black" />
        </button>
        <nav className="absolute top-0 left-0 w-[50%] bottom-0 bg-zinc-900 text-zinc-50 shadow-md">
          <h1 className="text-2xl font-bold ml-5 mt-5 mb-9">Finance</h1>
          <ul className="flex flex-col w-[85%] border">
            <li className="py-3">
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
                  <IoHome />
                </span>
                <span>Transactions</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link">
                <spans>icons</spans>
                <span>Budgets</span>
              </NavLink>
            </li> 
            <li>
              <NavLink className="nav-link">
              <spans>icons</spans>
              <span>P</span></NavLink>
            </li>
            <li>
              <NavLink className="nav-link">Recurring Bills</NavLink>
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
