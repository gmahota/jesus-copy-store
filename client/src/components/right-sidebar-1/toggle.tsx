import {useAppSelector, useAppDispatch} from "store";
import {setConfig} from "slices/config";
import {FiX} from "react-icons/fi";

const Toggle: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {rightSidebar} = config;
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() =>
        dispatch(
          setConfig({
            rightSidebar: !rightSidebar,
          })
        )
      }
      className="font-bold uppercase  text-xs h-8 w-8 rounded-full inline-flex items-center justify-center p-0">
      <FiX size={18} />
    </button>
  );
};

export default Toggle;
