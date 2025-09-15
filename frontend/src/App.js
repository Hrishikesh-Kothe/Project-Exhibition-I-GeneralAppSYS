import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MemberDashboard from "./pages/MemberDashboard.jsx";
import SpecialistDashboard from "./pages/SpecialistDashboard.jsx";
import SigninMember from "./pages/SigninMember.jsx";
import SpecialistRegister from "./pages/SpecialistRegister.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/member" element={<MemberDashboard />} />
        <Route path="/specialist" element={<SpecialistDashboard />} />
        <Route path="/signin-member" element={<SigninMember />} />
        <Route path="/specialist-register" element={<SpecialistRegister />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
