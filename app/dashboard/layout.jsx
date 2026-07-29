"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Moon,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#111827] text-white p-3">
      <div className="min-h-[95vh] border border-blue-400/40 rounded-lg bg-[#07101f] flex flex-col  md:flex-row overflow-hidden">

        <aside className="w-full md:w-[240px] bg-[#111a2d] p-5 flex md:flex-col justify-between">
          <div>
            <div className="mb-8">
              <h1 className="text-xl font-bold text-blue-300">CodeWiki</h1>
              <p className="text-[10px] tracking-widest text-emerald-400">
                THE SYNTHETIC ARCHITECT
              </p>
            </div>

            <nav className="space-y-3">
              <SidebarLink href="/dashboard" icon={<LayoutDashboard size={16} />} text="Dashboard" />
              <SidebarLink href="/dashboard/summarized-repos" icon={<FileText size={16} />} text="Summarized Repos" />
              <SidebarLink href="/dashboard/chat-with-repo" icon={<MessageSquare size={16} />} text="Chat with Repo" />
            </nav>
          </div>

          <div className="hidden md:block space-y-4 text-sm">
            <div className="flex items-center gap-3 px-4 py-3">
              <Moon size={16} />
              Appearance
            </div>

            <div className="flex items-center gap-3 px-4 py-3">
              <LogOut size={16} />
              Logout
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-[#081225] p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ href, icon, text }) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/dashboard" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 text-sm cursor-pointer transition ${
        active
          ? "bg-[#07101f] text-blue-300 border-l-2 border-emerald-400"
          : "text-white hover:bg-[#07101f]/60"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}