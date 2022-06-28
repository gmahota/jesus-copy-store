import React, {useState, useReducer} from "react";
import moment from "moment";
import {FiX} from "react-icons/fi";
import {Badge} from "components/badges";
export function randomElement<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export type Task = {
  id: number;
  title: string;
  done: boolean;
  category: string;
  date: string;
  img: string;
  badge: {
    title: string;
    color: string;
  };
};

export type Action =
  | {type: "active"}
  | {type: "clear"}
  | {type: "add"; title: string}
  | {type: "remove"; id: number}
  | {type: "toggle"; id: number; value: boolean};

let n = 0;

const randomImage = (): string => {
  const img: number = randomElement<number>(Array.from(Array(9).keys())) + 1;
  return `/images/faces/${randomElement(["m", "w"])}${img}.png`;
};

const Tasks: React.FC<{items: Task[]}> = ({items}) => {
  const reducer = (state: Task[], action: Action) => {
    switch (action.type) {
      case "active":
        return state.filter((item) => !item.done);
      case "clear":
        return [];
      case "add":
        return [
          ...state,
          {
            title: action.title,
            done: false,
            id: n++,

            category: randomElement(["To do", "In Progress", "Code Review"]),
            date: moment().format("MMM DD"),
            img: randomImage(),
            badge: {
              title: randomElement([
                "low",
                "high",
                "medium",
                "important",
                "new",
              ]),
              color: randomElement([
                "bg-green-700 text-green-100",
                "bg-yellow-700 text-yellow-100",
                "bg-red-700 text-red-100",
                "bg-indigo-700 text-indigo-100",
                "bg-pink-700 text-pink-100",
                "bg-cyan-700 text-cyan-100",
              ]),
            },
          },
        ];
      case "remove":
        return state.filter((item) => item.id !== action.id);
      case "toggle":
        return state.map((item) => {
          if (item.id === action.id) item["done"] = !action.value;
          return item;
        });
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, items);
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      dispatch({type: "add", title: value});
      setValue("");
    }
  };

  return (
    <div className="flex flex-col w-full space-y-2">
      <div className="space-y-2">
        {state.map((item, i: number) => (
          <div
            className="flex flex-row items-center justify-start mb-2 lg:px-2"
            key={i}>
            <input
              name={i.toString()}
              type="checkbox"
              checked={item.done}
              onChange={() =>
                dispatch({type: "toggle", id: item.id, value: item.done})
              }
              className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 form-checkbox focus:ring-blue-500"
            />
            <div className="flex items-start justify-start ml-4">
              <div className="shrink-0 w-8">
                <img
                  src={item.img}
                  alt="media"
                  className="w-full h-8 rounded-full"
                />
              </div>
              <div className={`ml-2 ${item.done ? "line-through" : ""}`}>
                <div className="text-sm font-bold">{item.title}</div>
                <div className="text-xs text-gray-500">{item.category}</div>
                <Badge size="sm" color={item.badge.color} rounded>
                  {item.badge.title}
                </Badge>
              </div>
            </div>
            <div className="ml-auto mr-1 text-xs text-gray-500 lg:mr-2 whitespace-nowrap">
              {item.date}
            </div>
            <button
              className="text-xs font-bold uppercase rounded-lg focus:ring-2 focus:ring-blue-500"
              onClick={() => dispatch({type: "remove", id: item.id})}>
              <FiX size={16} className="text-gray-500 stroke-current" />
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="todo"
          type="text"
          className="block w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 form-input flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md"
          placeholder="Add new..."
        />
      </form>
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-bold">
          {state.filter((item) => !item.done).length} tasks left
        </div>
        {state.length > 0 && (
          <div className="flex flex-row items-center justify-end ml-auto space-x-2">
            {state.filter((item) => item.done).length > 0 && (
              <button
                className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-500"
                onClick={() => dispatch({type: "active"})}>
                Remove completed
              </button>
            )}
            <button
              className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-500"
              onClick={() => dispatch({type: "clear"})}>
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
