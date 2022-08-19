import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Alert from "../Alert";

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
`;
const Input = styled.input<{ check: any }>`
  all: unset;
  border-bottom: 3px solid ${({ check }) => (check ? "red" : "gray")};
  margin-bottom: 5px;
  text-align: center;
  &::placeholder {
    font-size: 0.7rem;
  }
`;
const Submit = styled.button<{ disabled: boolean }>`
  all: unset;
  background-color: #706a6a;
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
  width: 120px;
  height: 50px;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  transition: 0.4s;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;
const ErrMsg = styled.span`
  text-align: center;
  font-size: 0.8rem;
  color: red;
  font-weight: bold;
`;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const URL = "http://localhost:8080";
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");
  const navi = useNavigate();

  async function onSubmit(data: { email: string; password: string }) {
    try {
      const { email, password } = data;
      const { token } = await fetch(`${URL}/users/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
      if (token) {
        localStorage.setItem("token", token);
        navi("/");
      } else {
        setContent("이메일 또는 비밀번호가 틀립니다.");
        setVisible(true);
      }
    } catch (e: any) {
      setContent(e);
      setVisible(true);
    }
  }

  return (
    <>
      {visible && <Alert content={content} setVisible={setVisible} />}
      <Form onSubmit={handleSubmit(onSubmit as any)}>
        <FormColumn>
          <Input
            {...register("email", {
              required: "이메일을 입력해주세요!",
              validate: {
                check: (value) => {
                  const regex = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
                  const isValid = regex.test(value);
                  if (!isValid) return "이메일을 정확히 입력해주세요";
                  if (value === "") return "이메일을 꼭 입력해주세요";
                },
              },
            })}
            placeholder="이메일을 입력해주세요!"
            check={errors.email?.message}
            type="email"
          />
          <ErrMsg>{errors.email?.message as string}</ErrMsg>
        </FormColumn>
        <FormColumn>
          <Input
            {...register("password", {
              required: "비밀번호를 입력해주세요!",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요",
              },
            })}
            placeholder="8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요"
            type="password"
            check={errors.password?.message}
          />
          <ErrMsg>{errors.password?.message as string}</ErrMsg>
        </FormColumn>
        <Submit type="submit" disabled={!isValid}>
          로그인
        </Submit>
      </Form>
    </>
  );
}
