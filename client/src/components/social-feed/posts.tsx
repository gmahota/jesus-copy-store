import {FiClock} from "react-icons/fi";
import posts from "json/posts.json";
import Input from "./input";
import Comments from "./comments";
import Icons from "./icons";

export type Post = {
  title: string;
  sentence: string;
  description: string;
  sentences: string;
  paragraphs: string;
  number: number;
  largeImage: string;
  img: string;
  timeago: string;
};

const Posts: React.FC = () => {
  const items: Post[] = posts;
  return (
    <div className="w-full">
      {items.map((item, i) => (
        <div className="flex flex-col px-4 space-y-4" key={i}>
          <div className="flex flex-row items-start justify-start">
            <div className="shrink-0 w-8 mt-1 mr-4">
              <img
                src={item.img}
                alt="media"
                className={`h-8 w-full shadow-lg rounded-full ring`}
              />
            </div>
            <div className="flex flex-col flex-grow w-full space-y-0">
              <div className="text-sm font-bold">{item.title}</div>
              <div className="flex flex-row items-center justify-start mb-2">
                <FiClock size={18} className="text-gray-500 stroke-current" />
                <div className="ml-1 text-gray-500">{item.timeago}</div>
              </div>
            </div>
          </div>
          <div className="w-full">{item.sentences}</div>
          <div className="w-full">
            <img
              src={item.largeImage}
              alt="media"
              className="object-cover w-full h-48"
            />
          </div>

          <Icons />
          <Input img={item.img} />
          <Comments />
        </div>
      ))}
    </div>
  );
};

export default Posts;
