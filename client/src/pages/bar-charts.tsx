import SectionTitle from "components/section-title";
import Bar1 from "components/charts/bar-1";
import Bar4 from "components/charts/bar-4";
import Bar2 from "components/charts/bar-2";
import Bar3 from "components/charts/bar-3";
import HorizontalBar2 from "components/charts/horizontal-bar-2";
import HorizontalBar1 from "components/charts/horizontal-bar-1";

import Widget from "components/widget";

const Index: React.FC = () => (
  <>
    <SectionTitle title="Charts" subtitle="Bar charts" />
    <div className="w-full">
      <Widget
        title="Simple bar charts"
        description={
          <span>Use the following examples for simple bar charts</span>
        }>
        <div className="w-full mb-4">
          <Bar4 />
        </div>
        <div className="w-full mb-4">
          <Bar2 />
        </div>
      </Widget>
    </div>
    <div className="w-full">
      <Widget
        title="Stacked bar chart"
        description={
          <span>Use the following examples for stacked bar charts</span>
        }>
        <div className="w-full mb-4">
          <Bar1 />
        </div>
        <div className="w-full mb-4">
          <Bar3 />
        </div>
      </Widget>
    </div>
    <div className="w-full">
      <Widget
        title="Horizontal bar charts"
        description={
          <span>
            Use the following examples for horizontal bar charts charts
          </span>
        }>
        <div className="w-full mb-4">
          <HorizontalBar2 />
        </div>
        <div className="w-full mb-4">
          <HorizontalBar1 />
        </div>
      </Widget>
    </div>
  </>
);

export default Index;
