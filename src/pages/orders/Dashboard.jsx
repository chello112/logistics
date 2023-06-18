import { useSelector } from "react-redux";
import OrdersList from "./OrdersList";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";

const Dashboard = () => {
  const { orders, isLoading, isError, message } = useSelector((state) => state.orders);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  let content;
  if (isError) {
    content = <p>{message}</p>;
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Order nr.</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Tracking nr.</th>
            <th>Status</th>
            <th>Consignee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <OrdersList orders={orders} />
      </table>
      {isError && (
        <section className="heading">
          <div>
            <div className="err">{content}</div>
            <h6>Something went wrong. Please try again later...</h6>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
