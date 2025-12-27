import TicketsOverview from "../compnants/common/TicketsOverview";
import DetailsPackges from '../compnants/tourpackages/bookingdetails/DetailsPackges'
function BookingDetails() { 
  return (
    <div className="m-35">
      <div></div>
      <div className="flex items-center justify-between">
        <DetailsPackges />
        <TicketsOverview />
      </div>
    </div>
  );
}

export default BookingDetails;