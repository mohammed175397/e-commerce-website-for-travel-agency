import stock from '../../assets/rectangle/stock-photo-traveler-tourist-woman-in-casual-clothes-hat-camera-point-thumb-finger-back-aside-on-workspace-area-2063722232-removebg-preview 1.png'
function Offers() {
  return (
    <div className="flex flex-col justify-around items-center ">
      <div className="bg-amber-500 flex justify-around items-center  h-113 w-full ">
        <div className="bg-white opacity-80 w-100 h-60 rounded-2xl p-7 text-center">
          <h2 className=" font-bold">Get Special Offers for Organizations</h2>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="bg-amber-500 w-30 rounded-2xl p-2">Contact Us</button>
        </div>
        <div className="z-1 mb-[147px]">
          <img src={stock}  alt="photo not found" />
        </div>
      </div>
    </div>
  );
}

export default Offers