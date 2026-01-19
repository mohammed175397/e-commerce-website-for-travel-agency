import rickshaw from '../../assets/rectangle/Rectangle 21.png'
import bike from '../../assets/rectangle/Rectangle 21 (1).png'
import bus from '../../assets/rectangle/siena.png'
import TRANSFER from "../../assets/rectangle/Rectangle 21 (3).png";
import { CiCalendarDate } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { TbDiscountOff } from "react-icons/tb";

const CARDS = [
  {
    id: 1,
    img: rickshaw,
    title: "BIKE / RICKSHAW",
    praic: 10,
    actvits: "Your bike for a day",
    city: "City App",
    disc: "Discount on Rickshaw",
    support: "Guaranteed Support",
  },
  {
    id: 2,
    img: bike,
    title: "BIKE / RICKSHAW",
    praic: 10,
    actvits: "Your bike for a day",
    city: "City App",
    disc: "Discount on Rickshaw",
    support: "Guaranteed Support",
  },
  {
    id: 3,
    img: bus,
    title: "BIKE / RICKSHAW",
    praic: 10,
    actvits: "Your bike for a day",
    city: "City App",
    disc: "Discount on Rickshaw",
    support: "Guaranteed Support",
  },
  {
    id: 4,
    img: TRANSFER,
    title: "TRANSFER",
    praic: 10,
    actvits: "Personal Driver",
    city: "Wherever You Want",
    disc: "At the best price",
    support: "Guaranteed Support",
  },
];


function PackagesHome() {
  return (
    <div className="flex justify-evenly items-center h-140 m-35 ">
      {CARDS.map((card) => (
        <div key={card.id} className="w-68 h-140 rounded-2xl shadow-xl">
          <img className='h-68 w-68' src={card.img} loading='lazy' alt="photo not found" />
          <div className="p-5">
            <h2 className="font-bold">{card.title}</h2>
            <p className="my-2">
              <span className="opacity-50 mt-7">€</span>
              <span className="text-orange-500 font-bold text-2xl">
                {card.praic}
              </span>
              <span className="text-[12px] opacity-50"> \day</span>
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 ">
                <CiCalendarDate className="text-orange-600" />
                <p className="opacity-50 text-sm">{card.actvits}</p>
              </div>
              <div className="flex items-center gap-2 ">
                <LiaMapMarkedAltSolid className="text-orange-600" />
                <p className="opacity-50 text-sm">{card.actvits}</p>
              </div>
              <div className="flex items-center gap-2 ">
                <TbDiscountOff className="text-orange-600" />
                <p className="opacity-50 text-sm">{card.actvits}</p>
              </div>
              <div className="flex items-center gap-2 ">
                <BiSupport className="text-orange-600" />
                <p className="opacity-50 text-sm">{card.actvits}</p>
              </div>
            </div>
            <button className="w-60 rounded-2xl text-orange-500 border-2 border-amber-500 my-3 p-1">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default PackagesHome;