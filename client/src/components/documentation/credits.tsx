import SectionTitle from "components/section-title";

export type ItemProps = {
  title: string;
  description: string;
  url: string;
};

export const Credits: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "React",
      description: "A JavaScript library for building user interfaces",
      url: "https://reactjs.org/",
    },
    {
      title: "Next.js",
      description:
        "Production grade React applications that scale. The world’s leading companies use Next.js by Vercel to build static and dynamic websites and web applications.",
      url: "https://nextjs.org/",
    },
    {
      title: "Typescript",
      description: "TypeScript is JavaScript with syntax for types.",
      url: "https://www.typescriptlang.org/",
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building custom designs",
      url: "https://tailwindcss.com/",
    },
    {
      title: "Animate.css",
      description: "Just-add-water CSS animations",
      url: "https://animate.style",
    },
    {
      title: "Redux",
      description: "A Predictable State Container for JS Apps",
      url: "https://redux.js.org/",
    },
    {
      title: "Redux Toolkit",
      description:
        "The official, opinionated, batteries-included toolset for efficient Redux development",
      url: "https://redux-toolkit.js.org/",
    },
    {
      title: "Google fonts",
      description:
        "Making the web more beautiful, fast, and open through great typography",

      url: "https://fonts.google.com/",
    },
    {
      title: "Unsplash",
      description: "Free (do whatever you want) high-resolution photos",
      url: "https://unsplash.com/",
    },
    {
      title: "faker.js",
      description:
        "faker.js - generate massive amounts of fake data in the browser and node.js",
      url: "https://github.com/marak/Faker.js/",
    },
    {
      title: "React Icons",
      description:
        "Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.",
      url: "https://react-icons.github.io/react-icons/",
    },
    {
      title: "flag-icon-css",
      description:
        "A collection of all country flags in SVG plus the CSS for easier integration.",
      url: "http://flag-icon-css.lip.is/",
    },
    {
      title: "React Select",
      description:
        "A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.",
      url: "https://react-select.com/home",
    },
    {
      title: "Headless UI",
      description:
        "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
      url: "https://headlessui.dev/",
    },
    {
      title: "Recharts",
      description: "A composable charting library built on React components",
      url: "http://recharts.org/en-US/",
    },
    {
      title: "accounting.js",
      description:
        "accounting.js is a tiny JavaScript library by Open Exchange Rates, providing simple and advanced number, money and currency formatting.",
      url: "http://openexchangerates.github.io/accounting.js/",
    },
    {
      title: "Popper",
      description: "Tooltip & Popover positioning engine",
      url: "https://popper.js.org/",
    },
    {
      title: "react-beautiful-dnd",
      description:
        "Beautiful and accessible drag and drop for lists with React",
      url: "https://github.com/atlassian/react-beautiful-dnd",
    },
    {
      title: "React Hook Form",
      description:
        "Performant, flexible and extensible forms with easy-to-use validation.",
      url: "https://react-hook-form.com/",
    },
    {
      title: "GetTerms.io",
      description: "Privacy Policy Generator",
      url: "https://getterms.io/",
    },
  ];

  return (
    <div className="mb-8">
      <SectionTitle
        title="Credits"
        subtitle="Frameworks, scripts and dependencies used in the template"
      />
      <div className="flex">
        <div className="w-full">
          <ol className="pl-6 list-disc">
            {items.map((item, i) => (
              <li key={i} className="mb-4">
                <div className="mb-2 font-sans font-bold font-base">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </div>
                <p className="mb-2 leading-7">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
