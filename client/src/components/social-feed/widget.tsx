export type WidgetProps = {
  children: React.ReactNode;
};

const Widget: React.FC<WidgetProps> = ({children}) => {
  return (
    <div className="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      {children}
    </div>
  );
};

export default Widget;
