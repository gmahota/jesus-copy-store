export type FlagProps = {size: string; code: string};
const Flag: React.FC<FlagProps> = ({size = "lg", code}) => {
  return <span className={`text-${size} flag-icon flag-icon-${code}`}></span>;
};

export default Flag;
