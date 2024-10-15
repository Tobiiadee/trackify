"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/modules/common/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/modules/common/ui/chart";
import { Combobox } from "@/modules/common/components/custom-combox";
import { useState } from "react";
import { yearData } from "./dashboard-intro";

export const description = "A bar chart showing expenses across major categories";

// Updated chart data with consistent colors from the pie chart
const chartData = [
  { category: "Housing", amount: 1200, fill: "#4CAF50" },         // Green
  { category: "Utilities", amount: 300, fill: "#2196F3" },        // Blue
  { category: "Transportation", amount: 250, fill: "#FFC107" },   // Amber (matching transportation color)
  { category: "Groceries", amount: 600, fill: "#FF5722" },        // Deep Orange
  { category: "Health", amount: 180, fill: "#9C27B0" },           // Purple
  { category: "Insurance", amount: 400, fill: "#673AB7" },        // Deep Purple
  { category: "Debt Payments", amount: 350, fill: "#00BCD4" },    // Cyan (same as in pie chart)
  { category: "Education", amount: 150, fill: "#FF9800" },        // Orange (Education color)
  { category: "Entertainment", amount: 200, fill: "#E91E63" },    // Pink
  { category: "Savings", amount: 500, fill: "#009688" },          // Teal (new color for Savings)
  { category: "Dining Out", amount: 220, fill: "#FFC107" },       // Amber
  { category: "Miscellaneous", amount: 100, fill: "#F44336" },    // Red (Miscellaneous)
];

// Updated chart configuration for consistent labels and colors
const chartConfig = {
  amount: {
    label: "Amount",
  },
  Housing: {
    label: "Housing",
    color: "#4CAF50", // Green
  },
  Utilities: {
    label: "Utilities",
    color: "#2196F3", // Blue
  },
  Transportation: {
    label: "Transportation",
    color: "#FFC107", // Amber
  },
  Groceries: {
    label: "Groceries",
    color: "#FF5722", // Deep Orange
  },
  Health: {
    label: "Health",
    color: "#9C27B0", // Purple
  },
  Insurance: {
    label: "Insurance",
    color: "#673AB7", // Deep Purple
  },
  Debt: {
    label: "Debt Payments",
    color: "#00BCD4", // Cyan
  },
  Education: {
    label: "Education",
    color: "#FF9800", // Orange
  },
  Entertainment: {
    label: "Entertainment",
    color: "#E91E63", // Pink
  },
  Savings: {
    label: "Savings",
    color: "#009688", // Teal
  },
  Dining: {
    label: "Dining Out",
    color: "#FFC107", // Amber
  },
  Miscellaneous: {
    label: "Miscellaneous",
    color: "#F44336", // Red
  },
} satisfies ChartConfig;

export function TransactionAllChartStats() {
  const [value, setValue] = useState("");

  return (
    <Card>
      <div className="flex items-center justify-between pr-4">
        <CardHeader>
          <CardTitle>Expense Overview by Category</CardTitle>
          <CardDescription>June 2024</CardDescription>
        </CardHeader>

        <div>
          <Combobox
            items={yearData}
            onSelect={(value) => setValue(value)}
            placeholder="Filter by month"
          />
        </div>
      </div>

      <CardContent className="w-full">
        <ChartContainer config={chartConfig} className="w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 50,
            }}
          >
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="amount" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="amount" layout="vertical" radius={5} fill={({ payload }) => payload.fill} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total expenses by category for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
