export type TextareaProps = {
  name: string;
  rows?: number;
  placeholder?: string;
  width?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  name,
  rows = 3,
  placeholder = "",
  width = "w-full",
}) => {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      className={`block ${width} border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 form-textarea focus:ring-blue-500 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}
    />
  );
};
