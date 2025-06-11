import React from "react";

export default function TransactionDetails({ trans }) {
  const { name, category, amount, date, time, image } = trans;
  return (
    <li className="flex py-3">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-full overflow-hidden">
          {/* Test for the images */}
          <div className="w-full h-full bg-amber-300/50"></div>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="leading-5">
          <h2 className="font-bold">{name}</h2>
          <span className="text-[14px] text-zinc-500">{category}</span>
        </div>
      </div>
      <div className="ml-auto flex flex-col">
        <p className="text-xl font-bold self-end">
          {amount < 0
            ? `-$${Math.abs(amount).toFixed(2)}`
            : `+$${amount.toFixed(2)}`}
        </p>
        <span className="text-[14px] text-zinc-500">{date}, {time}</span>
      </div>
    </li>
  );
}
