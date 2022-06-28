import clsx from "clsx";
import Colors, {PaletteProps} from "./colors";
import Toggle from "./toggle";
import Sidebar from "./sidebar";
import Demos from "./demos";
import {useAppSelector} from "store";

const RightSidebar: React.FC = () => {
  const colors: PaletteProps[] = [
    {bg: "bg-white", text: "text-white", name: "light"},
    {bg: "bg-gray-900", text: "text-gray-900", name: "dark"},
  ];
  const items = [{title: "Background", key: "background"}];
  const config = useAppSelector((state) => state.config);
  const {rightSidebar} = config;

  return (
    <div
      className={clsx(
        "bg-white text-gray-900 dark:bg-gray-800 dark:text-white text-sm w-64 transform transition duration-300 ease-in-out shadow fixed top-0 bottom-0 h-full overflow-hidden z-[99] right-0",
        !rightSidebar && "translate-x-64",
        rightSidebar && "translate-x-0"
      )}>
      <div className="absolute top-0 left-0 bottom-0 h-full overflow-x-auto">
        <div className="w-64 h-full">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between h-16 px-4 text-white bg-blue-500">
              <div className="text-sm font-bold tracking-wider uppercase">
                Settings
              </div>
              <Toggle />
            </div>
          </div>

          <Demos />
          <Sidebar />

          <div className="flex flex-col p-4">
            <div className="mb-2">
              <div className="mb-2 text-sm font-bold tracking-wider uppercase">
                Colors
              </div>
            </div>

            {items.map((item) => (
              <Colors key={item.key} title={item.title} palettes={colors} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
