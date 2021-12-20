import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import AccountHeader from "../../components/UI/AccountHeader";
import styles from "./styles.module.css";
import { useSelector,useDispatch } from "react-redux";
import { myDetails } from "../../redux/actions/userActions";
import { getTestTyper } from "../../redux/actions/testAction";

const Sectionpage = ({history}) => {

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const getTest = useSelector((state) => state.getTest);
  const { test } = getTest;

  console.log(test)



  useEffect(() => {
    dispatch(myDetails())
    
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <div className={`${styles.pagePadding}`}>
        <div className={`${styles.pagePadding} ${styles.border}`}>
          <AccountHeader instruction={`Welcome ${user && user.firstName}`}>
            This sections below are the exams to be written you can start from any of your choice
          </AccountHeader>
          <br />
          <br />
          <div className={styles.center}>
              {test && test.map((item,i)=>(
                  <Link to="/test" key={i} className="btn gold">
                  {item.title}
                </Link>
              ))}
            
          </div>

          <div className={styles.form}></div>
        </div>
      </div>
    </div>
  );
};

export default Sectionpage;
