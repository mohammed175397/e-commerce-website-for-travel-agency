import CreditCard from "../compnants/pyment/CreditCard"
import Stepper from "../compnants/common/Stepper"
function Pyment() {
  return (
    <div className="m-35">
      <Stepper currentStep={3} />
      <CreditCard />
    </div>
  );
}

export default Pyment