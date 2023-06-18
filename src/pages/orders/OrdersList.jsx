import EditOrder from "./EditOrder";

const OrdersList = ({ orders }) => {
  return (
    <tbody>
      {orders.map((order) => (
        <tr key={order.orderNo}>
          <td>{order.orderNo}</td>
          <td>{order.date}</td>
          <td>{order.customer}</td>
          <td>{order.trackingNo}</td>
          <td>{order.status}</td>
          <td>{order.consignee}</td>
          <td>
            <EditOrder {...order} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrdersList;
