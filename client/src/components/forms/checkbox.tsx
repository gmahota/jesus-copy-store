export type CheckboxProps = {
  name: string;
  label: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({label, name}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center h-6">
        <input
          name={name}
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 form-checkbox focus:ring-blue-500"
        />
      </div>
      <div className="text-sm space-y-1">
        <div className="shrink-0 block font-medium text-gray-700 whitespace-nowrap dark:text-white">
          {label}
        </div>
      </div>
    </div>
  );
};
