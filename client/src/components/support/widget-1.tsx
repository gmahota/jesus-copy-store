export type WidgetProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const Widget1: React.FC<WidgetProps> = ({title, description, icon}) => (
  <div className="flex items-center justify-start w-full p-2 space-x-4">
    <div className="shrink-0 w-8">{icon}</div>
    <div className="flex flex-col w-full">
      <div className="text-lg font-bold leading-6">{title}</div>
      <p className="text-base leading-6">{description}</p>
    </div>
  </div>
);

export default Widget1;
