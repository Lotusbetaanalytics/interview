import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerAdmin } from "../redux/actions/userActions";
import { USER_REGISTRATION_RESET } from "../redux/constants/userConstants";

const AdminRegister = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Oops Password and Confirm Password don't match ");
    } else {
      dispatch(registerAdmin(firstName, lastName, phone, email, password));
      setMsg(true);
    }
  };

  const adminRegister = useSelector((state) => state.adminRegister);
  const { loading, error, success } = adminRegister;

  if (success) {
    setTimeout(() => history.push("/adminlogin"), [4000]);
    dispatch({ type: USER_REGISTRATION_RESET });
  }

  return (
    <div>
      <Sidebar />
      <div className="admin_container">
        <Navbar title="Admin" />
        <div className="admin">
          <div className="admin_btn">
            <Link to="/profile">
              <button type="submit" className="btn">
                View Admin
              </button>
            </Link>
          </div>

          <form onSubmit={submitHandler}>
            <div className="admin_form">
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="First Name"
              />

              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Last Name"
              />

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email Address"
              />

              <input
                type="mobile"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="Phone Number"
              />

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />

              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm Password"
              />
            </div>

            <div className="admin_btn">
              <button type="submit" className="btn">
                Add Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
