import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";

const Dropdown = ({ error, label, data = [], css, setCategory, category }) => {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <label
        className={`text-xs ${
          !error ? "text-gray-500 dark:text-gray-300" : "text-red-500"
        }`}
      >
        {label}
      </label>
      <div className={`w-full relative ring-0 focus:outline-none ${css}`}>
        <Listbox value={category} onChange={(e) => setCategory(e.title)}>
          <div
            className={`flex relative py-2 border-b outline-none dark:text-white bg-transparent transition-all rounded-none
            ${!error ? "border-gray-300" : "border-red-500"}`}
          >
            <Listbox.Button
              className="ring-0 cursor-pointer focus:ring-0 outline-none focus:outline-none w-full text-left"
              //   onFocus={() => setShowBorder(true)}
              onBlur={() => setShowBorder(false)}
            >
              {category}
            </Listbox.Button>
            <div
              className={`${
                showBorder ? "opacity-100" : "opacity-0"
              } flex absolute h-px w-full bottom-0 bg-gradient-to-r from-yellow via-orange to-fucsia transition-opacity`}
            />
          </div>

          <Listbox.Options
            className="ring-0 flex flex-col "
            onFocus={() => setShowBorder(true)}
            // onBlur={() => setShowBorder(false)}
          >
            {data.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                // disabled={item.unavailable}
                className="outline-none focus:outline-none ring-0 hover:shadow-lg cursor-pointer py-2 rounded-md"
              >
                {item.title}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  );
};

export default Dropdown;
