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
 * @param {*} autofocus Boolean - Focus input on load
 * @param {*} error Boolean - Error state
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
  autoFocus=false,
  error=false,
  css=""
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showBorder, setShowBorder] = useState(false);


  return (
    <div className="flex flex-col w-full">
      <label className={`text-xs ${!error ? "text-gray-500" :"text-red-500"}`}>{label}</label>

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
          className={`w-full py-2 border-b ${!error ? "border-gray-300" : "border-red-500"} bg-transparent transition-all rounded-none focus:outline-none ${css}`}
          required={required}
          minLength={minLength}
          onFocus={() => setShowBorder(true)}
          onBlur={() => setShowBorder(false)}
          autoFocus={autoFocus}
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
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string,
  required: Proptypes.bool,
  type: Proptypes.string,
  minLength: Proptypes.number,
  autoFocus: Proptypes.bool,
  error: Proptypes.bool,
  css: Proptypes.string,

};

export default Input;
