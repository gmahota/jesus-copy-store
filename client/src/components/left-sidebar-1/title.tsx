export type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({children}) => {
  return (
    <div className="left-sidebar-title">
      <span>{children}</span>
    </div>
  );
};

export default Title;
