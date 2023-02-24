import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import "../styling/Contact.css";

const Contact = () => {

  return (
    
    <section id="contactSection" className="secondary-section" wrap="true">

      <div class="container mt-4 pt-4" className="aboutcontainer">

        <h1 className="abouttitle">Contact</h1>

          <div class="row mt-4">

            <div class="col-lg-4">

              let's get in touch
                
            </div>

          <div class="col-lg-8">
    
           

          <div className="info">
            <Form id="form-contact">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>

        </div>
      </div>
    </div>



   
    </section>

  )
}

export default Contact