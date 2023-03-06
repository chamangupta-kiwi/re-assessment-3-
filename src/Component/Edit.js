import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { studentInfo, updateStudent } from "../services/action";
import { useDispatch, useSelector } from "react-redux";


function Edit() {
  const params = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const data = useSelector((state) => state.studentReducer.items)

  let studentDetail = data.filter((data) => data.id === params.id)
  // console.log(studentDetail, data, "dfkvgndkjfbg")
  const { name, mobile } = studentDetail[0] || {}

  //console.log(studentDetail, "iid")


  const [value, setValue] = useState({
    name: name, mobile: mobile
  })


  const navigateHome = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    setValue({ name: '', mobile: '' })
    dispatch(updateStudent({
      name: value.name,
      mobile: value.mobile,
      id: params.id
    }));
    navigate('/');
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Button variant="info" onClick={navigateHome}>Home</Button>
        <h1>Update Record</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label style={{ display: "flex" }}>Update Name : </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={value.name}
            required
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formmobile">
          <Form.Label style={{ display: "flex" }}>Update Mobile : </Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={value.mobile}
            required
            onChange={(e) => setValue({ ...value, mobile: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </div>
  )
}

export default Edit
