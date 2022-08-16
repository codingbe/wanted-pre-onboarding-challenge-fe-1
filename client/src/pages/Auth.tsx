import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Nav from "../components/Auth/Nav";
import SignUp from "../components/Auth/SignUp";

export default function Auth() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
