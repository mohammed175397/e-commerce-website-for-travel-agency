import AppRoutes from "./routes/AppRoutes";
import {  BookingProvider } from "./context/Context";
function App() {
  
  return (
    <BookingProvider>
      <AppRoutes />
    </BookingProvider>
  );
  
}

export default App
