import React from "react";
import { Typography, Box, TextField, Link } from "@material-ui/core";
import styled from "styled-components";

export const Login = () => {
  return (
    <Box m={10}>
      <Box align={"center"}>
        <TitleTypography variant="h1">NOTATKI</TitleTypography>
      </Box>
      <CredentialsBox>
        <InputField id="standard-basic" label="username" />
        <InputField id="standard-basic" label="password" />
      </CredentialsBox>
      <ButtonBox>
        <LoginButton>
          <Typography variant="h5">Login</Typography>
        </LoginButton>
      </ButtonBox>
    </Box>
  );
};

const TitleTypography = styled(Typography)`
  color: #7c98b3;
`;
const CredentialsBox = styled(Box)`
  margin-top: 70px;
`;

const InputField = styled(TextField)`
  width: 100%;
  height: 30px;
  margin-bottom: 50px;
  color: #dbdbdb;
  font-size: 16;
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const LoginButton = styled(Link)`
  color: #7aa7ec;
  border-bottom-style: none;
  text-decoration: none !important;
`;
