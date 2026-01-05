import { useNavigate } from "react-router-dom";
import UseBooking from "../../../context/UseBooking";
import { useMemo } from "react";

function DateTimeCard() {
  const navigate = useNavigate();
  const {selectedDate, setSelectedDate} = UseBooking();

  // Extract month name and year
  const monthName = selectedDate.currentDate.toLocaleString("en-US", {
    month: "long",
  });
  const year = selectedDate.currentDate.getFullYear();
  // Days of week
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // Get number of days in the current month (28 / 30 / 31)
  const daysInMonth = new Date(
    year,
    selectedDate.currentDate.getMonth() + 1,
    0
  ).getDate();
  // Create days array
const dates = useMemo(
  () => Array.from({ length: daysInMonth }, (_, i) => i + 1),
  [daysInMonth]
);
  return (
    <div className=" rounded-2xl  w-75 p-4">
      {/* Header */}
      <h3 className="text-sm font-medium text-gray-700 mb-2">Select a date</h3>

      {/* Calendar */}
      <div className="border rounded-xl p-3">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() =>
              setSelectedDate((prev) => ({
                ...prev,
                currentDate: new Date(
                  year,
                  selectedDate.currentDate.getMonth() - 1
                ),
              }))
            }
            className="px-2 text-gray-500 hover:text-black"
          >
            ‹
          </button>

          <div className="text-center font-semibold">
            {monthName} {year}
          </div>
          <button
            onClick={() =>
              setSelectedDate((prev) => ({
                ...prev,
                currentDate: new Date(
                  year,
                  selectedDate.currentDate.getMonth() + 1
                ),
              }))
            }
            className="px-2 text-gray-500 hover:text-black"
          >
            ›
          </button>
        </div>
        {/* Days of week */}
        <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
          {days.map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>
        {/* Dates */}
        <div className="grid grid-cols-7 gap-1 text-sm">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() =>
                setSelectedDate((prev) => {
                  const fullDate = new Date(
                    prev.currentDate.getFullYear(),
                    prev.currentDate.getMonth(),
                    date
                  );
                  return {
                    ...prev,
                    date,
                    selectedFullDate: fullDate, 
                  };
                })
              }
              className={`h-8 rounded-lg flex items-center justify-center transition
                  ${
                    selectedDate.date === date
                      ? "bg-orange-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {/* Time */}
      <div className="mt-4">
        <label className="block text-sm text-gray-700 mb-1">Time</label>
        <input
          type="time"
          className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={selectedDate.time}
          onChange={(e) =>
            setSelectedDate((prev) => ({ ...prev, time: e.target.value }))
          }
        />
      </div>

      {/* Action button */}
      <button
        className=" cursor-pointer mt-4 w-full bg-orange-500 text-white py-2 rounded-xl font-semibold hover:bg-orange-600 transition"
        onClick={() => navigate("/tourpackages/booking-details")}
      >
        Buy Now
      </button>
    </div>
  );
}


export default DateTimeCard;