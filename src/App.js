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
import TotalQuestions from "./screens/TotalQuestions";
import Exams from "./screens/Exams";
import ViewAdmin from "./screens/ViewAdmin";

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
                    path="/totalquestions"
                    exact
                    component={TotalQuestions}
                />
                <Route
                    path="/exam"
                    exact
                    component={Exams}
                />
                <Route
                    path="/viewadmin"
                    exact
                    component={ViewAdmin}
                />
            </Switch>
        </Router>
    );
}

export default App;
