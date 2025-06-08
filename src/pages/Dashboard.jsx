import MoneyBox from "../components/MoneyBox";

export default function Dashboard() {
  return (
    <div className="px-7 py-3 bg-amber-50">
      <h1 className="text-2xl font-semibold mb-4">Overview</h1>
      <div>
        <MoneyBox />
      </div>
    </div>
  );
}
