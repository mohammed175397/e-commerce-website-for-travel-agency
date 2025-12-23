import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0);

    const counter2 = () => {
       setCounter((prev) => prev == 0 ? 0 : prev - 1)
    }

  return (
    <div className="flex items-center border justify-between rounded-sm  border-black/20 px-2 w-25">
      <button
        className="cursor-pointer w-3 hover:text-2xl transition-all"
        onClick={counter2}
      >
        -
      </button>
      <p className="bg-gray-200 p-2">{counter}</p>
      <button
        className="cursor-pointer w-3 text-lg hover:text-2xl transition-all"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter