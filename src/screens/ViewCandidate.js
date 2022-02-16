import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getAllCandidatesdetails } from "../redux/actions/userActions";
import "./ViewCandidate.css";

function ViewCandidate() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [testTitle, setTestTitle] = useState("");
  const [testTimer, setTestTimer] = useState("");
  const [testScore, setTestScore] = useState("");

  const user = JSON.parse(localStorage.getItem("candidates"));

  useEffect(() => {
    if (user) {
    } else {
      setFirstName(user.data.firstName);
    }
  }, []);

  //   useEffect(() => {
  //     dispatch(getAllCandidatesdetails());
  //   }, [dispatch]);

  //   const getCandidate = useSelector((state) => state.getCandidate);
  //   const { candidates } = getCandidate;
  //   console.log(candidates);

  return (
    <div>
      <Sidebar />
      <div className="candidate_container">
        <Navbar title="View Candidates Details" />
        <div className="viewcandidate">
          <div className="gridBox">
            <div className="eachGridBox">
              <header>First Name</header>
              <span className="titleContainer">
                <p className="titleName">{user.data.firstName}</p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Last Name</header>
              <span className="titleContainer">
                <p className="titleName">{user.data.lastName}</p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Phone Number</header>
              <span className="titleContainer">
                <p className="titleName">08021238372</p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Test Title</header>
              <span className="titleContainer">
                <p className="titleName">AZ-204</p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Test Timer</header>
              <span className="titleContainer">
                <p className="titleName">10</p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Test Score</header>
              <span className="titleContainer">
                <p className="titleName">72.3%</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCandidate;
