import BarChart from "@/components/charts/bar-chart";
import OverviewChart from "@/components/charts/overview-chart";
import DonutChart from "@/components/charts/donut-chart";

interface ChartCardProps {
  title: string;
  data: any[];
  type: "bar" | "line" | "pie";
}

export default function ChartCard({ title, data, type }: ChartCardProps) {
  return (
    <div className="bg-card p-4 rounded-2xl border shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {type === "bar" && <BarChart data={data} />}
      {type === "line" && <OverviewChart data={data} />}
      {type === "pie" && <DonutChart data={data} />}
    </div>
  );
}
