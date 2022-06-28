import {FiTwitter, FiFacebook, FiGithub} from "react-icons/fi";

const SocialMedia: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-1">Or sign up with</div>
      <div className="flex flex-row items-center justify-start w-full -ml-2 space-x-2">
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold uppercase bg-transparent rounded-full hover:bg-transparent active:bg-transparent focus:bg-transparent">
          <FiFacebook className="text-xl stroke-current text-facebook" />
        </button>
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold uppercase bg-transparent rounded-full hover:bg-transparent active:bg-transparent focus:bg-transparent">
          <FiTwitter className="text-xl stroke-current text-twitter" />
        </button>
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold uppercase bg-transparent rounded-full hover:bg-transparent active:bg-transparent focus:bg-transparent">
          <FiGithub className="text-xl stroke-current text-github" />
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
