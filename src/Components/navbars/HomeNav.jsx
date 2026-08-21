import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink, useNavigate } from 'react-router';

import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import SupervisedUserCircleSharpIcon from '@mui/icons-material/SupervisedUserCircleSharp';
import { useEffect, useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../../ReduxRTK/Slices/StudentCRUDSlice';

import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { userLogout } from '../../ReduxRTK/Slices/UserAuthSlice';


function HomeNav() {
  const [searchData, setSearchData] = useState("");

  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let user = useSelector((state) => state.userAuth.user);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);


  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login');
    setAnchorEl(null);
  }


  return (
    <>
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">CRUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <NavLink to='/' style={{ textDecoration: "none" }} className="btn btn-outline-dark"> <HomeIcon /> Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/create' style={{ textDecoration: "none" }} className="btn btn-outline-dark">
                  <PersonAddAltSharpIcon /> Register
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/contact' style={{ textDecoration: "none" }} className="btn btn-outline-dark">
                  <ContactPageIcon /> Contact us
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {user ? <Button variant="outline-dark" onClick={handleLogout}> <LogoutIcon /> Logout</Button> :
                  <NavLink to='/login' style={{ textDecoration: "none" }} className="btn btn-outline-dark">
                    <SupervisedUserCircleSharpIcon /> Login
                  </NavLink>}
              </Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </Form>
            {/* Profile Section */}
            {user && (
            <Stack direction="row" spacing={2}>
              <Avatar
                alt={user.name}
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open}
                sx={{ bgcolor: deepPurple[500] }}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                {user.name?.charAt(0).toUpperCase()}
              </Avatar>
            </Stack>
            )}

          </Navbar.Collapse>
        </Container>
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': buttonId,
            },
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Navbar>
      <Outlet />
    </>
  );
}

export default HomeNav;