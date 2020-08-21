import React, { useState } from "react";
import BeforeNavbar from "../components/BeforeNavbar";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const history = useHistory();
  const onChangeID = (event) => {
    setID(event.target.value);
    console.log(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const onChangeHobby = (event) => {
    setHobby(event.target.value);
    console.log(event.target.value);
  };

  const sendInfo = () => {
    if (!ID || !password || !hobby) {
      alert("Fill the Empty Boxes");
      return;
    }
    history.replace("/");
    alert(`회원가입 성공!!! \r\n
    아이디: ${ID} \r\n
    비밀번호: ${password} \r\n
    취미: ${hobby}`);
    sendSignUpInfo();
  };

  const sendSignUpInfo = () => {
    axios
      .post(`/api/user/signup`, {
        id: ID,
        pw: password,
        hobby: hobby,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <BeforeNavbar />
      <SignUpForm>
        <SignUpBox>
          <InputBoxForm>
            <div>Username</div>
            <InputBox onChange={onChangeID} />
          </InputBoxForm>
          <InputBoxForm>
            <div>Password</div>
            <InputBox onChange={onChangePassword} />
          </InputBoxForm>
          <InputBoxForm>
            <div>Hobby</div>
            <InputBox onChange={onChangeHobby} />
          </InputBoxForm>
          <SignUpButton onClick={sendInfo}>Sign up for LatteWorld</SignUpButton>
        </SignUpBox>
      </SignUpForm>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SignUpForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

const SignUpBox = styled.div`
  border: red 2px solid;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const SignUpButton = styled.button`
  background: yellowgreen;
  border: none;
  border-radius: 10px;
  width: 300px;
  height: 80px;
  text-align: center;
`;

const InputBoxForm = styled.div``;

const InputBox = styled.input`
  width: 300px;
  height: 50px;
`;
