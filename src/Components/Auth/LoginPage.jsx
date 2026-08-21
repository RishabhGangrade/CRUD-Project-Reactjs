import React, { useState } from "react";
import styles from "../CSS/LoginPage.module.css";
import { Link, useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { loginUser } from "../../ReduxRTK/Slices/UserAuthSlice";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUser(userData));
    
    if (loginUser.fulfilled.match(result)) {
      alert("Login Successful");
      navigate("/");
    } else if (loginUser.rejected.match(result)) {
      alert(result.payload);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>

        <h1>Welcome Back</h1>

        <form onSubmit={handleSubmit} method="POST">

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={userData.email}
              placeholder="Enter your email"
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>

            <div className={styles.passwordBox}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />

              <span
                className={styles.eye}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

          </div>

          <div className={styles.loginOptions}>

            <label>
              <input type="checkbox" /> Remember Me
            </label>

            {/* <a href="/">Forgot Password?</a> */}

          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>


        </form>

        <div className={styles.signup}>
          Don't have an account? &nbsp;
          <Link to='/register'>Register</Link>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;