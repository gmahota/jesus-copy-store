import {useState} from "react";

export type TabProps = {
  index: number;
  title: React.ReactNode;
  content: React.ReactNode;
  active?: boolean;
};

export type TabsProps = {
  tabs: TabProps[];
};

export const VerticalTabs: React.FC<TabsProps> = ({tabs}) => {
  const [openTab, setOpenTab] = useState<number>(0);

  return (
    <div className="flex flex-row items-start justify-start space-x-4">
      <div className="shrink-0">
        <div className="flex flex-col flex-wrap space-y-1">
          {tabs.map((tab, key) => (
            <button
              key={key}
              onClick={() => {
                setOpenTab(tab.index);
              }}
              className={`font-bold uppercase text-xs p-4 rounded-lg flex flex-col items-center justify-center w-24 ${
                openTab === tab.index
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-white dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-blue-50"
              }`}
              type="button">
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className="ml-0">
        {tabs.map((tab, key) => (
          <div
            key={key}
            className={`w-full ${openTab !== tab.index ? "hidden" : "block"}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Pills: React.FC<TabsProps> = ({tabs}) => {
  const [openTab, setOpenTab] = useState<number>(0);

  return (
    <div className="flex flex-wrap w-full space-y-2">
      <div className="flex flex-row lg:flex-wrap lg:space-x-1 overflow-x-auto">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index);
              }}
              className={`font-bold uppercase text-xs p-4 rounded-lg flex flex-col items-center justify-center w-24 ${
                openTab === tab.index
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-white dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-blue-50"
              }`}
              type="button">
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`w-full ${openTab !== tab.index ? "hidden" : "block"}`}>
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export const IconTabs: React.FC<TabsProps> = ({tabs}) => {
  const [openTab, setOpenTab] = useState<number>(0);

  return (
    <div className="flex flex-wrap w-full space-y-2">
      <div className="flex flex-row overflow-x-auto lg:flex-wrap lg:space-x-1">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index);
              }}
              className={`font-bold uppercase text-xs p-4 rounded-lg flex flex-row items-center justify-around ${
                openTab === tab.index
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-white dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-blue-50"
              }`}
              type="button">
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`w-full ${openTab !== tab.index ? "hidden" : "block"}`}>
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export const UnderlinedTabs: React.FC<TabsProps> = ({tabs}) => {
  const [openTab, setOpenTab] = useState<number>(0);

  return (
    <div className="flex flex-wrap w-full space-y-2">
      <div className="flex flex-row overflow-x-auto lg:flex-wrap lg:space-x-1">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index);
              }}
              className={
                openTab === tab.index
                  ? "font-bold uppercase text-xs p-4 border-b-2 border-blue-500 hover:border-blue-500 dark:text-white text-gray-900"
                  : "font-bold uppercase text-xs p-4 border-b-2 border-white dark:border-gray-900 hover:border-blue-500"
              }
              type="button">
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`w-full ${openTab !== tab.index ? "hidden" : "block"}`}>
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export const DefaultTabs: React.FC<TabsProps> = ({tabs}) => {
  const [openTab, setOpenTab] = useState<number>(0);

  return (
    <div className="flex flex-wrap w-full space-y-2">
      <div className="flex flex-row overflow-x-auto lg:flex-wrap lg:space-x-1">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index);
              }}
              className={`font-bold uppercase text-xs p-4 ${
                openTab === tab.index
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-white dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-blue-50"
              }`}
              type="button">
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`w-full ${openTab !== tab.index ? "hidden" : "block"}`}>
          {tab.content}
        </div>
      ))}
    </div>
  );
};
