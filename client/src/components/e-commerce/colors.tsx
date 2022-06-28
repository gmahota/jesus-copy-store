import React, {useReducer} from "react";

type Action = {
  type: "toggle";
  value: number;
  checked: boolean;
};

export type ItemProps = {
  color: string;
  title: string;
  value: number;
  checked: boolean;
};

const Checkboxes: React.FC = () => {
  const items: ItemProps[] = [
    {
      color: "bg-red-500",
      title: "Red",
      value: 0,
      checked: false,
    },
    {
      color: "bg-blue-500",
      title: "Blue",
      value: 1,
      checked: false,
    },
    {
      color: "bg-green-500",
      title: "Green",
      value: 2,
      checked: false,
    },
    {
      color: "bg-yellow-500",
      title: "Yellow",
      value: 3,
      checked: false,
    },
    {
      color: "bg-purple-500",
      title: "Purple",
      value: 4,
      checked: false,
    },
  ];

  const reducer = (state: ItemProps[], action: Action) => {
    switch (action.type) {
      case "toggle":
        return state.map((item) => {
          if (item.value === action.value) item["checked"] = !action.checked;
          return item;
        });
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, items);

  return (
    <div className="flex flex-col w-full">
      {state.map((item, i) => (
        <div className="flex flex-row items-center justify-start p-1" key={i}>
          <label className="flex items-center justify-start space-x-2">
            <input
              name={i.toString()}
              type="checkbox"
              checked={item.checked}
              onChange={() => dispatch({type: "toggle", ...item})}
              className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 form-checkbox focus:ring-blue-500"
            />
            <button className={`h-4 w-4 rounded-full ${item.color}`}></button>
            <span>{item.title}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
