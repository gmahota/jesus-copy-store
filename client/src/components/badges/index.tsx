import clsx from "clsx";

export type BadgeSize = "sm" | "default" | "lg";

export type BadgeProps = {
  rounded?: boolean;
  outlined?: boolean;
  size: BadgeSize;
  color: string;
  classNames?: string;
  children: React.ReactNode;
};

export type CircularBadgeProps = {
  outlined?: boolean;
  size: BadgeSize;
  color: string;
  classNames?: string;
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({
  rounded = false,
  outlined = false,
  size = "default",
  classNames = "",
  color,
  children,
}) => {
  if (outlined) {
    return (
      <span
        className={clsx(
          "uppercase font-bold inline-flex text-center bg-transparent border border-current",
          color,
          rounded && "rounded-lg",
          size === "default" && "text-xs px-2 py-1",
          size === "sm" && "text-xs px-2 py-0",
          size === "lg" && "text-xs px-2 py-2",
          classNames
        )}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={clsx(
        "uppercase font-bold inline-flex text-center",
        color,
        rounded && "rounded-lg",
        size === "default" && "text-xs px-2 py-1",
        size === "sm" && "text-xs px-2 py-0",
        size === "lg" && "text-xs px-2 py-2",
        classNames
      )}>
      {children}
    </span>
  );
};

export const CircularBadge: React.FC<CircularBadgeProps> = ({
  size = "default",
  outlined = false,
  classNames = "",
  color,
  children,
}) => {
  if (outlined) {
    return (
      <span
        className={clsx(
          "uppercase font-bold inline-flex text-center p-0 leading-none bg-transparent border border-current",
          color,
          size === "sm" &&
            "text-xs h-4 w-4 inline-flex items-center justify-center rounded-full",
          size === "lg" &&
            "text-xs h-6 w-6 inline-flex items-center justify-center rounded-full",
          size === "default" &&
            "text-xs h-5 w-5 inline-flex items-center justify-center rounded-full",
          classNames
        )}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={clsx(
        "uppercase font-bold inline-flex text-center p-0 leading-none",
        color,
        size === "sm" &&
          "text-xs h-4 w-4 inline-flex items-center justify-center rounded-full",
        size === "lg" &&
          "text-xs h-6 w-6 inline-flex items-center justify-center rounded-full",
        size === "default" &&
          "text-xs h-5 w-5 inline-flex items-center justify-center rounded-full",
        classNames
      )}>
      {children}
    </span>
  );
};
