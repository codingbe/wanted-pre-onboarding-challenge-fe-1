import { useEffect, useState } from "react";
import styled from "styled-components";
import Alert from "../components/Alert";

const Container = styled.div``;
const Title = styled.h1``;
const Ul = styled.ul``;
const Li = styled.li``;

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) setVisible(true);
  }, []);

  return (
    <>
      {visible && <Alert content="로그인 후 이용해주세요" setVisible={setVisible} path="/auth/login" />}
      <Container>Home</Container>
    </>
  );
}
