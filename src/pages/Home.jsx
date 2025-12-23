import HeroSection from '../compnants/home/HeroSection';
import FeaturedTours from '../compnants/home/FeaturedTours';
import Welcome from '../compnants/home/Welcome';
import Offers from '../compnants/home/Offers';
import Bike from '../compnants/common/Bike';
import Transfer from "../compnants/home/Transfer";
import PackagesHome from '../compnants/home/PackagesHome';
import Feedback from '../compnants/common/Feedback';
function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedTours />
      <Welcome />
      <Offers />
      <Transfer />
      <Bike />
      <PackagesHome />
      <Feedback />
    </div>
  );
}

export default Home