import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import AccountHeader from "../../components/UI/AccountHeader";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Alert, AlertIcon, CircularProgress, Center } from "@chakra-ui/react";
import { loginUser } from "../../redux/actions/userActions";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      setTimeout(() => history.push("/start"), [3000]);
    }
  }, [userInfo, history, dispatch]);

  return (
    <div>
      <Navigation />
      <div className={styles.pagePadding}>
        <AccountHeader
          instruction="Sign in to start your Test"
          title="Welcome to e-Interview"
        />
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
          <div className={styles.form}>
            <form onSubmit={submitHandler}>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email Address"
                />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </div>
              <div className={styles.inputContainer}>
                <input type="submit" value="Login" className="btn gold" />
              </div>
              <div className={styles.inputContainer}>
                <p className={styles.center}>
                  Don't Have an account? <Link to="/signup">Sign Up</Link>  <span className={styles.inputContainer}><Link to="/forget">Forget password?</Link></span>
                </p>
              </div>
              
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
