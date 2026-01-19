import { useState, createContext } from "react";
import { totalPrice } from "../compnants/common/utiles/utlies";
const BookingContext = createContext(null);

const BookingProvider = ({children}) => {
  const [selectedDate, setSelectedDate, ] = useState({
    date: null,
    currentDate: new Date(),
    time: "",
  });

  const [counts, setCounts] = useState({
    adult: 0,
    child: 0,
    infant: 0,
  });

  const setCount = (key, value) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, value),
    }));
  };
    
  const [prices, setPrices] = useState({
    adult: "34.00",
    child: "36.00",
    infant: "Free",
  });  

  const [form, setForm] = useState({
    name: '',
    surname: '',
    telephonenumber: '',
    email: '',
  });

  const [method, setMethod] = useState("");  
  const [tour, setTour] = useState(null); 
  const [tickets, setTickets] = useState([]);
  const [imageTour, setImageTour] = useState();

  const confirmBooking = () => {
    const ticket = {
      id: Date.now(),
      tour: tour,
      date: selectedDate.selectedFullDate,
      time: selectedDate.time,
      titleTour: tour,
      image: imageTour,
      counts: { ...counts },
      customer: { ...form },
      paymentMethod: method,
      price: totalPrice(counts, prices),
      status:
        selectedDate.date && new Date(selectedDate.date) > new Date()
          ? "Upcoming"
          : "Ended",
    };

    setTickets(prev => [ticket, ...prev ]);
  }
  return (
    <BookingContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        counts,
        setCounts,
        setCount,
        prices,
        setPrices,
        form,
        setForm,
        method,
        setMethod,
        confirmBooking,
        tour,
        setTour,
        tickets,
        setTickets,
        imageTour,
        setImageTour,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}


export { BookingContext, BookingProvider };

