import {FiSlack, FiGithub} from "react-icons/fi";
import SectionTitle from "components/section-title";
import Faq from "components/faq";
import Features from "components/support/features";
import Search from "components/support/search";
import Title from "components/support/title";
import Widget1 from "components/support/widget-1";

const Index: React.FC = () => (
  <>
    <SectionTitle title="Pages" subtitle="Support" />
    <div className="w-full p-4 bg-white border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-800">
      <Search />
      <Features />
      <Title
        title="Most helpful articles"
        description="Start here to find best possible answers from our experts"
      />
      <div className="w-full mb-8 ">
        <Faq />
      </div>
      <div className="items-center justify-center w-full mb-8 text-center">
        <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
          View all articles
        </button>
      </div>
      <Title
        title="Community help"
        description="Get your answers from our network of users"
      />
      <div className="flex items-center justify-start w-full px-6 py-3 mb-8 text-white bg-blue-500">
        <div className="flex flex-col w-full">
          <div className="text-lg">Can't find what you're looking for?</div>
          <div className="text-base">Let us help you right now!</div>
        </div>
        <div className="shrink-0">
          <button className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-white rounded-lg hover:bg-gray-100">
            Submit a request
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center mb-8">
        <div className="w-full lg:w-1/2">
          <Widget1
            icon={<FiSlack className="text-3xl text-blue-500 stroke-current" />}
            title="Slack channel"
            description="Welcome to our Slack channel"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <Widget1
            icon={
              <FiGithub className="text-3xl text-blue-500 stroke-current" />
            }
            title="Github issues"
            description="Welcome to our github issues repository"
          />
        </div>
      </div>
    </div>
  </>
);
export default Index;
