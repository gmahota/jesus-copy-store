import {useAppSelector} from "store";
import SectionTitle from "components/section-title";

export const CodeStructure: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {name} = config;
  return (
    <div className="mb-8">
      <p className="mb-2">
        <span className="font-bold">{name}</span> uses the default{" "}
        <a
          className="text-blue-500"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer">
          Next.js
        </a>{" "}
        file and folder code structure. For more information on the project and
        to familiarize yourself with the file and folder structure used in a{" "}
        <a
          className="text-blue-500"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer">
          Next.js
        </a>{" "}
        application, please go to the{" "}
        <a
          className="text-blue-500"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer">
          Next.js
        </a>{" "}
        website.
      </p>
    </div>
  );
};

export const NamingConventions: React.FC = () => (
  <div className="mb-8">
    <p className="mb-2">
      All pages are located in the <code>src/pages</code> folder.
    </p>

    <p className="mb-2">
      All components and widgets are located in the
      <code>src/components</code> folder.
    </p>

    <p className="mb-2">
      All layouts and structural views are located in the
      <code>src/layouts</code> folder.
    </p>

    <p className="mb-2">
      CSS files are located in the
      <code>src/css</code> folder.
    </p>
  </div>
);

export const Folders: React.FC = () => {
  const items = [
    {
      folder: "src/components",
      description:
        "Includes all the components ands widgets included in the template",
    },
    {folder: "src/css", description: "Includes CSS files"},
    {
      folder: "src/layouts",
      description: "Includes all layouts and structural views",
    },
    {
      folder: "src/css/layouts",
      description: "Includes CSS for all the included layouts",
    },
    {
      folder: "src/css/components",
      description:
        "Includes CSS for some of the included components, although most components use tailwind classes",
    },
    {
      folder: "functions",
      description: "Includes helpers and functions used in the template",
    },
    {
      folder: "json",
      description:
        "Includes sample json files with data used in some views and components",
    },
    {
      folder: "src/slices",
      description: "Includes Redux Toolkit slices used in the app",
    },
    {
      folder: "src/slices/navigation",
      description:
        "Includes menus and navigation files that are used in the left sidebar and top navigation components",
    },
    {folder: "src/pages", description: "Includes all pages and sample views"},
    {
      folder: "public",
      description:
        "Includes all the static assets and content used in the template",
    },
  ];
  return (
    <div className="mb-8">
      <SectionTitle
        title="Folders"
        subtitle="Important folders in the template"
      />
      <ol className="pl-6 list-disc">
        {items.map((folder, i) => (
          <li className="mb-2" key={i}>
            <p className="mb-2">
              <code>{folder.folder}</code>
            </p>
            <p className="mb-2">{folder.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export const Files: React.FC = () => {
  const filenames = [
    {
      filename: "src/store.tsx",
      description: "Redux Toolkit config and global store",
    },
    {
      filename: "tailwind.config.js",
      description: "Tailwind CSS default configuration",
    },
    {filename: "src/pages/index.tsx", description: "Template index file"},
    {
      filename: "src/pages/_app.tsx",
      description: "Next.js custom App file. All CSS files are imported here",
    },
    {
      filename: "src/pages/_document.tsx",
      description:
        "Next.js custom Document file. Custom HTML meta tags are defined here",
    },
    {
      filename: "postcss.config.js",
      description: "PostCSS configuration for plugins used in the template",
    },
  ];
  return (
    <div className="mb-8">
      <SectionTitle title="Files" subtitle="Important files in the template" />
      <ol className="pl-6 list-disc">
        {filenames.map((filename, i) => (
          <li className="mb-2" key={i}>
            <p className="mb-2">
              <code>{filename.filename}</code>
            </p>
            <p className="mb-2">{filename.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
