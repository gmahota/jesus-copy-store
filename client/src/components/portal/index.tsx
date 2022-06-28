import React, {useState, useEffect, useRef} from "react";
import {createPortal} from "react-dom";

export type PortalProps = {
  selector: string;
  children: React.ReactNode;
};

const Portal: React.FC<PortalProps> = ({children, selector}) => {
  const ref = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) as any;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};

export default Portal;
