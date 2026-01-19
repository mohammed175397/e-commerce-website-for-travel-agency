import image from '../../assets/rectangle/image (1).png';

function Welcome() {
  return (
    <div className="flex justify-evenly items-center m-15 mx-35">
      <div>
        <img className="w-134 " src={image} loading='lazy' alt="" />
      </div>
      <div className="flex flex-col gap-2 w-134">
        <p className='text-sm opacity-40'>WELCOME TO OUR SITE!</p>
        <h2 className='font-bold'>We Are The Center Of Lucca To Offer You The Best</h2>
        <p className='my-3'>
          We are right in the center of Lucca to offer you the real city life!
          With years of experience in practically every tourism sector, with us
          you can find complete packages at the lowest price, to travel and
          learn and have fun all without worries and without stress. What are
          you waiting for, book a bright evening, a trip to beautiful Tuscany or
          a personal tour for you!
        </p>
        <div className="flex gap-2">
          <div>
            <p className="text-orange-500 font-bold">20+</p>
            <p>Years Experience</p>
          </div>
          <div>
            <p className="text-orange-500 font-bold">100+</p>
            <p>Happy Customer</p>
          </div>
          <div>
            <p className="text-orange-500 font-bold">15+</p>
            <p>Choice of Services</p>
          </div>
          <div>
            <p className="text-orange-500 font-bold">10+</p>
            <p>Professional Guides</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome