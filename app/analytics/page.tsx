import { Card, CardContent } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
      <p className="text-muted-foreground max-w-2xl">
        Welcome to the Analytics section. Here you&apos;ll find insights and key metrics about your ad campaigns, performance trends, and audience engagement.
      </p>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-sm text-muted-foreground">
            This section will include various analytics like conversion rate, CTR, impressions, and more. We&apos;re working hard to bring this live!
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Upcoming Features</h2>
          <ul className="list-disc pl-6 text-sm text-muted-foreground">
            <li>Ad Spend vs ROI Charts</li>
            <li>Campaign Performance Breakdown</li>
            <li>Audience Demographics</li>
            <li>Heatmaps & Engagement Graphs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
