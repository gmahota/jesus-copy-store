import {useFormContext} from "react-hook-form";
export type TextareaProps = {
  id: string;
  name: string;
  rules?: Record<string, any>;
  rows?: number;
  placeholder?: string;
  width?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  rules = {},
  rows = 3,
  placeholder = "",
  width = "w-full",
}) => {
  const {register} = useFormContext();
  return (
    <textarea
      {...register(name, rules)}
      id={id}
      name={name}
      rows={rows}
      placeholder={placeholder}
      className={`block ${width} border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 form-textarea focus:ring-blue-500 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}
    />
  );
};
