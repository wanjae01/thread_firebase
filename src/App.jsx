import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import Edit from "./pages/Edit";
import { auth } from "./firebase";
import { delay } from "./lib/common";
import Private from "./pages/Private";

function App() {
  // logic
  const [editItem, setEditItem] = useState(null);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    // 로그인 상태 변화 감지하기
    await delay(1000);
    await auth.authStateReady();
    console.log("인증 완료", auth);
    // 인증 준비 다 되면 로딩false
    setIsLoading(false);
  };

  // 페이지 진입 시 딱 한번
  useEffect(() => {
    init();
  }, []);

  // view

  return (
    <div className="bg-churead-black h-full text-white overflow-auto">
      {isLoading ? (
        <p className="text-2xl">Loading...</p>
      ) : (
        <div className="max-w-[572px] mx-auto h-full">
          <BrowserRouter>
            <Routes>
              {/* START: 로그인 사용자만 접근 가능 페이지 */}
              <Route path="/" element={<Private />}>
                <Route
                  path=""
                  element={<Home onEdit={(data) => setEditItem(data)} />}
                />
                <Route path="post" element={<Post />} />
                <Route path="edit" element={<Edit editItem={editItem} />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              {/* END: 로그인 사용자만 접근 가능 페이지 */}

              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;