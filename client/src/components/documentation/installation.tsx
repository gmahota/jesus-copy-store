import {useAppSelector} from "store";

export const Intro: React.FC = () => {
  const {name} = useAppSelector((state) => state.config);
  return (
    <div className="mb-8">
      <p className="mb-2">
        <span className="font-bold">{name}</span> is an advanced, responsive
        admin template built with{" "}
        <a
          className="text-blue-500"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer">
          Typescript
        </a>
        ,{" "}
        <a
          className="text-blue-500"
          href="https://facebook.github.io/react"
          target="_blank"
          rel="noopener noreferrer">
          React
        </a>
        ,{" "}
        <a
          className="text-blue-500"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer">
          Redux Toolkit
        </a>
        ,{" "}
        <a
          className="text-blue-500"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer">
          Next.js
        </a>{" "}
        and{" "}
        <a
          className="text-blue-500"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer">
          Tailwind CSS
        </a>
        .
      </p>
      <p className="mb-8">
        It includes 2 different layouts, 2 background color styles, 100+
        components in every layout and lots of widgets and custom made reusable
        components to help you kickstart your next React project or application.
      </p>
    </div>
  );
};

export const Instructions: React.FC = () => {
  const {name} = useAppSelector((state) => state.config);
  return (
    <div className="mb-8">
      <p className="mb-8">
        To install, first make sure the correct <code>node</code> and{" "}
        <code>npm</code> are installed in your system. If they are not
        installed, you can get <code>node</code> and <code>npm</code>{" "}
        <a
          className="text-blue-500"
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer">
          here
        </a>
        .
      </p>
      <p className="mb-2">
        To check if they are installed correctly, run the following commands,
        which should print at least the following versions.
      </p>
      <ol className="pl-4 mb-8 list-decimal">
        <li className="mb-2">
          <code>node -v</code> v16.13.0 LTS
        </li>
        <li className="mb-2">
          <code>npm -v</code> 8.1.0
        </li>
      </ol>

      <p className="mb-2">
        <span className="font-bold">{name}</span> is 100% ready to use. Just
        unzip the included files and run the following commands:{" "}
      </p>
      <ol className="pl-4 mb-8 list-decimal">
        <li className="mb-2">
          <code>npm install</code> to install all the required dependencies
        </li>
        <li className="mb-2">
          <code>npm run dev</code> to run the development server
        </li>
        <li className="mb-2">
          Open <code>http://localhost:3000</code>
        </li>
      </ol>

      <p className="mb-2">
        To build and run a production ready bundle, run the following commands:{" "}
      </p>
      <ol className="pl-4 mb-8 list-decimal">
        <li className="mb-2">
          <code>npm run build</code>
        </li>
        <li className="mb-2">
          <code>npm run start</code> to preview the generated files
        </li>
      </ol>
    </div>
  );
};

export const TemplateStructure: React.FC = () => (
  <div className="mb-8">
    <p className="mb-2">
      The template includes the following structural elements:
    </p>
    <ol className="pl-6 mb-2 list-disc">
      <li className="mb-2">Navbar</li>
      <li className="mb-2">Left sidebar</li>
      <li className="mb-2">Right sidebar</li>
      <li className="mb-2">Main content section</li>
      <li className="mb-2">Centered layouts for forms</li>
    </ol>
  </div>
);
