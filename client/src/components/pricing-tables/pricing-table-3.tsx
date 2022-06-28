import {FiCheck} from "react-icons/fi";
import {FiActivity, FiUsers, FiBarChart2, FiBox} from "react-icons/fi";
import data from "./data.json";

export type PricingTableProps = {
  title: string;
  price: number;
  icon?: React.ReactNode;
  items: {
    title: string;
    color: string;
  }[];
};

const PricingTable: React.FC<PricingTableProps> = ({
  title,
  price,
  icon,
  items,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-end mb-8 lg:mb-0">
      <div className="flex flex-row items-center justify-center mb-4">
        {icon}
      </div>
      <div className="flex flex-row items-center justify-center mb-4 text-base font-bold uppercase">
        {title}
      </div>
      <>
        {items.slice(0, 5).map((item, i: number) => (
          <div
            className="flex flex-row items-center justify-start w-full h-10"
            key={i}>
            <div className="shrink-0 w-8">
              <FiCheck
                className={`stroke-current stroke-2 text-base ${item.color}`}
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="text-sm">{item.title}</div>
            </div>
          </div>
        ))}
      </>
      <div className="flex flex-row items-center justify-center h-10">
        <span className="text-gray-500">$</span>
        <span className="text-3xl text-blue-500">{price}</span>
        <span className="text-gray-500">/mo</span>
      </div>
      <div className="flex flex-row items-center justify-center w-full mt-4">
        <button className="px-6 py-3 text-base font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
          Sign up
        </button>
      </div>
    </div>
  );
};

const Index: React.FC = () => {
  const title = "Asperiores sint animi enim.";
  const description =
    "Hic fugiat aut reiciendis est esse ipsam officia cum tempore.";
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-lg">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="flex flex-col mb-4 lg:flex-row">
        <div className="w-full p-2 lg:w-1/4">
          <PricingTable
            {...data[0]}
            icon={
              <FiActivity size={36} className="text-blue-500 stroke-current" />
            }
          />
        </div>
        <div className="w-full p-2 lg:w-1/4">
          <PricingTable
            {...data[1]}
            icon={
              <FiBarChart2 size={36} className="text-blue-500 stroke-current" />
            }
          />
        </div>
        <div className="w-full p-2 lg:w-1/4">
          <PricingTable
            {...data[2]}
            icon={
              <FiUsers size={36} className="text-blue-500 stroke-current" />
            }
          />
        </div>
        <div className="w-full p-2 lg:w-1/4">
          <PricingTable
            {...data[3]}
            icon={<FiBox size={36} className="text-blue-500 stroke-current" />}
          />
        </div>
      </div>
    </>
  );
};
export default Index;
