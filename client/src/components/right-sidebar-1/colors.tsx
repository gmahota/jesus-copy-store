import {useAppDispatch} from "store";
import {setConfig} from "slices/config";

export type PaletteProps = {bg: string; text: string; name: string};
export type ColorsProps = {
  title: string;
  palettes: PaletteProps[];
};

const Colors: React.FC<ColorsProps> = ({title, palettes}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="mb-2">
      <div className="uppercase text-sm font-normal text-gray-500 tracking-wider mb-2">
        {title}
      </div>
      <div className="flex flex-row space-x-1">
        {palettes.map((color, i) => (
          <button
            key={i}
            className={`font-bold uppercase text-xs h-8 w-8 rounded-full inline-flex items-center justify-center p-0 shadow ${color.bg} ${color.text}`}
            onClick={() => {
              dispatch(
                setConfig({
                  background: color.name,
                })
              );
            }}></button>
        ))}
      </div>
    </div>
  );
};

export default Colors;
