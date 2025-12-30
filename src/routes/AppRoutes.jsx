import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Layout from "../lauouts/Layout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import TourPackages from "../pages/TourPackages";
import CardDetails from '../pages/PageDetails';
import YourDetails from "../pages/YourDetails";
import BookingDetails from '../pages/BookingDetails';
import Pyment from '../pages/Pyment'
import OrderComplete from '../pages/OrderComplete';
import MyTickets from "../pages/MyTickets";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/tourpackages">
            <Route index element={<TourPackages />} />
            <Route path="carddetails/:id" element={<CardDetails />} />
            <Route path="booking-details" element={<BookingDetails />}/>
            <Route path="your-details" element={<YourDetails />} />
            <Route path="payment" element={<Pyment />} />
            <Route path="order-complete" element={<OrderComplete />} />
          </Route>
          <Route path="mytickets" element={<MyTickets />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
