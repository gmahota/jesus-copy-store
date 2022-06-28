import {FiTag} from "react-icons/fi";

export type LabelProps = {
  title: string;
  icon: React.ReactNode;
};

const Labels: React.FC = () => {
  const items: LabelProps[] = [
    {
      title: "Documents",
      icon: <FiTag size={18} className="stroke-current text-teal-500" />,
    },
    {
      title: "Work",
      icon: <FiTag size={18} className="text-yellow-500 stroke-current" />,
    },
    {
      title: "Clients",
      icon: <FiTag size={18} className="text-pink-500 stroke-current" />,
    },
    {
      title: "Projects",
      icon: <FiTag size={18} className="text-indigo-500 stroke-current" />,
    },
  ];
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="flex flex-row items-center justify-start w-full p-2 text-xs font-normal tracking-wider uppercase">
        Labels
      </div>
      {items.map((item, i) => (
        <div key={i} className="flex items-center justify-start p-2 space-x-2">
          <div className="shrink-0">{item.icon}</div>
          <div className="text-sm">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Labels;
