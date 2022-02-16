import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import {
  getAllCandidatesdetails,
  allCandidatesDetails,
  myDetails,
} from "../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Table, Tbody, Td, Th, Tr, Button } from "@chakra-ui/react";

function Profile() {
  const dispatch = useDispatch();
  // let navigate = useNavigate();

  const submitHandler = (id) => {
    if (id) {
    } else {
      dispatch(allCandidatesDetails(id));
    }
  };

  useEffect(() => {
    dispatch(getAllCandidatesdetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(myDetails());
  }, [dispatch]);

  const adminDetails = useSelector((state) => state.adminDetails);
  const { user } = adminDetails;

  const getCandidate = useSelector((state) => state.getCandidate);
  const { candidates } = getCandidate;

  const arr = candidates.map((item) => {
    return (
      <Tbody>
        <Tr key={item._id}>
          <Td>{item.candidate.firstName}</Td>
          <Td>{item.candidate.lastName}</Td>
          <Td>{item.test.title}</Td>
          <Td>{item.score}</Td>
          <Td>
            <Button
              className="chakar_btn"
              colorScheme="teal"
              borderRadius="10"
              type="submit"
              onClick={() => submitHandler(item._id)}
            >
              View More
            </Button>
            <Button className="chakar_btn" colorScheme="red" borderRadius="10">
              Delete
            </Button>
          </Td>
        </Tr>
      </Tbody>
    );
  });

  return (
    <div>
      <div className="view_question">
        <div className="sidebar_view">
          <Sidebar />
        </div>
        <div className="admin_container">
          <div className="question">
            <Navbar
              title="Candidate Profile"
              name={`${user && user.firstName}`}
            />
            <div className="goBack_btn">
              <Link to="/dashboard">
                <button type="submit" className="btn">
                  Go Back
                </button>
              </Link>
            </div>
            <div className="question_table">
              <Table varient="striped" colorScheme="teal" size="sm">
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Test</Th>
                  <Th>Score</Th>
                  <Th>Action</Th>
                </Tr>
                {arr}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
