import React, { useState, useEffect} from "react";
import Navigation from "../../components/Navigation";
import Slider from "../../components/UI/Slider";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTestquestion } from "../../redux/actions/questionAction";
import {postResponse} from "../../redux/actions/responseAction";
import { Alert, AlertIcon, CircularProgress, Center } from "@chakra-ui/react";


const TestScreen = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {
 dispatch(getTestquestion());
  }, [dispatch]);

  const Response = useSelector((state) => state.Response);
  const { loading, error, } = Response;

  const getquestion = useSelector((state) =>state.getquestion);
  const {questions}  = getquestion;
 
  const [index, setIndex] = useState(0);
  const timer= questions && questions[0] && questions[0].section.timer
  const [selected_answers, setSelected_answers] = useState("");
  const questionLength = questions && questions.length;
  let initialMinute = (timer)
  let  initialSeconds = (timer)
  let [ minutes, setMinutes ] = useState(initialMinute);
  let [seconds, setSeconds ] =  useState(initialSeconds);
  

  const question= questions && questions[index] && questions[index]._id
  
  console.log(timer)
  console.log(selected_answers)
  
  const lastpage = index + 1;
  useEffect(()=>{
  let myInterval = setInterval(() => {
    if (seconds > 0) {
        setSeconds(seconds - 1);
    }
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(myInterval)
        } else {
            setMinutes(minutes - 1);
            setSeconds(59);
        }
    } 
  }, 1000)
  return ()=> {
    clearInterval(myInterval);
  };
  });   

  if (minutes === 0 && seconds === 1) {
    alert("time up")
    setTimeout(() => history.push("/success"), [1000]); 
  } 
  

    const submitHandler = (e) => {
    e.preventDefault();
    const newIndex = index + 1;
    
    if (selected_answers) {
      localStorage.setItem("selected_answers", '')
        dispatch(
          postResponse(question,selected_answers)
          

        ); 
    }
    if (!selected_answers) {
      alert("Please select an option");
    } else {
      if (newIndex >= questionLength)  {
        history.push("/success")
      } else {
        setIndex(newIndex);
        setSelected_answers("");
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
      {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
        )}
        {loading ? (
          <Center>
            <CircularProgress isIndeterminate color="purple.300" />
          </Center>
        ) : (  
       <div className={`${styles.pagePadding}`}>
        <div
          className={`${styles.pagePadding} ${styles.border} ${styles.removePadding}`}
        >
      <div className={styles.left}>
        { minutes === 0 && seconds === 0
            ? null
            : <h1 className={styles.justifyCenter}> {minutes} : {seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
      <h3>{questions && questions[index] && questions[index].section.title}</h3>
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
                    onChange={(e) => setSelected_answers(e.target.value)}
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
            {lastpage === questionLength ? 
            <button type="submit" className="btn gold">
              submit
            </button>  :  <button type="submit" className="btn gold">
              next
            </button> }
          </form>
        </div>
      </div> 
        )}
    </div>

  );
};


export default TestScreen;
