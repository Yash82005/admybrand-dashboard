"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function generateMockData() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map(day => ({
    name: day,
    value: Math.floor(Math.random() * 100) + 10,
  }));
}

export default function RealtimeLineChart() {
  const [data, setData] = useState(generateMockData());

  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateMockData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px] p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">User Growth (Live)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
