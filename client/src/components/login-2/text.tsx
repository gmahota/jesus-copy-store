import {useAppSelector} from "store";

const Text: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {name} = config;
  return (
    <div className="flex flex-col">
      <p className="mb-4 text-2xl font-bold">Welcome to {name}!</p>
      <p className="text-sm font-thin">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </p>
    </div>
  );
};
export default Text;
