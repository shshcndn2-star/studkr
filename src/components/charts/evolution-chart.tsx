'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartTooltipContent, ChartContainer, ChartTooltip } from '@/components/ui/chart';

const chartData = [
  { generation: '996', horsepower: 381 },
  { generation: '997', horsepower: 450 },
  { generation: '991', horsepower: 520 },
  { generation: '992', horsepower: 518 },
];

export default function EvolutionChart() {
  return (
    <ChartContainer
      config={{
        horsepower: {
          label: 'حصان',
          color: 'hsl(var(--primary))',
        },
      }}
      className="min-h-[200px] w-full"
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 5 }} accessibilityLayer>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="generation"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `جيل ${value}`}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="horsepower" fill="var(--color-horsepower)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
