import { ChangeEvent, FormEvent, useState } from "react";
import { ILogin } from "../interfaces";
import Input from "./Input";
import Button from "./Button";
import { passwordRegex } from "../constants";

const Login = () => {
  const [user, setUser] = useState<ILogin>({
    username: "",
    password: "",
  });
  function handleChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;

    setUser({
      ...user,
      [target.name]: target.value,
    });
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("Log in successful");

  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        value={user.username}
        onChange={handleChange}
        name="username"
        placeholder="Username"
        type="text"
        focus={true}
      />
      <Input
        value={user.password}
        onChange={handleChange}
        name="password"
        placeholder="Password"
        type="password"
        testRegex={passwordRegex}
      />
      <Button buttonText="Login"/>
    </form>
  );
};

export default Login;
