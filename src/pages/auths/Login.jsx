import React from "react";
import AuthForm from "../../components/AuthForm";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { useNavigate, useOutletContext } from "react-router";

export default function Login() {
  const { handleSubmit } = useOutletContext();
  const navigate = useNavigate();

  function handleLogin(data) {
    console.log(data);
    // navigate("/dashboard");
  }

  return (
    <AuthForm onSubmit={handleSubmit(handleLogin)}>
      <FormInput type="email" name="email" placeholder="Email" />
      <FormInput type="password" name="password" placeholder="Password" />
      <Button>Sign in</Button>
    </AuthForm>
  );
}
