"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { CardContent } from "@/modules/common/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/modules/common/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", income: 186, spending: 80 },
  { month: "February", income: 305, spending: 200 },
  { month: "March", income: 237, spending: 120 },
  { month: "April", income: 73, spending: 190 },
  { month: "May", income: 209, spending: 130 },
  { month: "June", income: 214, spending: 140 },
];

const chartConfig = {
  desktop: {
    label: "Income",
    color: "hsl(var(--chart-secondary))",
  },
  mobile: {
    label: "Spending",
    color: "hsl(var(--chart-primary))",
  },
} satisfies ChartConfig;

export default function DashboardBarTransaction() {
  return (
    <div className="w-full h-full">
      <CardContent className="w-full h-full">
        <ChartContainer config={chartConfig} >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey='income'
              stackId='a'
              fill='var(--color-desktop)'
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey='spending'
              stackId='a'
              fill='var(--color-mobile)'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
