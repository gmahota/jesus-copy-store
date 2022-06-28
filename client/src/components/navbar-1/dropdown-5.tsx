import AccountLinks from "components/navbar-1/account-links";
import Image from "next/image";
import clsx from "clsx";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import profilePic from "components/navbar-1/m1.png";

const Dropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative hidden lg:inline-block text-left">
      <div>
        <Menu.Button className="focus:outline-none">
          <div className="relative w-8 h-8">
            <Image
              src={profilePic}
              alt="avatar"
              className="rounded-full shadow-lg"
            />
            <span className="absolute inline-flex items-center justify-center w-4 h-4 p-0 font-bold leading-none text-center text-white bg-red-500 rounded-full top-[-6px] right-[-6px] text-xs ring-2 ring-white">
              2
            </span>
          </div>
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
            "absolute w-[192px] bg-white dark:bg-gray-800 shadow-lg divide-y divide-gray-100 dark:divide-gray-700 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none",
            "right-0 origin-top-right"
          )}>
          <AccountLinks />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
