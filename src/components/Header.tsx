import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <Logo to="/">Place Picker</Logo>

      <Nav>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/favorites">마이픽</NavLink>
        <NavLink to="/about">소개</NavLink>
      </Nav>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  width: 100%;
  padding: 26px clamp(28px, 6vw, 92px) 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #9dccff;
`;

const Logo = styled(Link)`
  color: #111;
  font-size: clamp(38px, 4.2vw, 50px);
  font-weight: 900;
  letter-spacing: -3px;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const NavLink = styled(Link)`
  padding: 9px 15px;
  border: 2px solid #111;
  border-radius: 999px;
  background: #fffef4;
  color: #111;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 2px 2px 0 #111;

  &:hover {
    background: #75f06b;
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 #111;
  }
`;