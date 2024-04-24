import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Login from "./components/login/Login"
import SignUp from './components/signup/SignUp';
import Page from "./components/Page/Page"


function App() {
  const [login, setLogin] = useState(false)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/page" element={<Page />} />


      </Routes>
    </Router>
  );
}

export default App;
