import {FiThumbsUp, FiMessageCircle, FiShare2} from "react-icons/fi";
import Avatars from "./avatars";

const Icons: React.FC = () => (
  <div className="flex flex-row items-center justify-start mb-4">
    <button className="font-bold uppercase text-xs px-3 py-2 rounded-lg flex flex-row items-center justify-center">
      <FiThumbsUp size={18} className="stroke-current" />
      <span className="ml-2">Like</span>
    </button>
    <button className="flex flex-row items-center justify-center px-2 py-2 text-xs font-bold uppercase rounded-lg">
      <FiShare2 size={18} className="stroke-current" />
      <span className="ml-2">Share</span>
    </button>
    <button className="flex flex-row items-center justify-center px-2 py-2 text-xs font-bold uppercase rounded-lg">
      <FiMessageCircle size={18} className="stroke-current" />
      <span className="ml-2">Comment</span>
    </button>

    <Avatars />
  </div>
);

export default Icons;
