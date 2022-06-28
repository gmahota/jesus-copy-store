import {useAppSelector, useAppDispatch} from "store";
import {setConfig} from "slices/config";
import Switch from "react-switch";
import {getColor} from "functions/colors";

const Component: React.FC = () => {
  const onColor = `blue-200`;
  const onHandleColor = `blue-500`;
  const offColor = `gray-200`;
  const offHandleColor = "white";
  const config = useAppSelector((state) => state.config);

  const {collapsed} = config;
  const dispatch = useAppDispatch();

  return (
    <Switch
      onChange={() => {
        dispatch(
          setConfig({
            collapsed: !collapsed,
          })
        );
      }}
      checked={collapsed}
      onColor={getColor(onColor)}
      onHandleColor={getColor(onHandleColor)}
      offColor={getColor(offColor)}
      offHandleColor={getColor(offHandleColor)}
      handleDiameter={24}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
      activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch"
    />
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="uppercase text-sm font-bold tracking-wider mb-2">
        Toggle sidebar
      </div>
      <div className="flex flex-col">
        <Component />
      </div>
    </div>
  );
};

export default Sidebar;
