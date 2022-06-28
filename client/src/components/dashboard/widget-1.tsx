export type WidgetProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  right?: React.ReactNode;
};

const Widget: React.FC<WidgetProps> = ({title, description, right}) => {
  return (
    <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <div className="text-xs font-light text-gray-500 uppercase">
            {title}
          </div>
          <div className="text-xl font-bold">{description}</div>
        </div>
        {right}
      </div>
    </div>
  );
};

export default Widget;
