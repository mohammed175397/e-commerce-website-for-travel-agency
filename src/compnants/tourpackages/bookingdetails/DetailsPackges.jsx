import { useState } from "react";
import Select from "./Select";
import Counter from "../../Counter";

function DetailsPackges() {
  const [time, setTime] = useState("");
  const [counts, setCounts] = useState({
    adult: 0,
    child: 0,
    infant: 0,
  });

  const setCount = (key, value) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, value),
    }));
  };

  return (
    <div className="w-[70%] flex flex-col gap-3">
      <Select />

      <div className="flex flex-col">
        <label>Which time ?</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 rounded-xl w-50"
        />
      </div>

      <h2>Select Your Tickets</h2>
      <ul className="bg-[#EFEFEF] w-125 opacity-50 px-8 py-3 rounded-xl list-disc">
        <li>Free for kids under 6 and disabled visitors (74%+)</li>
        <li>
          Pregnant women, families with strollers, and visitors on crutches can
          buy priority tickets at the venue
        </li>
      </ul>
      <div className="w-125  flex items-center justify-between border rounded-md p-2 border-black/20">
        <div className="flex flex-col font-bold">
          <p>Adult(18+)</p>
          <p className="font-bold text-orange-500">€34.00</p>
        </div>
        <Counter
          value={counts.adult}
          onChange={(v) => setCount("adult", v)}
          min={0}
        />
      </div>

      <div className="w-125 flex items-center justify-between border rounded-md p-2 border-black/20">
        <div className="flex flex-col font-bold">
          <p>Child(6-17)</p>
          <p className="font-bold text-orange-500">€34.00</p>
        </div>
        <Counter
          value={counts.child}
          onChange={(v) => setCount("child", v)}
          min={0}
        />
      </div>

      <div className="w-125 flex items-center justify-between border rounded-md p-2 border-black/20">
        <div className="flex flex-col font-bold">
          <p>Infant(0-5)</p>
          <p className="font-bold text-orange-500">FREE</p>
        </div>
        <Counter
          value={counts.infant}
          onChange={(v) => setCount("infant", v)}
          min={0}
        />
      </div>
    </div>
  );
}

export default DetailsPackges;
