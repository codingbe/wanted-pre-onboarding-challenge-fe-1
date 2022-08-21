import { useState } from "react";
import styled from "styled-components";
import { ToDoType } from "../../typeDefs";
import ToDoBody from "./ToDoBody";
import ToDoHeader from "./ToDoHeader";

const Container = styled.div`
  max-width: 500px;
  padding-top: 20px;
  width: 100%;
  margin: 0 auto;
`;

export default function ToDo() {
  const [toDos, setToDos] = useState<ToDoType[]>([]);

  return (
    <Container>
      <ToDoHeader setToDos={setToDos} />
      <ToDoBody toDos={toDos} />
    </Container>
  );
}
