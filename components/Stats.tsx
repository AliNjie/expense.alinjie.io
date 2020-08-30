import React, { ReactElement } from "react";
import { thousandSeparate } from "../utils/thousandSeparate";
import classNames from "classnames";
import { Stats as StatsType } from "types";

interface Props {
  className?: string;
  stats: StatsType;
}

export default function Stats({ className, stats }: Props): ReactElement {
  const { balance, totalExpenses, totalSavings } = stats;
  return (
    <div className={classNames("py-4", className)}>
      <div className="flex flex-col items-center mb-2">
        <span className="text-xl font-bold">Balance</span>
        <span className="text-primary text-xl">
          {thousandSeparate(balance)} NOK
        </span>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <span className="font-bold">Savings</span>
          <span>{thousandSeparate(totalSavings)} NOK</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">Expenses</span>
          <span>{thousandSeparate(totalExpenses)} NOK</span>
        </div>
      </div>
    </div>
  );
}
