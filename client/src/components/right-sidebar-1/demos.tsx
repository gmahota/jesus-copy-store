import {useAppDispatch} from "store";
import {setConfig} from "slices/config";

type Demo = {
  name: string;
  title: string;
};

const Demos: React.FC = () => {
  const demos: Demo[] = [
    {name: "demo-1", title: "Light background"},
    {name: "demo-2", title: "Dark background"},
    {name: "demo-3", title: "Small sidebar"},
  ];
  const dispatch = useAppDispatch();

  const setDemo = (demo: string) => {
    switch (demo) {
      case "demo-1":
        dispatch(
          setConfig({
            layout: "layout-1",
            collapsed: false,
            rightSidebar: false,
            background: "light",
          })
        );
        break;
      case "demo-2":
        dispatch(
          setConfig({
            layout: "layout-1",
            collapsed: false,
            rightSidebar: false,
            background: "dark",
          })
        );
        break;
      case "demo-3":
        dispatch(
          setConfig({
            layout: "layout-1",
            collapsed: true,
            rightSidebar: false,
            background: "light",
          })
        );
        break;
      case "demo-4":
        dispatch(
          setConfig({
            layout: "layout-1",
            collapsed: false,
            rightSidebar: false,
            background: "light",
          })
        );
        break;
      case "demo-5":
        dispatch(
          setConfig({
            layout: "layout-1",
            collapsed: true,
            rightSidebar: false,
            background: "light",
          })
        );
        break;
      case "demo-6":
        dispatch(
          setConfig({
            layout: "layout-1",
            collapsed: false,
            rightSidebar: false,
            background: "light",
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col p-4">
      <div className="mb-2 text-sm font-bold tracking-wider uppercase">
        Demos
      </div>
      <div className="flex flex-col">
        {demos.map((demo, i) => (
          <button
            key={i}
            className="flex w-full h-8"
            onClick={() => setDemo(demo.name)}>
            {demo.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Demos;
