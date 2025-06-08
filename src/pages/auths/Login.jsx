import React from "react";
import AuthForm from "../../components/AuthForm";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { useNavigate, useOutletContext } from "react-router";
import toast from "react-hot-toast";

export default function Login() {
  const { handleSubmit } = useOutletContext();
  const navigate = useNavigate();

  function handleLogin(data) {
    if (!data.email || !data.password) {
      toast.dismiss("Enter your email and password to sign in!");
      return;
    }

    let user = JSON.parse(localStorage.getItem("user")) || [];

    if (user.email !== data.email || user.password !== data.password) {
      toast.error("Invalid email or password!");
      // console.log(data);
      return;
    }
    toast.success("Login successful!");
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
