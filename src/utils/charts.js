import React from "react";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  if (percent === 0) {
    return;
  }

  if (percent === 1) {
    return (
      <text
        x={cx}
        y={cy}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        100%
      </text>
    );
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export { renderCustomizedLabel };
