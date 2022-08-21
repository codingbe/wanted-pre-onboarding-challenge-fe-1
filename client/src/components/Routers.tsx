import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";

export default function Routers() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
