import logo from '../assets/rectangle/logo (1).png'
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <div className=" bg-black p-15 flex flex-col text-white gap-3 leading-8">
      <div>
        <img className="" src={logo} alt="" />
      </div>
      <hr />
      <div className="flex justify-between py-5">
        <div>
          <p className="font-bold">Services</p>
          <p>Bike and Rickshaw rental</p>
          <p>Guided Tours of Lucca</p>
          <p>Guided Bike Tour of Lucca</p>
          <p>Trip In The Tuscan Hills</p>
          <p>Transportation With Luxury Cars</p>
          <p>Wine Tours By Bus With Guide</p>
        </div>
        <div>
          <p className="font-bold">Home</p>
          <p>Home</p>
          <p>About Us</p>
          <p>Tour Packages</p>
        </div>
        <div>
          <p className="font-bold">Help</p>
          <p>Terms of Use</p>
          <p>Provicy Policy</p>
        </div>
        <div>
          <p className="font-bold">Contacts</p>
          <div className="flex gap-2 items-center">
            <IoLocation className="text-amber-500" />
            <p>Piazza Napoleone, Lucca, Tuscany</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaPhone className="text-amber-500" />
            <p> +39 346 368 5708</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaMessage className="text-amber-500" />
            <p> italiainlimo@gmail.com</p>
          </div>
        </div>
        <div>
          <p className='font-bold text-center'>Social Media</p>
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 w-10 h-10 rounded-full">
              <FaInstagram className="m-2.5 text-xl text-black" />
            </div>
            <div className="bg-amber-500 w-10 h-10 rounded-full">
              <FaFacebookF className="m-2.5 text-xl text-black" />
            </div>
            <div className="bg-amber-500 w-10 h-10 rounded-full">
              <FaTwitter className="m-2.5 text-xl text-black" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p className="text-center">Copyright © 2022. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;