import SectionTitle from "components/section-title";
import Widget from "components/widget";
import List1 from "components/lists/list-1";
import List2 from "components/lists/list-2";
import List3 from "components/lists/list-3";
import List4 from "components/lists/list-4";
import List5 from "components/lists/list-5";
import lists from "json/lists.json";

export type ListProps = {
  title: string;
  sentence: string;
  number: number;
  img: string;
  description: string;
  timeago: string;
};

const Index: React.FC = () => {
  const items: ListProps[] = lists;
  return (
    <>
      <SectionTitle title="UI Elements" subtitle="Lists" />

      <Widget
        title="Single line lists"
        description={
          <span>
            Use the following examples for your single list components
          </span>
        }>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <List1 items={items} />
          </div>
          <div className="w-full lg:w-1/2">
            <List2 items={items} />
          </div>
        </div>
      </Widget>

      <Widget
        title="Double line lists"
        description={
          <span>
            Use the following examples for your double list components
          </span>
        }>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <List3 items={items} />
          </div>
          <div className="w-full lg:w-1/2">
            <List4 items={items} />
          </div>
        </div>
      </Widget>

      <Widget
        title="Multi line lists"
        description={
          <span>
            Use the following examples for your multi line list components
          </span>
        }>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <List5 items={items} />
          </div>
        </div>
      </Widget>
    </>
  );
};
export default Index;
