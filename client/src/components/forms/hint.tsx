export type HintProps = {
  inline?: boolean;
  children: React.ReactNode;
};

export const Hint: React.FC<HintProps> = ({inline = false, children}) => {
  if (inline) {
    return (
      <div className="shrink-0 text-sm text-gray-500 whitespace-nowrap">
        {children}
      </div>
    );
  }
  return <div className="text-sm text-gray-500">{children}</div>;
};
