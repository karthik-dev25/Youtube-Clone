import { useRef, useState } from "react";

const DemoUseRef = () => {
  let x = 0;

  let [y, setY] = useState(0);

  let countRef = useRef(0);

  console.log("Rendering...");
  return (
    <div className="w-96 h-96 border border-black m-4 p-2">
      <div>
        <span>Let Variable : {x}</span>
        <button
          onClick={() => {
            x = x + 1;
            console.log("x=", x);
          }}
          className="m-2 p-2 bg-amber-400 rounded-lg font-bold cursor-pointer"
        >
          Increase Let
        </button>
      </div>
      <div>
        <span>State : {y}</span>
        <button
          onClick={() => setY((y = y + 1))}
          className="m-2 p-2 bg-amber-400 rounded-lg font-bold cursor-pointer"
        >
          Increase State
        </button>
      </div>
      <div>
        <span>Ref : {countRef.current}</span>
        <button
          onClick={() => {
            countRef.current = countRef.current + 1;
            console.log("Ref=",countRef.current)
          }}
          className="m-2 p-2 bg-amber-400 rounded-lg font-bold cursor-pointer"
        >
          Increase Ref
        </button>
      </div>
    </div>
  );
};

export default DemoUseRef;
