import Link from "next/link";
import Registrationform from "../components/registrationForm";
function Registration() {
  return (
    <>
      <div className="p-5 my-5 text-black text-xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4"> Taskify</h1>
        <h2 className="text-2xl font-semibold mb-2">Create a new account</h2>
        <h2 className="mb-4"> Or <Link href="/login" className="text-blue-700">sign in to your existing account</Link>
        </h2>
        <Registrationform />
      </div>
    </>
  );
}

export default Registration;
