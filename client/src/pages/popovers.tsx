import SectionTitle from "components/section-title";
import Popover, {Placement} from "components/popovers";
import Widget from "components/widget";

const placements: Placement[] = ["left", "top", "right", "bottom"];
const Index: React.FC = () => (
  <>
    <SectionTitle title="Notifications" subtitle="Popovers" />
    <Widget
      title="Popovers"
      description={
        <span>
          Use the <code>&lt;Popover /&gt;</code> component for popovers
        </span>
      }>
      <div className="flex flex-col items-start justify-start space-y-4">
        {placements.map((placement, i) => (
          <div key={i}>
            <Popover
              buttonText={`Popover on ${placement}`}
              placement={placement}>
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow border border-gray-100 dark:border-gray-700 w-48 p-2 text-sm space-y-1">
                <div className="font-bold">Popover title</div>
                <div>
                  Pellentesque habitant morbi tristique senectus et netus
                </div>
              </div>
            </Popover>
          </div>
        ))}
      </div>
    </Widget>
  </>
);
export default Index;
