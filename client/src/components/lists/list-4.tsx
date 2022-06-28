export type ItemProps = {
  title: string;
  img: string;
  sentence: string;
};

export type ListProps = {
  items: ItemProps[];
};

const List4: React.FC<ListProps> = ({items}) => (
  <div className="w-full mb-4">
    {items.map((item, i) => (
      <div className="flex items-start justify-start p-2 space-x-4" key={i}>
        <div className="shrink-0 w-8">
          <span className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-teal-500 rounded-full font-display">
            AB
          </span>
        </div>
        <div className="flex flex-col w-full">
          <div className="text-sm font-bold">{item.title}</div>
          <div className="text-sm">{item.sentence}</div>
        </div>
        <div className="shrink-0">
          <span className="text-xs text-gray-500">2 days ago</span>
        </div>
      </div>
    ))}
  </div>
);

export default List4;
