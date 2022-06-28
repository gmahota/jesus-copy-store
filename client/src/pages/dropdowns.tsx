import SectionTitle from "components/section-title";
import Widget from "components/widget";
import {FiHome, FiUser, FiMessageSquare, FiSettings} from "react-icons/fi";
import Dropdown from "components/dropdowns";

const simple: React.ReactNode[] = [
  <span>Home</span>,
  <span>Account</span>,
  <span>Settings</span>,
  <span>Comments</span>,
];

const items: React.ReactNode[] = [
  <>
    <FiHome
      className="mr-2 stroke-current text-md group-hover:text-white"
      aria-hidden="true"
    />
    <span>Home</span>
  </>,
  <>
    <FiUser
      className="mr-2 stroke-current text-md group-hover:text-white"
      aria-hidden="true"
    />
    <span>Account</span>
  </>,
  <>
    <FiSettings
      className="mr-2 stroke-current text-md group-hover:text-white"
      aria-hidden="true"
    />
    <span>Settings</span>
  </>,
  <>
    <FiMessageSquare
      className="mr-2 stroke-current text-md group-hover:text-white"
      aria-hidden="true"
    />
    <span>Comments</span>
  </>,
];

const Index: React.FC = () => (
  <>
    <SectionTitle title="UI Elements" subtitle="Dropdowns" />
    <Widget
      title="Dropdowns"
      description={<span className="capitalize">Simple dropdowns</span>}>
      <div className="mb-32 space-y-6">
        <div className="grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-8">
          <Dropdown placement="left" items={simple} buttonText="Options" />
          <Dropdown placement="right" items={simple} buttonText="Options" />
        </div>
      </div>
    </Widget>
    <Widget
      title="Dropdowns"
      description={<span className="capitalize">With icons</span>}>
      <div className="mb-32 space-y-6">
        <div className="grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-8">
          <Dropdown placement="left" items={items} buttonText="Options" />
          <Dropdown placement="right" items={items} buttonText="Options" />
        </div>
      </div>
    </Widget>
  </>
);
export default Index;
