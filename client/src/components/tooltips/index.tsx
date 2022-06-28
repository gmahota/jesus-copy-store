import React, {useState, useRef} from "react";
import {usePopper} from "react-popper";

export type Placement = "left" | "top" | "right" | "bottom";
export type TooltipProps = {
  placement: Placement;
  content: React.ReactNode;
  children: React.ReactNode;
};
const Tooltip: React.FC<TooltipProps> = ({placement, content, children}) => {
  const [hidden, setHidden] = useState(true);

  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  const {styles, attributes} = usePopper(
    buttonRef.current,
    tooltipRef.current,
    {
      placement: placement,
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 0],
          },
        },
      ],
    }
  );

  const showTooltip = () => {
    setHidden(false);
  };
  const hideTooltip = () => {
    setHidden(true);
  };

  return (
    <>
      <button
        ref={buttonRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600">
        {children}
      </button>
      <div ref={tooltipRef} style={styles.popper} {...attributes.popper}>
        <div
          style={styles.offset}
          className={`bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 border-0 font-normal text-sm max-w-xs no-underline break-words rounded-lg shadow-lg w-64 z-10 ${
            hidden ? "hidden" : "block"
          }`}>
          <div className="p-2">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
