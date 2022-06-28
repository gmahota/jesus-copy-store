import items from "json/timelines.json";

export const Timeline1: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {items.map((item, i) => (
        <div className="flex relative justify-start items-start" key={i}>
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none dark:bg-gray-800"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center shrink-0 w-6 h-6 text-sm font-medium text-white bg-blue-500 rounded-full">
            {item.index}
          </div>
          <div className="flex flex-col items-start flex-grow pb-4">
            <div className="flex items-start justify-start px-4">
              <div className="flex flex-col w-full">
                <div className="text-sm font-bold">{item.title}</div>
                <div className="text-sm">{item.sentence}</div>
                <div className="text-sm">{item.timeago}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
