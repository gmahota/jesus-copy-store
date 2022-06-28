import {FiBox} from "react-icons/fi";
import SectionTitle from "components/section-title";
import Widget from "components/widget";
import {formatCurrency} from "functions/numbers";

const Index: React.FC = () => {
  const items = [
    {name: "Creative Design", hours: 80, rate: 40},
    {name: "Front end development", hours: 120, rate: 60},
    {name: "API development", hours: 80, rate: 40},
  ];
  const account = {
    bank: "Barclays UK",
    account: "#13244657",
    date: "Jan 17, 2021",
  };

  return (
    <>
      <SectionTitle title="Pages" subtitle="Invoice" />
      <Widget>
        <div className="p-4">
          <div className="flex flex-row items-center justify-between mb-16">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-blue-500 uppercase">
                Invoice
              </span>
              <span className="text-gray-500">#16274619</span>
            </div>
            <div className="flex flex-row items-center justify-start text-base font-bold tracking-wider uppercase whitespace-nowrap">
              <div className="flex flex-col items-center justify-start text-blue-500 lg:flex-row space-y-1 lg:space-y-0 space-x-2">
                <FiBox size={28} className="text-blue-500 stroke-current" />
                <span>Logo</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mb-16">
            <div className="flex flex-col">
              <span className="font-bold">Invoice to:</span>
              <span className="text-gray-500">John Doe</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Date:</span>
              <span className="text-gray-500">Dec 17, 2021</span>
            </div>
          </div>
          <table className="hidden w-full mb-16 text-left table-auto lg:table">
            <thead>
              <tr>
                <th className="py-2 pr-2 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                  Description
                </th>
                <th className="px-2 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                  Hours
                </th>
                <th className="px-2 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                  Rate
                </th>
                <th className="py-2 pl-2 text-xs font-medium tracking-wider text-right text-gray-500 uppercase leading-4">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="py-2 pr-2 font-bold whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap">{item.hours}</td>
                  <td className="px-2 py-2 whitespace-nowrap">
                    {formatCurrency(item.rate)}
                  </td>
                  <td className="py-2 pl-2 text-right whitespace-nowrap">
                    {formatCurrency(item.rate * item.hours)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="block lg:hidden">
            {items.map((item, i) => (
              <div className="mb-4" key={i}>
                <div className="font-bold">{item.name}</div>
                <table className="w-full text-left table-auto">
                  <tbody>
                    <tr>
                      <td className="py-2 pr-3 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                        Hours
                      </td>
                      <td className="py-2 pl-3 whitespace-nowrap">
                        {item.hours}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                        Rate
                      </td>
                      <td className="py-2 pl-3 whitespace-nowrap">
                        {formatCurrency(item.rate)}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                        Amount
                      </td>
                      <td className="py-2 pl-3 whitespace-nowrap">
                        {formatCurrency(item.rate * item.hours)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-12">
            <div className="sm:col-span-6 space-y-2">
              <div className="font-bold">Payment details</div>
              <table className="w-full text-left table-auto">
                <tbody>
                  <tr>
                    <td className="py-2 pr-3 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                      Bank
                    </td>
                    <td className="py-2 pl-3 whitespace-nowrap">
                      {account.bank}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                      Account
                    </td>
                    <td className="py-2 pl-3 whitespace-nowrap">
                      {account.account}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 text-xs font-medium tracking-wider text-gray-500 uppercase leading-4">
                      Due date
                    </td>
                    <td className="py-2 pl-3 whitespace-nowrap">
                      {account.date}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sm:col-span-6">
              <div className="flex flex-col w-full text-left md:text-right space-y-2">
                <span className="font-bold">Total amount</span>
                <span className="text-4xl font-bold text-blue-500">
                  $20,220
                </span>
                <span className="text-gray-500">VAT free</span>
              </div>
            </div>
          </div>
        </div>
      </Widget>
    </>
  );
};
export default Index;
