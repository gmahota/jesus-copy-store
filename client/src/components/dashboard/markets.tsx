import Avatars from "components/dashboard/avatars";
import Flag from "components/flag";
import {formatNumber} from "functions/numbers";
import {ProgressBar} from "components/progress-bars";
import data from "json/dashboard-table.json";

export type DataProps = {
  country: {
    code: string;
    name: string;
    region: string;
  };
  members: string[];
  progress: {
    color: string;
    value: number;
  };
  population: number;
};

const Markets: React.FC = () => {
  const items: DataProps[] = data;
  return (
    <table className="w-full text-left table-auto">
      <thead>
        <tr>
          <th className="px-3 py-2 text-xs font-medium tracking-wider uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
            Country
          </th>
          <th className="px-3 py-2 text-xs font-medium tracking-wider uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
            Active users
          </th>
          <th className="px-3 py-2 text-xs font-medium tracking-wider uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
            Team members
          </th>
          <th className="px-3 py-2 text-xs font-medium tracking-wider uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
            Progress
          </th>
        </tr>
      </thead>
      <tbody>
        {items.slice(0, 8).map((item, i) => (
          <tr key={i}>
            <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
              <Flag size="sm" code={item.country.code} />
              <span className="ml-2">{item.country.name}</span>
            </td>
            <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
              <span>{formatNumber(item.population)}</span>
            </td>
            <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
              <Avatars items={item.members} />
            </td>
            <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
              <div className="flex flex-col w-full">
                <div className="flex flex-row items-center justify-around">
                  <ProgressBar
                    width={item.progress.value}
                    color={item.progress.color}
                  />
                  <span className="ml-1 text-gray-500">
                    {item.progress.value}%
                  </span>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Markets;
