import AuthForm from "../../components/AuthForm";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import { useOutletContext } from "react-router";

export default function Register() {
  const { handleSubmit, errors } = useOutletContext();

  function onRegister(data) {
    const { email, password, confirmPassword } = data;
    if (!email || !password || !confirmPassword) {
      return;
    }

    // if (password !== confirmPassword) {
       
    //   return;
    // }
    // console.log({ email, password, confirmPassword });
    console.log(data);
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
