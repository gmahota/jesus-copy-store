import {FiBox, FiMenu} from "react-icons/fi";
import {setConfig} from "slices/config";
import {useAppSelector, useAppDispatch} from "store";
import Link from "next/link";

const Logo: React.FC = () => {
  const dispatch = useAppDispatch();
  const {name, collapsed} = useAppSelector((state) => state.config);
  return (
    <div className="truncate flex flex-row items-center justify-start w-full text-base font-bold tracking-wider uppercase whitespace-nowrap text-blue-500">
      <Link href="/">
        <a className="flex flex-row items-center justify-start space-x-2">
          <FiBox size={28} />
          <span>{name}</span>
        </a>
      </Link>
      <button
        onClick={() =>
          dispatch(
            setConfig({
              collapsed: !collapsed,
            })
          )
        }
        className="block ml-auto text-gray-900 lg:hidden dark:text-white">
        <FiMenu size={20} />
      </button>
    </div>
  );
};

export default Logo;
