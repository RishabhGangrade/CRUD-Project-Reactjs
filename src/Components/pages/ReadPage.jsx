import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router';

function ReadPage({ show, handleClose, user }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Student Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        {user && (
          <>
            <p><strong>ID :</strong> {user.rollno}</p>
            <p><strong>Name :</strong> {user.name}</p>
            <p><strong>Age :</strong> {user.age}</p>
            <p><strong>Gender :</strong> {user.gender}</p>
            <p><strong>Pincode :</strong> {user.pincode}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>City :</strong> {user.city}</p>
            <p><strong>Password :</strong> {user.password}</p>
            <p><strong>Address :</strong> {user.address}</p>
            <p><strong>State :</strong> {user.state}</p>
            <p><strong>Language :</strong> {user.language}</p>
            <p><strong>Role :</strong> {user.role}</p>
            
          </>
        )}

      </Modal.Body>
      <Modal.Footer>
        <NavLink to={`/update/${user?.rollno}`} style={{ textDecoration: "none", color: "white" }}>
          <Button variant="dark" >
            Edit
          </Button> </NavLink>
        <Button variant="danger" onClick={handleClose}> Close </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReadPage;