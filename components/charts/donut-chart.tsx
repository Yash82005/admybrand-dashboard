"use client";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function DonutChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#6366f1"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}