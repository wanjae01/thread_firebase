import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return (
    <div className="bg-gray-900 h-full text-white">
      <div className="max-w-[572px] mx-auto h-full">
        <div className="h-full flex flex-col justify-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
