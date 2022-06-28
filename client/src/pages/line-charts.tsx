import SectionTitle from "components/section-title";
import Line1 from "components/charts/line-1";
import Area1 from "components/charts/area-1";
import Widget from "components/widget";

const Index: React.FC = () => (
  <>
    <SectionTitle title="Charts" subtitle="Line charts" />
    <div className="flex flex-col">
      <div className="w-full">
        <Widget
          title="Simple line charts"
          description={
            <span>Use the following examples for simple line charts</span>
          }>
          <div className="w-full">
            <Line1 />
          </div>
        </Widget>
      </div>
      <div className="w-full">
        <Widget
          title="Simple area chart"
          description={
            <span>Use the following examples for simple area charts</span>
          }>
          <div className="w-full">
            <Area1 />
          </div>
        </Widget>
      </div>
    </div>
  </>
);
export default Index;
