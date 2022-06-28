import Link from "next/link";
import Inbox from "components/inbox";
import Categories from "components/inbox/categories";
import Labels from "components/inbox/labels";
import Links from "components/inbox/links";

const Sidebar: React.FC = () => (
  <div className="space-y-4">
    <Link href="/inbox">
      <a className="block w-full py-2 text-xs font-bold text-center text-white uppercase bg-blue-500 rounded hover:bg-blue-600 whitespace-nowrap">
        Compose email
      </a>
    </Link>
    <Links />
    <Categories />
    <Labels />
  </div>
);

const Index: React.FC = () => (
  <div className="w-full p-4 bg-white border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-800">
    <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-12">
      <div className="sm:col-span-4 lg:col-span-3">
        <Sidebar />
      </div>
      <div className="sm:col-span-8 lg:col-span-9">
        <div className="w-full">
          <Inbox />
        </div>
      </div>
    </div>
  </div>
);
export default Index;
