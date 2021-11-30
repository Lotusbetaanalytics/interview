import React from "react";
import Navigation from "../../components/Navigation";
import styles from "./styles.module.css";

const SuccessScreen = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.pagePadding}>
        <div className={styles.center}>
          <h1>You have completed your exam</h1>
          <div className={styles.scores}><h1>60</h1></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
