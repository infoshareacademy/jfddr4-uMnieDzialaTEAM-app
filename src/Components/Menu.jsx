import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/logo.svg";
import { AiFillSetting, AiFillPieChart } from "react-icons/ai";
import { RiLineChartFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import LogoutBtn from "./LogoutBtn";

const Logo = styled.img`
  width: 179.13px;
  height: 16.72px;
  left: 39px;
  top: 41.62px;
  margin-top: 42px;
  margin-bottom: 124px;
`;

const MenuItem = styled(NavLink)`
  width: 300px;
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 700;
  font-family: Inter, sans-serif;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  .menuIcon {
    padding-right: 15px;
    display: flex;
    align-items: center;
  }
  .menuText {
    display: flex;
    align-items: center;
  }
  :hover {
    transition-duration: 0.5s;
    background-color: rgba(255, 255, 255, 0.22);
    color: #fff;
  }
`;
const LogOut = styled(NavLink)`
  position: absolute;
  width: 300px;
  height: 24px;
  top: 900px;
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 700;
  font-family: Inter, sans-serif;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  .menuIcon {
    padding-right: 15px;
    display: flex;
    align-items: center;
  }
  .menuText {
    display: flex;
    align-items: center;
  }
  :hover {
    transition-duration: 0.5s;
    background-color: rgba(255, 255, 255, 0.22);
    color: #fff;
  }
`;

export function Menu() {
  return (
    <>
      <Logo alt="logo" src={logo}></Logo>
      <MenuItem exact to="/home" className="menu-bars">
        <div className="menuIcon">
          <AiFillPieChart size={40} />
        </div>
        <div className="menuText">Home</div>
      </MenuItem>
      <MenuItem to="/trends" className="menu-bars">
        <div className="menuIcon">
          <RiLineChartFill size={40} />
        </div>
        <div className="menuText">Trends</div>
      </MenuItem>
      <MenuItem to="/account" className="menu-bars">
        <div className="menuIcon">
          <BsFillPersonFill size={40} />
        </div>
        <div className="menuText">Account</div>
      </MenuItem>
      <MenuItem to="/settings" className="menu-bars">
        <div className="menuIcon">
          <AiFillSetting size={40} />
        </div>
        <div className="menuText">Setings</div>
      </MenuItem>
      <LogOut to="/" className="menu-bars">
        <div className="menuIcon">
          <IoLogOut size={40} />
        </div>
        <LogoutBtn />
      </LogOut>
    </>
  );
}
