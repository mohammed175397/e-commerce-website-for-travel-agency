import julie from '../../assets/rectangle/hero-bg.png';
import { useNavigate } from 'react-router';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen text-white bg-cover bg-center flex flex-col items-center justify-center gap-3"
      style={{ backgroundImage: `url(${julie})` }}
    >
      <p className="w-150 text-center">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </p>
      <button
        onClick={() => navigate("/tourpackages")}
        className="border rounded-2xl w-55 p-1 cursor-pointer hover:bg-orange-500 hover:border-0"
      >
        View Our Tour Packges
      </button>
    </div>
  );
}

export default HeroSection