const Button = ({ children, ...props }: any) => {
  return (
    <div className="max-w-max">
      <button className="font-sans text-white text-[18px] bg-transparent px-16 py-2 pb-[9px] rounded-full border-2 border-white" {...props}>
      {children}
      </button>
    </div>
  );
};

export default Button;
