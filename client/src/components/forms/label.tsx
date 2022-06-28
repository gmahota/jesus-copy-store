export type LabelProps = {
  children: React.ReactNode;
};

export const Label: React.FC<LabelProps> = ({children}) => {
  return (
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
      {children}
    </label>
  );
};
