import StarRating from "components/star-rating";
import {FiPaperclip} from "react-icons/fi";
import data from "json/inbox.json";

export type DataProps = {
  name: string;
  subject: string;
  attachment: boolean;
  date: string;
  checked: boolean;
};

const Inbox: React.FC = () => {
  const items: DataProps[] = data;
  return (
    <>
      <table className="w-full text-sm text-left table-auto lg:hidden">
        <tbody>
          {items.slice(0, 25).map((item, i) => (
            <tr
              key={i}
              className="divide-y divide-gray-100 dark:divide-gray-800">
              <td className="px-3 py-2 whitespace-nowrap">
                <span>
                  <StarRating initialRating={0} numberOfStars={1} />
                </span>
              </td>
              <td className="flex flex-col px-3 py-2 space-y-0">
                <div className="font-bold">{item.name}</div>

                <div>{item.subject}</div>
              </td>

              <td className="px-3 py-2 whitespace-nowrap">
                {item.attachment && (
                  <FiPaperclip size={14} className="stroke-current" />
                )}
              </td>
              <td className="px-3 py-2 font-bold whitespace-nowrap">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-full text-sm text-left lg:table table-auto hidden">
        <tbody>
          {items.slice(0, 25).map((item, i) => (
            <tr
              key={i}
              className="divide-y divide-gray-100 dark:divide-gray-800">
              <td className="px-3 py-2 whitespace-nowrap">
                <span>
                  <StarRating initialRating={0} numberOfStars={1} />
                </span>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">{item.name}</td>
              <td className="px-3 py-2 whitespace-nowrap">{item.subject}</td>

              <td className="px-3 py-2 whitespace-nowrap">
                {item.attachment && (
                  <FiPaperclip size={14} className="stroke-current" />
                )}
              </td>
              <td className="px-3 py-2 font-bold whitespace-nowrap">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Inbox;
