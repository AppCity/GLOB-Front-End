import { useState } from "react";
import Proptypes from "prop-types";


const Input = ({
  label,
  placeholder,
  onChange = () => {},
  value,
  dark,
  required,
  type,
  minLength,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showBorder, setShowBorder] = useState(false)

  return (
    <div className="flex flex-col w-full">
      <label className="text-xs text-gray-500">{label}</label>

      <div className="flex relative">
        {type === "password" && (
          <div className="flex absolute h-full items-center right-3">
            <span 
                className="cursor-pointer 
                text-gray-500 
                hover:text-black 
                transition-colors text-xs
                " 
                onClick={() => setShowPassword(!showPassword)}
            >
            Show
            </span>
          </div>
        )}
        <input
          type={type && !showPassword ? type : null}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className={`w-full py-2 border-b border-gray-300 bg-transparent transition-colors focus:outline-none`}
          required={required}
          minLength={minLength}
          onFocus={() => setShowBorder(true)}
          onBlur={() => setShowBorder(false)}
        />

        <div className={`${showBorder ? "opacity-100":"opacity-0"} flex absolute h-px w-full bottom-0 bg-gradient-to-r from-yellow via-orange to-fucsia transition-opacity`} />

      </div>
    </div>
  );
};

Input.propTypes = {
  label: Proptypes.string,
  placeholder: Proptypes.string,
  onChange: Proptypes.string.isRequired,
  value: Proptypes.string,
  required: Proptypes.bool,
  type: Proptypes.string,
  minLength: Proptypes.number,
};

export default Input;