import SectionTitle from "components/section-title";
import {UnderlinedTabs} from "components/tabs";
import AccountSettings from "components/sample-forms/account-settings";
import EmailPreferences from "components/sample-forms/email-preferences";
import SecuritySettings from "components/sample-forms/security-settings";
import {FiTwitter, FiFacebook, FiInstagram} from "react-icons/fi";
import Widget from "components/social-feed/widget";

const tabs = [
  {
    index: 0,
    title: "Account settings",
    content: (
      <div className="py-4 w-full lg:w-1/2">
        <AccountSettings />
      </div>
    ),
  },
  {
    index: 1,
    title: "Email preferences",
    content: (
      <div className="w-full py-4 lg:w-1/2">
        <EmailPreferences />
      </div>
    ),
  },
  {
    index: 2,
    title: "Security settings",
    content: (
      <div className="w-full py-4 lg:w-1/2">
        <SecuritySettings />
      </div>
    ),
  },
];
const Index: React.FC = () => (
  <>
    <SectionTitle title="Pages" subtitle="User profile" />

    <Widget>
      <div className="flex flex-row items-center justify-start p-4">
        <div className="shrink-0 w-24">
          <img
            src="/images/faces/m1.png"
            alt="media"
            className="w-20 h-20 mb-2 rounded-full shadow ring"
          />
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold whitespace-nowrap">Lucas Smith</p>
          <p className="text-sm text-gray-500 whitespace-nowrap">
            Vital Database Dude
          </p>
          <div className="flex flex-row items-center justify-start w-full py-1 space-x-2">
            <FiTwitter className="text-xl stroke-current text-twitter" />
            <FiFacebook className="text-xl stroke-current text-facebook" />
            <FiInstagram className="text-xl stroke-current text-instagram" />
          </div>
        </div>
        <div className="shrink-0 hidden ml-auto space-x-2 lg:flex">
          <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
          <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
            Follow
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full p-4">
          <UnderlinedTabs tabs={tabs} />
        </div>
      </div>
    </Widget>
  </>
);

export default Index;
