import SectionTitle from "components/section-title";
import Widget from "components/widget";
import {Steps1, Steps2, Steps3} from "components/steps/samples";

const Index: React.FC = () => {
  return (
    <>
      <SectionTitle title="Forms" subtitle="Steps" />
      <Widget
        title="Form steps"
        description={<span>Sample form step components</span>}>
        <Steps1 />
        <Steps2 />
        <Steps3 />
      </Widget>
    </>
  );
};

export default Index;
