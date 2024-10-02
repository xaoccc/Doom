import RegisterForm from "../components/RegisterForm";

export default function Login() {
  return (
    <RegisterForm route="/api/user/login/" method="login" />
  );
}