import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { AnimatePresence, motion } from "framer-motion";
import { variant } from "../constants";

const Register = () => {
  const [toggle, setToggle] = useState(true);
  function showSignUp() {
    setToggle(true);
  }
  function showLogin() {
    setToggle(false);
  }
  return (
    <>
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex flex-col px-8 py-6 w-96 h-[440px] shadow-2xl shadow-black">
          <div className="flex gap-5">
            <button
              className={`font-bold text-2xl ${toggle ? "text-white" : "text-gray-400" }`}
              onClick={showSignUp}
            >
              Sign Up
            </button>
            <button
              className={`font-bold text-2xl ${!toggle ? "text-white" : "text-gray-400" }`}
              onClick={showLogin}
            >
              Login
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center w-11/12 mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              {toggle ? (
                <motion.div
                  key={"signup"}
                  variants={variant}
                  initial="signHidden"
                  animate="signVisible"
                  exit="signExit"
                >
                  <SignUp />
                </motion.div>
              ) : (
                <motion.div
                  key={"login"}
                  variants={variant}
                  initial="loginHidden"
                  animate="loginVisible"
                  exit="loginExit"
                >
                  <Login />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
