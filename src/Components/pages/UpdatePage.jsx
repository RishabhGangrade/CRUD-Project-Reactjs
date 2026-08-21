import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { NavLink } from 'react-router';
import { updateData } from '../../ReduxRTK/Slices/StudentCRUDSlice';

const UpdatePage = () => {
  const { rollno } = useParams(); // 1, 2, 3, 4

  const [userData, setUserData] = useState({
    rollno: "", name: "", age: "", gender: "", email: "", password: "", city: "", state: "",
    pincode: "", address: "", language: "", role: "", phone: ""
  });

  console.log(userData);
  

  const { isLoading, data, error } = useSelector((state) => state.allCRUD);


  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(()=>{
    if(rollno){
      let oldData = data.filter((value)=> value.rollno === rollno)
      console.log(oldData);
      
      setUserData(oldData[0]);
    }
  },[rollno])


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateData(userData));
    alert('Your Data Updated Successfully...');
    navigate('/');
  }
  return (
    <>
      <div className='container mt-2 form-box'>
        <h1 className='text-center'>Student Update Form</h1> <hr />
        <Form onSubmit={handleSubmit} method='POST'>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridId">
              <Form.Label>UserId</Form.Label>
              <Form.Control type="number" placeholder="Enter User Id" value={userData.rollno}
                onChange={(e) => setUserData({ ...userData, rollno: e.target.value })} readOnly />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUserName">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="text" placeholder="UserName" value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>UserAge</Form.Label>
              <Form.Control type="number" placeholder="Enter User Age" value={userData.age}
                onChange={(e) => setUserData({ ...userData, age: e.target.value })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>UserGender</Form.Label>
              <Form.Select defaultValue="Choose..."
                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}>
                <option>{userData.gender}</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Select defaultValue="Choose..."
                onChange={(e) => setUserData({ ...userData, city: e.target.value })} >
                <option>{userData.city}</option>
                <option value="Indore">Indore</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Katni">Katni</option>
                <option value="Mandla">Mandla</option>
                <option value="Mandsaur">Mandsaur</option>
                <option value="Narsinghpur">Narsinghpur</option>
                <option value="Panna">Panna</option>
                <option value="Ratlam">Ratlam</option>
                <option value="Rewa">Rewa</option>
                <option value="Sagar">Sagar</option>
                <option value="Satna">Satna</option>
                <option value="Sehore">Sehore</option>
                <option value="Seoni">Seoni</option>
                <option value="Shahdol">Shahdol</option>
                <option value="Ujjain">Ujjain</option>
                <option value="Vidisha">Vidisha</option>

              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose..."
                onChange={(e) => setUserData({ ...userData, state: e.target.value })}>
                <option>{userData.state}</option>
                <option >Andhra Pradesh</option>
                <option >Arunachal Pradesh</option>
                <option >Asom (Assam)</option>
                <option >Bihar</option>
                <option >Chhattisgarh</option>
                <option >Goa</option>
                <option >Gujarat</option>
                <option >Haryana</option>
                <option >Himachal Pradesh</option>
                <option >Jammu and Kashmir</option>
                <option >Jharkhand</option>
                <option >Karnataka</option>
                <option >Kerala</option>
                <option >Madhya Pradesh</option>
                <option >Maharashtra</option>
                <option > Manipur</option>
                <option >Meghalaya</option>
                <option >Mizoram</option>
                <option >Nagaland</option>
                <option >Orissa</option>
                <option >Punjab</option>
                <option >Rajasthan</option>
                <option >Sikkim</option>
                <option >Tamil Nadu</option>
                <option >Telangana</option>
                <option >Tripura</option>
                <option >Uttarakhand (Uttaranchal)</option>
                <option >Uttar Pradesh</option>
                <option >West Bengal</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type='number' value={userData.pincode} onChange={(e) => setUserData({ ...userData, pincode: e.target.value })} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridLanguage">
              <Form.Label>Language</Form.Label>
              <Form.Select defaultValue="Choose..."
                onChange={(e) => setUserData({ ...userData, language: e.target.value })}>
                <option>{userData.language}</option>
                <option >Java</option>
                <option >Node</option>
                <option >React</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type='tel' placeholder='enter number' value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridHobbies">
              <Form.Label>Role</Form.Label> 
              <Form.Select defaultValue="Choose..."
                onChange={(e) => setUserData({ ...userData, role: e.target.value })}>
                <option>{userData.role}</option>
                <option>Admin</option>
                <option>Teacher</option>
                <option>Student</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} />
          </Form.Group>

          <Button variant="danger" type="submit" >
            Update
          </Button>
          <NavLink to='/'>
            <Button variant="warning" className='mx-2'>
              Back To Home
            </Button>
          </NavLink>
        </Form>
      </div>
    </>
  )
}

export default UpdatePage