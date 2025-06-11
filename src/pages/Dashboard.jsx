import MoneyBox from "../components/MoneyBox";

export default function Dashboard() {
  return (
    <div className="px-7 py-3 bg-zinc-100">
      <h1 className="text-2xl font-semibold mb-4">Overview</h1>
      <div className="flex flex-col gap-2.5">
        <MoneyBox label="Current Balance" price="4,836.00" type="major" />
        <MoneyBox label="Income" price="3,814.25"/>
        <MoneyBox label="Expenses" price="1,700.50"/>
      </div>
    </div>
  );
}
