export type ItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Item: React.FC<ItemProps> = ({title, description, icon}) => (
  <div className="w-full flex flex-row lg:flex-col items-center justify-start space-y-2 p-4 lg:p-8 text-left lg:text-center">
    <div className="flex items-center justify-center shrink-0 w-12 h-16 text-blue-500 bg-white rounded-md lg:w-full">
      {icon}
    </div>
    <div className="flex flex-col px-4 lg:px-0">
      <div className="text-lg leading-6">{title}</div>
      <div className="text-base text-gray-500 dark:text-white leading-6">
        {description}
      </div>
    </div>
  </div>
);

export default Item;
