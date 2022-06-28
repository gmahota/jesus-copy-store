export type InputWrapperProps = {
  outerClassName: string;
  inline?: boolean;
  children: React.ReactNode;
};

export const InputWrapper: React.FC<InputWrapperProps> = ({
  inline = false,
  outerClassName,
  children,
}) => {
  if (inline) {
    return (
      <div className={outerClassName}>
        <div className="flex items-center space-x-2 justify-items-start">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className={outerClassName}>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export type InlineInputWrapperProps = {
  outerClassName: string;
  children: React.ReactNode;
};

export const InlineInputWrapper: React.FC<InlineInputWrapperProps> = ({
  outerClassName,
  children,
}) => {
  return (
    <div className={outerClassName}>
      <div className="flex items-center space-x-2 justify-items-start">
        {children}
      </div>
    </div>
  );
};
