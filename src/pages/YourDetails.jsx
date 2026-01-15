import YourDetail from "../compnants/yourdetails/YourDetail";
import Stepper from "../compnants/common/Stepper";

function YourDetails() {
  return (
    <div className="m-35">
      <Stepper currentStep={2}/>
      <YourDetail />
    </div>
  );
}

export default YourDetails;