import RegisterForm from "../components/RegisterForm";

export default function Login() {
  return (
    <RegisterForm route="/api/token/" method="login" />
  );
}