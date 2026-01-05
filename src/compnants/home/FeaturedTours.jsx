import TOURSDATA from "../common/featurdData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import Card from "../common/Card";

function FeaturedTours() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      {/* ✅ Header */}
      <div className="flex justify-between items-center mx-10 my-5">
        <h2 className="font-bold text-xl">Explore Our Popular Destinations</h2>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center hover:bg-amber-500 transition"
          >
            <IoIosArrowBack className="text-white text-xl" />
          </button>

          <button
            onClick={scrollRight}
            className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center hover:bg-amber-500 transition"
          >
            <IoIosArrowForward className="text-white text-xl" />
          </button>
        </div>
      </div>
      {/*  Slider */}
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-auto scroll-smooth px-10 py-4 no-scrollbar"
      >
            {TOURSDATA.map((tour) => (
        <div
          className="min-w-[270px] h-[480px] bg-white rounded-xl shadow"
          >
              <Card key={tour.id} tour={tour} />
        </div>
            ))}
      </div>
    </div>
  );
}

export default FeaturedTours;
