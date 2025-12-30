import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import wine from '../../assets/rectangle/wine.png';
import { useNavigate } from "react-router";

function TicketsOverview({nextStep}) {

  const navigate = useNavigate();
  return (
    <div className="w-[33%] border border-black/20 rounded-xl p-3">
      <h2 className="font-bold">Your Tickets Overview</h2>
      <div className="flex gap-5 items-center my-4">
        <img className="w-40 rounded-xl" src={wine} alt="" />
        <div>
          <h2 className="font-bold">hidden</h2>
          <div className="flex  items-center gap-2">
            <MdOutlineDateRange className="text-orange-500" />
            <p>date</p>
          </div>
          <div className="flex  items-center gap-2">
            <IoTimeOutline className="text-orange-500" />
            <p>time</p>
          </div>
        </div>
      </div>
      <hr className="opacity-20" />
      <div className="flex flex-col gap-6 my-5 w-full">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1">
            <p className="w-8 h-8 p-1 bg-gray-200 text-center rounded-full">
              2
            </p>
            <p className="font-bold opacity-50">Adult(18+) (€32.00)</p>
          </div>
          <div>
            <p className="font-bold">price</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1">
            <p className="w-8 h-8 p-1 bg-gray-200 text-center rounded-full">
              2
            </p>
            <p className="font-bold opacity-50">Child(6-17)</p>
          </div>
          <div>
            <p className="font-bold">price</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1">
            <p className="w-8 h-8 p-1 bg-gray-200 text-center rounded-full">
              1
            </p>
            <p className="font-bold opacity-50">Infant(0-5)</p>
          </div>
          <p className="font-bold">price</p>
        </div>
      </div>
      <hr className="opacity-20" />
      <div className="flex items-center justify-between my-5">
        <p className="font-bold opacity-50">Total Price</p>
        <p className="text-orange-500 font-bold">€86.00</p>
      </div>
      <button
        className="w-full rounded-xl p-2 cursor-pointer text-white bg-orange-400"
        onClick={() => navigate(nextStep)}
      >
        Go to the Next Step
      </button>
    </div>
  );
}

export default TicketsOverview;
