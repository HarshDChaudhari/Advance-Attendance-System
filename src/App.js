import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Page from "./components/Page/Page";
import TimeTable from "./components/TimeTable/TimeTable";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Content from "./components/Content/Content";
import Personal from "./components/Personal/Personal";


function App() {
  const [login, setLogin] = useState(true)
  return (
    <Router>
        <div className="flex ">
          {login ? <Sidebar /> : ""}
          <div className="w-full ">
            {login ? <Topbar /> : ""}
            <div className=' w-full h-screen shadow-inner-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]' >
            <Routes>
              <Route exact path="/" element={!login ? <Home /> : <Content />} />
              {/* <Route exact path="/" element={<Home />} /> */}
              <Route exact path="/login" element={!login ? <Login /> : ""} />
              <Route exact path="/signup" element={!login ? <SignUp /> : ""} />
              <Route
                exact
                path="/timetable"
                element={
                  login ? <TimeTable /> : <Navigate replace to={"/login"} />
                }
              />
              <Route
                exact
                path="/personal"
                element={
                  login ? <Personal /> : <Navigate replace to={"/login"} />
                }
              />
            </Routes>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
