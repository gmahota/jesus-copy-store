import SectionTitle from "components/section-title";
import Modal1 from "components/modals/modal-1";
import Modal2 from "components/modals/modal-2";
import Modal3 from "components/modals/modal-3";
import Widget from "components/widget";

const Index: React.FC = () => {
  return (
    <>
      <SectionTitle title="Notifications" subtitle="Modals" />
      <Widget
        title="Simple modal"
        description={
          <span>
            Use the <code>&lt;Modal1 /&gt;</code> component to show a simple
            modal window.
          </span>
        }>
        <Modal1 />
      </Widget>
      <Widget
        title="Simple modal"
        description={
          <span>
            Use the <code>&lt;Modal2 /&gt;</code> component to show a simple
            modal window.
          </span>
        }>
        <Modal2 />
      </Widget>
      <Widget
        title="Simple modal"
        description={
          <span>
            Use the <code>&lt;Modal3 /&gt;</code> component to show a simple
            modal window.
          </span>
        }>
        <Modal3 />
      </Widget>
    </>
  );
};
export default Index;
