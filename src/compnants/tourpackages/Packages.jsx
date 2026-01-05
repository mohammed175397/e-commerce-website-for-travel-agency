import TOURSDATA from "../common/featurdData";
import Card from "../common/Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

function Packages() {
  const navigate = useNavigate();
  return (
    <div className="pt-25">
      <h2 className="font-bold mx-30 my-5">Tour Packages</h2>
      <div className="grid grid-cols-4 my-20 ml-30 mr-15 gap-y-5">
        {TOURSDATA.map((tour) => (
          <div key={tour.id} className="w-67 h-120">
            <Card tour={tour} />
            <div className="flex items-center gap-2 text-amber-500 px-3">
              <button
                onClick={() =>
                  navigate(`carddetails/${tour.id}`)
                }
                className="cursor-pointer hover:underline font-semibold"
              >
                Read More{" "}
              </button>
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages