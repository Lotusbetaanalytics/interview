import { Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { viewAllAdmindetails } from "../redux/actions/userActions";

function ViewAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewAllAdmindetails());
  }, [dispatch]);

  const getViewAdmins = useSelector((state) => state.getViewAdmins);
  const { getadmin } = getViewAdmins;

  const arr = getadmin.map((item) => {
    return (
      <Tbody>
        <Tr>
          <Td>{item.firstName}</Td>
          <Td>{item.email}</Td>
          <Td>{item.phone}</Td>
        </Tr>
      </Tbody>
    );
  });

  return (
    <div>
      <div className="sidebar_view">
        <Sidebar />
      </div>
      <div className="admin_container">
        <Navbar />
        <Link to="/adminregister">
          <div className="goBack_btn">
            <buuton type="button" className="btn">
              Go Back
            </buuton>
          </div>
        </Link>
        <div className="question_table">
          <Table varient="striped" colorScheme="teal" size="sm">
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
            </Tr>
            {arr}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ViewAdmin;
