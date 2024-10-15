"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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

// Trackify transaction goal description
export const description = "A donut chart displaying transaction categories.";

// Updated transaction data with 12 major categories
const chartData = [
  { category: "Housing", amount: 1200, fill: "#4CAF50" },         // Green
  { category: "Utilities", amount: 300, fill: "#2196F3" },        // Blue
  { category: "Transportation", amount: 250, fill: "#FFC107" },   // Amber
  { category: "Groceries", amount: 600, fill: "#FF5722" },        // Deep Orange
  { category: "Health", amount: 180, fill: "#9C27B0" },           // Purple
  { category: "Insurance", amount: 400, fill: "#673AB7" },        // Deep Purple
  { category: "Debt Payments", amount: 350, fill: "#00BCD4" },    // Cyan
  { category: "Education", amount: 150, fill: "#FF9800" },        // Orange
  { category: "Entertainment", amount: 200, fill: "#E91E63" },    // Pink
  { category: "Savings", amount: 500, fill: "#009688" },          // Teal
  { category: "Dining Out", amount: 220, fill: "#FFC107" },       // Amber
  { category: "Miscellaneous", amount: 100, fill: "#F44336" },    // Red
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

export function TransactionStatsPieChart() {
  // Total transactions amount for all categories
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Transaction Goals</CardTitle>
        <CardDescription>Monthly Spending Breakdown</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          ${totalAmount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Spent
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Spending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-center text-muted-foreground">
          Showing total spending for different categories
        </div>
      </CardFooter>
    </Card>
  );
}
