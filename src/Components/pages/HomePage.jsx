import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux'
import { deleteData, readData } from '../../ReduxRTK/Slices/StudentCRUDSlice';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReadPage from './ReadPage';

import { NavLink } from 'react-router';

const HomePage = () => {

  const [radioData, setRadioData] = useState(" ");

  const dispatch = useDispatch();

  const { isLoading, data, searchData, error } = useSelector((state) => state.allCRUD);



  // console.log(data);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    dispatch(readData());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete?`)) {
      dispatch(deleteData(id));
    }
  }

  return (
    <>
      <div className="container text-center box">
        <marquee behavior="" direction="" scrollamount='15'>
          <h1 style={{ color: "white", fontFamily: "rockwell", fontSize: "3.5rem" }}>Home Page</h1>
        </marquee>
      </div>

      <div className='container'>
        <div style={{ boxShadow: "2px -2px 8px 1px black", margin: "10px 37%", padding: "12px", fontSize: "1.1rem", fontWeight: "bold", borderRadius: "8px" }}>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="all"
              checked={radioData === " "} style={{ cursor: "pointer" }}
              onChange={() => { setRadioData(" ") }}
            />
            <label className="form-check-label" htmlFor="all" style={{ cursor: "pointer" }}>All</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="male" value="Male"
              checked={radioData === "Male"} style={{ cursor: "pointer" }}
              onChange={(e) => { setRadioData(e.target.value) }}
            />
            <label className="form-check-label" htmlFor='male' style={{ cursor: "pointer" }}>Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="female" value="Female"
              checked={radioData === "Female"} style={{ cursor: "pointer" }}
              onChange={(e) => { setRadioData(e.target.value) }}
            />
            <label className="form-check-label" htmlFor="female" style={{ cursor: "pointer" }}>Female</label>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr align='center'>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Age</th>
              <th>User Gender</th>
              <th>User Email</th>
              <th>User City</th>
              <th>User Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter((value)=>{
                if(searchData.length === 0 ){
                  return value;
                }
                else{
                  return value.name.toLowerCase().includes(searchData.toLowerCase())
                }
              }).filter((value) => {
                if (radioData == "Male") {
                  return value.gender === radioData;
                } else if (radioData == "Female") {
                  return value.gender === radioData;
                } else {
                  return value;
                }
              }).map((value, index) => {
                return (
                  <tr key={index} align='center' valign='middle'>
                    <td>{value.rollno}</td>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.gender}</td>
                    <td>{value.email}</td>
                    <td>{value.city}</td>
                    <td>

                      <NavLink to={`/update/${value.rollno}`}>
                        <Button variant="outline-success" > <EditIcon /> Update</Button>
                      </NavLink>

                      <Button variant="outline-danger" className='mx-2' onClick={() => handleDelete(value.id)} > <DeleteIcon
                      /> Delete</Button>

                      <Button variant="outline-dark"
                        onClick={() => (
                          setSelectedUser(value),
                          setShow(true)
                        )}
                      > <MenuBookIcon /> Read</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
      <ReadPage show={show} handleClose={handleClose} user={selectedUser} />
    </>
  )
}

export default HomePage