import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseBooking from "../../../context/UseBooking";

function Select() {
  
  const {selectedDate, setSelectedDate} = UseBooking();

  return (
    <div className="space-y-2">
      <label className="block font-medium">Select date</label>
      <DatePicker
        selected={selectedDate.selectedFullDate}
        onChange={(d) =>
          setSelectedDate((prev) => ({
            ...prev,
            selectedFullDate: d,
          }))
        }
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
        placeholderText="Pick a date"
        className=" border rounded-lg p-2 "
      />
    </div>
  );
}

export default Select