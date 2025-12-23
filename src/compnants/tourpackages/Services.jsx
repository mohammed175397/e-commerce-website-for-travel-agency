import CardServices from '../common/CardServices';
import bike from '../../assets/rectangle/rickshaw.png';
import winetours from '../../assets/rectangle/Rectangle 20 (3).png'
import trips from '../../assets/rectangle/Rectangle 20 (2).png';
import guided from '../../assets/rectangle/guided.png'; 
import coachtrip from '../../assets/rectangle/coachtrip.png';
import transfer from '../../assets/rectangle/luxu.png';



const CARDDATE = [
  {
    id: 1,
    image: bike,
    title: "Bike and rickshaw rental",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    id: 2,
    image: guided,
    title: "Guided tours of Lucca",
    paragraph:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    id: 3,
    image: trips,
    title: "Trips In The Tuscan Hills",
    paragraph:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    id: 4,
    image: coachtrip,
    title: "Coach Trip Packages",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    id: 5,
    image: transfer,
    title: "Transportation With Luxury Cars",
    paragraph:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    id: 6,
    image: winetours,
    title: "Wine Tours By Bus With Guide",
    paragraph:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];

function Services() {
  return (
    <div>
      <h2 className="font-bold m-15 mx-30">Services</h2>
      <div className="grid grid-cols-3 mx-30 gap-x-5">
        {CARDDATE.map((card) => (
          <CardServices key={card.id} card={card} />
        ))}
        
      </div>
    </div>
  );
}

export default Services