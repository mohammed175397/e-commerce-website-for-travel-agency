import FeaturedTours from "../home/FeaturedTours";
import trip from '../../assets/rectangle/Trip-pana 1.png';
import UseBooking from "../../context/UseBooking";


function Tickets() {
  const {tickets} = UseBooking();
  
  if (tickets.length === 0) {
    return (
      <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center m-25">
        <img src={trip} alt="not found" />
        <p className="opacity-60">
          You don't have any tickets yet. Start planning your next trip!
        </p>
      </div>
        <FeaturedTours />
      </div>
    );
  }
  
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
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  <img
                    className="w-20 h-16 object-cover rounded "
                    src={ticket.image}
                    alt="not-found"
                  />
                </td>
                <td className="text-center">{ticket.paymentMethod}</td>
                <td className="text-center">{ticket.price}</td>
                <td className="text-center">{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FeaturedTours />
    </div>
  );
}

export default Tickets