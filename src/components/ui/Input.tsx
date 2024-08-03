import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: any;
  onChange?: (...args: any[]) => any;
  onClick?: (...args: any[]) => any;
  label?: any;
  icons?: any;
  error?: any;
}

const Input: React.FC<InputProps> = (props) => {
  const { className, label, onChange, icons, error, onClick, ...rest } = props;



  return (
    <>
      <form className="h-[50px] w-full rounded-sm relative font-normal outline-none bg-none placeholder:text-black-700 text-sm">
        <div className="absolute text-gray-400 top-[14px] left-[10px]">
          {icons}
        </div>
        <input
          className="h-[50px] w-[300px] text-black rounded-sm font-normal outline-none pl-10 bg-none placeholder:text-black-700 text-sm"
          onChange={onChange}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          required
          {...rest}
        />
      </form>
    </>
  );
};

export default Input;
