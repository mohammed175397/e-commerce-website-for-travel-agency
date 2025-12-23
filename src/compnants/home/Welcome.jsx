import group from '../../assets/rectangle/Group 2.png'

function Welcome() {
  return (
    <div className="flex justify-evenly items-center my-20">
      <div>
        <img src={group} alt="not found" />
      </div>
      <div className="w-155">
        <p className='text-sm opacity-50'>WELCOM TO OUR SITE!</p>
        <h2 className="font-bold ">
          We are the best company for your visit
        </h2>
        <p className=" my-5">
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </p>
        <div className="flex my-5 gap-5">
          <div className="flex flex-col">
            <p className="text-amber-500">20+</p>
            <p className="text-sm opacity-50">
              Years
              <br /> Experience
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-amber-500">100+</p>
            <p className="text-sm opacity-50">
              Happy
              <br /> Customer
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-amber-500">15+</p>
            <p className="text-sm opacity-50">
              Choice
              <br /> of Services
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-amber-500">10+</p>
            <p className="text-sm opacity-50">
              Professional
              <br /> Guides
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome