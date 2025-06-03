import { useState } from "react";

const slides = [
  { title: "Welcome", desc: "Learn what we offer" },
  { title: "Explore", desc: "Discover powerful features" },
  { title: "Join Us", desc: "Let’s get started!" },
];

function App() {
  const [step, setStep] = useState(0);
  const [animation, setAnimation] = useState("");

  function nextSlide() {
    if (step < slides.length - 1) {
      setAnimation("slide-out");

      setTimeout(() => {
        setAnimation("slide-in");
        setStep((prev) => prev + 1);
      }, 500);
    }
    console.log("Get started");
  }

  function skip() {
    console.log("Skipped");
  }

  return (
    <div className="h-screen relative bg-blue-700 overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center bg-slate-200">
        <div className={`text-center ${animation}`}>
          <h1>{slides[step].title}</h1>
          <p>{slides[step].desc}</p>
        </div>
        <div className="absolute bottom-0 h-30 p-7 w-full flex justify-between items-center bg-zinc-50 shadow rounded-tl-4xl rounded-tr-4xl">
          <button onClick={skip} className="text-blue-400">
            Skip
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-500 text-zinc-50 rounded-[5px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
