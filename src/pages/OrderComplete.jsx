import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

function OrderComplete() {
  const navigate = useNavigate()
  return (
    <div className=" h-screen m-25 flex flex-col items-center justify-center gap-2">
      <FaCheckCircle className="text-orange-400" />
      <h2 className="font-bold text-2xl">Your Order is complete</h2>
      <p>You will be receiving a confirmation email with order details.</p>
      <button
        className="text-orange-400 bg-none border border-orange-400 p-3 w-70 rounded-3xl cursor-pointer transition-all duration-300 ease-in-out
      hover:bg-amber-500 hover:text-white"
      onClick={() => navigate('/')}
      >
        Go to the Home Page
      </button>
    </div>
  );
}

export default OrderComplete