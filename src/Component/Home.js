import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { deleteStudent } from "../services/action";
import { useDispatch, useSelector } from "react-redux";



function Home() {
  const data = useSelector((state) => state.studentReducer.items)
  console.log(data)

  // let count = data.length

  const dispatch = useDispatch()

  return (
    <>
      <div style={{ margin: "3rem" }}>
        <h1>REDUX-CRUD</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0
              ? data.map((item, index) => {
                const { name, mobile, id } = item
                return (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{mobile}</td>
                    <td>
                      <Link to={`edit/${id}`}>
                        <Button >Edit</Button>
                      </Link>
                      &nbsp;
                      <Button variant="danger" onClick={() => dispatch(deleteStudent(id))}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
              : "No Data Avilable"}
          </tbody>
        </Table>
        <br>
        </br>
        <Link className="d-grid gap-2" to={'/create'}>
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
