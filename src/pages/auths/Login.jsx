import React from "react";
import AuthForm from "../../components/AuthForm";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function Login() {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleLogin(data) {
    console.log(data);
    navigate("/dashboard");
  }

  return (
    <AuthForm onSubmit={handleSubmit(handleLogin)}>
      <FormInput type="email" name="email" placeholder="Email" />
      <FormInput type="password" name="password" placeholder="Password" />
      <Button>Sign in</Button>
    </AuthForm>
  );
}
