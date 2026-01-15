import TicketsOverview from "../compnants/common/TicketsOverview";
import DetailsPackges from '../compnants/tourpackages/bookingdetails/DetailsPackges'
import Stepper from "../compnants/common/Stepper";

function BookingDetails() { 
  return (
    <div className="m-35">
        <Stepper currentStep={1}/>
      <div className="flex items-center justify-between">
        <DetailsPackges />
        <TicketsOverview nextStep="/tourpackages/your-details" />
      </div>
    </div>
  );
}

export default BookingDetails;