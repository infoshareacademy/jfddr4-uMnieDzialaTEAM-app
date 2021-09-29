import styled from "styled-components";
import logo from "./images/logo.svg";
import compass from "./images/compass.svg";
import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { routerPaths } from "../helpers/routerPaths";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 606px;
  max-height: 100vh;
  display: flex;
  background: radial-gradient(50% 50% at 50% 50%, #3d3c68 0%, #1b1a2c 100%);
`;

const LeftPanel = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 180px;
  max-height: 17px;
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-left: 20%;
`;

const Title = styled.h1`
  max-width: 456px;
  max-height: 174px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
`;

const ImgCont = styled.div`
  max-height: 390px;
`;

const Compass = styled.img`
  max-height: 100%;
`;

const RightPanel = styled.div`
  width: 40%;
  min-height: 606px;
  max-height: 100vh;
  background: rgba(255, 255, 255, 0.06);
  border-left: 1px solid rgba(229, 229, 229, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Label = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
`;

const Input = styled.input`
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 8px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

const Btn = styled.button`
  height: 48px;
  background: linear-gradient(180deg, #7aecf4 0%, #44dfe9 100%);
  box-shadow: inset 2px 0px 2px rgba(255, 255, 255, 0.1),
    inset 0px 6px 10px rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  margin-top: 32px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

const Link = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2ee1ed;
  margin-top: 8px;
`;
function RegisterView() {
  const auth = getAuth()
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      createUserWithEmailAndPassword(auth, email.value, password.value).then(() => {
      setCurrentUser(true);
}
      );      
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Redirect to={routerPaths.dashboard} />;
  }

  return (
    <Wrapper>
      <LeftPanel>
        <TitleWrapper>
          <Logo alt="logo" src={logo}></Logo>
          <Title>Register now {<br />} and start saving your money</Title>
        </TitleWrapper>
        <ImgCont>
          <Compass src={compass} alt="compass"></Compass>
        </ImgCont>
      </LeftPanel>
      <RightPanel>
        <form onSubmit={handleSubmit}> 
        <InputsCont >
          <Label for="email">Email</Label>
          <Input type="email"  name="email" required></Input>
          <Label for="password">Password</Label>
          <Input type="password" name="password" minLength="6" required></Input>
          <Btn type="submit">NEW ACCOUNT</Btn>
          <Link href="#">Back to log in</Link>
        </InputsCont></form>
        
      </RightPanel>
    </Wrapper>
  );
}

export default RegisterView;
