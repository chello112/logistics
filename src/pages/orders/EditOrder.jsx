import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, updateOrder } from "../../redux/features/orders/orderSlice";
import { allStatusOptions } from "../../redux/features/orders/orderStatusOptions";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SingleOrder = (props) => {
  const dispatch = useDispatch();

  const [orderNo, setOrderNo] = useState(props.orderNo);
  const [date, setDate] = useState(props.date);
  const [customer, setCustomer] = useState(props.customer);
  const [trackingNo, setTrackingNo] = useState(props.trackingNo);
  const [status, setStatus] = useState(props.status);
  const [consignee, setConsignee] = useState(props.consignee);

  //Status selection logic
  const statusOptionList = useSelector(allStatusOptions);

  const statusOptions = statusOptionList.map((option) => (
    <option key={option.id} value={option.status}>
      {option.status}
    </option>
  ));

  //Modal handler
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Update order functionality
  const onUpdateOrderClicked = () => {
    toast.success("Updated successfully!");
    handleClose();
    dispatch(
      updateOrder({
        orderNo,
        date,
        customer,
        trackingNo,
        status,
        consignee,
      })
    );
  };

  //To make sure that every field is filled
  const canSave = [date, customer, trackingNo, status, consignee].every(Boolean);

  return (
    <>
      <button className="editBtn" onClick={handleShow}>
        Edit
      </button>
      <button
        className="deleteBtn"
        onClick={() => {
          dispatch(deleteOrder(props.orderNo));
          toast.warning(`Order: ${props.orderNo} has been deleted successfully!`);
        }}
      >
        Delete
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label>orderNo</label>
              </div>
              <div className="md:w-2/3">
                <input
                  disabled={true}
                  className="w-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="orderNo"
                  type="text"
                  value={orderNo}
                  onChange={(e) => setOrderNo(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="date">
                  date
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="customer">
                  customer
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="customer"
                  type="text"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="trackingNo">
                  trackingNo
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="trackingNo"
                  type="text"
                  value={trackingNo}
                  onChange={(e) => setTrackingNo(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="status">
                  status
                </label>
              </div>
              <div className="md:w-2/3">
                <Form.Select
                  id="statusOption"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                >
                  <option id=""></option>
                  {statusOptions}
                </Form.Select>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="consignee">
                  consignee
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="consignee"
                  type="text"
                  value={consignee}
                  onChange={(e) => setConsignee(e.target.value)}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={onUpdateOrderClicked} disabled={!canSave}>
            Update
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleOrder;
