import Widget from "components/widget";
import {UnderlinedTabs} from "components/tabs";
import SectionTitle from "components/section-title";
import {
  Intro,
  Instructions,
  TemplateStructure,
} from "components/documentation/installation";
import {
  CodeStructure,
  NamingConventions,
  Folders,
  Files,
} from "components/documentation/code-structure";
import {Customization} from "components/documentation/faq";
import {Credits} from "components/documentation/credits";
import {ChangeLog} from "components/documentation/change-log";
import {Tree} from "components/documentation/tree";

const InstallationTab: React.FC = () => (
  <div className="w-full py-2">
    <Intro />
    <Instructions />
    <TemplateStructure />
  </div>
);

const CodeStructureTab: React.FC = () => (
  <div className="w-full py-2">
    <CodeStructure />
    <NamingConventions />
    <Folders />
    <Files />
    <Tree />
  </div>
);

const FaqTab: React.FC = () => (
  <div className="w-full py-2">
    <Customization />
  </div>
);

const CreditsTab: React.FC = () => (
  <div className="w-full py-2">
    <Credits />
  </div>
);

const ChangeLogTab: React.FC = () => (
  <div className="w-full py-2">
    <ChangeLog />
  </div>
);

const Index: React.FC = () => {
  const tabs = [
    {index: 0, title: "Installation", content: <InstallationTab />},
    {index: 1, title: "Code structure", content: <CodeStructureTab />},
    {index: 2, title: "FAQ", content: <FaqTab />},
    {index: 3, title: "Credits", content: <CreditsTab />},
    {index: 4, title: "Change log", content: <ChangeLogTab />},
  ];
  return (
    <>
      <SectionTitle title="Documentation" subtitle="D-board" />
      <Widget>
        <div className="flex flex-wrap">
          <div className="w-full">
            <UnderlinedTabs tabs={tabs} />
          </div>
        </div>
      </Widget>
    </>
  );
};
export default Index;
