import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./screens/User/WelcomeScreen";
import LoginScreen from "./screens/User/LoginScreen";
import RegisterScreen from "./screens/User/RegisterScreen";
import StartScreen from "./screens/User/StartScreen";
import TestScreen from "./screens/User/TestScreen";
import SuccessScreen from "./screens/User/SuccessScreen";
import Forget from "./screens/User/forget";
import ChangePassword from "./screens/User/changePassword";

//import protectedRoute from "./components/protectedRoute";


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
        <Route path="/forget" exact component={Forget} />
        <Route path="/changePassword" exact component={ChangePassword} />
        
      </Switch>
    </Router>
  );
}

export default App;
