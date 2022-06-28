import {FiBell} from "react-icons/fi";
import List2 from "./list-2";

import clsx from "clsx";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";

const Dropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative hidden lg:inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-center w-full px-4 py-2 text-xs font-bold uppercase focus:outline-none">
          <FiBell size={18} />
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
          <List2 />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
