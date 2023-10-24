import { FormEvent } from "react";

const Login = () => {
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log("Log in successful");
        
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        className="outline-none caret-white text-white placeholder:text-white p-2 w-full bg-transparent border-b-2 border-white"
        type="text"
        placeholder="Username"
      />

      <input
        className="outline-none caret-white text-white placeholder:text-white p-2 w-full bg-transparent border-b-2 border-white"
        type="password"
        placeholder="Password"
      />
      <button className="text-white py-1 px-6 mt-3 bg-green-700 w-fit mx-auto rounded-full">
        Login
      </button>
    </form>
  );
};

export default Login;
