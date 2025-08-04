import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ADmyBRAND Dashboard",
  description: "Analytics Dashboard",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Topbar />
              <main className="p-4">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
