import Link from "next/link";
import LoginForm from "../components/loginForm";
export default function Login() {
  return (
    <>
      <div className="p-5 my-5 text-xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Taskify</h1>
        <h2 className="text-2xl font-semibold mb-2">Sign in to your account</h2>
        <p className="mb-8">
          Or{" "}
          <Link href="/register" className="text-blue-700 ">
            {" "}
            register for a new account
          </Link>
        </p>
        <LoginForm />
      </div>
    </>
  );
}
