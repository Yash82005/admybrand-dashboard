// components/layout/sidebar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, User, BarChart, Settings } from "lucide-react"

const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart, 
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  }
]



export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="w-60 bg-background border-r h-screen p-4">
      <nav className="space-y-2">
        {routes.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition",
              pathname === href && "bg-muted"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
