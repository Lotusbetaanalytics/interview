import React, { useState, useEffect} from "react";
import Navigation from "../../components/Navigation";
import Slider from "../../components/UI/Slider";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";


//import {data} from "../../redux/actions/questionAction";
//import data from "../../components/testQuestions.json";
import { getTestquestion } from "../../redux/actions/questionAction";



const TestScreen = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {
 dispatch(getTestquestion());
  }, [dispatch]);

 const getquestion = useSelector((state) =>state.getquestion);
 const {questions}  = getquestion;

 const sendscore = useSelector((state) => state.sendscore);
  const { loading, error, success } = sendscore;

  

console.log(questions)


  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [res, setRes] = useState("");
  const questionLength = questions && questions.length;
  // const questions = data.questions;


  const answer = questions &&  questions[index] && questions[index].correct_answers;
  const edex = index + 1;
  console.log(answer)
  console.log(score)
  console.log(res)
  console.log(index)

  const submitHandler = (e) => {
    e.preventDefault();
    const newIndex = index + 1;
    
    if (!res) {
      alert("Please select an option");
    } else {
      if (newIndex >= questionLength)  {
        if (success) {
        setTimeout(() => history.push("/success"), [5000]);
        }
      } else {
        setIndex(newIndex);
        setRes("");
        e.target.reset();
      }
    }
  };
  const prevHandler = () => {
    setIndex(index - 1);
  };
  const size = (index / questionLength) * 100 || 0;
  return (
    <div>
      <Navigation />
       <div className={`${styles.pagePadding}`}>
        <div
          className={`${styles.pagePadding} ${styles.border} ${styles.removePadding}`}
        >
      <h3>{questions && questions[index] && questions[index].section}</h3>
          <br />
          <Slider size={size} />
          <h2>{questions &&  questions[index] && questions[index].question}</h2>
          <form onSubmit={submitHandler}>
            {questions && questions[index] && questions[index].answers.map((item, i) => (
              <div key={i}>
                <div className="inputGroup">
                  <input
                    id={`radio${i}`}
                    name="radio"
                    type="radio"
                    value={item}
                    onChange={(e) => setRes(e.target.value)}
                  />
                  <label htmlFor={`radio${i}`}>{item}</label>
                </div>
              </div>
            ))}
            {index > 0 && (
              <button
                type="button"
                className={`btn ${styles.purple}`}
                onClick={prevHandler}
              >
                Back
              </button>
            )}
            {edex === questionLength ? 
            <button type="submit" className="btn gold">
              submit
            </button>  :  <button type="submit" className="btn gold">
              next
            </button> }
          </form>
        </div>
      </div> 
    </div>
  );
};

// get the current candidate // /auth/account or /candidate/self
// get get candidates exam type // candidate.examType
// get the test with the same id as exam type // /test/:test_id
// ----------------------------------------------------------------------------------
// get the sections in the test // /section/test/:test_id or /test/:test_id/sections
// for each section get the questions and display them // /question/section/:section_id

// or

// get all the sections with their questions in the test as a list // /test/:test_id/questions

export default TestScreen;
