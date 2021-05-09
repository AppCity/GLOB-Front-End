import Proptypes from "prop-types";
/**
 * Input component
 * @param {*} label - String - Label to show on top of Input
 * @param {*} placeholder String - Placeholder to show on Input
 * @param {*} onChange Function - onChange handler
 * @param {*} value String - Value of Input
 * @param {*} required Bool - Field is required
 * @param {*} type String - Normal field or Password field
 * @param {*} minLength Number - Minimum length required
 * @returns
 */

import { useState } from "react";

//Components
import TextButton from "./TextButton";

const Input = ({
  label = "",
  placeholder = "",
  onChange = () => {},
  value = "",
  required = false,
  type = null,
  minLength = null,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <label className="text-xs text-gray-500">{label}</label>

      <div className="flex relative">
        {type === "password" && (
          <div className="flex absolute h-full items-center right-3">
            <TextButton
              title={!showPassword ? "Show" : "Hide"}
              onClick={() => setShowPassword(!showPassword)}
            />
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

        <div
          className={`${
            showBorder ? "opacity-100" : "opacity-0"
          } flex absolute h-px w-full bottom-0 bg-gradient-to-r from-yellow via-orange to-fucsia transition-opacity`}
        />
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
