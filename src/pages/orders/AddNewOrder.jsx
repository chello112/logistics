import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addOrder } from "../../redux/features/orders/orderSlice";
import { nanoid } from "@reduxjs/toolkit";
import { allStatusOptions } from "../../redux/features/orders/orderStatusOptions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddNewOrder = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [status, setStatus] = useState("");
  const [consignee, setConsignee] = useState("");

  //Status options selection logic
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

  //Add order functionality
  const onAddOrderClicked = () => {
    dispatch(addOrder({ orderNo: nanoid(), date, customer, trackingNo, status, consignee }));
    toast.success("New order added successfully!");
    handleClose();
    setDate("");
    setCustomer("");
    setTrackingNo("");
    setStatus("");
    setConsignee("");
  };

  //To make sure that every field is filled
  const canSave = [date, customer, trackingNo, status, consignee].every(Boolean);

  return (
    <>
      <button className="newOrderBtn" onClick={handleShow}>
        Add new order
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6"></div>
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
                  Status
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
          <Button variant="success" onClick={onAddOrderClicked} disabled={!canSave}>
            Add order
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddNewOrder;
