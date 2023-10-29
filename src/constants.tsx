import { ErrorMessages } from "./interfaces";

export const variant = {
  signHidden: {
    opacity: 0,
    translateX: "-300px",
  },
  signExit: {
    translateX: "-300px",
    transition: {
      duration: 0.3,
    },
  },
  loginExit: {
    translateX: "300px",
    transition: {
      duration: 0.3,
    },
  },
  loginHidden: {
    opacity: 0,
    translateX: "300px",
  },
  signVisible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.3,
    },
  },
  loginVisible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$£!@#%*?&])[A-Za-z\d$£!@#%*?&]{8,}$/gm;

export const errorMessages: ErrorMessages = {
  email: "Invalid email.\nExample email: newuser@gmail.com",
  password:
    "Password must have\n1. At least 8 characters\n2. At least 1 uppercase letter\n3. At least 1 lowercase letter\n4. At least 1 symbol eg ! or $",
};
