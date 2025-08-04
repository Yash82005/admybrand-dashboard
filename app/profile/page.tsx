// app/profile/page.tsx
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Profile</h1>

      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 flex flex-col items-center space-y-4">
          <Image
            src="https://avatars.githubusercontent.com/u/583231?v=4" // 👈 GitHub's Octocat avatar
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full border-2 border-primary object-cover"
          />
          <h2 className="text-lg font-semibold">Yash Tomar</h2>
          <p className="text-muted-foreground text-sm">ADmyBRAND</p>
          <Button>Edit Profile</Button>
        </CardContent>
      </Card>
    </div>
  )
}
