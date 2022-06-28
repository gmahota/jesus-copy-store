import SectionTitle from "components/section-title";
import Widget from "components/widget";
import Products from "components/e-commerce/products";

const Index: React.FC = () => {
  return (
    <>
      <SectionTitle title="Pages" subtitle="E-commerce" />
      <Widget>
        <div className="w-full">
          <Products />
        </div>
      </Widget>
    </>
  );
};
export default Index;
