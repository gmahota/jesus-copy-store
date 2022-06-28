import Link from "next/link";

import {
  FiHome,
  FiChevronRight,
  FiChevronsRight,
  FiArrowRight,
} from "react-icons/fi";

export type BreadcrumbItemProps = {
  title: string;
  url: string;
  last: boolean;
};

export type BreadcrumbProps = {
  home?: boolean;
  icon?: string;
  items: BreadcrumbItemProps[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  home = false,
  icon = "arrow",
  items,
}) => (
  <nav className="w-full flex">
    <ol className="flex flex-row items-center justify-start list-none">
      {home && (
        <li className="flex items-center mr-2">
          <FiHome className="w-3 h-3 stroke-current" />
        </li>
      )}

      {items.map((item, i) => (
        <li className="flex items-center" key={i}>
          <Link href={item.url}>
            <a className="mr-2">{item.title}</a>
          </Link>

          {!item.last && icon === "arrow" && (
            <FiArrowRight className="w-3 h-3 mr-2 stroke-current" />
          )}

          {!item.last && icon === "chevron" && (
            <FiChevronRight className="w-3 h-3 mr-2 stroke-current" />
          )}

          {!item.last && icon === "chevrons" && (
            <FiChevronsRight className="w-3 h-3 mr-2 stroke-current" />
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
