import { useState } from "react";
import { useNavigate } from "react-router";

const slides = [
  { title: "Welcome", desc: "Learn what we offer" },
  { title: "Explore", desc: "Discover powerful features" },
  { title: "Join Us", desc: "Let’s get started!" },
];

export default function OnboardingSlider() {
  const [step, setStep] = useState(0);
  const [animation, setAnimation] = useState("");
  const navigate = useNavigate();
  const lastSlide = slides.length - 1;

  function nextSlide() {
    if (step < lastSlide) {
      setAnimation("slide-out");

      setTimeout(() => {
        setStep((prev) => prev + 1);
        setAnimation("slide-in");

        setTimeout(() => setAnimation(""), 500);
      }, 500);
    } else {
      navigate("/login");
    }
  }

  function skip() {
    setStep(lastSlide);
  }

  const { title, desc } = slides[step];

  return (
    <div className="h-[100dvh] relative overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center text-center bg-zinc-900">
        <div className={`text-zinc-50 ${animation}`}>
          <div className="size-30 mx-auto mb-5 bg-zinc-50 text-zinc-900 p-2 rounded-xl flex items-center justify-center">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <p className="font-light">{desc}</p>
        </div>
        <div className="absolute bottom-0 p-7 w-full flex flex-col gap-5 items-center bg-zinc-50 drop-shadow-lg rounded-tl-4xl rounded-tr-4xl">
          {/* Dots */}
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`inline-block size-2 border rounded-full ${
                  step === i ? `bg-zinc-900 ${animation}` : "bg-inherit"
                }`}
              ></span>
            ))}
          </div>
          <div className="w-full flex justify-between">
            {step < lastSlide ? (
              <button onClick={skip} className="button text-zinc-900">
                Skip
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={nextSlide}
              className={`button bg-zinc-900 text-zinc-50 rounded-[5px] ${
                !(step < lastSlide) ? "flex-1 transition-all duration-500" : ""
              }`}
            >
              {step < lastSlide ? "Next" : "Get started"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
