import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Ellipse from '../../assets/rectangle/Ellipse 4.png';


function Feedback() {
  return (
    <div className="h-130 mx-15">
      <div className="flex justify-around mx-15  my-5 items-center   gap-122">
        <h2 className="font-bold ">Happy Customers Says</h2>
        <div className="flex items-center gap-2">
          <button className=" bg-gray-300 rounded-full h-10 w-10 cursor-pointer">
            <IoIosArrowBack className="text-white m-2.5" />
          </button>
          <button className=" bg-gray-300 rounded-full h-10 w-10 cursor-pointer">
            <IoIosArrowForward className="text-white  m-3" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <div className="flex flex-col w-134 h-100 shadow-2xl rounded-xl items-center p-7">
          <div className="flex flex-col gap-1.5">
            <img className="w-20 h-20" src={Ellipse} alt="logo is not found" />
            <p>Lyod Gomez</p>
          </div>
          <p className="text-center py-5">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is pleasure
          </p>
        </div>
        <div className="flex flex-col w-134 h-100 shadow-2xl rounded-xl items-center p-7">
          <div className="flex flex-col gap-1.5">
            <img className="w-20 h-20" src={Ellipse} alt="logo is not found" />
            <p>Lyod Gomez</p>
          </div>
          <p className="text-center py-5">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is pleasure
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
