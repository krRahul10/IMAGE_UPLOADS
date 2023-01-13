import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'

const Register = () => {
  const [fname, setFname] = useState("");
  const [file, setFile] = useState("");

  console.log(fname);
  console.log(file);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setFname(e.target.value);
  };
  const setFileImage = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData()
    formData.append("fname",fname)
    formData.append("photo",file)

    const config = {
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }

    const res = await axios.post("/register",formData,config)
    console.log(res)
  };

  return (
    <>
      <div className="container mt-2">
        <h1>Upload Your Image</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="fname"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" name="photo" onChange={setFileImage} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
