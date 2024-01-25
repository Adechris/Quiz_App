import React, {useState, useEffect} from "react";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyNavbar from "./Component/Header/MyNavbar";
// import Login from "./Component/Content/Login";
import Signup from "./Component/Content/Signup";
import Dashboard from "./Component/Content/Dashboard";
import ErrorPage from "./Component/Content/ErrorPage";


function App() {
const storeName = () =>{
  let store = localStorage.getItem('name');
  if (store) {
    return JSON.parse(localStorage.getItem('name'))
  } else {
    return []
  }
}
const storeDate = () =>{
  let store = localStorage.getItem('date');
  if (store) {
    return JSON.parse(localStorage.getItem('date'))
  } else {
    return []
  }
}

  const [firstName, setFirstName] = useState(storeName());
  const [myDate, setMyDate] = useState(storeDate());

  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(firstName))
  },[firstName])

  useEffect(()=>{
    localStorage.setItem('date',JSON.stringify(myDate))
  },[myDate])
   
   
  return (
    <div>
      <Router>
        {/* <MyNavbar/> */}
        <Routes>
          <Route path='/' element={<Signup firstName={firstName}
           setFirstName={setFirstName}
            myDate={myDate}
            setMyDate={setMyDate}
            />}/>

          <Route path='*' element={<ErrorPage/>}/>
          <Route path="/dashboard" element={<Dashboard firstName={firstName} myDate={myDate} />}/>
          

        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
