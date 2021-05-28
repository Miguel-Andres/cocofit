import React from "react";
import styled from "styled-components";
import FormLogin from "./login/FormLogin";
import { Text, Stack ,Heading} from "@chakra-ui/react";

const Tituloprincipal = styled.h1`
  font-size: 100px;
  font-family: "Caesar Dressing", cursive;
  color: #ff8ed0;
`;

const ContainerRegister = styled.div`
  background-color: transparent;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
`;

const ImgRegister = styled.div`
  background-image: url("../image/Register.jpg");
  background-size: cover;
  position: relative;
  display: block;
  height: auto;
  width: 45%;
  border-radius: 10% 0 0 10%;
`;

export default function Login() {
  return (
    <React.Fragment>
      <div style={{ backgroundImage: `url("./image/fondofondo.jpg")` }}>
        <Stack
        
          direction="row"
          justifyContent="center"
        >
          <Heading fontSize="90px" color="#FF8ED0 ">
            Corinna CocoFit
          </Heading>
        </Stack>

        <ContainerRegister className="container">
          <ImgRegister />

          <FormLogin />
        </ContainerRegister>
      </div>
    </React.Fragment>
  );
}
