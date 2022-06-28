export type ErrorMessageProps = {
  inline?: boolean;
  children: React.ReactNode;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  inline = false,
  children,
}) => {
  if (inline) {
    return (
      <div className="shrink-0 text-sm text-red-500 whitespace-nowrap">
        {children}
      </div>
    );
  }
  return <div className="text-sm text-red-500">{children}</div>;
};
