import clsx from "clsx";
import {FiChevronDown} from "react-icons/fi";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import List1 from "components/navbar-1/list-1";

const Dropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative hidden lg:inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-center w-full px-4 py-2 text-xs font-bold uppercase focus:outline-none">
          {({open}) => (
            <>
              <span>Explore</span>
              <FiChevronDown
                className={clsx(
                  "w-4 h-4 mt-[-2px] ml-2 duration-300 ease-in-out",
                  !open && "rotate-0",
                  open && "-rotate-90"
                )}
                aria-hidden="true"
              />
            </>
          )}
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
        <Menu.Items className="absolute w-[512px] bg-white dark:bg-gray-800 shadow-lg divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none left-0 origin-top-left">
          <List1 />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
