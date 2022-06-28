export type ItemProps = {
  title: string;
  subtitle: string;
};

const List2: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "5 new sales",
      subtitle: "Atque quaerat libero maiores vel.",
    },
    {
      title: "$3.000 in average profits",
      subtitle: "Aut aut ullam eum possimus.",
    },
    {
      title: "200 new tweets",
      subtitle: "Fugiat praesentium soluta amet non.",
    },
    {
      title: "2 new items",
      subtitle: "Fugit eaque molestias et aut.",
    },
    {
      title: "51 registered users",
      subtitle: "Labore aut voluptas molestias illo.",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item, i) => (
        <div
          key={i}
          className="w-full text-gray-900 bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="flex items-center justify-start p-2" key={i}>
            <div className="ml-2">
              <div className="text-sm font-bold">{item.title}</div>
              <div className="text-xs">{item.subtitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List2;
