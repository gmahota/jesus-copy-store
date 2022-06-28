import LeftSidebar2 from "components/left-sidebar-2";
import LeftSidebar3 from "components/left-sidebar-3";

const Index: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-y-3 gap-x-3 sm:grid-cols-12">
          <div className="sm:col-span-3">
            <LeftSidebar3 />
          </div>
          <div className="sm:col-span-3">
            <LeftSidebar2 />
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
