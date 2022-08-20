import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.header`
  height: 50px;
  width: 100%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  position: fixed;
  left: 0;
  top: 0;
`;
const Nav = styled.nav`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: gray;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  margin-right: 12px;
  font-weight: bold;
`;
const Rlink = styled(Link)<{ check: number }>`
  cursor: pointer;
  color: ${({ check }) => (check ? "black" : "")};
`;

export default function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <Wrap>
        <Nav>
          <Ul>
            <Li>
              <Rlink to="/" check={pathname === "/" ? 1 : 0}>
                ToDoList
              </Rlink>
            </Li>
            <Li>
              <Rlink to="/auth" check={pathname === "/auth" || pathname === "/auth/login" || pathname === "/auth/signup" ? 1 : 0}>
                인증센터
              </Rlink>
            </Li>
          </Ul>
        </Nav>
      </Wrap>
    </>
  );
}
