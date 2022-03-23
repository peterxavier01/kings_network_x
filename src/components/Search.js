import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Search = () => {
    return ( 
        <Form className="form-container">
            <Form.Group className="w-50 mt-4 mb-2" controlId="formBasicEmail">
                <Form.Control className='locator' type="text" placeholder="Find BLW branches near you..." />
            </Form.Group>
            <Button className="w-25 sub-btn" type="submit">
                Search
            </Button>
        </Form>
     );
}
 
export default Search;
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>