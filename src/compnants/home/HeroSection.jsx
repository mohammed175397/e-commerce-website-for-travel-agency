import heroimage from "../../assets/rectangle/julia-solonina-Csja8O0sbOw-unsplash 1.png";
import { FaSearch, FaCarAlt } from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

import { useState } from "react";


function HeroSection() {
  const today = new Date().toISOString().split("T")[0];
  const timeNow = new Date().toTimeString().slice(0, 5);

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(timeNow);
  const [tour, setTour] = useState("Lucca Bike Tour");
  const [transportation, setTransportation] = useState("Volvo");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:");
    console.log({ date, time, tour, transportation });
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center gap-3"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      {/* Text Section */}
      <div className="my-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-wide leading-tight">
          Enjoy in the best way!
        </h2>
        <p className="text-white font-extrabold">
          Enjoy our services for your trip anytime
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="flex bg-amber-50 text-center p-3 h-25 gap-8 rounded-2xl w-200"
      >
        {/* DATE */}
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-1 py-2">
            <CiCalendarDate className="text-2xl " />
            <label>Date</label>
          </div>
          <input
            type="date"
            className="cursor-pointer bg-transparent"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* TIME */}
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-1 py-2">
            <IoTimeOutline />
            <label>Time</label>
          </div>
          <input
            type="time"
            className="cursor-pointer"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        {/* TOUR */}
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-1 py-2">
            <MdOutlineTour />
            <label>Tour</label>
          </div>
          <select
            className="cursor-pointer"
            value={tour}
            onChange={(e) => setTour(e.target.value)}
          >
            <option>Lucca Bike Tour</option>
            <option>Book a bike</option>
            <option>Tour in the outside of Lucca</option>
            <option>Wine Tasting in Tuscany</option>
            <option>Cinque Terre Tour</option>
            <option>Siena and Surroundings</option>
            <option>Pisa & Lucca</option>
            <option>Italy Special Trips</option>
          </select>
        </div>
        {/* TRANSPORTATION */}
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-1 py-2">
            <FaCarAlt />
            <label>Transportation</label>
          </div>
          <select
            className="cursor-pointer"
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
          >
            <option value="Volvo">Volvo</option>
            <option value="Saab">Saab</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
          </select>
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="submit"
          className="bg-amber-500 w-20 rounded-2xl cursor-pointer"
        >
          <FaSearch className="mx-auto text-white" />
        </button>
      </form>
    </div>
  );
}

export default HeroSection;
