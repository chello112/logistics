import AddNewOrder from "../../pages/orders/AddNewOrder";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { orders } = useSelector((state) => state.orders);

  return (
    <nav className="content">
      <div className="nav-container">
        <h3>Shipments</h3>
        {orders.length > 0 && <p className="totalOrders">Orders: ({orders.length})</p>}
        <AddNewOrder />
      </div>
    </nav>
  );
};

export default Navbar;
