import RegisterForm from "../components/RegisterForm";

export default function Register() {
    const baseURL = import.meta.env.MODE == 'development' ? import.meta.env.VITE_API_URL_LOCAL : import.meta.env.VITE_API_URL_PROD;

    return (
      <RegisterForm route={`${baseURL}/api/user/register/`} method="register" />
    );
  }