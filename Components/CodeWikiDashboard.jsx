"use client";

import React from "react";
import {
  Search,
  Bell,
  Settings,
  Plus,
  ExternalLink,
  Rocket,
} from "lucide-react";

function CodeWikiDashboard() {
  const repos = [
    {
      status: "STABLE",
      name: "facebook/react",
      score: 94,
      color: "text-emerald-400",
    },
    {
      status: "COMPLEX",
      name: "tensorflow/tensorflow",
      score: 82,
      color: "text-blue-300",
    },
    {
      status: "CRITICAL",
      name: "vercel/next.js",
      score: 97,
      color: "text-emerald-400",
    },
  ];

  return (
    <div>
     
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
        <h2 className="font-bold text-blue-300 text-2xl">
          Dashboard
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white/10 rounded px-3 py-2 w-full md:w-[260px]">
            <Search size={14} className="text-gray-400" />

            <input
              className="bg-transparent outline-none text-xs px-2 w-full"
              placeholder="Search architecture..."
            />
          </div>

          <Bell size={18} />
          <Settings size={18} />

          <div className="w-7 h-7 rounded-full bg-emerald-900 border border-emerald-400" />
        </div>
      </div>

    
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-bold text-blue-200">
            Activity Overview
          </h3>

          <p className="text-sm text-gray-300 mt-3">
            Cross-repository performance and health metrics.
          </p>
        </div>

        <button className="hidden md:block bg-emerald-500/20 text-emerald-300 text-xs px-4 py-2 rounded-full">
          Real-time Analysis
        </button>
      </div>

    
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        
        <Card title="COMMIT DENSITY" tag="+12%">
          <div className="flex items-end gap-2 h-20">
            {[35, 55, 42, 75, 50, 85, 65, 45, 60, 72].map((h, i) => (
              <div
                key={i}
                className="w-5 bg-blue-300/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Card>

     
        <Card title="HEALTH INDEX" tag="✦">
          <Progress label="Maintainability" value="92%" />
          <Progress label="Documentation" value="78%" />
        </Card>

       
        <Card title="SOURCE COMPOSITION">
          <div className="flex items-center gap-7">
            <div className="w-24 h-24 rounded-lg border-4 border-blue-400 bg-gradient-to-br from-blue-500/20 to-emerald-400/20" />

            <div className="text-xs space-y-2">
              <p>🔵 TypeScript</p>
              <p>🟢 Python</p>
              <p>🟣 Rust</p>
            </div>
          </div>
        </Card>
      </section>

    
      <div className="flex justify-between mb-1">
        <h3 className="font-bold text-blue-200">
          Recently Analyzed
        </h3>

        <p className="text-xs text-blue-300">
          VIEW ARCHIVE
        </p>
      </div>

    
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {repos.map((repo, index) => (
          <RepoCard key={index} {...repo} />
        ))}

     
        <div className="border border-dashed border-blue-400/20 min-h-[180px] flex flex-col items-center justify-center text-center">
          <button className="w-12 h-12 rounded-xl bg-blue-300/20 flex items-center justify-center mb-4">
            <Plus />
          </button>

          <p className="text-sm text-gray-400 font-bold tracking-widest">
            ANALYZE NEW REPOSITORY
          </p>
        </div>

     
        <div className="bg-[#07101f] min-h-[180px] p-5 relative overflow-hidden border border-blue-400/10">
          <p className="text-xs text-blue-300 font-bold mb-3">
            ANALYZING
          </p>

          <h4 className="font-bold">
            rust-lang/rust
          </h4>

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] text-blue-300 mb-2">
              PROCESSING VECTOR #428
            </p>

            <div className="h-1 bg-blue-300/20">
              <div className="h-full w-[70%] bg-blue-400" />
            </div>
          </div>
        </div>
      </section>

  
      <div className="flex justify-end mt-8">
        <button className="flex items-center gap-2 bg-blue-400 text-black px-6 py-3 text-sm font-bold">
          <Rocket size={16} />
          NEW SYNTHESIS
        </button>
      </div>
    </div>
  );
}

function Card({ title, tag, children }) {
  return (
    <div className="bg-[#111a2d] p-5 min-h-[150px]">
      <div className="flex justify-between text-xs font-bold text-blue-300 mb-5">
        <p>{title}</p>

        {tag && (
          <p className="text-emerald-400">
            {tag}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}

function Progress({ label, value }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-xs mb-1">
        <p>{label}</p>
        <p>{value}</p>
      </div>

      <div className="h-1 bg-white/20">
        <div
          className="h-full bg-emerald-400"
          style={{ width: value }}
        />
      </div>
    </div>
  );
}

function RepoCard({ status, name, score, color }) {
  return (
    <div className="bg-[#07101f] p-5 min-h-[180px] relative border border-blue-400/10">
      <div className="flex justify-between">
        <div>
          <p className={`text-xs font-bold ${color}`}>
            {status}
          </p>

          <h4 className="font-bold mt-2">
            {name}
          </h4>
        </div>

        <ExternalLink
          size={18}
          className="text-blue-300"
        />
      </div>

      <div className="absolute bottom-5 left-5 flex items-end gap-1 h-12">
        {[25, 40, 55, 70, 45].map((h, i) => (
          <div
            key={i}
            className="w-1.5 bg-emerald-400/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="absolute bottom-5 right-5 text-right">
        <p className="text-[10px] text-blue-200">
          HEALTH SCORE
        </p>

        <p className={`text-3xl font-bold ${color}`}>
          {score}
        </p>
      </div>
    </div>
  );
}

export default CodeWikiDashboard;