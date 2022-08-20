import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
const Container = styled.div`
  max-width: 500px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  z-index: 2;
`;
const Content = styled.p`
  margin-bottom: 12px;
`;
const Button = styled.button`
  all: unset;
  background-color: #706a6a;
  cursor: pointer;
  width: 80px;
  height: 40px;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 12px;
`;

export default function Alert({
  content,
  setVisible,
  path,
}: {
  content: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  path?: string;
}) {
  const navi = useNavigate();

  function handleClick() {
    setVisible(false);
    path && navi(path);
  }

  return (
    <>
      <Background onClick={handleClick}></Background>
      <Container>
        <Content>{content}</Content>
        <Button onClick={handleClick}>확인</Button>
      </Container>
    </>
  );
}
