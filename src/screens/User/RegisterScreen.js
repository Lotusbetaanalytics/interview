import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import AccountHeader from "../../components/UI/AccountHeader";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Alert, AlertIcon, CircularProgress, Center } from "@chakra-ui/react";
import { registerUser } from "../../redux/actions/userActions";
import { USER_REGISTRATION_RESET } from "../../redux/constants/userConstants";

const RegisterScreen = ({ history }) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(registerUser(firstName, lastName, email, phone, password));
    } else {
      setMsg(true);
    }
  };

  const registration = useSelector((state) => state.registration);
  const { loading, error, success } = registration;

  if (success) {
    setTimeout(() => history.push("/login"), [5000]);
    dispatch({ type: USER_REGISTRATION_RESET });
  }

  return (
    <div>
      <Navigation />
      <div className={styles.pagePadding}>
        <AccountHeader
          instruction="Sign up to create your account"
          title="Welcome to e-Interview"
        />
        <div className={styles.form}>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          {success && (
            <Alert status="success">
              <AlertIcon />
              Registration Successful
            </Alert>
          )}
          {msg && (
            <div className={styles.inputContainer}>
              <Alert status="error">
                <AlertIcon />
                Password does not match
              </Alert>
            </div>
          )}
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="purple.300" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <div className={styles.formGrid}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstName}
                    placeholder="First Name"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastName}
                    placeholder="Last Name"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Mobile Number"
                  />
                </div>
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
                  <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className={styles.inputContainer}>
                <select value="Radish">
                  <label>Select Exam Type</label>
                    <option value="none">none</option>
                    <option value="Orange">Orange</option>
                    <option value="Radish">Radish</option>
                    <option value="Cherry">Cherry</option>
                </select>
                </div>
              </div>
              <br />
              <div className={styles.inputContainer}>
                <input
                  type="submit"
                  value="Create Account"
                  className="btn gold"
                />
              </div>
              <div className={styles.inputContainer}>
                <p className={styles.center}>
                  Already Have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
