import bike from "../../assets/rectangle/bike picture.png";

function Bike() {
  const INPUTS = [
    {
      id: 1,
      name: "Name and Surname",
      type: "name",
      placeholder: "Enter Your Name and Surname",
    },
    {
      id: 2,
      name: "Telephone Number",
      type: "number",
      placeholder: "Enter Your Telephone Number",
    },
    {
      id: 3,
      name: "Date",
      type: "Date",
      placeholder: "Select the date",
    },
    {
      id: 4,
      name: "Email Address",
      type: "Email",
      placeholder: "Enter Your Email",
    },
    {
      id: 5,
      name: "Service Type",
      type: "select",
      placeholder: "Select the service types",
      option: ["select", "select", "select", "select"],
    },
    {
      id: 6,
      name: "Time",
      type: "time",
      placeholder: "Select time",
    },
  ];
  return (
    <div className="flex justify-evenly items-center bg-orange-200 h-130 p-43">
      {/* <div>
        <h2>Book Now Bike</h2>
      </div> */}
      <div className="grid grid-cols-2 items-center w-170 h-90 bg-[#FFF] p-5 pl-12 rounded-2xl">
        {INPUTS.map((input) => (
          <div key={input.id} className="w-170 flex flex-col gap-1">
            {input.type !== "select" ? (
              <>
                <label htmlFor={input.name}>{input.name}</label>
                <input
                  className="bg-amber-100 w-72 p-2 rounded-2xl outline-0"
                  placeholder={input.placeholder}
                  type={input.type}
                />{" "}
              </>
            ) : (
              <div className="w-170 flex flex-col gap-1">
                <label>{input.name}</label>
                <select className="w-72 p-3 rounded-2xl bg-amber-100 text-gray-700 outline-none">
                  <option value="">Select Option</option>
                  <option value="1">Option One</option>
                  <option value="2">Option Two</option>
                  <option value="3">Option Three</option>
                </select>
              </div>
            )}
          </div>
        ))}
        <button className="bg-amber-600 w-45 text-white rounded-2xl mx-55 my-4 p-2">
          Book Now
        </button>
      </div>
      <div>
        <img className="w-130 h-90" src={bike} alt="the photo is not found" />
      </div>
    </div>
  );
}

export default Bike;
