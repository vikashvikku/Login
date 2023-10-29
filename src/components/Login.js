import React, { useState } from "react";
import styled from "styled-components";
import imgSvg from "./img.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 3rem;
  }
`;

const LoginDiv = styled.div`
  width: 24rem;
  height: 24rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 50%;
    height: 35rem;
  }
`;

const LoginForm = styled.form`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 40rem;
  height: 30rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const HeadingDiv = styled.div`
  font-size: 22px;
  font-weight: 800;
  padding: 5rem 0rem 2rem 0;
  text-align: center;
`;

const ImgDiv = styled.img`
  height: 24rem;
  width: 24rem;
`;

const LoginCredDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding: 0 0 0 2rem;
`;

const Input = styled.input`
  width: 86%;
  padding: 10px;
  margin: 10px 0 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
`;

const PasswordVisibilityToggle = styled.button`
  position: relative;
  width: 2rem;
  right: -82%;
  bottom: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ConditionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: -1rem 0 0 0;
`;

const CheckCondition = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 2rem;
  font-size: 13px;
`;

const CheckBoxDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  margin: -2rem 0 0 0;
`;
const CheckBoxDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  margin: -1rem 0 0 0;
`;

const CheckPassword = styled.div`
  padding: 14px 64px 0 0;
  font-size: 13px;
`;

const SpanTerm = styled.span`
  color: orange;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 54%;
  padding: 10px;
  margin: 1rem 0 0 7rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignUpDiv = styled.div`
  font-size: 12px;
  margin: 1rem 0 0 0;
  text-align: center;
`;

const SpanRegister = styled.span`
  color: orange;
  font-weight: 600;
  cursor: pointer;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <LoginDiv>
        <ImgDiv src={imgSvg} alt="" />
      </LoginDiv>
      <LoginForm>
        <HeadingDiv>Login</HeadingDiv>
        <LoginCredDiv>
          Login ID
          <Input type="text" placeholder="Username" />
        </LoginCredDiv>
        <LoginCredDiv>
          Password
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <PasswordVisibilityToggle onClick={togglePasswordVisibility}>
            {showPassword ? (
              <>
                <VisibilityIcon />
              </>
            ) : (
              <>
                <VisibilityOffIcon />
              </>
            )}
          </PasswordVisibilityToggle>
        </LoginCredDiv>
        <ConditionDiv>
          <CheckCondition>
            <CheckBoxDiv1>
              <input type="checkbox" />
              <p>Remember me</p>
            </CheckBoxDiv1>
            <CheckBoxDiv2>
              <input type="checkbox" />
              <p>
                Agree to <SpanTerm>terms & Conditions</SpanTerm>
              </p>
            </CheckBoxDiv2>
          </CheckCondition>
          <CheckPassword>
            <SpanTerm>Change Password</SpanTerm>
          </CheckPassword>
        </ConditionDiv>
        <SubmitButton type="submit">Submit</SubmitButton>
        <SignUpDiv>
          Don't have an account?<SpanRegister> Register Here</SpanRegister>
        </SignUpDiv>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
