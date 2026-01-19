import { GoArrowLeft } from "react-icons/go";
import DateTimeCard from "./DateTimeCard";
import Feedback from '../../common/Feedback';
// import wine from '../../../assets/rectangle/wine.png';
import wine5 from '../../../assets/rectangle/wine5.png';
import wine6 from '../../../assets/rectangle/wine6.png';
import wine7 from '../../../assets/rectangle/wine7.png';
import winee from '../../../assets/rectangle/winee.png';

import { useNavigate } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { TiTime } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
import { MdMoney } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import TOURSDATA from "../../common/featurdData";
import UseBooking from "../../../context/UseBooking";
import { useEffect } from "react";

function CardDetails() {
  const { setTour, setImageTour } = UseBooking();
  const { id } = useParams();
  const DataCard = TOURSDATA?.find(
    (data) => Number(data.id) === Number(id)
  );
  
  useEffect(() => {
    if (DataCard) {
      setTour(DataCard.title);
      setImageTour(DataCard.image);
    }
  }, [DataCard, setTour, setImageTour]);

  const navigate = useNavigate();

  return (
    <div className=" m-32">
      <button
        onClick={() => navigate("/tourpackages")}
        className="flex items-center gap-2 my-7 font-bold opacity-40 cursor-pointer hover:opacity-100"
      >
        <GoArrowLeft />
        <p>Back</p>
      </button>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-2 ">
          <img
            className="w-165 rounded-xl"
            src={DataCard?.image}
            alt="it's not found"
          />
          <div className="flex gap-2">
            <img className="w-53.5" src={wine5} alt="it's not found" />
            <img className="w-53.5" src={wine6} alt="it's not found" />
            <img className="w-53.5" src={wine7} alt="it's not found" />
          </div>
        </div>
        <div className="w-150 flex flex-col gap-3">
          <h2 className="text-3xl font-bold">{DataCard?.title}</h2>
          <p className="text-xl">
            from{" "}
            <span className="text-orange-500 font-bold">
              {" "}
              {DataCard?.price}€{" "}
            </span>
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <DateTimeCard/>
        </div>
      </div>
      {/* dtails */}
      <div className="w-160 my-15">
        <h2 className="font-black">Details</h2>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dicta, dignissimos, iusto blanditiis molestias at minus obcaecati
          impedit consectetur nostrum, velit amet facere alias totam! Magni
          veritatis quae culpa? Possimus.
        </p>
        <div className="flex flex-col gap-3 ">
          <div className="flex items-center gap-2">
            <IoIosPeople className="text-orange-500 text-2xl" />
            <p className="font-bold">
              Number of group:{" "}
              <span className="opacity-50">
                {DataCard?.details?.Numberofgroup}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <TiTime className="text-orange-500 text-2xl" />
            <p className="font-bold">
              Duartion:{" "}
              <span className="opacity-50"> {DataCard?.details?.Duartion}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-orange-500 text-2xl" />
            <p className="font-bold">
              Departuring and arriving areas:{" "}
              <span className="opacity-50">
                {DataCard?.details?.Departuringandarrivingareas}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <RiGuideFill className="text-orange-500 text-2xl" />
            <p className="font-bold">
              Guide service:{" "}
              <span className="opacity-50">
                {DataCard?.details?.Guideservice}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaLanguage className="text-orange-500 text-2xl" />
            <p className="font-bold">
              Language:{" "}
              <span className="opacity-50">{DataCard?.details?.Language}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdMoney className="text-orange-500 text-2xl" />
            <p className="font-bold">
              Entry fees:{" "}
              <span className="opacity-50">{DataCard?.details?.EntryFees}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaBus className="text-orange-500 text-2xl" />
            <p className="font-bold">
              EntryTransportation:{" "}
              <span className="opacity-50">
                {DataCard?.details?.EntryTransportation}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* width: 620px; height: 678px; object-fit: cover */}
        <h2 className="font-bold my-7">Gallery</h2>
        <div className="grid grid-cols-3 gap-2">
          <img
            className="w-155 h-169.5 object-cover rounded-2xl"
            src={DataCard?.gallery?.image3}
            alt="it's not found"
          />
          <div className="flex flex-col gap-2">
            <img src={DataCard?.gallery?.image2} alt="it's not found" />
            <img src={DataCard?.gallery?.image1} alt="it's not found" />
          </div>
          <img
            className="w-155 h-169.5 object-cover rounded-2xl"
            src={winee}
            alt="not found "
          />
        </div>
      </div>
      <Feedback />
    </div>
  );
}

export default CardDetails