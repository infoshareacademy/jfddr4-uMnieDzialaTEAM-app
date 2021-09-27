import styled from "styled-components";
import { useState } from "react";
import logo from "./images/logo.svg";
import compass from "./images/compass.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";
import { Redirect, Route } from "react-router";
import { routerPaths } from "../helpers/routerPaths.js"
import ReactDOM from 'react-dom';

const Logo = styled.img`
  max-width: 180px;
  max-height: 17px;
  margin-bottom: 30px;
`;

const ImgCont = styled.div`
  max-height: 390px;
`;

const Compass = styled.img`
  max-height: 100%;
`;

const Container = styled.div`
  width: 100vw;
  min-height: 606px;
  max-height: 100vh;
  display: flex;
  background: radial-gradient(50% 50% at 50% 50%, #3d3c68 0%, #1b1a2c 100%);
`;

const LeftContainer = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PositionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  flex-grow: 1;
  margin-left: 20%;
`;

const Heading = styled.h2`
  max-width: 456px;
  max-height: 174px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
`;

const Image = styled.img`
  max-height: 100%;
`;

const RightContainer = styled.div`
  width: 40%;
  min-height: 606px;
  max-height: 100vh;
  background: rgba(255, 255, 255, 0.06);
  border-left: 1px solid rgba(229, 229, 229, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Button = styled.button`
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

const Additionals = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  width: 401px;
  color: #fff;
`;

const Register = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-decoration: none;
`;

const Paragraph = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2ee1ed;
  margin-top: 8px;
  margin-right: 5px;
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

function LoginView() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const auth = getAuth();
  
  const handleLoginButton = (event) => {
    console.log(loginValue, passwordValue);
    event.preventDefault();
    
    signInWithEmailAndPassword(auth, loginValue, passwordValue)
      .then((userCredential) => {
        console.log(userCredential.user);
        // todo: go to daszbord (moze dam 🤔)
        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
    { isLoggedIn ? <Redirect to={routerPaths.dashboard}/> : <></> }
      <Container>
        <LeftContainer>
          <PositionalContainer>
            <Logo alt="logo" src={logo}></Logo>
            <Heading>
              Log in <br />
              and check your <br /> saving journey
            </Heading>
          </PositionalContainer>
          <ImgCont>
            <Compass src={compass} alt="compass"></Compass>
          </ImgCont>
        </LeftContainer>
        <RightContainer>
          <Main>
            <Label>Email</Label>
            <Input
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
            />
            <Label>Password</Label>
            <Input
              type="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <Button onClick={handleLoginButton} >LOG IN</Button>
            <Additionals>
              <Register>
                <Paragraph>New here?</Paragraph>
                <Link href="#">Register now</Link>
              </Register>
              <Link href="#">Forgot password?</Link>
            </Additionals>
          </Main>
        </RightContainer>
      </Container>
    </>
  );
}

export default LoginView;
