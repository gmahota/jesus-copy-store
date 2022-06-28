export type TitleProps = {
  title: string;
  description: string;
};

const Title: React.FC<TitleProps> = ({title, description}) => (
  <div className="flex flex-col flex-wrap w-full items-center justify-center mb-8">
    <div className="mb-2 text-2xl">{title}</div>
    <div className="text-base text-gray-500 dark:text-white">{description}</div>
  </div>
);

export default Title;
