import {useState} from "react";
import {Switch} from "@headlessui/react";

export type SwitchProps = {
  title: string;
  description: string;
  initialState?: boolean;
  bgColor?: string;
  activeBgColor?: string;
};

const Component: React.FC<SwitchProps> = ({
  title,
  description,
  initialState = false,
  bgColor = "bg-blue-500",
  activeBgColor = "bg-blue-800",
}) => {
  const [active, setActive] = useState<boolean>(initialState);

  return (
    <Switch.Group>
      <div className="flex flex-row items-center justify-start space-x-2">
        <div className="flex flex-col">
          <Switch.Label className="text-sm">{title}</Switch.Label>
          <Switch.Description className="text-gray-500 text-xs">
            {description}
          </Switch.Description>
        </div>
        <Switch
          checked={active}
          onChange={setActive}
          className={`${active ? activeBgColor : bgColor}
          relative inline-flex shrink-0 h-[34px] w-[70px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
          <span
            className={`${active ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[30px] w-[30px] rounded-full bg-white dark:bg-gray-800 shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default Component;
