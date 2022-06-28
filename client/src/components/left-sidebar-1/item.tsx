import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {FiChevronRight} from "react-icons/fi";
import type {NavigationState} from "slices/navigation";

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
        <a className={`left-sidebar-item ${active ? "active" : ""}`}>
          {icon}
          <span className="title">{title}</span>
          {badge && (
            <span className={`badge badge-circle badge-sm ${badge.color}`}>
              {badge.text}
            </span>
          )}
        </a>
      </Link>
    );
  }
  return (
    <button
      onClick={() => setHidden(!hidden)}
      className={`left-sidebar-item ${active ? "active" : ""} ${
        hidden ? "hidden-sibling" : "open-sibling"
      }`}>
      {icon}
      <span className="title">{title}</span>
      {badge && (
        <span className={`badge badge-circle badge-sm ${badge.color}`}>
          {badge.text}
        </span>
      )}
      <FiChevronRight className="ml-auto arrow" />
    </button>
  );
};

export default Item;
