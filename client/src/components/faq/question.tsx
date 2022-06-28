import React, {useState} from "react";
import {FiChevronRight} from "react-icons/fi";
import {Badge} from "components/badges";

export type BadgeProps = {
  color: string;
  title: string;
};

export type QuestionProps = {
  question: string;
  answer: string;
  badges: BadgeProps[];
};
const Question: React.FC<QuestionProps> = ({question, answer, badges}) => {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <div className="w-full">
      <button
        onClick={() => setHidden(!hidden)}
        className="flex flex-row items-center justify-start w-full text-gray-900 bg-transparent dark:text-white text-left">
        <div className="w-full">
          <div className="mb-2 text-sm font-bold">{question}</div>
          <div className="flex flex-row items-center justify-start space-x-1">
            {badges.map((badge, i) => (
              <Badge key={i} size="sm" color={badge.color} rounded>
                {badge.title}
              </Badge>
            ))}
          </div>
        </div>
        <FiChevronRight
          className={`stroke-current transition ease-in-out duration-150 transform ${
            hidden ? "rotate-0" : "rotate-90"
          }`}
        />
      </button>
      <div
        className={`prose prose-sm max-w-none py-3 w-full text-gray-900 dark:text-white ${
          hidden ? "hidden" : "block"
        }`}>
        {answer}
      </div>
    </div>
  );
};

export default Question;
