import {useState} from "react";
import clsx from "clsx";
import {Switch as HeadlessUISwitch} from "@headlessui/react";

export type SwitchProps = {
  name: string;
};

export const Switch: React.FC<SwitchProps> = ({name}) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  return (
    <div className="flex flex-row items-center justify-center text-center space-x-2">
      <HeadlessUISwitch
        name={name}
        checked={enabled}
        onChange={setEnabled}
        className={clsx(
          "relative inline-flex shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          enabled ? "bg-blue-600" : "bg-gray-200"
        )}>
        <span
          aria-hidden="true"
          className={clsx(
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
            enabled ? "translate-x-5" : "translate-x-0"
          )}
        />
      </HeadlessUISwitch>
      <span className="text-gray-500">{enabled ? "Monthly" : "Annually"}</span>
    </div>
  );
};
