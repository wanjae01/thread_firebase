import React from "react";
import { Link } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
// import { RiHome5Fill } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
// import { RiEditBoxFill } from "react-icons/ri";
// import { FaUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

const Nav = () => {
  // logic

  // view
  return (
    <nav className="fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]">
      <ul className="flex justify-center">
        <li>
          <Link to="/" className="block p-6">
            {/* <img src="./images/icon-home.svg" alt="Home으로 가기" /> */}
            <RiHome5Line size={"28px"} />
            {/* <RiHome5Fill size={"28px"} /> */}
          </Link>
        </li>
        <li>
          <Link to="/post" className="block p-6">
            <RiEditBoxLine size={"28px"} />
            {/* <RiEditBoxFill size={"28px"} /> */}
          </Link>
        </li>
        <li>
          <Link to="/profile" className="block p-6">
            <FaRegUser size={"24px"} />
            {/* <FaUser size={"24px"} /> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;