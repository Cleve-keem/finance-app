export default function Transactions() {
  return (
    <div className="p-5 bg-zinc-100">
      <h1 className="text-2xl font-semibold mb-10">Transactions</h1>
      <div className="bg-white p-4 rounded-xl">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="border border-zinc-300 flex flex-1 rounded-[5px]">
              <input type="text" placeholder="Search Transaction" className="py-2 px-3 outline-none flex-1"/>
              <button className="border cursor-pointer">S</button>
            </div>
            <div>Filter</div>
          </div>
        </div>
      </div>
    </div>
  );
}
