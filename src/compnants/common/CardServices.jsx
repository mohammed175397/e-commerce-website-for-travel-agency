import { FaArrowRightLong } from "react-icons/fa6";
    // height: 258px;
function CardServices({ card }) {
  const { title, image, paragraph } = card;
  return (
    <div className="w-105 h-110 ">
      <img className="w-100 h-64 rounded-2xl object-cover" src={image} alt="not found" />
      <h2 className="font-bold pt-2">{title}</h2>
      <p className="py-3">{paragraph}</p>
      <div className="flex items-center gap-2 text-amber-500 ">
        <button className="cursor-pointer hover:underline font-semibold">
          Read More{" "}
        </button>
        <FaArrowRightLong />
      </div>
    </div>
  );
}

export default CardServices;
