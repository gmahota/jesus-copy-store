import SectionTitle from "components/section-title";
import Widget from "components/social-feed/widget";
import Tasks from "components/tasks";
import tasks from "json/tasks.json";

const Index: React.FC = () => (
  <>
    <SectionTitle title="Apps" subtitle="Tasks" />
    <div className="w-full">
      <div className="flex flex-row items-center justify-start w-full mb-2 text-xs font-bold tracking-wider uppercase">
        Today
      </div>
    </div>
    <Widget>
      <Tasks items={tasks} />
    </Widget>
    <div className="w-full pt-4">
      <div className="flex flex-row items-center justify-start w-full mb-2 text-xs font-bold tracking-wider uppercase">
        Upcoming
      </div>
    </div>
    <Widget>
      <Tasks items={tasks} />
    </Widget>
    <div className="w-full pt-4">
      <div className="flex flex-row items-center justify-start w-full mb-2 text-xs font-bold tracking-wider uppercase">
        Other
      </div>
    </div>
    <Widget>
      <Tasks items={tasks} />
    </Widget>
  </>
);
export default Index;
