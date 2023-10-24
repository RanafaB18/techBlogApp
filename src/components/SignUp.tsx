import { FormEvent } from "react";

const SignUp = () => {
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log("Sign up successful");

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
        type="text"
        placeholder="Email"
      />
      <input
        className="outline-none caret-white text-white placeholder:text-white p-2 w-full bg-transparent border-b-2 border-white"
        type="password"
        placeholder="Password"
      />
      <input
        className="outline-none caret-white text-white placeholder:text-white p-2 w-full bg-transparent border-b-2 border-white"
        type="password"
        placeholder="Confirm Password"
      />
      <button className="text-white py-1 px-6 mt-3 bg-green-700 w-fit mx-auto rounded-full">
        Register
      </button>
    </form>
  );
};

export default SignUp;
