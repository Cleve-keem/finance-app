import toast from "react-hot-toast";
import AuthForm from "../../components/AuthForm";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import { useNavigate, useOutletContext } from "react-router";
import { BsDatabaseExclamation } from "react-icons/bs";

export default function Register() {
  const { handleSubmit, reset, animateTo } = useOutletContext();
  const navigate = useNavigate();

  function onRegister(data) {
    const { email, password, confirmPassword } = data;
    if (!email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      toast.error("passwords are not the same!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Account created!");
    console.log(data);
    reset();
    animateTo("right");
    navigate("/login");
  }

  return (
    <AuthForm onSubmit={handleSubmit(onRegister)}>
      <FormInput type="email" name="email" placeholder="Email" />
      <FormInput type="password" name="password" placeholder="Password" />
      <FormInput
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <Button>Sign up</Button>
    </AuthForm>
  );
}
