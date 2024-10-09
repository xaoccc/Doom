import RegisterForm from "../components/RegisterForm";

export default function Register() {
    return (
      <RegisterForm route="/api/user/register/" method="register" />
    );
  }