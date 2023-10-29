const Button = ({ buttonText }: { buttonText: string }) => {
  return (
    <button className="text-white py-1 px-6 mt-3 bg-green-700 w-fit mx-auto rounded-full">
      {buttonText}
    </button>
  );
};

export default Button;
