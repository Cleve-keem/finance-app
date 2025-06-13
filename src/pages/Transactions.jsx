import { useState } from "react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import TransactionDetails from "../features/Transaction/TransactionDetails";

const transactions = [
  {
    id: 1,
    name: "Bello Hakeem",
    category: "Personal Care",
    amount: -25.0,
    date: "2024-08-29",
    time: "21:45",
    image: "",
  },
  {
    id: 2,
    name: "Jane Doe",
    category: "Groceries",
    amount: -80.99,
    date: "2024-08-30",
    time: "14:10",
    image: "",
  },
  {
    id: 3,
    name: "Spotify",
    category: "Subscription",
    amount: -9.99,
    date: "2024-08-31",
    time: "06:20",
    image: "",
  },
  {
    id: 4,
    name: "John Smith",
    category: "Utilities",
    amount: -45.0,
    date: "2024-09-01",
    time: "19:05",
    image: "",
  },
  {
    id: 5,
    name: "Uber",
    category: "Transport",
    amount: -13.75,
    date: "2024-09-02",
    time: "22:45",
    image: "",
  },
  {
    id: 6,
    name: "Netflix",
    category: "Entertainment",
    amount: -15.0,
    date: "2024-09-02",
    time: "08:30",
    image: "",
  },
  {
    id: 7,
    name: "Amazon",
    category: "Shopping",
    amount: -120.49,
    date: "2024-09-03",
    time: "16:15",
    image: "",
  },
  {
    id: 8,
    name: "Bella Pharmacy",
    category: "Health",
    amount: -30.0,
    date: "2024-09-04",
    time: "11:00",
    image: "",
  },
  {
    id: 9,
    name: "GymPro",
    category: "Fitness",
    amount: -50.0,
    date: "2024-09-05",
    time: "07:00",
    image: "",
  },
  {
    id: 10,
    name: "Sally Green",
    category: "Gift",
    amount: 150.0,
    date: "2024-09-05",
    time: "18:40",
    image: "",
  },
  {
    id: 11,
    name: "David Ice",
    category: "Food & Drink",
    amount: -22.5,
    date: "2024-09-06",
    time: "13:20",
    image: "",
  },
  {
    id: 12,
    name: "Salary",
    category: "Income",
    amount: 2000.0,
    date: "2024-09-06",
    time: "09:00",
    image: "",
  },
];

export default function Transactions() {
  const [visibleCount, setVisibleCount] = useState(10);

  function handleLoadMore() {
    setVisibleCount((prev) => prev + 10);
  }

  const visibleTransactions = transactions.slice(0, visibleCount);

  return (
    <div className="p-5 bg-zinc-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-10">Transactions</h1>
      <div className="bg-white p-4 rounded-xl mb-5">
        <SearchBar />
        <ul className="divide-y divide-zinc-100">
          {visibleTransactions.map((trans) => (
            <TransactionDetails key={trans.id} trans={trans} />
          ))}
        </ul>
      </div>

      <div className="w-fit mx-auto">
        {visibleCount < transactions.length ? (
          <Button variant="small" onClick={handleLoadMore}>Load More</Button>
        ) : (
          <p className="text-zinc-400 text-[12px]">All transactions</p>
        )}
      </div>
    </div>
  );
}
