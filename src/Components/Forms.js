import React, { useState } from 'react';
import Feedback from 'react-bootstrap/Feedback';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export default function Forms() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container id="form-container">
    <h2>Stay in touch</h2>
      <Form variant="light" bg="light" noValidate validated={validated} onSubmit={handleSubmit}>
       <Row className="mb-3">
         <Form.Group as={Col} md="6" controlId="validationCustom01">
           <Form.Label>First name</Form.Label>
           <Form.Control
             required
             type="text"
             placeholder="First name"
             defaultValue="Mark"
           />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         </Form.Group>
         <Form.Group as={Col} md="6" controlId="validationCustom02">
           <Form.Label>Last name</Form.Label>
           <Form.Control
             required
             type="text"
             placeholder="Last name"
             defaultValue="Otto"
           />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         </Form.Group>
       </Row>
       <Row className="mb-3">
         <Form.Group as={Col} md="6" controlId="validationCustom03">
           <Form.Label>City</Form.Label>
           <Form.Control type="text" placeholder="City" required />
           <Form.Control.Feedback type="invalid">
             Please provide a valid city.
           </Form.Control.Feedback>
         </Form.Group>
         <Form.Group as={Col} md="3" controlId="validationCustom04">
           <Form.Label>State</Form.Label>
           <Form.Control type="text" placeholder="State" required />
           <Form.Control.Feedback type="invalid">
             Please provide a valid state.
           </Form.Control.Feedback>
         </Form.Group>
         <Form.Group as={Col} md="3" controlId="validationCustom05">
           <Form.Label>Zip</Form.Label>
           <Form.Control type="text" placeholder="Zip" required />
           <Form.Control.Feedback type="invalid">
             Please provide a valid zip.
           </Form.Control.Feedback>
         </Form.Group>
       </Row>
       <Form.Group style={{width: '20%', margin: '0px auto'}} className="mb-3">
         <Form.Check
           required
           label="Agree to terms and conditions"
           feedback="You must agree before submitting."
           feedbackType="invalid"
         />
       </Form.Group>
       <Button variant="light" type="submit">Submit form</Button>
     </Form>
   </Container>
  )
}
