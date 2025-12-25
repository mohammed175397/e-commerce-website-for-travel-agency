import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Select() {
    const [date, setDate] = useState("");
    console.log(date);
    
  return (

    <div className="space-y-2">
    <label className="block font-medium">Select date</label>
    <DatePicker
        selected={date}
        onChange={(d) => setDate(d)}
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
        placeholderText="Pick a date"
        className=" border rounded-lg p-2 "
    />
    </div>

  )
}

export default Select