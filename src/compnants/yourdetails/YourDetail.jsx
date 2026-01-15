import TicketsOverview from "../common/TicketsOverview";
import UseBooking from "../../context/UseBooking";

function YourDetail() {
   const {form, setForm} = UseBooking();
  return (
    <div className="m-10 flex flex-col gap-5">
      <h2 className="font-bold"> Who shall we send these tickets to ?</h2>
      <div className="flex  gap-10 justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <label htmlFor="">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Enter your name"
                className="w-80 border border-black/20 rounded-sm p-2"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Surname</label>
              <input
                type="text"
                value={form.surname}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, surname: e.target.value }))
                }
                placeholder="Enter your Surname"
                className="w-80 border border-black/20 rounded-sm p-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <label htmlFor="">Telephone Number</label>
              <input
                type="number"
                value={form.telephonenumber}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    telephonenumber: e.target.value,
                  }))
                }
                placeholder="Enter your telephone number"
                className="w-80 border border-black/20 rounded-sm p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Enter your email address"
                className="w-80 border border-black/20 rounded-sm p-2"
              />
            </div>
          </div>
        </div>
        <TicketsOverview nextStep={"/tourpackages/payment"} step={2} />
      </div>
    </div>
  );
}

export default YourDetail