import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navi = styled.nav`
  display: flex;
  justify-content: center;
  color: grey;
  font-weight: bold;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  padding: 12px;
  cursor: pointer;
`;
const Rlink = styled(Link)<{ check: number }>`
  color: ${({ check }) => (check ? "#c48c0b" : "")};
  cursor: pointer;
`;

export default function Nav() {
  const { pathname } = useLocation();
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  function checkToken() {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
  }

  function requestLogout() {
    setToken("");
    localStorage.removeItem("token");
  }

  useEffect(() => {
    checkToken();
  }, [token]);

  return (
    <Navi>
      <Ul>
        <Li onClick={() => token && requestLogout()}>
          {token ? (
            "로그아웃"
          ) : (
            <Rlink to="login" check={pathname === "/auth/login" ? 1 : 0}>
              로그인
            </Rlink>
          )}
        </Li>
        <Li>
          <Rlink to="signup" check={pathname === "/auth/signup" ? 1 : 0}>
            회원가입
          </Rlink>
        </Li>
      </Ul>
    </Navi>
  );
}
