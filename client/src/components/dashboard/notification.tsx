import {useEffect, useState} from "react";
import Notification, {NotificationProps} from "components/notifications";
import {FiAlertCircle} from "react-icons/fi";

const Index: React.FC = () => {
  const [initialState, setInitialState] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setInitialState(true);
    }, 3000);
    setTimeout(() => {
      setInitialState(false);
    }, 8000);
  }, []);

  const item: NotificationProps = {
    showButton: false,
    position: "fixed z-50 top-0 right-0",
    padding: "p-2",
    fullWidth: false,
    notificationClassNames: "bg-blue-500 text-white rounded shadow",
    notificationIcon: <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />,
    notificationContent: <span>Press CTRL+I to toggle dark mode</span>,
  };
  if (!initialState) return null;
  return <Notification {...item} initialState={true} />;
};
export default Index;
