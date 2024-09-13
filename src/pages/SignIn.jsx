import React from "react";
import InputField from "../components/InputField";
import LoginButton from "../components/LoginButton";
import { Link } from "react-router-dom";

const SignIn = () => {
  // logic
  // const history = useNavigate();

  // const goToHome = () => {
  //   history("/");
  // };

  // view
  return (
    <div className="text-center px-6">
      {/* <h2>Login</h2> */}
      {/* <button type="button" onClick={goToHome}>
        Home화면으로 이동
      </button> */}
      {/* <Link to={"/"} style={{ color: "red" }} className="link">
        Home화면으로 이동
      </Link> */}
      <h1 className="flex justify-center">
        <img src="./images/logo.svg" alt="churead로고" />
      </h1>
      <h3 className="text-red font-bold text-base py-6">
        Churead에서 소통해보세요
      </h3>
      {/* START: 폼 영역 */}
      <form id="login-form" className="text-center flex flex-col gap-2">
        <InputField type="text" field="name" />
        <InputField type="text" field="email" />
        <InputField type="password" field="password" />
        <LoginButton category="login" />
      </form>
      {/* END: 폼 영역 */}
      <div className="flex justify-center gap-1 py-6">
        <p>계정이 없으신가요?</p>
        <Link className="text-blue-400">가입하기</Link>
      </div>
      {/* START: 소셜 로그인 영역 */}
      <LoginButton category="socialLogin" />
      {/* END: 소셜 로그인 영역 */}
    </div>
  );
};

export default SignIn;