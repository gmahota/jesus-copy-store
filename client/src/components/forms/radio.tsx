export interface RadioOptionProps {
  key: string | number;
  value: string | number;
}

export type RadioProps = {
  name: string;
  options: RadioOptionProps[];
  inline?: boolean;
};

export const Radio: React.FC<RadioProps> = ({
  name,
  options,
  inline = false,
}) => {
  if (inline) {
    return (
      <fieldset className="flex flex-row items-center justify-start space-x-2 w-full">
        {options.map((option, i) => (
          <div
            className="flex flex-row items-center justify-start space-x-2"
            key={i}>
            <input
              name={name}
              type="radio"
              value={option.key}
              className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-700 form-radio focus:ring-blue-500"
            />
            <label className="block text-sm text-gray-700">
              {option.value}
            </label>
          </div>
        ))}
      </fieldset>
    );
  }
  return (
    <fieldset className="space-y-1">
      <div className="w-full space-y-1">
        {options.map((option, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <input
              name={name}
              type="radio"
              value={option.key}
              className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-700 form-radio focus:ring-blue-500"
            />
            <label className="block text-sm text-gray-700">
              {option.value}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
