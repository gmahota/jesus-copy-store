import SectionTitle from "components/section-title";
import Widget from "components/widget";
import PricingTable1 from "components/pricing-tables/pricing-table-1";
import PricingTable2 from "components/pricing-tables/pricing-table-2";
import PricingTable3 from "components/pricing-tables/pricing-table-3";

const Index: React.FC = () => (
  <>
    <SectionTitle title="Pages" subtitle="Pricing tables" />
    <Widget>
      <PricingTable3 />
    </Widget>
    <div className="hidden lg:block">
      <Widget>
        <PricingTable2 />
      </Widget>
    </div>
    <Widget>
      <PricingTable1 />
    </Widget>
  </>
);
export default Index;
