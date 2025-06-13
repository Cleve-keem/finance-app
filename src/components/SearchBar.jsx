import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="w-full flex items-stretch gap-3 my-2">
      <div className="grow border border-zinc-300 flex items-center rounded-[5px] overflow-hidden w-full">
        <input
          type="text"
          placeholder="Search Transaction"
          className="py-2 px-3 outline-none grow min-w-10"
        />
        <button className="button whitespace-nowrap flex-none">
          <FiSearch />
        </button>
      </div>
      <button className="button flex-none">
        <FaFilter />
      </button>
    </div>
  );
}
