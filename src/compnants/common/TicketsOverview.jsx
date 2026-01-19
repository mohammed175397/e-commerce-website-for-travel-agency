import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from "react-router";
import UseBooking from "../../context/UseBooking";
import { Price, totalPrice } from "./utiles/utlies";


function TicketsOverview({nextStep, step = 1}) {

  const {
    selectedDate,
    counts,
    prices,
    form,
    method,
    tour,
    confirmBooking,
    imageTour,
  } = UseBooking();

  const Date = selectedDate.selectedFullDate
    ?.toLocaleString("en-CA")
    .split(",")[0];
  const navigate = useNavigate();

  const isStep1Valid =
    !!selectedDate?.selectedFullDate &&
    !!selectedDate?.time &&
    (Number(counts?.adult) > 0 ||
      Number(counts?.infant) > 0);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isStep2Valid =
    !!form?.name?.trim() &&
    !!form?.surname?.trim() &&
    !!String(form?.telephonenumber || "").trim() &&
    !!form?.email?.trim() &&
    emailRegex.test(form.email);

    const isStep3Valid = !!method
    
    const isValid =
      step === 1 ? isStep1Valid : step === 2 ? isStep2Valid : isStep3Valid;
    // console.log(typeof nextStep);
  return (
    <div className="w-[33%] border border-black/20 rounded-xl p-3">
      <h2 className="font-bold">Your Tickets Overview</h2>
      <div className="flex gap-5 items-center my-4">
        <img className="w-40 rounded-xl" src={imageTour} alt="" />
        <div>
          <h2 className="font-bold">{tour}</h2>
          <div className="flex  items-center gap-2">
            <MdOutlineDateRange className="text-orange-500" />
            <p>{Date}</p>
          </div>
          <div className="flex  items-center gap-2">
            <IoTimeOutline className="text-orange-500" />
            <p>{selectedDate.time}</p>
          </div>
        </div>
      </div>
      <hr className="opacity-20" />
      <div className="flex flex-col gap-6 my-5 w-full">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1">
            <p className="w-8 h-8 p-1 bg-gray-200 text-center rounded-full">
              {counts.adult}
            </p>
            <p className="font-bold opacity-50">Adult(18+) (€32.00)</p>
          </div>
          <div>
            <p className="font-bold">€{Price(counts.adult, prices.adult)}</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1">
            <p className="w-8 h-8 p-1 bg-gray-200 text-center rounded-full">
              {counts.child}
            </p>
            <p className="font-bold opacity-50">Child(6-17)</p>
          </div>
          <div>
            <p className="font-bold">€{Price(counts.child, prices.child)}</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1">
            <p className="w-8 h-8 p-1 bg-gray-200 text-center rounded-full">
              {counts.infant}
            </p>
            <p className="font-bold opacity-50">Infant(0-5)</p>
          </div>
          <p className="font-bold">{prices.infant}</p>
        </div>
      </div>
      <hr className="opacity-20" />
      <div className="flex items-center justify-between my-5">
        <p className="font-bold opacity-50">Total Price</p>
        <p className="text-orange-500 font-bold">
          €{totalPrice(counts, prices)}
        </p>
      </div>
      {Number(step) === 3 ? (
        <button
          // onClick={}
          className={`w-full rounded-xl p-2 text-white
    ${
      isValid
        ? "bg-orange-400 cursor-pointer"
        : "bg-gray-300 cursor-not-allowed"
    }
  `}
          onClick={() => {
            if (!isValid) return;
            confirmBooking();
            navigate(nextStep);
          }}
        >
          Confirm
        </button>
      ) : (
        <button
          className={`w-full rounded-xl p-2 text-white
    ${
      isValid
        ? "bg-orange-400 cursor-pointer"
        : "bg-gray-300 cursor-not-allowed"
    }
  `}
          onClick={() => isValid && navigate(nextStep)}
        >
          Go to the Next Step
        </button>
      )}
    </div>
  );
}

export default TicketsOverview;
