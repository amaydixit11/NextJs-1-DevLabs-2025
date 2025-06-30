"use client";

function LoginForm() {
  return (
    <form action="" className="w-[500px] flex flex-col gap-5">
      <input
        type="email"
        placeholder="Email address"
        className="h-12 pl-2 py-1 pr-3 border-2 border-gray-400 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        className="h-12 pl-2 py-1 pr-3 border-2 border-gray-400 rounded-md"
      />
      <div className="flex justify-between ">
        <div>
          <input type="checkbox" name="Remember" id="Remember" />
          <span>Remember Me</span>
        </div>

        <a href="#" className="text-blue-700">
          Forgot your password?
        </a>
      </div>
      <button className="w-[500px] bg-blue-600 text-white h-12 pl-2 py-1 pr-3 border-2 border-gray-400 rounded-md">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
