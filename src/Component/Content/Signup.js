import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Questions from "./Questions";

const Signup = ({ firstName, setFirstName, myDate, setMyDate }) => {
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('')
    setFirstName('') 
  };


  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/dashboard");
  };

  const canSave =
    Boolean(firstName) &&
    Boolean(lastName) &&
    Boolean(email) &&
    Boolean(myDate);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container className="signup">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control shadow-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter Your First name"
          />

          <label>Last Name:</label>
          <input
            type="text"
            className="form-control shadow-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your Last Name"
          />

          <label>Email:</label>
          <input
            type="text"
            className="form-control shadow-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />

          <label>Date:</label>
          <input
            type="date"
            className="form-control shadow-none"
            value={myDate}
            onChange={(e) => setMyDate(e.target.value)}
            placeholder="Enter Your Password"
          />
          <button
            onClick={handleNavigate}
            disabled={!canSave}
            className="btn btn-primary shadow-none mt-2"
          >
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
