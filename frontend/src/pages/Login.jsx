import RegisterForm from "../components/RegisterForm";

export default function Login() {
  // const baseURL = import.meta.env.MODE == 'development' ? import.meta.env.VITE_API_URL_LOCAL : import.meta.env.VITE_API_URL_PROD;
  return (
    <RegisterForm route={"https://doomclub2-fkhzh6hge7fkdvak.italynorth-01.azurewebsites.net/api/user/login/"} method="login" />
  );
}