import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {FiChevronRight} from "react-icons/fi";
import type {NavigationState} from "slices/navigation";
import {CircularBadge} from "components/badges";

type ItemContentProps = {
  icon?: React.ReactNode;
  title: string;
  badge?: {
    color: string;
    text: string | number;
  };
};
const ItemContent: React.FC<ItemContentProps> = ({icon, title, badge}) => (
  <>
    <span className="left-sidebar-icon">{icon}</span>
    <span className="title">{title}</span>
    {badge && (
      <CircularBadge size="sm" color={badge.color} classNames="mr-auto ml-3">
        {badge.text}
      </CircularBadge>
    )}
  </>
);

const Item: React.FC<NavigationState> = ({url, icon, title, badge, items}) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const router = useRouter();
  const {pathname} = router;
  let active = pathname === url ? true : false;
  if (pathname === "/" && url === "/dashboard") {
    active = true;
  }
  if (pathname === "/" && url !== "/dashboard") {
    active = false;
  }
  if (items.length === 0) {
    return (
      <Link href={url as string}>
        <a
          className={`left-sidebar-item flex flex-row items-center justify-items-start w-full h-10 truncate whitespace-nowrap ${
            active ? "active" : ""
          }`}>
          <ItemContent icon={icon} title={title} badge={badge} />
        </a>
      </Link>
    );
  }
  return (
    <button
      onClick={() => setHidden(!hidden)}
      className={`left-sidebar-item relative flex flex-row items-center justify-start w-full h-10 truncate whitespace-nowrap ${
        active ? "active" : ""
      } ${hidden ? "hidden-sibling" : "open-sibling"}`}>
      <ItemContent icon={icon} title={title} badge={badge} />
      <FiChevronRight size={14} className="ml-auto -mr-2 arrow" />
    </button>
  );
};

export default Item;
