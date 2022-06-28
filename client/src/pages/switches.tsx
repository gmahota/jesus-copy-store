import SectionTitle from "components/section-title";
import Switch from "components/switch";
import Widget from "components/widget";

const items = {
  title: "API Access",
  description: "Enable access",
  initialState: false,
};

const Index: React.FC = () => {
  const colors = [
    {
      bgColor: "bg-gray-500",
      activeBgColor: "bg-gray-800",
    },
    {
      bgColor: "bg-red-500",
      activeBgColor: "bg-red-800",
    },
    {
      bgColor: "bg-yellow-500",
      activeBgColor: "bg-yellow-800",
    },
    {
      bgColor: "bg-green-500",
      activeBgColor: "bg-green-800",
    },
    {
      bgColor: "bg-blue-500",
      activeBgColor: "bg-blue-800",
    },
    {
      bgColor: "bg-indigo-500",
      activeBgColor: "bg-indigo-800",
    },
    {
      bgColor: "bg-purple-500",
      activeBgColor: "bg-purple-800",
    },
    {
      bgColor: "bg-pink-500",
      activeBgColor: "bg-pink-800",
    },
  ];
  return (
    <>
      <SectionTitle title="Forms" subtitle="Switches" />

      <Widget
        title="Switch colors"
        description={
          <span>
            Use the <code>&lt;Switch /&gt;</code> component with the{" "}
            <code>color</code> prop to change the <code>Switch</code> color
          </span>
        }>
        <div className="flex flex-col w-full lg:flex-row lg:flex-wrap">
          {colors.map((color, i) => (
            <div
              className="flex items-center justify-between w-full mb-2 lg:w-1/4 lg:pr-4 lg:mb-2"
              key={i}>
              <Switch {...color} {...items} />
            </div>
          ))}
        </div>
      </Widget>
    </>
  );
};
export default Index;
