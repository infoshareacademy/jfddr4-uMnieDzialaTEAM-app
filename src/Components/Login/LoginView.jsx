import styled from "styled-components";
import { useState } from "react";


const Container = styled.div`
    width: 100vw;
    min-height: 606px;
    max-height: 100vh;
    display: flex;
    background: radial-gradient(50% 50% at 50% 50%, #3d3c68 0%, #1b1a2c 100%);
`


const LeftContainer = styled.div`
  
    width: 60%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PositionalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 1;
    margin-left: 20%;
`

const Heading = styled.h2`
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    color: #fff;
    max-width: 456px;
    max-height: 174px;
    font-family: "Inter", sans-serif;
`

const Compass = styled.div`
    max-height: 390px;
`

const Image = styled.img`
    max-height: 100%;
`

const RightContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 606px;
    max-height: 100vh;
    background: rgba(255, 255, 255, 0.06);
    border-left: 1px solid rgba(229, 229, 229, 0.4);
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`

const Button = styled.button`
    height: 48px;
    border-radius: 8px;
    padding: 12px, 48px, 12px, 48px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    background: linear-gradient(180deg, #7aecf4 0%, #44dfe9 100%);
    box-shadow: inset 2px 0px 2px rgba(255, 255, 255, 0.1),
        inset 0px 6px 10px rgba(255, 255, 255, 0.25);
    margin-top: 32px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
`

const Input = styled.input`
    height: 38px;
    line-height: 24px;
    border-radius: 8px;
    font-size: 16px;
    background-color: #ffffff;
    border: none;
    margin-bottom: 16px;
    padding: 8px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
`

const Label = styled.p`
    font-size: 20px;
    line-height: 32px;
    margin: 0;
    color: white;
    font-family: Inter;
`


const Additionals = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 24px;
    width: 401px;
    color: #fff;
`

const Register = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-decoration: none;
`

const Paragraph = styled.p`
    margin: 0;
    color: #2EE1ED;
    margin-right: 15px;
`
const Link = styled.a`
    color: #2EE1ED;
    width: 500;
`

function LoginView() {
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const handleLoginButton = () => {
        console.log(loginValue, passwordValue)
       
    }

    return (
        <>
        <Container>
            <LeftContainer>
                <PositionalContainer>
                    <img src="/images/logo.svg"></img>
                    <Heading>Log in <br/>and check your <br/> saving journey</Heading>
                </PositionalContainer>
                <Compass>
                    <Image src="/images/compass.svg"></Image>
                </Compass>
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
                            value={passwordValue} 
                            onChange={(e) => setPasswordValue(e.target.value)}
                        />
                        <Button onClick={handleLoginButton}>Log in</Button>
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

   )
}

export default LoginView;
