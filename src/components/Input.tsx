import { useState } from "react";
import { Input } from "../interfaces";
import useInputValidation from "../hooks/inputValidation";
import InputInfo from "./InputInfo";

const Input = ({
  value,
  onChange,
  name,
  placeholder,
  type,
  focus = false,
  testRegex,
}: Input) => {
  const isError = useInputValidation(testRegex, value);
  const [focused, setFocused] = useState(focus)
  return (
    <div className="">
      <input
        className="outline-none caret-white text-white placeholder:text-white p-2 w-full bg-transparent border-b-2 border-white"
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
        name={name}
        required
        autoFocus={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {isError && focused && (
        <InputInfo name={name}/>
      )}
    </div>
  );
};

export default Input;
