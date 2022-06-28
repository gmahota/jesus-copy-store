import {FiCamera, FiPaperclip, FiMic} from "react-icons/fi";

const Input: React.FC<{img: string}> = ({img}) => (
  <div className="flex items-center space-x-4 justify-items-start">
    <div className="shrink-0 w-8">
      <img
        src={img}
        alt="media"
        className={`h-8 w-full shadow-lg rounded-full ring`}
      />
    </div>
    <input
      name="name"
      type="text"
      className="w-full h-10 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full appearance-none focus:outline-none form-input"
      placeholder="Enter something..."
    />
    <div className="flex flex-row items-center justify-end shrink-0 space-x-2">
      <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold uppercase rounded-full">
        <FiCamera size={18} className="stroke-current" />
      </button>
      <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold uppercase rounded-full">
        <FiPaperclip size={18} className="stroke-current" />
      </button>
      <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold uppercase rounded-full">
        <FiMic size={18} className="stroke-current" />
      </button>
    </div>
  </div>
);

export default Input;
