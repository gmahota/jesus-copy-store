import {FiBox, FiMenu} from "react-icons/fi";
import {setConfig} from "slices/config";
import {useAppSelector, useAppDispatch} from "store";
import Link from "next/link";

const Logo: React.FC = () => {
  const dispatch = useAppDispatch();
  const {name, collapsed} = useAppSelector((state) => state.config);
  const {showLogo} = useAppSelector((state) => state.leftSidebar);
  if (showLogo) {
    return (
      <div className="logo truncate">
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
          className="block ml-auto mr-4 lg:hidden">
          <FiMenu size={20} />
        </button>
      </div>
    );
  }
  return null;
};

export default Logo;
