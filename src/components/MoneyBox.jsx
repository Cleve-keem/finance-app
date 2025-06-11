export default function MoneyBox({ label, price, type }) {
  return (
    <div
      className={`${
        type === "major" ? "bg-black text-zinc-50" : "bg-white text-zinc-900"
      } rounded-xl  p-4`}
    >
      <span className={`block mb-2 ${type ? "text-zinc-300": "text-zinc-500"}`}>{label}</span>
      <p className="text-2xl font-bold">${price}</p>
    </div>
  );
}
