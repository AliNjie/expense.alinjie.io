import React, { ReactElement, ReactType } from "react";
import classNames from "classnames";

interface Props {
  label: string;
  value: number | string;
  icon: ReactType;
  iconStyle?: "positive" | "negative" | "neutral";
  className?: string;
}

export default function Stat({
  label,
  value,
  icon,
  iconStyle = "neutral",
  className,
}: Props): ReactElement {
  const Icon = icon;

  return (
    <div className={classNames("flex items-center", className)}>
      <div
        className={classNames(
          "w-8 h-8 rounded-full flex justify-center items-center mr-2",
          {
            "bg-red-200 text-red-500": iconStyle === "negative",
          },
          {
            "bg-green-200 text-green-500": iconStyle === "positive",
          },
          {
            "bg-gray-200 text-gray-500": iconStyle === "neutral",
          }
        )}
      >
        <Icon />
      </div>
      <div>
        <span className="block font-bold text-gray-700">{label}</span>
        <span className="block text-gray-500">{value}</span>
      </div>
    </div>
  );
}
