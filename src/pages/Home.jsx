import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const history = useNavigate()
  const goToLogin = () => {
    history("/");
  }
  return (
    <div className="text-red-500">Home
      <h2>Home 페이지 입니다</h2>
      {/* <button type="button" onClick={goToLogin}>Login 이동</button> */}
      <Link to={"/login"} style={{ color: 'darkbrown'}}>Login 이동</Link>
    </div>

  
  )
}

export default Home