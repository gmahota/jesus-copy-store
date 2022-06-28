import clsx from "clsx";
import {useState} from "react";
import {FiX} from "react-icons/fi";

export type AlertProps = {
  outlined?: boolean;
  raised?: boolean;
  rounded?: boolean;
  borderLeft?: boolean;
  icon?: React.ReactNode | null;
  padding?: string;
  color: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Alert: React.FC<AlertProps> = ({
  outlined = false,
  raised = false,
  rounded = false,
  borderLeft = false,
  icon,
  padding = "p-4",
  color,
  onClick,
  children,
}) => {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        `w-full flex items-center justify-start`,
        color,
        padding,
        outlined && `border border-current`,
        raised && "shadow",
        rounded && "rounded-lg",
        hidden && "hidden",
        borderLeft && "border-l-4 border-current"
      )}>
      {icon && <div className="shrink">{icon}</div>}
      <div className="flex-grow">{children}</div>
      <div className="shrink">
        <button
          className="ml-auto flex items-center justify-center"
          onClick={onClick ? onClick : () => setHidden(!hidden)}>
          <FiX className="w-4 h-4 stroke-current" />
        </button>
      </div>
    </div>
  );
};

export default Alert;
