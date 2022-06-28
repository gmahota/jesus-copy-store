import {FiSettings, FiLayers, FiSend, FiActivity} from "react-icons/fi";

export type ItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Item: React.FC<ItemProps> = ({title, description, icon}) => (
  <div className="w-full lg:w-1/2 flex flex-row items-start justify-start mb-8 px-2">
    <div className="shrink-0">
      <div className="flex items-center justify-center w-12 h-12 text-blue-500 bg-white rounded-md">
        {icon}
      </div>
    </div>
    <div className="mx-4">
      <h5 className="mb-1 text-lg font-bold leading-6">{title}</h5>
      <p className="text-base leading-6">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => (
  <div className="flex flex-row flex-wrap items-center justify-center pt-12 mb-4">
    <Item
      title="Zero Configuration"
      description="Automatic code splitting, filesystem based routing, hot code reloading and universal rendering."
      icon={<FiSettings className="text-3xl stroke-current" />}
    />
    <Item
      title="Ready for production"
      description="Optimized for a smaller build size, faster development compilation and easy to deploy"
      icon={<FiSend className="text-3xl stroke-current" />}
    />
    <Item
      title="100+ widgets and components"
      description="Lots of widgets and components to help you develop your application faster"
      icon={<FiLayers className="text-3xl stroke-current" />}
    />
    <Item
      title="SSR ready"
      description="Statically generated and server-rendered React ready to deploy to your server"
      icon={<FiActivity className="text-3xl stroke-current" />}
    />
  </div>
);
export default Features;
