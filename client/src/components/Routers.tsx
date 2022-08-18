import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import GlobalStyle from "./GlobalStyle";

export default function Routers() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
