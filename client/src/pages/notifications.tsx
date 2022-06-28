import SectionTitle from "components/section-title";
import Widget from "components/widget";
import Notification, {NotificationProps} from "components/notifications";
import {FiAlertCircle} from "react-icons/fi";

const Index: React.FC = () => {
  const items: NotificationProps[] = [
    {
      buttonTitle: "on top of page",
      position: "fixed z-50 top-0 left-0 right-0",
      fullWidth: true,
      notificationClassNames: "bg-blue-500 text-white",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
    {
      buttonTitle: "on top of page",
      position: "relative",
      fullWidth: true,
      notificationClassNames: "bg-blue-500 text-white",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
    {
      buttonTitle: "on bottom of page",
      position: "fixed z-50 bottom-0 left-0 right-0",
      fullWidth: true,
      padding: "px-4 py-2",
      notificationClassNames:
        "bg-green-500 text-white shadow-lg border border-green-500 rounded-lg",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
  ];
  const positions: NotificationProps[] = [
    {
      buttonTitle: "top left",
      position: "fixed z-50 top-0 left-0",
      padding: "p-2",
      notificationClassNames: "bg-blue-500 text-white",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
    {
      buttonTitle: "top right",
      position: "fixed z-50 top-0 right-0",
      padding: "p-2",
      notificationClassNames: "bg-blue-500 text-white",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
    {
      buttonTitle: "bottom right",
      position: "fixed z-50 bottom-0 right-0",
      padding: "p-2",
      notificationClassNames: "bg-blue-500 text-white",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
    {
      buttonTitle: "bottom left",
      position: "fixed z-50 bottom-0 left-0",
      padding: "p-2",
      notificationClassNames: "bg-blue-500 text-white",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
  ];
  const animations: NotificationProps[] = [
    {
      buttonTitle: "fadeInUp",
      position: "fixed z-50 top-0 left-0",
      padding: "p-2",
      animation: true,
      notificationClassNames:
        "bg-blue-500 text-white animate__animated animate__fadeInUp",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
    {
      buttonTitle: "fadeInRight",
      position: "fixed z-50 top-0 right-0",
      padding: "p-2",
      animation: true,
      notificationClassNames:
        "bg-blue-500 text-white animate__animated animate__fadeInRight",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
    {
      buttonTitle: "bottom right",
      position: "fixed z-50 bottom-0 right-0",
      padding: "p-2",
      animation: true,
      notificationClassNames:
        "bg-blue-500 text-white animate__animated animate__fadeInRight",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
    {
      buttonTitle: "bottom left",
      position: "fixed z-50 bottom-0 left-0",
      padding: "p-2",
      animation: true,
      notificationClassNames:
        "bg-blue-500 text-white animate__animated animate__fadeInLeft",
      notificationIcon: (
        <FiAlertCircle className="w-4 h-4 mr-2 stroke-current" />
      ),
      notificationContent: <span>This is an important message!</span>,
    },
  ];
  return (
    <>
      <SectionTitle title="Notifications" subtitle="Custom notifications" />

      <Widget
        title="Full page width notifications"
        description={
          <span>
            Use the following examples to show full page width notifications
          </span>
        }>
        <div className="flex flex-wrap w-full">
          {items.map((item, i) => (
            <Notification {...item} key={i} />
          ))}
        </div>
      </Widget>

      <Widget
        title="Notification positions"
        description={
          <span>
            Use Tailwind CSS classes to position your notifications in different
            places
          </span>
        }>
        <div className="flex flex-wrap w-full">
          {positions.map((item, i) => (
            <Notification {...item} key={i} />
          ))}
        </div>
      </Widget>

      <Widget
        title="Notification animations"
        description={
          <span>
            Use the <code>Animate.css</code> classes to add custom animations to
            your notifications
          </span>
        }>
        <div className="flex flex-wrap w-full">
          {animations.map((item, i) => (
            <Notification {...item} key={i} />
          ))}
        </div>
      </Widget>
    </>
  );
};
export default Index;
