import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import AccountHeader from "../../components/UI/AccountHeader";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const StartScreen = ({history}) => {


  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  
  return (
    <div>
      <Navigation />
      <div className={`${styles.pagePadding}`}>
        <div className={`${styles.pagePadding} ${styles.border}`}>
          <AccountHeader instruction={`Welcome ${user && user.firstName}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt labore et dolore magna nisi ut
              aliquip ex ea commodo <br />
              consequat. Duis aute irure aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation <br />
              ullamco laboris dolor in reprehenderit in voluptate velit esse
              cillum dolore eu
            </p>
          </AccountHeader>
          <br />
          <br />
          <div className={styles.center}>
            <Link to="/test" className="btn gold">
              Start
            </Link>
          </div>

          <div className={styles.form}></div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
