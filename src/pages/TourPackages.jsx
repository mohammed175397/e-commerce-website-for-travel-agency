import Packages from "../compnants/tourpackages/Packages";
import Services from "../compnants/tourpackages/Services";
import Bike from "../compnants/common/Bike";
import Feedback from "../compnants/common/Feedback";

function TourPackages() {
  return (
    <div>
      <Packages />
      <Services />
      <Bike />
      <Feedback />  
    </div>
  )
}

export default TourPackages