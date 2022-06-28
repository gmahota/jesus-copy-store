import {Controller, useFormContext} from "react-hook-form";
import clsx from "clsx";
import {Switch as HeadlessUISwitch} from "@headlessui/react";

export type SwitchProps = {
  id: string;
  name: string;
  rules?: Record<string, any>;
};

export const Switch: React.FC<SwitchProps> = ({id, name, rules = {}}) => {
  const {control} = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value}}) => {
        return (
          <HeadlessUISwitch
            id={id}
            checked={value}
            onChange={onChange}
            className={clsx(
              "relative inline-flex shrink-0 h-[34px] w-[70px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
              value ? "bg-blue-500" : "bg-blue-800"
            )}>
            <span
              aria-hidden="true"
              className={clsx(
                "pointer-events-none inline-block h-[30px] w-[30px] rounded-full bg-white dark:bg-gray-800 shadow-lg transform ring-0 transition ease-in-out duration-200",
                value ? "translate-x-9" : "translate-x-0"
              )}
            />
          </HeadlessUISwitch>
        );
      }}
    />
  );
};
