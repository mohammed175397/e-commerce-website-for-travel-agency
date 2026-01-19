import FeaturedTours from "../home/FeaturedTours";
import trip from "../../assets/rectangle/Trip-pana 1.png";
import UseBooking from "../../context/UseBooking";

function Tickets() {
  const { tickets, tour } = UseBooking();
  
  if (!tickets || tickets.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center mt-10 gap-3">
          <img src={trip} alt="not found" className="max-w-[380px] w-full" />
          <p className="opacity-60 text-center">
            You don&apos;t have any tickets yet. Start planning your next trip!
          </p>
        </div>
        <FeaturedTours />
      </div>
    );
  }

  const StatusBadge = ({ status }) => {
    const s = String(status || "").toLowerCase();

    const isUpcoming = s.includes("upcoming");
    const isEnded = s.includes("ended");

    const color = isUpcoming
      ? "text-orange-500"
      : isEnded
      ? "text-green-500"
      : "text-slate-500";

    return (
      <div
        className={`flex items-center justify-end gap-2 font-medium  ${color}`}
      >
        <span className="text-base">
          {isUpcoming ? "⏳" : isEnded ? "✅" : "⏳"}
        </span>
        <span className="capitalize">{status}</span>
      </div>
    );
  };

  const PaymentCell = ({ method }) => {
    const m = String(method || "").toLowerCase();
    const icon = m.includes("paypal")
      ? "🅿️"
      : m.includes("visa") || m.includes("card") || m.includes("credit")
      ? "💳"
      : "💰";

    return (
      <div className="flex items-center justify-center gap-2 text-slate-700">
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium">{method}</span>
      </div>
    );
  };

  return (
    <div className="mt-10 px-4 ">
      <div className="mx-auto max-w-5xl flex flex-col gap-5 m-25">
        <h2 className="text-xl font-bold">My Tickets</h2>

        {/* Card */}
        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 text-xs font-semibold text-slate-500">
            <div className="col-span-6">Tour Name</div>
            <div className="col-span-3 text-center">Payment Method</div>
            <div className="col-span-1 text-center">Price</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="grid grid-cols-12 gap-4 px-6 py-5 items-center"
              >
                {/* Tour Name Cell (image + details) */}
                <div className="col-span-6 flex items-center gap-4">
                  <img
                    className="w-16 h-14 object-cover rounded-xl"
                    src={ticket.image}
                    alt="tour"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-slate-900 leading-tight">
                      {tour}
                    </p>

                    <div className="mt-2 flex flex-col gap-1 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">📅</span>
                        <span>{ticket.date.toISOString().split("T")[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🕒</span>
                        <span>{ticket.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="col-span-3">
                  <PaymentCell method={ticket.paymentMethod} />
                </div>

                {/* Price */}
                <div className="col-span-1 text-center font-semibold text-slate-700">
                  €{Number(ticket.price ?? 0).toFixed(2)}
                </div>

                {/* Status */}
                <div className="col-span-2">
                  <StatusBadge status={ticket.status || "Upcoming"} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <FeaturedTours />
      </div>
    </div>
  );
}

export default Tickets;
