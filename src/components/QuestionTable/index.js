import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { myDetails } from "../../redux/actions/userActions";
import {
  deleteFromItem,
  deleteQuestionId,
  getQuestionsId,
} from "../../redux/actions/questionAction";
import {
  useToast,
  CircularProgress,
  Alert,
  AlertIcon,
  Center,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import "./QuestionTab.css";

const QuestionTable = ({ history }) => {
  const dispatch = useDispatch();

  const adminDetails = useSelector((state) => state.adminDetails);
  const { user } = adminDetails;

  const getQuestion = useSelector((state) => state.getQuestion);
  const { questions: question } = getQuestion;

  const deleteQuestion = useSelector((state) => state.deleteQuestion);
  const { success, loading, error } = deleteQuestion;

  useEffect(() => {
    dispatch(getQuestionsId());
  }, [dispatch]);

  useEffect(() => {
    dispatch(myDetails());
  }, [dispatch]);

  const handlerDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this ?")) {
      dispatch(deleteQuestionId(_id));
      window.location.reload(false);
    }
    console.log(deleteQuestionId);
  };

  return (
    <div className="question">
      <Navbar title="Questions" name={`${user && user.firstName}`} />

      <div className="goBack_btn">
        <Link to="/questionbank">
          <button type="submit" className="btn">
            Go Back
          </button>
        </Link>
      </div>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      {success && (
        <Alert status="success">
          <AlertIcon />
          Delete Successfully
        </Alert>
      )}

      {loading ? (
        <Center>
          <CircularProgress isIndeterminate color="purple.300" />
        </Center>
      ) : (
        <div className="question_table">
          <Table varient="striped" colorScheme="gray" size="sm">
            <Tr>
              <Th>Question</Th>
              <Th>Section</Th>
              <Th>Instructions</Th>
              <Th>Timer (Mins)</Th>
              <Th>Action</Th>
            </Tr>
            {question &&
              question.map((item) => (
                <Tbody>
                  <Tr key={item._id}>
                    <Td>{item.question}</Td>
                    <Td>{item.section.title}</Td>
                    <Td>{item.section.instruction}</Td>
                    <Td>{item.section.timer}</Td>
                    <Td>
                      <Button
                        className="chakar_btn2"
                        colorScheme="red"
                        borderRadius="10"
                        key={item._id}
                        onClick={() => handlerDelete(item._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        className="chakar_btn"
                        colorScheme="yellow"
                        borderRadius="10"
                      >
                        <Link to={`/editquestion/${item._id}`}>Edit</Link>
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              ))}
          </Table>
        </div>
      )}
    </div>
  );
};

export default QuestionTable;
