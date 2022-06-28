import {useFormContext} from "react-hook-form";
export interface OptionProps {
  key: any;
  value: any;
}

export type SelectProps = {
  id: string;
  name: string;
  options: OptionProps[];
  width?: string;
  rules?: Record<string, any>;
  placeholder?: string;
};

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  options,
  rules = {},
  width = "w-full",
  placeholder = "Select",
}) => {
  const {register} = useFormContext();
  return (
    <select
      {...register(name, rules)}
      id={id}
      name={name}
      className={`block ${width} border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 form-select focus:ring-blue-500 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
