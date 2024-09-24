import React, { useState } from "react";
import InputField from "../components/InputField";
import LoginButton from "../components/LoginButton";
import { Link } from "react-router-dom";

// TODO: 파일명 SignUp으로 바꾸기, path도 바꾸기
const SignUp = () => {
  // logic
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const handleInputChange = (inputValue, field) => {
    // field: 'email', 'password'
    // const newFormData = { ...formData, [field]: inputValue };
    // setFormData(newFormData);

    if (field === "username") {
      setUsername(inputValue);
    } else if (field === "email") {
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  // view
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="text-center px-6">
        <h1 className="flex justify-center">
          <img src="./images/logo.svg" alt="churead로고" />
        </h1>
        <h3 className="text-red font-bold text-base py-6">
          Thread에서 소통해보세요
        </h3>
        {/* START: 폼 영역 */}
        <form id="login-form" className="text-center flex flex-col gap-2">
          <InputField type="text" field="name" onChange={handleInputChange} />
          <InputField type="text" field="email" onChange={handleInputChange}/>
          <InputField type="password" field="password" onChange={handleInputChange}/>
          <LoginButton category="login" text="Create Account" />
        </form>
        {/* END: 폼 영역 */}
        <div className="flex justify-center gap-1 py-6">
          <p className="text-churead-gray-600">계정이 있으신가요?</p>
          <Link to="/login" className="text-churead-blue">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;