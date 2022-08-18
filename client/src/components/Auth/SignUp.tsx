import { useForm } from "react-hook-form";
import styled from "styled-components";

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
const Submit = styled.button`
  all: unset;
  background-color: #706a6a;
  cursor: pointer;
  width: 120px;
  height: 50px;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 12px;
`;
const ErrMsg = styled.span`
  text-align: center;
  font-size: 0.8rem;
  color: red;
  font-weight: bold;
`;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onChange" });

  function onSubmit(data: any) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <FormColumn>
        <Input
          {...register("password2", {
            required: "비밀번호를 다시 입력해주세요!",
            validate: {
              check: (value) => {
                const { password } = getValues();
                if (password !== value) return "비밀번호가 일치하지 않습니다!";
              },
            },
          })}
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          check={errors.password2?.message}
        />
        <ErrMsg>{errors.password2?.message as string}</ErrMsg>
      </FormColumn>
      <Submit type="submit" disabled={true}>
        회원가입
      </Submit>
    </Form>
  );
}
