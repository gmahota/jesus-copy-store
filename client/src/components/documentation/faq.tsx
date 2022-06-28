import SectionTitle from "components/section-title";

export type QuestionProps = {
  question: string;
  answer: React.ReactNode;
};

export const Customization: React.FC = () => {
  const questions: QuestionProps[] = [
    {
      question: "How do I open the template?",
      answer: (
        <div>
          First, make sure <code>Next.js</code> is installed. For more
          information go to{" "}
          <a
            href="https://nextjs.org/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500">
            this url
          </a>
          . Then you need to run <code>npm install</code> to install the
          template followed by <code>npm run dev</code> to start the development
          server.
        </div>
      ),
    },
    {
      question:
        "I need an empty page to start developing. Where can I find one?",
      answer: (
        <div>
          Go to the <code>src/pages/empty-page.js</code> file.
        </div>
      ),
    },
    {
      question: "How do I add a new page and/or route?",
      answer: (
        <div>
          Routes are handled automatically by <code>Next.js</code>. To add a new
          page just add it to the <code>src/pages</code> folder.
        </div>
      ),
    },
    {
      question: "How do I set a default and/or global page layout?",
      answer: (
        <div>
          Global layouts are defined in the <code>src/slices/config.js</code>{" "}
          file. Layouts for every route are defined in the{" "}
          <code>src/layouts/index.js</code> file. Unless defined, all routes
          will default to the <code>&lt;Layout1 /&gt;</code> layout.
        </div>
      ),
    },
    {
      question: "Where can I find the colors available in the template?",
      answer: (
        <div>
          <b>D-board</b> uses the default <code>tailwind</code> color palette.
          Full list can be found in this{" "}
          <a
            href="https://tailwindcss.com/docs/customizing-colors"
            target="_blank"
            className="text-blue-500"
            rel="noreferrer">
            url
          </a>
          .
        </div>
      ),
    },
    {
      question: "How do I add a css file to the template?",
      answer: (
        <div>
          CSS files are imported into the template by the{" "}
          <code>src/pages/_app.js</code> file. To add a new file just import it
          to this file.
        </div>
      ),
    },
    {
      question: "How do I set the colors for the pages or components?",
      answer: (
        <div>
          Component colors are defined in the component itself using{" "}
          <code>tailwind</code> classes. To change the colors for a component
          just add your classes to the component file.
        </div>
      ),
    },
    {
      question: "I have a question, but it is not listed here, what can I do?",
      answer: (
        <div>
          Send us an email to <b>support@mobifica.com</b> or contact us through
          our Theme Forest profile and we'll do our best to try to help you
        </div>
      ),
    },
    {
      question:
        "I would like to see a new plugin installed or functionality developed in the template, is it possible?",
      answer: (
        <div>
          We are always trying to improve and adding new functionalities and
          plugins to the template, so every request is welcomed and will be
          evaluated
        </div>
      ),
    },
    {
      question: "I found a bug, what can I do?",
      answer: (
        <div>
          Please let us know and we'll do our best to fix it as soon as possible
        </div>
      ),
    },
    {
      question: "Are updates free?",
      answer: (
        <div>
          Yes, they are and always will be for our Themeforest customers
        </div>
      ),
    },
  ];
  return (
    <div className="mb-8">
      <SectionTitle
        title="Customization"
        subtitle="Frequently asked questions"
      />
      <ol className="pl-6 mb-4 list-disc">
        {questions.map((question, i) => (
          <li className="mb-4" key={i}>
            <div className="mb-2 text-base font-bold">{question.question}</div>
            {question.answer}
          </li>
        ))}
      </ol>
    </div>
  );
};
