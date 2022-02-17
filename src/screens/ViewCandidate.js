import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getAllCandidatesdetails } from "../redux/actions/userActions";
import "./ViewCandidate.css";

function ViewCandidate({ match }) {
  const dispatch = useDispatch();
  const [candidateDetails, setCandidateDetails] = useState("");
  const [firstName, setFirstName] = useState("");

  const id = match.params.id;
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [testTitle, setTestTitle] = useState("");
  // const [testTimer, setTestTimer] = useState("");
  // const [testScore, setTestScore] = useState("");

  const user = JSON.parse(localStorage.getItem("getcandidates"));
  // const candidateDetails = user.firstName;
  // console.log(candidateDetails);

  // useEffect(() => {
  //   if (user) {
  //   } else {
  //     setFirstName(user);
  //   }
  // }, [user]);
  // console.log(user);

  useEffect(() => {
    dispatch(getAllCandidatesdetails());
  }, [dispatch]);

  const candidatesDetails = JSON.parse(localStorage.getItem("candidates"));
  // const candidatesall =

  const getCandidate = useSelector((state) => state.getCandidate);
  const { candidates = [] } = getCandidate;
  const data = candidates.filter((x) => x._id === id);

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
                <p className="titleName">
                  {data && data[0].candidate.firstName}
                </p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Last Name</header>
              <span className="titleContainer">
                <p className="titleName">
                  {data && data[0].candidate.lastName}
                </p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Email</header>
              <span className="titleContainer">
                <p className="titleName">{data && data[0].candidate.email}</p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Test Title</header>
              <span className="titleContainer">
                <p className="titleName">{data && data[0].test.title}</p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Test Timer</header>
              <span className="titleContainer">
                <p className="titleName">{data && data[0].test.timer}</p>
              </span>
            </div>

            <div className="eachGridBox">
              <header>Test Score</header>
              <span className="titleContainer">
                <p className="titleName">{data && data[0].score}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCandidate;
