import { BsPeopleFill } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";

function Card({ tour }) {
  const { image, title, price, day, people, description } = tour;
  return (
    <div>
      <img
        className="aspect-square object-cover rounded-t-xl"
        src={image}
        alt="tour"
      />

      <div className="p-3 leading-7">
        <p className="font-bold">{title}</p>

        <p className="text-amber-500 font-bold">{price} €</p>

        <div className="flex items-center justify-between text-amber-400">
          <div className="flex items-center gap-1">
            <CiCalendarDate />
            <p>{day}</p>
          </div>
          <div className="flex items-center gap-1">
            <BsPeopleFill />
            <p>{people}</p>
          </div>
        </div>

        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
