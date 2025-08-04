interface MetricCardProps {
  title: string;
  value: string;
  growth: string;
}

export default function MetricCard({ title, value, growth }: MetricCardProps) {
  const isPositive = !growth.startsWith("-");
  return (
    <div className="p-4 bg-card shadow-sm border rounded-2xl">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
      <p className={isPositive ? "text-green-500" : "text-red-500"}>{growth}</p>
    </div>
  );
}