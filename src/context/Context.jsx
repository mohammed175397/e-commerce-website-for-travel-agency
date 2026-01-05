import { useState, createContext } from "react";

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
      }}
    >
      {children}
    </BookingContext.Provider>
  );

}


export { BookingContext, BookingProvider };

