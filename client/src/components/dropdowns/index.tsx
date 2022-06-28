import clsx from "clsx";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {ChevronDownIcon} from "@heroicons/react/solid";

export type Placement = "right" | "left";

export type DropdownProps = {
  buttonText: string;
  placement: Placement;
  items: React.ReactNode[];
};

const Dropdown: React.FC<DropdownProps> = ({buttonText, placement, items}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          {({open}) => (
            <>
              <span>{buttonText}</span>
              <ChevronDownIcon
                className={clsx(
                  "w-5 h-5 ml-2 duration-300 ease-in-out",
                  open && "rotate-0",
                  !open && "-rotate-180"
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
        <Menu.Items
          className={clsx(
            "absolute w-56 mt-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none",
            placement === "left" && "left-0 origin-top-left",
            placement === "right" && "right-0 origin-top-right"
          )}>
          <div className="px-1 py-1">
            {items.map((item, i) => (
              <Menu.Item key={i}>
                {({active}) => (
                  <button
                    className={`${
                      active
                        ? "bg-blue-500 text-white"
                        : "text-gray-900 dark:text-white"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
