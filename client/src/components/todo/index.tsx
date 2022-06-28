import React, {useState, useReducer} from "react";
import {FiX} from "react-icons/fi";
import initialState from "./data.json";

export type TodoItem = {
  id: number;
  title: string;
  done: boolean;
};

export type Action =
  | {type: "active"}
  | {type: "clear"}
  | {type: "add"; title: string}
  | {type: "remove"; id: number}
  | {type: "toggle"; id: number; value: boolean};

let n = 0;
const Todo: React.FC = () => {
  const reducer = (state: TodoItem[], action: Action) => {
    switch (action.type) {
      case "active":
        return state.filter((item) => !item.done);
      case "clear":
        return [];
      case "add":
        return [...state, {title: action.title, done: false, id: n++}];
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

  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      dispatch({type: "add", title: value});
      setValue("");
    }
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            name="todo"
            type="text"
            className="block w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 form-input flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md"
            placeholder="Enter something..."
          />
        </div>
      </form>
      <div className="space-y-2">
        {state.map((item, i) => (
          <div className="flex flex-row items-center justify-start" key={i}>
            <label className="flex items-center justify-start space-x-2">
              <input
                name={i.toString()}
                type="checkbox"
                checked={item.done}
                onChange={() =>
                  dispatch({type: "toggle", id: item.id, value: item.done})
                }
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 form-checkbox focus:ring-blue-500"
              />
              <span className={`${item.done ? "line-through" : ""}`}>
                {item.title}
              </span>
            </label>
            <button
              className="ml-auto text-xs font-bold uppercase rounded-lg focus:ring-2 focus:ring-blue-500"
              onClick={() => dispatch({type: "remove", id: item.id})}>
              <FiX size={16} className="text-gray-500 stroke-current" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-start">
        <div className="text-sm font-bold">
          {state.filter((item) => !item.done).length} items left
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

export default Todo;
