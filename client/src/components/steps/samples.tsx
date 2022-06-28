export type ItemProps = {
  title: string;
  subtitle?: string;
  active: boolean;
  disabled: boolean;
};
export const Steps1: React.FC = () => {
  const items: ItemProps[] = [
    {title: "01", active: true, disabled: false},
    {title: "02", active: false, disabled: true},
    {title: "03", active: false, disabled: true},
    {title: "04", active: false, disabled: true},
  ];

  return (
    <div className="relative steps-1">
      <div className="flex flex-wrap flex-row w-full mb-8">
        {items.map((item, key) => (
          <div
            key={key}
            className={`number flex w-1/4 items-center justify-center ${
              item.disabled ? "opacity-25 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
              //eslint-disable-next-line
              console.log(item);
            }}>
            <span
              className={`h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold z-10`}>
              {key + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Steps2: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "Step 1",
      subtitle: "Lorem ipsum dolor",
      active: true,
      disabled: false,
    },
    {
      title: "Step 2",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: true,
    },
    {
      title: "Step 3",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: true,
    },
    {
      title: "Step 4",
      subtitle: "Lorem ipsum dolor",
      active: false,
      disabled: true,
    },
  ];

  return (
    <div className="flex flex-col w-full mb-8 lg:flex-wrap lg:flex-row">
      {items.map((item, key) => (
        <div
          key={key}
          className={`flex w-full lg:w-1/4 items-center p-2 justify-start ${
            item.disabled
              ? "opacity-25 cursor-not-allowed"
              : "cursor-pointer bg-blue-500 text-white"
          }`}
          onClick={() => {
            //eslint-disable-next-line
            console.log(item);
          }}>
          <div className="shrink-0 w-8">
            <span
              className={`h-8 w-8 ${
                item.active
                  ? "bg-white text-gray-900"
                  : "bg-blue-500 text-white"
              } flex items-center justify-center rounded-full text-lg font-display font-bold`}>
              {key + 1}
            </span>
          </div>
          <div className="flex flex-col w-full ml-4">
            <div className="text-sm font-bold">{item.title}</div>
            <div className="text-sm">{item.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export const Steps3: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "Step 1",
      active: true,
      disabled: false,
    },
    {
      title: "Step 2",
      active: false,
      disabled: true,
    },
    {
      title: "Step 3",
      active: false,
      disabled: true,
    },
    {
      title: "Step 4",
      active: false,
      disabled: true,
    },
  ];

  return (
    <div className="flex flex-col w-full mb-8 lg:flex-wrap lg:flex-row">
      {items.map((item, key) => (
        <div
          key={key}
          className="flex items-center justify-center w-full lg:w-1/4">
          <button
            disabled={item.disabled}
            onClick={() => {
              //eslint-disable-next-line
              console.log(item.title);
            }}
            className={`font-bold uppercase text-xs px-4 py-2 w-full ${
              item.active
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-900"
            }`}
            type="button">
            {item.title}
          </button>
        </div>
      ))}
    </div>
  );
};
