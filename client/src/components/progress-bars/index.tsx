export type ProgressBarProps = {
  width: number;
  color: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({width, color}) => {
  return (
    <div
      className={`relative flex flex-row w-full text-center text-xs items-center h-1`}>
      <div
        style={{width: `${width}%`}}
        className={`top-0 left-0 h-1 w-full ${color}`}></div>
    </div>
  );
};

export const ProgressBarWithText: React.FC<ProgressBarProps> = ({
  width,
  color,
}) => {
  return (
    <div
      className={`relative flex flex-row w-full text-center text-xs items-center h-5`}>
      <div
        style={{width: `${width}%`}}
        className={`absolute top-0 w-full ${color} text-white`}>
        {width}%
      </div>
    </div>
  );
};
