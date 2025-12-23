import bike from '../../assets/rectangle/rickshaw.png';
import people from '../../assets/rectangle/Rectangle 19.png';
import taxi from '../../assets/rectangle/Rectangle 20.png';
import bus from '../../assets/rectangle/Rectangle 20 (1).png';


const CARDS = [
  {
    id: 1,
    img: bike,
    name: "Bike and rickshaw rental",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    id: 2,
    img: people,
    name: "Guided tour of the countryside",
    paragraph:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    id: 3,
    img: taxi,
    name: "Taxi and NCC service",
    paragraph:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    id: 4,
    img: bus,
    name: "Bus Package",
    paragraph:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];

function Transfer() {
  return (
    <div className="flex justify-evenly items-center m-15 mx-35">
      {CARDS.map((card) => (
        <div key={card.id} className="w-67 h-100">
          <img src={card.img} alt="not found" />
          <h2 className="font-bold py-2">{card.name}</h2>
          <p>{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export default Transfer;