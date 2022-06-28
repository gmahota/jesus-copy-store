export type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({children}) => {
  return (
    <div className="px-4 w-full text-xs font-normal tracking-wider uppercase">
      <span>{children}</span>
    </div>
  );
};

export default Title;
