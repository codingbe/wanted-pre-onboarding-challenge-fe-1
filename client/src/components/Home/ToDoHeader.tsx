import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ToDoType, URL } from "../../typeDefs";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  padding: 0 10px;
`;

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid orange;
  padding: 8px;
  &::placeholder {
    text-align: center;
  }
`;

const ErrMsg = styled.span`
  text-align: center;
`;

const Submit = styled.button<{ disabled: boolean; check: boolean }>`
  all: unset;
  cursor: ${({ check }) => (check ? "pointer" : "")};
  width: 120px;
  height: 50px;
  background-color: orange;
  text-align: center;
  border-radius: 12px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export default function ToDoHeader({
  setToDos,
}: {
  setToDos: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  async function createToDo(value: { title: string; content: string }) {
    const { title, content } = value;
    const token = localStorage.getItem("token");

    const { data } = await fetch(`${URL}/todos`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { Authorization: `login ${token}`, "Content-Type": "application/json" },
    }).then((res) => res.json());
    data && setToDos((prev: ToDoType[]) => [data, ...prev]);
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(createToDo as any)}>
      <Column>
        <Input
          placeholder="제목을 입력하세요"
          {...register("title", { required: "제목을 꼭 입력하세요" })}
        />
        <ErrMsg>{errors.title?.message as string}</ErrMsg>
      </Column>
      <Column>
        <Input placeholder="내용을 입력하세요" {...register("content")} />
      </Column>

      <Submit disabled={!isValid} check={isValid}>
        <FontAwesomeIcon icon={faPlus} />
      </Submit>
    </Form>
  );
}
