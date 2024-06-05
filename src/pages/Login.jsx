import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import useTitle from "../hooks/useTitle";

const Login = () => {
  useTitle("Login");

  return (
    <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />

        <p className="mt-5 text-sm text-gray-500 text-end">
          New here?
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
