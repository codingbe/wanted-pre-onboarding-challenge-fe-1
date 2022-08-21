import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import ToDo from "../components/Home/ToDo";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) setVisible(true);
  }, []);

  return (
    <>
      {visible && (
        <Alert content="로그인 후 이용해주세요" setVisible={setVisible} path="/auth/login" />
      )}
      <ToDo />
    </>
  );
}
