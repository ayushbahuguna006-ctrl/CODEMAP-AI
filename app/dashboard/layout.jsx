"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Moon,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen bg-[#111827] text-white p-3">

      <div className="h-full flex flex-col md:flex-row border border-blue-400/40 rounded-lg bg-[#07101f] overflow-hidden">

      
        <aside className="w-full md:w-60 bg-[#111a2d] p-5 flex flex-col justify-between">

          <div>
            <h1 className="text-xl font-bold text-blue-300">
              CodeWiki
            </h1>

            <p className="text-xs text-emerald-400 mb-8">
              THE SYNTHETIC ARCHITECT
            </p>

            <div className="space-y-3">

              <Link
                href="/dashboard"
                className="flex items-center gap-3 p-3 rounded hover:bg-[#07101f]"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>

              <Link
                href="/dashboard/summarized-repos"
                className="flex items-center gap-3 p-3 rounded hover:bg-[#07101f]"
              >
                <FileText size={18} />
                Summarized Repos
              </Link>

              <Link
                href="/dashboard/chat-with-repo"
                className="flex items-center gap-3 p-3 rounded hover:bg-[#07101f]"
              >
                <MessageSquare size={18} />
                Chat with Repo
              </Link>

            </div>
          </div>

          <div className="space-y-3 mt-2">

            <div className="flex items-center gap-3 p-3 rounded hover:bg-[#07101f] cursor-pointer">
              <Moon size={18} />
              Appearance
            </div>

            <div className="flex items-center gap-3 p-3 rounded hover:bg-[#07101f] cursor-pointer">
              <LogOut size={18} />
              Logout
            </div>

          </div>

        </aside>

      
        <main className="flex-1 bg-[#081225] p-6 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}