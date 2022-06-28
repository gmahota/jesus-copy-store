import React, {useReducer} from "react";

export type ItemProps = {
  title: string;
  value: number;
  checked: boolean;
};

type Action = {
  type: "toggle";
  value: number;
  checked: boolean;
};

const Checkboxes: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "Apple",
      value: 0,
      checked: false,
    },
    {
      title: "Nintendo",
      value: 1,
      checked: false,
    },
    {
      title: "Google",
      value: 2,
      checked: false,
    },
    {
      title: "Amazon",
      value: 3,
      checked: false,
    },
    {
      title: "Microsoft",
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
            <span>{item.title}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
