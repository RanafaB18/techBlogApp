import { useEffect, useState } from "react";

const useInputValidation = (testRegex: RegExp | undefined, value: string) => {
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    if (testRegex?.test(value)) {
      setIsError(false)
    } else {
      setIsError(true)
    }
  }, [value]);

  return isError;
};

export default useInputValidation;
