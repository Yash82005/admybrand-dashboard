import BarChart from "@/components/charts/bar-chart";
import OverviewChart from "@/components/charts/overview-chart";
import DonutChart from "@/components/charts/donut-chart";

interface DonutChartData {
  label: string;
  amount: number;
}

interface BarChartData {
  name: string;
  value: number;
}

interface OverviewChartData {
  date: string;
  value: number;
}

interface ChartCardProps {
  title: string;
  data: BarChartData[] | OverviewChartData[] | DonutChartData[];
  type: "bar" | "line" | "pie";
}

export default function ChartCard({ title, data, type }: ChartCardProps) {
  return (
    <div className="bg-card p-4 rounded-2xl border shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {type === "bar" && <BarChart data={data as BarChartData[]} />}
      {type === "line" && <OverviewChart data={data as OverviewChartData[]} />}
      {type === "pie" && (
        <DonutChart
          data={(data as DonutChartData[]).map((d) => ({
            name: d.label,
            value: d.amount,
          }))}
        />
      )}
    </div>
  );
}
