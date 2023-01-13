import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <>
      <div className="container mt-2">
        <h1 className="text-center mt-2">Image Upload with mySQL</h1>
        <div className="text-end">
          <Button variant="primary">
            <NavLink to="/register" className="text-decoration-none text-light">
              Add User
            </NavLink>
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center mx-5">
          <Card style={{ width: "22rem",height:"18rem" }} className="mb-3">
            <Card.Img variant="top" src="/logo192.png" style={{ width: "100px",textAlign:"center" }} />
            <Card.Body className="text-center">
              <Card.Title>User Name</Card.Title>
              <Card.Text>
              Date Added : 19:01:2023
              </Card.Text>
              <Button variant="danger" className="col-lg-6 text-center">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
