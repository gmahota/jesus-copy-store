import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {FiMoreVertical} from "react-icons/fi";
import Link, {LinkProps} from "next/link";

const CustomLink: React.FC<
  LinkProps & {className: string; children: React.ReactNode}
> = (props) => {
  const {href, children, ...rest} = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export type ItemProps = {
  href: string;
  name: string;
};

const Dropdown: React.FC = () => {
  const items: ItemProps[] = [
    {
      href: "/",
      name: "Today",
    },
    {
      href: "/",
      name: "This week",
    },
    {
      href: "/",
      name: "This month",
    },
    {
      href: "/",
      name: "This year",
    },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex items-center justify-center w-8 h-8 text-gray-900 bg-white rounded-full dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
          <FiMoreVertical
            className="text-lg stroke-current"
            aria-hidden="true"
          />
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
        <Menu.Items className="absolute right-0 w-56 mt-2 text-gray-900 bg-white shadow-lg dark:bg-gray-700 dark:text-white divide-y divide-gray-100 dark:divide-gray-600 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none origin-top-right">
          <div className="px-1 py-1">
            {items.map((item, i) => (
              <Menu.Item key={i}>
                {({active}) => (
                  <CustomLink
                    href={item.href}
                    className={`${
                      active
                        ? "bg-blue-500 text-white"
                        : "text-gray-900 bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    } group flex items-center w-full px-2 py-2 text-sm`}>
                    {item.name}
                  </CustomLink>
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
