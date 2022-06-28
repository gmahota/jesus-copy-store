import Link from "next/link";
import {FiInbox, FiMail, FiBriefcase, FiFile, FiTrash2} from "react-icons/fi";
import {CircularBadge} from "components/badges";

export type BadgeProps = {
  total: number;
  color: string;
};

export type ItemProps = {
  url: string;
  icon: React.ReactNode;
  iconColor?: string;
  name: string;
  badge?: BadgeProps;
};
const Links: React.FC = () => {
  const items: ItemProps[] = [
    {
      url: "/inbox",
      icon: <FiInbox size={18} />,
      name: "Inbox",
      badge: {
        total: 2,
        color: "bg-red-500 text-white",
      },
    },
    {
      url: "/inbox",
      icon: <FiMail size={18} />,
      iconColor: "default",
      name: "Sent",
    },
    {
      url: "/inbox",
      icon: <FiBriefcase size={18} />,
      name: "Important",
      badge: {
        total: 2,
        color: "bg-blue-500 text-white",
      },
    },
    {
      url: "/inbox",
      icon: <FiFile size={18} />,
      name: "Drafts",
    },
    {
      url: "/inbox",
      icon: <FiFile size={18} />,
      name: "Tags",
    },
    {
      url: "/inbox",
      icon: <FiTrash2 size={18} />,
      name: "Trash",
    },
  ];
  return (
    <div className="flex flex-col w-full mb-4">
      {items.map((item, i) => (
        <Link href={item.url} key={i}>
          <a className="flex items-center justify-start w-full p-2 text-sm">
            {item.icon}
            <span className="ml-2">{item.name}</span>
            {item?.badge && (
              <span className="ml-auto">
                <CircularBadge size="sm" color={item.badge.color}>
                  {item.badge.total}
                </CircularBadge>
              </span>
            )}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Links;
