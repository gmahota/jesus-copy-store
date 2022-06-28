export type SuccessMessageProps = {
  inline?: boolean;
  children: React.ReactNode;
};

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  inline = false,
  children,
}) => {
  if (inline) {
    return (
      <div className="shrink-0 text-sm text-green-500 whitespace-nowrap">
        {children}
      </div>
    );
  }
  return <div className="text-sm text-green-500">{children}</div>;
};
