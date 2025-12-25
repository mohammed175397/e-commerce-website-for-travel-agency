import Select from "./Select";
import Counter from "../../Counter";


function DetailsPackges() {
  return (
    <div>
  <div className="w-[70%] flex flex-col gap-3">
    <Select />
    <div className="flex flex-col">
      <label htmlFor="">Which time ?</label>
      <input type="time" className="border p-2 rounded-xl w-50" />
    </div>
    <h2>Select Your Tickets</h2>
    <ul className="bg-[#EFEFEF] opacity-50 px-8 py-3 rounded-xl list-disc">
      <li>Free for kids under 6 and disabled visitors (74%+)</li>
      <li>
        Pregnant women, families with strollers, and visitors on crutches can
        buy priority tickets at the venue
      </li>
    </ul>
    <div className="flex items-center justify-between border rounded-md p-2 border-black/20">
      <div className="flex flex-col font-bold">
        <p>Adult(18+)</p>
        <p className="font-bold text-orange-500">€34.00</p>
      </div>
      <Counter />
    </div>
    <div className="flex items-center justify-between border rounded-md p-2 border-black/20">
      <div className="flex flex-col font-bold">
        <p>Child(6-17)</p>
        <ul className=" opacity-50 px-8 py-3 rounded-xl list-disc">
          <li>With valid ID</li>
          <li>Only in combination with Adult(18+)</li>
        </ul>
        <p className="font-bold text-orange-500">€34.00</p>
      </div>
      <Counter />
    </div>
    <div className="flex items-center justify-between border rounded-md p-2 border-black/20">
      <div className="flex flex-col font-bold">
        <p>Infant(0-5)</p>
        <ul className=" opacity-50 px-8 py-3 rounded-xl list-disc">
          <li>Only in combination with: Adult (18+)</li>
        </ul>
        <p className="font-bold text-orange-500">FREE</p>
      </div>
      <Counter />
    </div>
  </div>
</div>
  )
}

export default DetailsPackges
