import {FiMessageSquare} from "react-icons/fi";
import ProjectStatus from "./project-status";
import clsx from "clsx";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";

const Dropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative hidden text-left lg:inline-block">
      <div>
        <Menu.Button className="relative px-4 py-2 focus:outline-none">
          <FiMessageSquare size={18} />
          <span className="absolute inline-flex items-center justify-center w-4 h-4 p-0 font-bold leading-none text-center text-white bg-blue-500 rounded-full top-[-2px] right-[8px] text-xs ring-2 ring-white">
            5
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items
          className={clsx(
            "absolute w-[256px] bg-white dark:bg-gray-800 shadow-lg divide-y divide-gray-100 dark:divide-gray-700 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none",
            "right-0 origin-top-right"
          )}>
          <ProjectStatus />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
