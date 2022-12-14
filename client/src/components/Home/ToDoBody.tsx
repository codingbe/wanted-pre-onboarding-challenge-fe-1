import { faClipboard, faPen, faTrashAlt, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { ToDoType, URL } from "../../typeDefs";

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 150px;
  padding: 8px;
  gap: 8px;
`;

const Li = styled.li`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: orange;
  padding: 8px;
`;

const Title = styled.h1``;

const Icons = styled.div`
  position: absolute;
  right: 8px;
  svg {
    cursor: pointer;
  }
`;

const Content = styled.p`
  padding: 12px;
`;

export default function ToDoBody({
  toDos,
  setChange,
}: {
  toDos: ToDoType[];
  setChange: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [edit, setEdit] = useState(false);

  async function deleteToDo(id: string) {
    const token = localStorage.getItem("token");
    await fetch(`${URL}/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", authorization: `login ${token}` },
    }).then((res) => res.ok && setChange((prev) => prev + 1));
  }

  return (
    <Ul>
      {toDos.map((toDo) => (
        <Li key={toDo.id}>
          <Header>
            <Title>{toDo.title}</Title>
            <Icons>
              <FontAwesomeIcon icon={edit ? faClipboard : faPen} onClick={() => setEdit(true)} />
              <FontAwesomeIcon
                icon={edit ? faX : faTrashAlt}
                onClick={() => {
                  !edit && deleteToDo(toDo.id);
                  setEdit(false);
                }}
                style={{ marginLeft: 12 }}
              />
            </Icons>
          </Header>
          <Content>{toDo.content}</Content>
        </Li>
      ))}
    </Ul>
  );
}
