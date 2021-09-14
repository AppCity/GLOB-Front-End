import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import EditIcon from "./Icons/EditIcon";
import DeleteIcon from "./Icons/DeleteIcon";

import SvgGradient from "./Icons/SvgGradient";
import { useRouter } from "next/router";

const MenuButton = ({ size, css, id }) => {
  const router = useRouter();

  const [isHover, setIsHover] = useState(false);
  const toggle = () => setIsHover(!isHover);

  const editHandler = () => {
    console.log("edit clicked", id);
    router.push({
      pathname: "/blogs/" + id,
      query: { id, editMode: true },
    });
  };

  const deleteHandler = () => {
    console.log("deleteHandler", id);
  };

  return (
    <Menu as="div" className="text-left ">
      {({ open }) => (
        <>
          <Menu.Button className="focus:outline-none px-2">
            <SvgGradient id="menuVerticalGradient" />
            <svg
              id="Capa_1"
              enable-background="new 0 0 515.555 515.555"
              viewBox="0 0 515.555 515.555"
              xmlns="http://www.w3.org/2000/svg"
              height={size ?? "30px"}
              width={size ?? "30px"}
              fill={open || isHover ? "url(#menuVerticalGradient)" : "#dbdfe3"}
              //   onClick={onClick}
              onMouseEnter={toggle}
              onMouseLeave={toggle}
              className={`${css} cursor-pointer transform hover:scale-125 ${
                open && "animate-bounceLarge"
              } transition-all`}
            >
              <path d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
              <path d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
              <path d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute -left-16 -top-2 flex origin-top-right dark:bg-black dark:bg-opacity-60 bg-white bg-opacity-90 rounded-lg shadow-lg z-50 p-2 space-x-5">
              <Menu.Item>
                <EditIcon size={15} onClick={editHandler} />
              </Menu.Item>

              <Menu.Item>
                <DeleteIcon size={15} onClick={deleteHandler} />
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MenuButton;
