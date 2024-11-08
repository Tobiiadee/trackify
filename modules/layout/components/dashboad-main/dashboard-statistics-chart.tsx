"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

export default function DashboardStatisticsChart() {
  return (
    <ResponsiveContainer maxHeight={500}>
      <BarChart width={400} height={500} data={data}>
        <CartesianGrid strokeDasharray='3 0' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey='pv' fill='#bfdbfe' />
        <Bar dataKey='uv' fill='#2563eb' />
      </BarChart>
    </ResponsiveContainer>
  );
}
