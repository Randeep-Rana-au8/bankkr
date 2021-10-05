import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Icon,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">bankkr</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>
              New user?{" "}
              <Link to="/signup" style={{ color: "#01bf71" }}>
                Register Here
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export const SignUp = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">bankkr</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Create A New Account</FormH1>
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput type="name" required />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>
              Already have a account?{" "}
              <Link to="/signin" style={{ color: "#01bf71" }}>
                Login here
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
