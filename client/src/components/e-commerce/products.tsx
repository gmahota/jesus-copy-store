import React, {useState} from "react";
import StarRating from "components/star-rating";
import items from "json/products.json";
import {formatCurrency} from "functions/numbers";
import {FiGrid, FiMenu} from "react-icons/fi";

const Rows: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {items.map((item, i) => (
        <div
          className="flex items-center justify-start p-2 truncate space-x-4"
          key={i}>
          <div className="shrink-0 w-16">
            <img
              src={item.img}
              alt="media"
              className={`h-16 w-full shadow-lg rounded-full shadow-lg`}
            />
          </div>
          <div className="flex flex-col w-full min-w-0">
            <div className="text-sm font-bold">{item.title}</div>
            <div className="text-sm">{item.category}</div>
            <div className="text-sm truncate">{item.description}</div>
            <span>
              <StarRating initialRating={item.stars} numberOfStars={5} />
            </span>
          </div>
          <div className="shrink-0">
            <div className="text-xl font-bold">
              {formatCurrency(item.price)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Grid: React.FC = () => {
  return (
    <div className="items-center text-center grid grid-cols-1 gap-y-4 gap-x-2 md:grid-cols-4 lg:grid-cols-12">
      {items.map((item, i) => (
        <div className="col-span-1 md:col-span-2 lg:col-span-3" key={i}>
          <div className="w-full p-2 text-center space-y-2">
            <div className="w-24 mx-auto">
              <img
                src={item.img}
                alt="media"
                className={`h-24 w-full shadow-lg rounded-full shadow-lg`}
              />
            </div>
            <div className="text-sm font-bold">{item.title}</div>
            <div className="text-sm">{item.category}</div>
            <span>
              <StarRating initialRating={item.stars} numberOfStars={5} />
            </span>
            <div className="text-xl font-bold">
              {formatCurrency(item.price)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Products: React.FC = () => {
  const [grid, setGrid] = useState<boolean>(true);

  const options = [
    {key: "0", value: "Price: Low to high"},
    {key: "1", value: "Price: High to low"},
    {key: "2", value: "Most popular"},
    {key: "3", value: "Best sellers"},
  ];
  return (
    <>
      <div className="mb-4 grid grid-cols-2 gap-y-2 gap-x-2 lg:hidden">
        <div className="sm:col-span-1">
          <div className="flex flex-col items-start space-y-2">
            <div className="font-bold sm:col-span-5">135 products</div>
            <div className="flex flex-row items-center justify-center space-x-1 sm:col-span-2">
              <button
                className="text-xs font-bold text-gray-500 uppercase bg-transparent rounded-full"
                onClick={() => setGrid(true)}>
                <FiGrid className="stroke-current" size={20} />
              </button>
              <button
                className="text-xs font-bold text-gray-500 uppercase bg-transparent rounded-full"
                onClick={() => setGrid(false)}>
                <FiMenu className="stroke-current" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="sm:col-span-1 place-self-end">
          <label className="hidden text-sm font-medium text-gray-700 lg:block dark:text-gray-200 whitespace-nowrap">
            Sort by
          </label>
          <select
            name="select"
            className="block w-40 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 form-select focus:ring-blue-500 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md">
            <option value="">Select</option>
            {options.map((option) => (
              <option key={option.key} value={option.key}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden mb-4 lg:items-center lg:grid lg:gap-x-2 lg:grid-cols-12">
        <div className="font-bold sm:col-span-5">135 products</div>

        <div className="flex flex-row items-center justify-center space-x-1 sm:col-span-2">
          <button
            className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-500 uppercase bg-transparent rounded-full"
            onClick={() => setGrid(true)}>
            <FiGrid className="stroke-current" size={20} />
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-500 uppercase bg-transparent rounded-full"
            onClick={() => setGrid(false)}>
            <FiMenu className="stroke-current" size={20} />
          </button>
        </div>

        <div className="sm:col-span-5">
          <div className="flex flex-row items-center justify-end space-x-2">
            <label className="hidden text-sm font-medium text-gray-700 lg:block dark:text-gray-200 whitespace-nowrap">
              Sort by
            </label>
            <select
              name="select"
              className="block bg-white border-gray-300 w-40 dark:bg-gray-800 dark:border-gray-700 form-select focus:ring-blue-500 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md">
              <option value="">Select</option>
              {options.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {grid && <Grid />}
      {!grid && <Rows />}
    </>
  );
};

export default Products;
