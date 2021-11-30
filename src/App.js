import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./screens/User/WelcomeScreen";
import LoginScreen from "./screens/User/LoginScreen";
import RegisterScreen from "./screens/User/RegisterScreen";
import StartScreen from "./screens/User/StartScreen";
import TestScreen from "./screens/User/TestScreen";
import SuccessScreen from "./screens/User/SuccessScreen";




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomeScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/signup" exact component={RegisterScreen} />
        <Route path="/start" exact component={StartScreen} />
        <Route path="/success" exact component={SuccessScreen} />
        <Route path="/test" exact component={TestScreen} />
      </Switch>
    </Router>
  );
}

export default App;
