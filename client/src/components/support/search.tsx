import {FiSearch} from "react-icons/fi";

const Search: React.FC = () => (
  <div className="flex flex-col flex-wrap items-center justify-center w-full mt-8 mb-4">
    <div className="mb-2 text-2xl">Hello, how can we help you?</div>
    <div className="flex flex-row items-center justify-center w-full">
      <div className="relative w-full max-w-lg mb-2">
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="w-full h-10 pl-10 pr-5 text-sm bg-gray-100 rounded-full appearance-none focus:outline-none"
        />
        <button type="submit" className="absolute top-0 left-0 mt-3 ml-4">
          <FiSearch className="w-4 h-4 stroke-current" />
        </button>
      </div>
    </div>
    <div className="text-sm text-gray-500 dark:text-white">
      <span className="font-bold">Popular topics: </span>
      Installation, Next.js, Tailwind CSS
    </div>
  </div>
);
export default Search;
