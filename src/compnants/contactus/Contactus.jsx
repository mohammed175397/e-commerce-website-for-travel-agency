import { FaMessage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

function Contactus() {
  return (
    <>
      <div className=" p-30 flex items-center justify-around bg-orange-200 mt-35">
        <div className="flex flex-col gap-6 w-100 mb-30">
          <h2 className="font-bold text-3xl">Get In Touch!</h2>
          <p>
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <div className="flex items-center gap-1.5">
            <IoLocation className="text-orange-400" />
            <p>Piazza Napoleone, Lucca, Tuscany</p>
          </div>
          <div className="flex items-center gap-1.5">
            <FaPhone className="text-orange-400" />
            <p> +39 346 368 5708</p>
          </div>
          <div className="flex items-center gap-1.5">
            <FaMessage className="text-orange-400" />
            <p> italiainlimo@gmail.com</p>
          </div>
        </div>
        <form className="flex flex-col gap-2 bg-orange-400 p-12 rounded-2xl">
          <label htmlFor="">Name and Surname</label>
          <input
            type="text"
            className="bg-white p-2 rounded-xl"
            placeholder="Enter Your Name"
          />
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            className="bg-white p-2 rounded-xl"
            placeholder="Enter Your Email"
          />
          <label htmlFor="Message">Message</label>
          <textarea
            className="bg-white p-2 rounded-xl"
            placeholder="Enter Your Message"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
          ></textarea>
          <button className="bg-amber-600 text-white p-1 rounded-2xl w-50 mx-30 my-2 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
      <div>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=31.5514872,34.4466631&output=embed"
          frameBorder="0"
          width="100%"
          height="450"
          className="rounded-md shadow"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default Contactus;
