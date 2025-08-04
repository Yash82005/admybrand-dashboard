"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Megaphone } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <div className="flex justify-center mb-4">
          <Megaphone size={40} className="text-blue-600" />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to <span className="text-blue-600">ADmyBRAND Insights</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Your AI-powered digital marketing dashboard. Get real-time insights, optimize your campaigns, and scale like a pro.
        </p>

        <div className="mt-8">
          <Link href="/dashboard">
            <Button className="px-6 py-3 text-lg font-semibold">
              🚀 Go to Dashboard
            </Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
