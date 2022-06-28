import {useFormContext} from "react-hook-form";
export type InputProps = {
  id: string;
  name: string;
  type:
    | "text"
    | "email"
    | "url"
    | "password"
    | "date"
    | "datetime-local"
    | "month"
    | "search"
    | "tel"
    | "time"
    | "week";
  rules?: Record<string, any>;
  width?: string;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  rules = {},
  width = "w-full",
  placeholder = "",
}) => {
  const {register} = useFormContext();
  return (
    <input
      {...register(name, rules)}
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      className={`form-input block ${width} border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}
    />
  );
};
