export type InputProps = {
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
  width?: string;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  name,
  type,
  width = "w-full",
  placeholder = "",
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      className={`form-input block ${width} border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}
    />
  );
};
