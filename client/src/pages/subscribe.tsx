import CenteredForm from "layouts/centered-form";
import Subscribe from "components/sample-forms/subscribe";

const Index: React.FC = () => {
  return (
    <CenteredForm
      title="Subscribe"
      subtitle="Please enter your email address to subscribe to our newsletter to receive weekly updates">
      <Subscribe />
    </CenteredForm>
  );
};

export default Index;
