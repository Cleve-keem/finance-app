import React from "react";
import AuthForm from "../../components/AuthForm";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";

export default function Login() {
  return (
    <AuthForm>
      <FormInput type="email" name="email" placeholder="Email" />
      <FormInput type="password" name="password" placeholder="Password" />
      <Button>Sign in</Button>
    </AuthForm>
  );
}
