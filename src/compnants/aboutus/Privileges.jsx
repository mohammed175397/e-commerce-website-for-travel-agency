import { GiBackpack } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaCommentDollar } from "react-icons/fa";

function Privileges() {
  return (
    <div className="flex justify-evenly gap-5 px-45 items-center h-90 bg-orange-300">
      <div className="w-65 h-50 rounded-2xl bg-orange-200 flex flex-col items-center justify-center text-center">
        <GiBackpack className="text-orange-500 text-4xl py-2" />
        <p>Complete Packages For All Your Wishes</p>
      </div>
      <div className="w-65 h-50 rounded-2xl bg-orange-200 flex flex-col items-center justify-center text-center">
        <FaStar className="text-orange-500 text-4xl py-2" />
        <p>Over 30 Years Of Experience</p>
      </div>
      <div className="w-65 h-50 rounded-2xl bg-orange-200 flex flex-col items-center justify-center text-center">
        <MdOutlinePersonalInjury className="text-orange-500 text-4xl py-2" />
        <p>Expert Guides For You</p>
      </div>
      <div className="w-65 h-50 rounded-2xl bg-orange-200 flex flex-col items-center justify-center text-center">
        <FaCommentDollar className="text-orange-500 text-4xl py-2" />
        <p>Guaranteed fun at the best price!</p>
      </div>
    </div>
  );
}

export default Privileges;
