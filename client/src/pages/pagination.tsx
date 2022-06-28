import SectionTitle from "components/section-title";
import Widget from "components/widget";
import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

const Numbers: React.FC = () => (
  <>
    {Array.from(Array(4).keys()).map((i) => {
      if (i === 2) {
        return (
          <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-white uppercase bg-blue-500 rounded-full hover:bg-blue-600 ">
            {i + 1}
          </button>
        );
      }
      return (
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
          {i + 1}
        </button>
      );
    })}
  </>
);
const Index: React.FC = () => (
  <>
    <SectionTitle title="UI Elements" subtitle="Pagination" />
    <Widget
      title="Pagination"
      description={
        <span>
          Use the following examples for pagination with numbers, icons and text
          labels
        </span>
      }>
      <div className="space-y-4">
        <div className="flex flex-row flex-wrap items-center space-x-2">
          <button className="px-4 py-2 text-xs font-bold text-gray-900 uppercase rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            Previous
          </button>
          <Numbers />
          <button className="px-4 py-2 text-xs font-bold text-gray-900 uppercase rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            Next
          </button>
        </div>

        <div className="flex flex-row flex-wrap items-center space-x-2">
          <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-gray-900 uppercase rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiChevronLeft className="mr-2 stroke-current" />
            <span>Previous</span>
          </button>
          <Numbers />
          <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-gray-900 uppercase rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="mr-2">Next</span>
            <FiChevronRight className="stroke-current" />
          </button>
        </div>

        <div className="flex flex-row flex-wrap items-center space-x-2">
          <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-gray-900 uppercase rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiChevronsLeft className="mr-2 stroke-current" />
            <span>Previous</span>
          </button>
          <Numbers />
          <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-gray-900 uppercase rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="mr-2">Next</span>
            <FiChevronsRight className="stroke-current" />
          </button>
        </div>

        <div className="flex flex-row flex-wrap items-center space-x-2">
          <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
            <FiChevronLeft className="mr-2 stroke-current" />
          </button>
          <Numbers />
          <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
            <FiChevronRight className="stroke-current" />
          </button>
        </div>

        <div className="flex flex-row flex-wrap items-center space-x-2">
          <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
            <FiChevronsLeft className="mr-2 stroke-current" />
          </button>
          <Numbers />
          <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
            <FiChevronsRight className="stroke-current" />
          </button>
        </div>
      </div>
    </Widget>
  </>
);
export default Index;
