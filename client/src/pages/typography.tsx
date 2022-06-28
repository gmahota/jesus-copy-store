import SectionTitle from "components/section-title";
import Widget from "components/widget";

const Index: React.FC = () => {
  return (
    <>
      <SectionTitle title="UI Elements" subtitle="Typography" />
      <Widget
        title="Default colors"
        description={
          <span>
            Control the font size of an element using the{" "}
            <code>.text-size</code> utilities included with{" "}
            <code>Tailwind CSS</code>. For more information go to{" "}
            <a
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/docs/font-size/#app">
              this url
            </a>
            . For text color information go to{" "}
            <a
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/docs/text-color/#app">
              this url
            </a>
            .
          </span>
        }>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Header 1
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <h1 className="text-4xl">What we think, we become</h1>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Header 2
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <h1 className="text-3xl">What we think, we become</h1>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Header 3
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <h1 className="text-2xl">What we think, we become</h1>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Header 4
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <h1 className="text-xl">What we think, we become</h1>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Header 5
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <h1 className="text-lg">What we think, we become</h1>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Header 6
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <h1 className="text-base">What we think, we become</h1>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Paragraph
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <p className="whitespace-normal">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nullam id dolor id nibh ultricies vehicula
              </p>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Text gray
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <div className="flex flex-col">
                <div className="mb-2 font-light text-gray-400">
                  Every moment is a fresh beginning
                </div>
                <div className="mb-2 font-normal text-gray-500">
                  Never regret anything that made you smile
                </div>
                <div className="mb-2 font-bold text-gray-600">
                  Whatever you do, do it well
                </div>
                <div className="font-black text-gray-700">
                  All limitations are self-imposed
                </div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Text red
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <div className="flex flex-col">
                <div className="mb-2 font-light text-red-400">
                  Every moment is a fresh beginning
                </div>
                <div className="mb-2 font-normal text-red-500">
                  Never regret anything that made you smile
                </div>
                <div className="mb-2 font-bold text-red-600">
                  Whatever you do, do it well
                </div>
                <div className="font-black text-red-700">
                  All limitations are self-imposed
                </div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Text yellow
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <div className="flex flex-col">
                <div className="mb-2 font-light text-yellow-400">
                  Every moment is a fresh beginning
                </div>
                <div className="mb-2 font-normal text-yellow-500">
                  Never regret anything that made you smile
                </div>
                <div className="mb-2 font-bold text-yellow-600">
                  Whatever you do, do it well
                </div>
                <div className="font-black text-yellow-700">
                  All limitations are self-imposed
                </div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Text green
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <div className="flex flex-col">
                <div className="mb-2 font-light text-green-400">
                  Every moment is a fresh beginning
                </div>
                <div className="mb-2 font-normal text-green-500">
                  Never regret anything that made you smile
                </div>
                <div className="mb-2 font-bold text-green-600">
                  Whatever you do, do it well
                </div>
                <div className="font-black text-green-700">
                  All limitations are self-imposed
                </div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Text blue
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <div className="flex flex-col">
                <div className="mb-2 font-light text-blue-400">
                  Every moment is a fresh beginning
                </div>
                <div className="mb-2 font-normal text-blue-500">
                  Never regret anything that made you smile
                </div>
                <div className="mb-2 font-bold text-blue-600">
                  Whatever you do, do it well
                </div>
                <div className="font-black text-blue-700">
                  All limitations are self-imposed
                </div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Text indigo
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <div className="flex flex-col">
                <div className="mb-2 font-light text-indigo-400">
                  Every moment is a fresh beginning
                </div>
                <div className="mb-2 font-normal text-indigo-500">
                  Never regret anything that made you smile
                </div>
                <div className="mb-2 font-bold text-indigo-600">
                  Whatever you do, do it well
                </div>
                <div className="font-black text-indigo-700">
                  All limitations are self-imposed
                </div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Text purple
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <div className="flex flex-col">
                <div className="mb-2 font-light text-purple-400">
                  Every moment is a fresh beginning
                </div>
                <div className="mb-2 font-normal text-purple-500">
                  Never regret anything that made you smile
                </div>
                <div className="mb-2 font-bold text-purple-600">
                  Whatever you do, do it well
                </div>
                <div className="font-black text-purple-700">
                  All limitations are self-imposed
                </div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell p-2 text-sm whitespace-nowrap">
              Text pink
            </div>
            <div className="table-cell p-2 whitespace-normal">
              <div className="flex flex-col">
                <div className="mb-2 font-light text-pink-400">
                  Every moment is a fresh beginning
                </div>
                <div className="mb-2 font-normal text-pink-500">
                  Never regret anything that made you smile
                </div>
                <div className="mb-2 font-bold text-pink-600">
                  Whatever you do, do it well
                </div>
                <div className="font-black text-pink-700">
                  All limitations are self-imposed
                </div>
              </div>
            </div>
          </div>
        </div>
      </Widget>
    </>
  );
};
export default Index;
