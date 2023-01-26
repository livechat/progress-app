import React from "react";
import { Toast } from "@livechat/design-system";
import { XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

import "styled-components/macro";
import Spinner from "../Spinner";

const chartLabelStyle = `
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export default ({ data }) => {
  if (data && data.status === 403) {
    return (
      <div
        css={`
          display: grid;
          padding: 30px;
          grid-gap: 12px;
          justify-items: center;
        `}
      >
        <div css={chartLabelStyle}>Response Time</div>
        <Toast
          variant="info"
          css={`
            width: 100%;
          `}
        >
          Only for enterprise customers.
        </Toast>
      </div>
    );
  }

  if (!data || Object.keys(data) <= 0) {
    return <Spinner marginTop="200px" />;
  }

  const chartData = Object.keys(data).map((e) => ({
    name: e.length > 6 ? e.substr(5) : e,
    seconds: data[e].first_response_time.seconds
      ? data[e].first_response_time.seconds
      : 0
  }));

  return (
    <div
      css={`
        display: grid;
        padding: 30px;
        grid-gap: 12px;
        justify-items: center;
      `}
    >
      <div css={chartLabelStyle}>Response Time</div>
      <BarChart
        width={350}
        height={250}
        data={chartData}
        margin={{ right: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="seconds" fill="#4384f5" />
      </BarChart>
    </div>
  );
};
