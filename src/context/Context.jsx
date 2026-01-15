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
    name: null,
    surname: null,
    telephonenumber: null,
    email: null,
  });

  const [method, setMethod] = useState("");  
  const [tour, setTour] = useState(null); 
  const [tickets, setTickets] = useState([]);

  const confirmBooking = () => {
    const ticket = {
      id: Date.now(),
      tour: tour,
      date: selectedDate.date,
      time: selectedDate.time,
      image: tour,
      counts: { ...counts },
      customer: { ...form },
      paymentMethod: method,
      price: totalPrice(counts, prices),
      status:
        selectedDate.date && new Date(selectedDate.date) > new Date()
          ? "Upcomming"
          : "Ended",
    };

    setTickets(prev => [...prev, ticket]);
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
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}


export { BookingContext, BookingProvider };

