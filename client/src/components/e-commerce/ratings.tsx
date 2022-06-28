import React, {useReducer} from "react";
import StarRating from "components/star-rating";

export type ItemProps = {
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
      value: 1,
      checked: false,
    },
    {
      value: 2,
      checked: false,
    },
    {
      value: 3,
      checked: false,
    },
    {
      value: 4,
      checked: false,
    },
    {
      value: 5,
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

  const [state, dispatch] = useReducer(reducer, items.reverse());

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
            <span>
              <StarRating initialRating={item.value} numberOfStars={5} />
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
