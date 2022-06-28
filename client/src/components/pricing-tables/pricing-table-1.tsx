import {FiCheck} from "react-icons/fi";
import {Switch} from "./switch";
import data from "./data.json";

export type PricingTableProps = {
  title: string;
  price: number;
  items: {
    title: string;
    color: string;
  }[];
};
const PricingTable: React.FC<PricingTableProps> = ({title, price, items}) => {
  return (
    <div className="flex flex-col items-center justify-end w-full mb-8 lg:mb-0">
      <div className="flex flex-row items-center justify-center h-16">
        <span className="text-gray-500">$</span>
        <span className="text-6xl text-blue-500">{price}</span>
        <span className="text-gray-500">/mo</span>
      </div>
      <div className="flex flex-row items-center justify-center h-16 text-base font-bold uppercase">
        {title}
      </div>
      <>
        {items.map((item, i: number) => (
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
      <div className="flex flex-row items-center justify-center w-full mt-8">
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
        <div className="w-full my-4">
          <Switch name="type" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-2 lg:w-1/4">
          <PricingTable {...data[0]} />
        </div>
        <div className="w-full p-2 lg:w-1/4">
          <PricingTable {...data[1]} />
        </div>
        <div className="w-full p-2 lg:w-1/4">
          <PricingTable {...data[2]} />
        </div>
        <div className="w-full p-2 lg:w-1/4">
          <PricingTable {...data[3]} />
        </div>
      </div>
    </>
  );
};
export default Index;
