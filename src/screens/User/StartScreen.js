import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import AccountHeader from "../../components/UI/AccountHeader";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { myDetails } from "../../redux/actions/userActions";
import { getTestTime } from "../../redux/actions/testscoreAction";

const StartScreen = ({ history }) => {
    const dispatch = useDispatch();

    const myDetail = JSON.parse(localStorage.getItem("candidateDetail"))
    const user = myDetail
    

    useEffect(() => {
    dispatch(myDetails())
     if (!user){
    history.push("/login")
    }
    }, [user,history,dispatch]);

    const clickHandler = () => {
        setTimeout(() => history.push("/test"), [5000]);
        dispatch(getTestTime())
    };

    return (
        <div>
            <Navigation />
            <div className={`${styles.pagePadding}`}>
                <div
                    className={`${styles.pagePadding} ${styles.border}`}
                >
                    <AccountHeader
                        instruction={`Welcome ${
                            user && user.data.firstName
                        }`}
                    >
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor <br />{" "}
                            incididunt labore et dolore
                            magna nisi ut aliquip ex ea
                            commodo <br />
                            consequat. Duis aute irure
                            aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation <br />
                            ullamco laboris dolor in
                            reprehenderit in voluptate velit
                            esse cillum dolore eu
                        </p>
                    </AccountHeader>
                    <br />
                    <br />
                    <div className={styles.center}>
                        <Link
                            to="/start"
                            className="btn gold"
                            onClick={clickHandler}
                        >
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
