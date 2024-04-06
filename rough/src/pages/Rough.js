import React from 'react'
import { Form, Button, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
const Rough = () => {
    const formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      });
  return (
    <>
<div className="d-flex justify-content-center">
    
        <Card style={{
        margin:'30px',
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "5px",
          
        }}>
      <Card.Body>
        <Card.Title>Fare Details</Card.Title>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Base Charge</td>
              <td>{formatter.format(4898)}</td>
            </tr>
            <tr>
              <td>Reservation Charge</td>
              <td>{formatter.format(60)}</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>{formatter.format(75)}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td>{formatter.format(5033)}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  
        </div>
     
    </>
  )
}

export default Rough