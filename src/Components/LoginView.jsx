import styled from "styled-components";
import { useState } from "react";
import logo from "./images/logo.svg";
import compass from "./images/compass.svg";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import "../firebaseConfig";
import { Redirect } from "react-router";
import { routerPaths } from "../helpers/routerPaths.js";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../helpers/hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

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
  cursor: pointer;
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

const Link2 = styled(Link)`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2ee1ed;
  margin-top: 8px;
`;

const LinkButton = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2ee1ed;
  margin-top: 8px;
  cursor: pointer;
  text-decoration: underline;
`;

const auth = getAuth();

function LoginView() {
  const history = useHistory();
  const user = useCurrentUser();
  const [errorMessage, setErrorMessage] = useState();
  const [loginForm, setLoginForm] = useState(true);
  const [loading, setLoading] = useState(false);
  // VALIDATION
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email or password")
      .required("Required email"),
    password: yup
      .string()
      .min(6, "At least 6 characters")
      .max(32, "Less than 32 characters")
      .required("Required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  //-----------

  // VALIDATION FOR RESET PASSWORD -------------------------------------
  const validationSchemaForReset = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
  });
  const formOptionsForReset = {
    resolver: yupResolver(validationSchemaForReset),
  };
  const {
    register: registerForReset,
    handleSubmit: handleForReset,
    formState: { errors: errorsForReset },
  } = useForm(formOptionsForReset);
  // -----------------------------------------------------------------------
  const handlePasswordReset = ({ email }) => {
    setLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoginForm(true);
        setLoading(false);
        setErrorMessage("");
      })
      .catch((error) => {
        let customError = "";

        const errorMessage = error.code;

        switch (errorMessage) {
          case "auth/invalid-email":
            customError = "Email address is not valid.";
            break;
          case "auth/user-not-found":
            customError = "There is no user corresponding to the given email.";
            break;
          default:
            customError = "Network request failed.";
        }

        setLoading(false);
        setErrorMessage(customError);
      });
  };

  const handleLoginSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push(routerPaths.home);
      })
      .catch((error) => {
        let customError = "";

        const errorMessage = error.code;

        switch (errorMessage) {
          case "auth/invalid-email":
            customError = "Email address is not valid";
            break;
          case "auth/user-disabled":
            customError = "Email address has been disabled";
            break;
          case "auth/user-not-found":
            customError = "Invalid email or password!";
            break;
          case "auth/wrong-password":
            customError = "Invalid email or password";
            break;
          default:
            customError = "Network request failed";
        }

        setErrorMessage(customError);
      });
  };

  return (
    <>
      {user ? <Redirect to={routerPaths.home} /> : <></>}
      <Container>
        <LeftContainer>
          <PositionalContainer>
            <Logo alt="logo" src={logo}></Logo>
            {!loginForm ? (
              <Heading>
                Reset <br />
                your password
              </Heading>
            ) : (
              <Heading>
                Log in <br />
                and check your <br /> saving journey
              </Heading>
            )}
          </PositionalContainer>
          <ImgCont>
            <Compass src={compass} alt="compass"></Compass>
          </ImgCont>
        </LeftContainer>
        <RightContainer>
          <Main>
            {loginForm && (
              <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(handleLoginSubmit)}
              >
                <Label>Email</Label>
                <Input type="email" {...register("email")} />
                <p style={{ color: "red" }}>{errorMessage}</p>

                {/* EMAIL ERRORS */}
                <p style={{ color: "red", marginBottom: "20px" }}>
                  {errors.email?.message}
                </p>

                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  minLength="6"
                  required
                  {...register("password")}
                />
                {/* PASSWORD ERRORS */}
                <p style={{ color: "red", marginBottom: "20px" }}>
                  {errors.password?.message}
                </p>

                <Button type="submit">LOG IN</Button>
              </form>
            )}

            {!loginForm && (
              <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleForReset(handlePasswordReset)}
              >
                <h3
                  style={{
                    color: "red",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  {errorMessage}
                </h3>

                <Label>Email</Label>
                <Input type="text" {...registerForReset("email")} />
                {/* EMAIL ERRORS */}
                <p style={{ color: "red", marginBottom: "20px" }}>
                  {errorsForReset.email?.message}
                </p>

                <Button type="submit">
                  {loading ? "Loading..." : "Reset"}
                </Button>
              </form>
            )}
            <Additionals>
              <Register>
                <Paragraph>New here?</Paragraph>
                <Link2 to={routerPaths.register}>Register now</Link2>
              </Register>
              <LinkButton
                onClick={() => setLoginForm((prevValue) => !prevValue)}
              >
                {loginForm ? "Forgot password?" : "Login"}
              </LinkButton>
            </Additionals>
          </Main>
        </RightContainer>
      </Container>
    </>
  );
}

export default LoginView;
