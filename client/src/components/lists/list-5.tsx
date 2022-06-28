import {FaBox} from "react-icons/fa";
import {CircularBadge} from "components/badges";

export type ItemProps = {
  title: string;
  img: string;
  sentence: string;
  description: string;
  timeago: string;
};

export type ListProps = {
  items: ItemProps[];
};

const List5: React.FC<ListProps> = ({items}) => (
  <div className="w-full mb-4">
    {items.map((item, i) => (
      <div className="flex items-center justify-start p-2 space-x-4" key={i}>
        <div className="shrink-0 w-8">
          <img
            src={item.img}
            alt="media"
            className={`h-8 w-full shadow-lg rounded-full ring`}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="text-sm font-bold">{item.title}</div>
          <div className="text-sm text-gray-500">{item.description}</div>
          <div className="flex flex-row items-center justify-start">
            <FaBox size={16} className="stroke-current text-gray-300" />
            <div className="ml-2 text-gray-300">{item.timeago}</div>
          </div>
        </div>
        <div className="shrink-0">
          <CircularBadge size="sm" color="bg-indigo-500 text-white">
            1
          </CircularBadge>
        </div>
      </div>
    ))}
  </div>
);

export default List5;
