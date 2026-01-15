import { BsPaypal } from "react-icons/bs";
import TicketsOverview from "../common/TicketsOverview";
import UseBooking from "../../context/UseBooking";
function CreditCard() {
  const { method, setMethod } = UseBooking();

  return (
    <div className="my-30 mx-35 ">
      <h2>Select a pyment method</h2>
      <div className="flex justify-between">
        <form action="" className="flex flex-col gap-5">
          <label
            htmlFor="pal"
            className={`w-xl flex items-center gap-3 border border-black/20 rounded-sm p-2 cursor-pointer ${
              method === "palpay" ? "bg-orange-100" : ""
            }   `}
          >
            <input
              type="radio"
              name="payment"
              id="pal"
              checked={method === "palpay"}
              onChange={() => setMethod("palpay")}
            />
            Palpay
            <p className="w-110 font-bold opacity-35">
              You will be redirected to the PayPal website after submitting your
              order
            </p>
            <div className="w-10 border border-black/20 p-2  rounded-sm">
              <BsPaypal className="text-xl text-blue-900" />
            </div>
          </label>

          <label
            className={`flex items-center gap-2 text-sm font-medium max-w-xl cursor-pointer ${
              method === "creditCard" ? "bg-orange-100" : ""
            }`}
          >
            {/* Outer blue border */}
            <div className="border border-black/20 rounded p-3">
              {/* Header */}
              <div className="flex items-center justify-between gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={method === "creditCard"}
                  onChange={() => setMethod("creditCard")}
                />
                Pay with Credit Card
                {/* Logos (simple placeholders) */}
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold border rounded ">
                    VISA
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold border rounded">
                    Discover
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold border rounded">
                    AmEx
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold border rounded">
                    MC
                  </span>
                </div>
              </div>
              {/* Form area */}
              <div className="mt-3 rounded border border-black/20 p-3">
                <div className="grid grid-cols-1 gap-3">
                  {/* Card number */}
                  <div>
                    <label className="block text-[11px] mb-1">
                      Card number
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full rounded border border-black/20 px-3 py-2 text-sm outline-none"
                    />
                  </div>

                  {/* Expiration + CSC */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-gray-600 mb-1">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full rounded border border-black/20 px-3 py-2 text-sm outline-none "
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-gray-600 mb-1">
                        Card Security Code
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="password"
                          className="w-full rounded border border-black/20  px-3 py-2 text-sm outline-none"
                        />
                        <button
                          type="button"
                          className="text-xs text-orange-500 hover:underline whitespace-nowrap"
                        >
                          what is this?
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Form area */}
            </div>
          </label>
        </form>
        <TicketsOverview nextStep="/tourpackages/order-complete" step={3} />
      </div>
    </div>
  );
}

export default CreditCard;
