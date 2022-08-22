import { useEffect, useState } from "react";
import styled from "styled-components";
import { ToDoType, URL } from "../../typeDefs";
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
  const [change, setChange] = useState(0);

  async function getToDos() {
    const token = localStorage.getItem("token");
    const { data } = await fetch(`${URL}/todos`, {
      headers: { authorization: `login ${token}` },
    }).then((res) => res.json());
    setToDos(data);
  }

  useEffect(() => {
    getToDos();
  }, [change]);

  return (
    <Container>
      <ToDoHeader setToDos={setToDos} />
      <ToDoBody toDos={toDos} setChange={setChange} />
    </Container>
  );
}
