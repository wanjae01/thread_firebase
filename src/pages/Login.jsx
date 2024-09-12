import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  //logic
  const history = useNavigate()
  const goToHome = () => {
    history("/");

  }
  //view
  return (
    <div style={{ backgroundColor: "green"}}>
      <h2>Login</h2>
      {/* <button type="button" onClick={goToHome}>Home 화면으로 이동</button> */}
      <Link to={"/"} style={{ color: 'yellow'}}>Home화면으로 이동</Link>
    </div>
  );
};

export default Login;