"use client";

import { Bar, BarChart as BChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BChart>
    </ResponsiveContainer>
  );
}
