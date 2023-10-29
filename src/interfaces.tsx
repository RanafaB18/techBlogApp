import { ChangeEventHandler } from "react";

export interface ISignup {
    username: string;
    email: string;
    password: string;
  }

  export interface ILogin {
    username: string;
    password: string;
  }

  export interface Input {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    type: string;
    placeholder: string;
    name: string;
    focus?: boolean;
    testRegex?: RegExp;
  }

  export type ErrorMessages = {
    email: string;
    password: string;
  };
