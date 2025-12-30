import { BsPaypal } from "react-icons/bs";
import TicketsOverview from "../common/TicketsOverview";
function CreditCard() {
  return (
    <div className="my-30 mx-35">
      <h2>Select a pyment method</h2>
      <div className="flex justify-between">
        <form action="">
          <div className="w-125 flex items-center gap-3 border border-black/20 rounded-sm p-2">
            <input type="radio" id="pal" />
            <label htmlFor="pal">Palpay</label>
            <p className="w-110 font-bold opacity-35">
              You will be redirected to the PayPal website after submitting your
              order
            </p>
            <div className="w-10 border border-black/20 p-2  rounded-sm">
              <BsPaypal className="text-xl text-blue-900" />
            </div>
          </div>
        </form>
        <TicketsOverview nextStep="/tourpackages/order-complete" />
      </div>
    </div>
  );
}

export default CreditCard;
