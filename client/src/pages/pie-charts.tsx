import SectionTitle from "components/section-title";
import Donut1 from "components/charts/donut-1";
import Donut2 from "components/charts/donut-2";
import Pie1 from "components/charts/pie-1";
import Widget from "components/widget";

const Index: React.FC = () => (
  <>
    <SectionTitle title="Charts" subtitle="Pie and doughnut charts" />
    <Widget
      title="Pie chart"
      description={
        <span>
          Use the <code>&lt;Doughnut /&gt;</code> component for doughnut charts
        </span>
      }>
      <div className="w-full">
        <Pie1 />
      </div>
    </Widget>
    <Widget
      title="Donut chart"
      description={
        <span>
          Use the <code>&lt;Pie /&gt;</code> component for pie charts
        </span>
      }>
      <div className="w-full">
        <Donut1 />
      </div>
      <div className="w-full">
        <Donut2 />
      </div>
    </Widget>
  </>
);
export default Index;
