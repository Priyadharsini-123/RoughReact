import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
const FareDetails = () => {
  return (
   <>
   <Container fluid>
  <Row className="fareCalc-backgrounds mt-5">
    {/* First Row with Three Inputs */}
    <Row className="justify-content-center align-items-center text-center p-5">
      {/* Input 1 */}
      <Col md={4} className="my-4">
        {/* Input Component */}
      </Col>
      {/* Input 2 */}
      <Col md={4} className="my-4">
        {/* Input Component */}
      </Col>
      {/* Input 3 */}
      <Col md={4} className="my-4">
        {/* Input Component */}
      </Col>
    </Row>

    {/* Second Row with Two Inputs */}
    <Row className="justify-content-center align-items-center text-center p-5">
      {/* Input 4 */}
      <Col md={6} className="my-4">
        {/* Input Component */}
      </Col>
      {/* Input 5 */}
      <Col md={6} className="my-4">
        {/* Input Component */}
      </Col>
    </Row>
  </Row>
</Container>

   
   
   
   </>
  )
}

export default FareDetails