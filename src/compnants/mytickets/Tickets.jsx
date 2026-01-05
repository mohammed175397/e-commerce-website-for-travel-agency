import FeaturedTours from "../home/FeaturedTours";
import trip from '../../assets/rectangle/Trip-pana 1.png';
import TOURSDATA from '../../compnants/common/featurdData';

function Tickets() {
  return (
    <div className=" m-35 flex flex-col gap-5 ">
      <h2 className="font-bold">My Tickets</h2>
      <div className="flex flex-col gap-2 items-center">
        <table>
          <thead>
            <tr>
              <th className="py-3 px-4">Tour Name</th>
              <th className="py-3 px-4">Payment Method</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {TOURSDATA.map((tour) => (
              <tr key={tour.id}>
                <td>
                  <img
                    className="w-20 h-16 object-cover rounded "
                    src={tour.image}
                    alt=""
                  />
                </td>
                <td className="text-center">{tour.id}</td>
                <td className="text-center">{tour.price}</td>
                <td className="text-center">{tour.people}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img src={trip} alt="not found" />
        <p className="opacity-60">
          You don't have any tickets yet. Start planning your next trip!
        </p>
      </div>
      <FeaturedTours />
    </div>
  );
}

export default Tickets