import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../firebase'

const Private = () => {
  const user = auth.currentUser // user 아니면 null값 (콘솔에서)
  return user ? (
    <div>
    <div>Private</div>
    <Outlet />
    </div>
  ) : (<Navigate to="/login" />);
};

export default Private;