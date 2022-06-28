import SectionTitle from "components/section-title";
import Widget from "components/widget";
import {FiStar} from "react-icons/fi";

const Buttons: React.FC = () => (
  <>
    <SectionTitle title="UI Elements" subtitle="Buttons" />

    <Widget title="Buttons" description={<span>Default button styles</span>}>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:flex-wrap lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
        <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 hover:bg-blue-600">
          Default
        </button>
        <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
          Rounded
        </button>
        <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
          <FiStar className="mr-2 stroke-current" />
          <span>With icon</span>
        </button>
        <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
          <span className="mr-2">With icon</span>
          <FiStar className="stroke-current" />
        </button>
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-white uppercase bg-blue-500 rounded-full hover:bg-blue-600">
          <FiStar className="stroke-current" />
        </button>
      </div>
    </Widget>

    <Widget
      title="Outlined buttons"
      description={<span>Outlined button styles</span>}>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:flex-wrap lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
        <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 hover:text-blue-700 hover:border-blue-700">
          Default
        </button>
        <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 rounded-lg hover:text-blue-700 hover:border-blue-700">
          Rounded
        </button>
        <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 rounded-lg hover:text-blue-700 hover:border-blue-700">
          <FiStar className="mr-2 stroke-current" />
          <span>With icon</span>
        </button>
        <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 rounded-lg hover:text-blue-700 hover:border-blue-700">
          <span className="mr-2">With icon</span>
          <FiStar className="stroke-current" />
        </button>
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 rounded-full hover:text-blue-700 hover:border-blue-700">
          <FiStar className="stroke-current" />
        </button>
      </div>
    </Widget>

    <Widget title="Flat buttons" description={<span>Flat button styles</span>}>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:flex-wrap lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
        <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
          Default
        </button>
        <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-lg dark:hover:bg-gray-800 dark:hover:text-blue-600 hover:bg-blue-50 hover:text-blue-600">
          <FiStar className="mr-2 stroke-current" />
          <span>With icon</span>
        </button>
        <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
          <span className="mr-2">With icon</span>
          <FiStar className="stroke-current" />
        </button>
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-full hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
          <FiStar className="stroke-current" />
        </button>
      </div>
    </Widget>

    <Widget
      title="Raised buttons"
      description={<span>Flat button styles</span>}>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:flex-wrap lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
        <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent shadow hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
          Default
        </button>
        <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-lg shadow hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
          Rounded
        </button>
        <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-lg shadow hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
          <FiStar className="mr-2 stroke-current" />
          <span>With icon</span>
        </button>
        <button className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-lg shadow hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
          <span className="mr-2">With icon</span>
          <FiStar className="stroke-current" />
        </button>
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-full shadow hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
          <FiStar className="stroke-current" />
        </button>
      </div>
    </Widget>

    <Widget title="Buttons" description={<span>Button sizes</span>}>
      <div className="flex flex-col items-start justify-start mb-2 lg:flex-row lg:flex-wrap lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
        <button className="px-6 py-3 text-base font-bold text-white uppercase bg-blue-500 hover:bg-blue-600">
          Large
        </button>
        <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 hover:bg-blue-600">
          Default
        </button>
        <button className="px-2 py-1 text-xs font-bold text-white uppercase bg-blue-500 hover:bg-blue-600">
          Small
        </button>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:flex-wrap lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-white uppercase bg-blue-500 rounded-full p-0-lg hover:bg-blue-600">
          <FiStar className="stroke-current" />
        </button>
        <button className="inline-flex items-center justify-center w-6 h-6 p-0 text-xs font-bold text-white uppercase bg-blue-500 rounded-full p-0-default hover:bg-blue-600">
          <FiStar className="stroke-current" />
        </button>
      </div>
    </Widget>

    <Widget title="Button groups" description={<span>Button group sizes</span>}>
      <div className="w-full mb-2">
        <div className="flex justify-start inline-flex flex-row flex-nowrap items-center space-x-0">
          <button className="px-6 py-3 text-base font-bold text-blue-500 uppercase bg-transparent border border-r-0 border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Left
          </button>
          <button className="px-6 py-3 text-base font-bold text-blue-500 uppercase bg-transparent border border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Center
          </button>
          <button className="px-6 py-3 text-base font-bold text-blue-500 uppercase bg-transparent border border-l-0 border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Right
          </button>
        </div>
      </div>
      <div className="w-full mb-2">
        <div className="flex inline-flex flex-row items-center justify-start flex-nowrap space-x-0">
          <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-r-0 border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Left
          </button>
          <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Center
          </button>
          <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-l-0 border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Right
          </button>
        </div>
      </div>
      <div className="w-full mb-2">
        <div className="flex inline-flex flex-row items-center justify-start flex-nowrap space-x-0">
          <button className="px-2 py-1 text-xs font-bold text-blue-500 uppercase bg-transparent border border-r-0 border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Left
          </button>
          <button className="px-2 py-1 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Center
          </button>
          <button className="px-2 py-1 text-xs font-bold text-blue-500 uppercase bg-transparent border border-l-0 border-blue-500 hover:border-blue-700 hover:text-blue-700">
            Right
          </button>
        </div>
      </div>
    </Widget>
  </>
);
export default Buttons;
