import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");


  const user = useSelector((state) => state.auth.user)
  const cart = useSelector((state) => state.auth.user);
  useEffect(() => {
    if(user){
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setEmail(user.email)
    setAddress(user.address)
    }
	}, [user]);


  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName" className="form-label">
          First Name:
        </label>
        <input
          className="form"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          className="form"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          className="form"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="address" className="form-label">
        Shipping Address:
        </label>
        <input
          className="form"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="payment" className="form-label">
        Payment Method:
        </label>
        <input
          className="form"
          name="payment"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Checkout;


     {/* <button
          onClick={handleSave}
          disabled={!editAllowed}
          className="form-label"
        >
          Save Edit
        </button>
        <button onClick={handleDelete} className="form-label">
          Delete
        </button>
        <button onClick={handleCancel} className="form-label">
          Cancel
        </button> */}
