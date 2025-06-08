import { useForm } from "react-hook-form";
import AuthForm from "../../components/AuthForm";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";

export default function Register() {
  const { handleSubmit } = useForm();

  function onRegister(data) {
    console.log(data);
  }

  return (
    <AuthForm onSubmit={handleSubmit(onRegister)}>
      <FormInput type="email" name="email" placeholder="Email" />
      <FormInput type="password" name="password" placeholder="Password" />
      <FormInput
        type="password"
        name="password"
        placeholder="Confirm Password"
      />
      <Button>Sign up</Button>
    </AuthForm>
  );
}
