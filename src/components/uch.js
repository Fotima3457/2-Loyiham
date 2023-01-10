import React from "react";
import Form from 'react-bootstrap/Form';
function uch() {
  return (
    <div>
    <Form style={{pading:"6%", marginTop: "5%", marginLeft: "32%", width: "500px", backgroundColor: "black", padding: '3%' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: "white" }}>First Name</Form.Label>
        <Form.Control type="Text" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: "white" }}>Second Name</Form.Label>
        <Form.Control type="Text" placeholder="Enter Second Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: "white" }}>Age</Form.Label>
        <Form.Control type="Number" placeholder="Enter Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: "white" }}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ color: "white" }}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <a href="/tort" oncontextmenu="alert('You have right-clicked a link!');"><button style={{ backgrondColor: 'white', color: 'black', padding: "2%", borderRadius: "5px", width: "130px", marginLeft: "130px" }} type="button" oncontextmenu="alert('You have right-clicked a button!');">Next</button></a>
    </Form>
    <h1 style={{marginTop:"5%"}}>............................................................................................................................................................</h1>
    </div>
  );
}
export default uch;