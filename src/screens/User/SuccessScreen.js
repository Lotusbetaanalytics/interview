import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getTestscore } from "../../redux/actions/testscoreAction";
import { Alert, AlertIcon} from "@chakra-ui/react";


const SuccessScreen = () => {
  const dispatch = useDispatch();

  const Myscore = useSelector((state) => state.Myscore);
  const { testscore, error } = Myscore;
  const score = testscore;
  
  useEffect(() => {
    dispatch(getTestscore());
  }, [dispatch]);
  return (
    <div>
      <Navigation />
      <div className={styles.pagePadding}>
      {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <div className={`${styles.center} ${styles.justifyCenter}`}>
          <h1>You have completed your exam</h1>
          <br/>
          <h1 className={styles.scores}><h1>{score}%</h1></h1>
          <img
            src="https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?size=338&ext=jpg"
            alt="happy"
          />
          
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
