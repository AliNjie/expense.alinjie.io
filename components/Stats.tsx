import React, { ReactElement } from "react";
import Stat from "./common/Stat";
import { thousandSeparate } from "../utils/thousandSeparate";
import { ArrowUpOutline, ArrowDownOutline } from "heroicons-react";
import classNames from "classnames";

interface Props {
  className?: string;
}

export default function Stats({ className }: Props): ReactElement {
  return (
    <div
      className={classNames(
        "flex justify-between rounded p-4 bg-white",
        className
      )}
    >
      <Stat
        label="Savings"
        value={`${thousandSeparate(12400)} NOK`}
        icon={ArrowUpOutline}
        iconStyle="positive"
      />
      <Stat
        label="Expenses"
        value={`${thousandSeparate(14612)} NOK`}
        icon={ArrowDownOutline}
        iconStyle="negative"
      />
    </div>
  );
}
