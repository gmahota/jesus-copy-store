import {
  FiHome,
  FiUser,
  FiMessageSquare,
  FiSettings,
  FiMapPin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

export type ItemProps = {
  title: string;
  icon: React.ReactNode;
};

const Apps: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "Home",
      icon: <FiHome className="stroke-current text-xl text-indigo-700" />,
    },
    {
      title: "Account",
      icon: <FiUser className="text-xl text-blue-700 stroke-current" />,
    },
    {
      title: "Comments",
      icon: (
        <FiMessageSquare className="text-xl text-orange-500 stroke-current" />
      ),
    },
    {
      title: "Settings",
      icon: <FiSettings className="text-xl text-green-700 stroke-current" />,
    },
    {
      title: "Maps",
      icon: <FiMapPin className="text-xl text-red-500 stroke-current" />,
    },
    {
      title: "Twitter",
      icon: <FiTwitter className="text-xl stroke-current text-twitter" />,
    },
    {
      title: "Facebook",
      icon: <FiFacebook className="text-xl stroke-current text-facebook" />,
    },
    {
      title: "Instagram",
      icon: <FiInstagram className="text-xl stroke-current text-instagram" />,
    },
    {
      title: "LinkedIn",
      icon: <FiLinkedin className="text-xl stroke-current text-linkedin" />,
    },
  ];
  return (
    <>
      <div className="w-full p-2 text-xs font-bold tracking-wider text-gray-900 uppercase bg-white dark:text-white dark:bg-gray-800">
        My apps
      </div>
      <div className="flex flex-wrap text-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-1/3 h-20 text-gray-900 bg-white space-y-1 dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            {item.icon}
            <span className="text-xs">{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Apps;
