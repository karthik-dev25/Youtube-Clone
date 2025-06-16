import { useMemo, useState } from "react";
import { nthPrime } from "../utility/helper";

const DemoUseMemoUseCallback = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const isPrime = useMemo(() => nthPrime(text), [text]);
  const isPrime = useMemo(() => {
    console.log("Inside Rendering....");
    return nthPrime(text)
  },[text]);
  return (
    <div
      className={
        isDarkTheme
          ? "w-96 h-96 m-4 p-2 border border-black bg-gray-900 text-white"
          : "w-96 h-96 m-4 p-2 border border-black"
      }
    >
      <div>
        <button
          className="bg-amber-400 m-2 p-2 rounded-lg font-bold cursor-pointer"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="m-2 p-2 border border-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>Nth Prime: {isPrime}</h1>
      </div>
    </div>
  );
};

export default DemoUseMemoUseCallback;
