import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";

export default function Routers() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
