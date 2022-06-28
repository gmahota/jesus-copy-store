import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import flags from "json/navbar-flags.json";
import Link from "next/link";

const Dropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative hidden lg:inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-center w-full px-4 py-2 text-xs font-bold uppercase focus:outline-none">
          <span className="text-base flag-icon flag-icon-us"></span>
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
        <Menu.Items className="absolute w-[256px] bg-white dark:bg-gray-800 shadow-lg divide-y divide-gray-100 dark:divide-gray-700 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none right-0 origin-top-right">
          <div className="w-full p-2 text-xs font-bold tracking-wider text-gray-900 uppercase bg-white dark:text-white dark:bg-gray-800">
            Change country
          </div>
          <div className="flex flex-wrap">
            {flags.map((item, i) => (
              <Link href="/" key={i}>
                <a className="flex items-center justify-start w-1/2 p-2 text-sm text-gray-900 bg-white space-x-2 dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span
                    className={`text-base flag-icon flag-icon-${item.code}`}></span>
                  <span>{item.name}</span>
                </a>
              </Link>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
