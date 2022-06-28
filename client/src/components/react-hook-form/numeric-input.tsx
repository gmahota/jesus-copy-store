import {useFormContext} from "react-hook-form";
export type NumericInputProps = {
  id: string;
  name: string;
  rules?: Record<string, any>;
  step?: number;
  width?: string;
  placeholder?: string;
};

export const NumericInput: React.FC<NumericInputProps> = ({
  id,
  name,
  rules,
  step = 0.01,
  width = "w-full",
  placeholder = "",
}) => {
  const {register} = useFormContext();
  return (
    <input
      {...register(name, rules)}
      type="number"
      name={name}
      id={id}
      step={step}
      placeholder={placeholder}
      className={`form-input block ${width} border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}
    />
  );
};
