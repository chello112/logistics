import Navbar from "./components/navigation/Navbar";
import Dashboard from "./pages/orders/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <Navbar />
      <Dashboard />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
