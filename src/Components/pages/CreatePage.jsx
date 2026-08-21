import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { insertData } from "../../ReduxRTK/Slices/StudentCRUDSlice";
import { useNavigate } from "react-router";
import "./CreatePage.css";

const CreatePage = () => {
  const [userData, setUserData] = useState({
    rollno: "",
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    language: "",
    phone: "",
    role: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(insertData(userData));

    alert("Your Registration Successfully...");
    navigate("/");
  };

  return (
    <div className="createPage">

      {/* ================= HEADER ================= */}

      <div className="createHeader">

        <div>
          <div className="createBadge">
            <span>✦</span> STUDENT MANAGEMENT
          </div>

          <h1>Student Registration</h1>

          <p>
            Create a new student profile by entering the details below.
          </p>
        </div>

        <div className="createHeaderIcon">
          +
        </div>

      </div>


      {/* ================= FORM CARD ================= */}

      <div className="createCard">

        <div className="createFormHeader">

          <div className="createFormTitle">

            <div className="createTitleIcon">
              👤
            </div>

            <div>
              <h2>Student Information</h2>

              <p>
                Fill in all the required student details.
              </p>
            </div>

          </div>

          <div className="requiredBadge">
            * Required fields
          </div>

        </div>


        <Form onSubmit={handleSubmit}>

          {/* ================= BASIC INFORMATION ================= */}

          <div className="createSectionTitle">
            <span>01</span>
            Basic Information
          </div>

          <Row className="g-4">

            <Col md={3}>
              <Form.Group>
                <Form.Label>User ID</Form.Label>

                <Form.Control
                  type="number"
                  name="rollno"
                  placeholder="Enter user ID"
                  value={userData.rollno}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>


            <Col md={5}>
              <Form.Group>
                <Form.Label>User Name</Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter student name"
                  value={userData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>


            <Col md={2}>
              <Form.Group>
                <Form.Label>Age</Form.Label>

                <Form.Control
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={userData.age}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>


            <Col md={2}>
              <Form.Group>
                <Form.Label>Gender</Form.Label>

                <Form.Select
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Others">
                    Others
                  </option>

                </Form.Select>

              </Form.Group>
            </Col>

          </Row>


          {/* ================= ACCOUNT ================= */}

          <div className="createSectionTitle mt-5">
            <span>02</span>
            Account Information
          </div>

          <Row className="g-4">

            <Col md={6}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  placeholder="student@example.com"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>


            <Col md={6}>
              <Form.Group>
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Create password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

          </Row>


          {/* ================= LOCATION ================= */}

          <div className="createSectionTitle mt-5">
            <span>03</span>
            Location Details
          </div>

          <Row className="g-4">

            <Col md={4}>
              <Form.Group>
                <Form.Label>City</Form.Label>

                <Form.Select
                  name="city"
                  value={userData.city}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select City
                  </option>

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
            </Col>


            <Col md={4}>
              <Form.Group>
                <Form.Label>State</Form.Label>

                <Form.Select
                  name="state"
                  value={userData.state}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select State
                  </option>

                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jammu and Kashmir</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttarakhand</option>
                  <option>Uttar Pradesh</option>
                  <option>West Bengal</option>

                </Form.Select>

              </Form.Group>
            </Col>


            <Col md={4}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>

                <Form.Control
                  type="text"
                  name="pincode"
                  placeholder="Enter pincode"
                  value={userData.pincode}
                  onChange={handleChange}
                  maxLength={6}
                />

              </Form.Group>
            </Col>

          </Row>


          {/* ================= OTHER INFORMATION ================= */}

          <div className="createSectionTitle mt-5">
            <span>04</span>
            Other Information
          </div>

          <Row className="g-4">

            <Col md={4}>
              <Form.Group>
                <Form.Label>Language</Form.Label>

                <Form.Select
                  name="language"
                  value={userData.language}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Language
                  </option>

                  <option value="Java">
                    Java
                  </option>

                  <option value="Node">
                    Node
                  </option>

                  <option value="React">
                    React
                  </option>

                </Form.Select>

              </Form.Group>
            </Col>


            <Col md={4}>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>

                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={userData.phone}
                  onChange={handleChange}
                />

              </Form.Group>
            </Col>


            <Col md={4}>
              <Form.Group>
                <Form.Label>Role</Form.Label>

                <Form.Select
                  name="role"
                  value={userData.role}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Role
                  </option>

                  <option value="Admin">
                    Admin
                  </option>

                  <option value="Teacher">
                    Teacher
                  </option>

                  <option value="Student">
                    Student
                  </option>

                </Form.Select>

              </Form.Group>
            </Col>

          </Row>


          {/* ================= ADDRESS ================= */}

          <div className="createSectionTitle mt-5">
            <span>05</span>
            Address
          </div>

          <Form.Group>
            <Form.Label>Full Address</Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              name="address"
              placeholder="Enter complete address..."
              value={userData.address}
              onChange={handleChange}
              required
            />

          </Form.Group>


          {/* ================= BUTTONS ================= */}

          <div className="createFormActions">

            <Button
              type="button"
              className="cancelCreateBtn"
              onClick={() => navigate("/")}
            >
              ← Back To Home
            </Button>


            <Button
              type="submit"
              className="submitCreateBtn"
            >
              ✓ Create Student
            </Button>

          </div>

        </Form>

      </div>

    </div>
  );
};

export default CreatePage;