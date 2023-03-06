import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import Students from "./Student";
import { useNavigate } from "react-router-dom";
import shortid from 'shortid'
import { useDispatch } from "react-redux";
import { studentReg } from "../services/action";


function Add() {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    mobile: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    Object.assign(input, { id: shortid.generate() })
    dispatch(studentReg(input))

    navigate("/");

  };
  const navigateHome = () => {

    navigate('/');
  };

  return (
    <div>

      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Button variant="info" onClick={navigateHome}>Home</Button>
        <h1>Add New Record</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label style={{ display: "flex" }}>Name : </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formmobile">
          <Form.Label style={{ display: "flex" }}>Mobile : </Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            placeholder="mobile"
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
