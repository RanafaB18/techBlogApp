import { ChangeEvent, FormEvent, useState } from "react";
import { ISignup } from "../interfaces";
import { emailRegex, passwordRegex } from "../constants";
import Input from "./Input";
import Button from "./Button";

const SignUp = () => {
  const [user, setUser] = useState<ISignup>({
    username: "",
    email: "",
    password: "",
  });


  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("Sign up successful");
    console.log(user);
  }
  function handleChange(event: ChangeEvent) {
    const { name, value } = event.target as HTMLInputElement;

    setUser({
      ...user,
      [name]: value,
    });
  }
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <>
        <Input
          name="username"
          onChange={handleChange}
          placeholder="Username"
          type="text"
          value={user.username}
          focus={true}
        />
      </>
      <>
        <Input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          type="email"
          value={user.email}
          testRegex={emailRegex}
        />
      </>
      <Input
        name="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
        value={user.password}
        testRegex={passwordRegex}
      />
      <Button buttonText="Register" />
    </form>
  );
};

export default SignUp;
