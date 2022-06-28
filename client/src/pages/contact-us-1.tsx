import CenteredForm from "layouts/centered-form";
import ContactUs from "components/sample-forms/contact-us";

const Index: React.FC = () => {
  return (
    <CenteredForm
      title="Contact us"
      subtitle="Send us a message and we'll get back to you as soon as possible">
      <ContactUs />
    </CenteredForm>
  );
};

export default Index;
