"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, Users, Activity, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 600 },
  { name: "May", value: 700 },
  { name: "Jun", value: 800 },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-md"
      >
        <h1 className="text-3xl font-bold">Welcome to ADmyBRAND Insights</h1>
        <p className="mt-2 text-sm sm:text-base">
          Track your marketing success with real-time metrics and deep insights.
        </p>
      </motion.div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <DollarSign className="w-5 h-5 text-green-500" />,
            title: "Revenue",
            value: "$12,400",
            desc: "Total this month",
            growth: "+15%",
          },
          {
            icon: <Users className="w-5 h-5 text-blue-500" />,
            title: "Active Users",
            value: "3,240",
            desc: "Unique this month",
            growth: "+8%",
          },
          {
            icon: <Activity className="w-5 h-5 text-orange-500" />,
            title: "Engagement",
            value: "74%",
            desc: "Higher than avg",
            growth: "↑ Consistent",
          },
          {
            icon: <Megaphone className="w-5 h-5 text-purple-500" />,
            title: "Campaign ROI",
            value: "138%",
            desc: "Across 3 campaigns",
            growth: "+22%",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.growth}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>📊 Performance Trend</CardTitle>
            <CardDescription>
              Monthly engagement and activity overview
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4f46e5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Campaigns */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-purple-500" />
              Recent Ad Campaigns
            </CardTitle>
            <CardDescription>
              Snapshot of your latest marketing efforts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>🎯 <strong>Brand Awareness:</strong> Reached 25,000 users – 12% CTR</li>
              <li>📈 <strong>Conversion Boost:</strong> 1,320 signups – ROI +38%</li>
              <li>🧠 <strong>Retargeting:</strong> Re-engaged 5,400 users – 9% uplift</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Platform Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>🧾 Platform Summary</CardTitle>
            <CardDescription>
              Key takeaways from your marketing data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-6">
              ADmyBRAND Insights helps marketers monitor real-time interactions,
              optimize strategies, and track KPIs. Analyze engagement, identify
              growth channels, and stay ahead of trends—all from this dashboard.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
