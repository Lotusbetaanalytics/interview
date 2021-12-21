import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import AdminRegister from "./screens/AdminRegister";
import ViewQuestion from "./screens/ViewQuestion";
import Profile from "./screens/Profile";
import QuestionBank from "./screens/QuestionBank";
import AdminLogin from "./screens/AdminLogin";
import Test from "./screens/Test";
import Section from "./screens/Section";
import ViewAdmin from "./screens/ViewAdmin";
import PasswordForgot from "./screens/PasswordForgot";
import ResetPassword from "./screens/ResetPassword";
import { useSelector, useDispatch } from "react-redux";

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    path="/adminlogin"
                    exact
                    component={AdminLogin}
                />
                <Route
                    path="/dashboard"
                    exact
                    component={Dashboard}
                />
                <Route
                    path="/adminregister"
                    exact
                    component={AdminRegister}
                />
                <Route
                    path="/profile"
                    exact
                    component={Profile}
                />
                <Route
                    path="/questionbank"
                    exact
                    component={QuestionBank}
                />
                <Route
                    path="/viewquestion"
                    exact
                    component={ViewQuestion}
                />
                <Route
                    path="/test"
                    exact
                    component={Test}
                />
                <Route
                    path="/section"
                    exact
                    component={Section}
                />
                <Route
                    path="/viewadmin"
                    exact
                    component={ViewAdmin}
                />

                <Route
                    path="/passwordforgot"
                    exact
                    component={PasswordForgot}
                />

                <Route
                    path="/resetpassword"
                    exact
                    component={ResetPassword}
                />
            </Switch>
        </Router>
    );
}

export default App;
