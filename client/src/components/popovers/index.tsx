import {useState} from "react";
import {Popover} from "@headlessui/react";
import {usePopper} from "react-popper";

export type Placement = "left" | "top" | "right" | "bottom";

const Component: React.FC<{
  buttonText: string;
  placement: Placement;
  children: React.ReactNode;
}> = ({buttonText, placement, children}) => {
  const [referenceElement, setReferenceElement] = useState<any>();
  const [popperElement, setPopperElement] = useState<any>();
  const {styles, attributes} = usePopper(referenceElement, popperElement, {
    placement: placement,
  });
  let margin = "m-0";
  switch (placement) {
    case "left":
      margin = "mr-2";
      break;
    case "top":
      margin = "mb-2";
      break;
    case "right":
      margin = "ml-2";
      break;
    case "bottom":
      margin = "mt-2";
      break;
  }
  return (
    <Popover>
      <Popover.Button
        className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-600"
        ref={setReferenceElement}>
        {buttonText}
      </Popover.Button>
      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}>
        <div className={margin}>{children}</div>
      </Popover.Panel>
    </Popover>
  );
};

export default Component;
