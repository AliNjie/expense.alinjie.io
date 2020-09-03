import React, {
  ReactElement,
  ChangeEvent,
  ComponentType,
  HTMLProps,
} from "react";
import { ChevronDownOutline } from "heroicons-react";
import classNames from "classnames";

type Option = {
  label: string;
  value: string | number;
};

interface Props extends HTMLProps<HTMLSelectElement> {
  className?: string;
  options: Option[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  leftIcon?: ComponentType<HTMLProps<HTMLOrSVGElement>>;
}

export default function Select({
  className,
  options,
  onChange,
  leftIcon,
  ...props
}: Props): ReactElement {
  const LeftIconComponent = leftIcon;

  return (
    <div className={classNames("relative", className)}>
      {leftIcon && (
        <LeftIconComponent className="absolute h-5 top-0 bottom-0 left-0 my-auto ml-1" />
      )}
      <select
        {...props}
        className={classNames(
          leftIcon ? "pl-8" : "pl-2",
          "border appearance-none pr-8 rounded py-1"
        )}
        onChange={onChange}
      >
        <option value="" disabled>
          Select month
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownOutline className="absolute top-0 right-0 bottom-0 left-auto my-auto h-5 mr-1 pointer-events-none" />
    </div>
  );
}
