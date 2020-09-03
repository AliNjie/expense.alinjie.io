import React, { ReactElement, HTMLProps } from "react";
import classNames from "classnames";

interface Props extends HTMLProps<HTMLDivElement> {
  label: string;
  value: string | number;
  className?: string;
}

export default function StatCard({
  label,
  value,
  className,
  ...props
}: Props): ReactElement {
  return (
    <div
      className={classNames(
        "w-full bg-gray-200 p-4 flex flex-col justify-center items-center",
        className
      )}
      {...props}
    >
      <div>{label}</div>
      <div className="text-xl">{value}</div>
    </div>
  );
}
