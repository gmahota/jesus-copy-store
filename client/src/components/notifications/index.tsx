import {useEffect, useState} from "react";
import Portal from "components/portal";
import Alert from "components/alerts";

export type NotificationProps = {
  position: string;
  padding?: string;
  fullWidth?: boolean;
  showButton?: boolean;
  buttonTitle?: string;
  animation?: boolean;
  notificationClassNames: string;
  notificationIcon?: React.ReactNode;
  notificationContent: React.ReactNode;
  initialState?: boolean;
};

const Notification: React.FC<NotificationProps> = ({
  showButton = true,
  buttonTitle = "",
  position,
  padding = "p-0",
  animation = false,
  fullWidth = false,
  notificationClassNames,
  notificationIcon = null,
  notificationContent,
  initialState = false,
}) => {
  const [isOpen, setOpen] = useState<boolean>(initialState);
  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  useEffect(() => {
    const handleEsc = (event: any) => {
      const {key} = event;
      if (key === "Escape") {
        hide();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="px-4 py-3 text-xs font-bold uppercase bg-transparent rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={show}>
          {buttonTitle}
        </button>
      )}
      {isOpen && (
        <Portal selector="#portal">
          <div
            className={`${position} ${animation} ${
              fullWidth ? "w-full" : "w-[384px]"
            } ${padding}`}>
            <Alert
              onClick={hide}
              color={notificationClassNames}
              icon={notificationIcon}>
              {notificationContent}
            </Alert>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Notification;
