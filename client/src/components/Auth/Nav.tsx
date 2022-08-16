import { Link } from "react-router-dom";
import styled from "styled-components";

const Navi = styled.nav``;
const Ul = styled.ul``;
const Li = styled.li``;
const Rlink = styled(Link)``;

export default function Nav() {
  return (
    <Navi>
      <Ul>
        <Li>
          <Rlink to="login">로그인</Rlink>
        </Li>
        <Li>
          <Rlink to="signup">회원가입</Rlink>
        </Li>
      </Ul>
    </Navi>
  );
}
