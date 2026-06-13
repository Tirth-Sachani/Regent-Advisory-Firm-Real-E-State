"use client";

import { useState, useEffect } from "react";

interface Stats {
  totalProperties: number;
  propertiesWithImages: number;
  propertiesMissingImages: number;
  propertiesMatchingSearch: number;
  topRecommended: any[];
  topSaved: any[];
  topViewed: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalProperties: 0,
    propertiesWithImages: 0,
    propertiesMissingImages: 0,
    propertiesMatchingSearch: 0,
    topRecommended: [],
    topSaved: [],
    topViewed: []
  });
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [repairing, setRepairing] = useState(false);

  const fetchDashboardMetrics = async () => {
    setLoading(true);
    setLogs((prev) => [...prev, "🚀 Fetching CRM & Search metrics from Supabase..."]);
    try {
      const res = await fetch('/api/admin/metrics');
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
        setLogs((prev) => [...prev, `✅ Metrics fetched successfully. Total Properties: ${data.stats.totalProperties}, Missing Images: ${data.stats.propertiesMissingImages}`]);
      } else {
        setLogs((prev) => [...prev, `❌ Failed to fetch metrics: ${data.error}`]);
      }
    } catch (err: any) {
      setLogs((prev) => [...prev, `❌ Connection Error fetching metrics: ${err.message}`]);
    } finally {
      setLoading(false);
    }
  };

  const triggerRepair = async () => {
    setRepairing(true);
    setLogs((prev) => [...prev, "🔧 Triggering One-Click Database Image Repair..."]);
    try {
      const res = await fetch('/api/admin/image-audit', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setLogs((prev) => [
          ...prev,
          `🛠 Image Repair Complete! Repaired ${data.repaired} properties.`,
          ...(data.logs || []).map((l: string) => `🔧 ${l}`)
        ]);
        await fetchDashboardMetrics();
      } else {
        setLogs((prev) => [...prev, `❌ Repair Failed: ${data.error}`]);
      }
    } catch (err: any) {
      setLogs((prev) => [...prev, `❌ Connection Error during repair: ${err.message}`]);
    } finally {
      setRepairing(false);
    }
  };

  useEffect(() => {
    fetchDashboardMetrics();
  }, []);

  return (
    <div className="min-h-screen bg-[#081322] text-[#e2e8f0] pt-28 pb-16 sm:pt-32">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-tertiary/20 pb-6 mb-12">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">Advisor Metrics Dashboard</h1>
            <p className="font-sans text-sm text-tertiary/80 uppercase tracking-widest flex items-center gap-1.5">
              <span>Admin Control Center</span> • <span>Regent Advisory Suite</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchDashboardMetrics}
              disabled={loading || repairing}
              className="px-5 py-2.5 bg-transparent border border-outline/30 hover:border-tertiary hover:text-tertiary font-semibold text-xs tracking-wider uppercase transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Refreshing..." : "Refresh Stats"}
            </button>
            <button
              onClick={triggerRepair}
              disabled={loading || repairing}
              className="px-5 py-2.5 bg-tertiary border border-tertiary text-primary hover:bg-tertiary-hover font-semibold text-xs tracking-wider uppercase transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {repairing ? "Repairing..." : "Repair Images"}
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-center">
          {[
            { label: "Total Properties", value: stats.totalProperties, color: "border-outline/25" },
            { label: "Properties With Images", value: stats.propertiesWithImages, color: "border-green-500/35 text-green-400" },
            { label: "Properties Missing Images", value: stats.propertiesMissingImages, color: stats.propertiesMissingImages > 0 ? "border-amber-500/50 text-amber-400 font-bold" : "border-outline/25 text-white/50" },
            { label: "Matches Search", value: stats.propertiesMatchingSearch, color: "border-blue-500/40 text-blue-400" }
          ].map((card, idx) => (
            <div key={idx} className={`bg-[#0c1c30]/90 border p-5 flex flex-col justify-center items-center rounded-none ${card.color}`}>
              <span className="text-[10px] text-white/40 uppercase tracking-wider mb-2 font-sans">{card.label}</span>
              <span className="text-3xl font-serif font-bold">{card.value}</span>
            </div>
          ))}
        </div>

        {/* Top Lists Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 font-sans text-xs">
          {/* Top Recommended */}
          <div className="bg-[#0c1c30]/95 border border-outline/15 p-5 flex flex-col gap-4">
            <span className="text-[10px] text-tertiary tracking-widest uppercase font-bold border-b border-tertiary/10 pb-2">Top Recommended Properties</span>
            <div className="flex flex-col gap-3">
              {stats.topRecommended.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-[#081322]/50 p-2.5 border border-outline/5">
                  <div className="min-w-0 flex-1 pr-2">
                    <span className="font-serif font-bold text-white block truncate">{item.title}</span>
                    <span className="text-[10px] text-white/50">{item.location} • {item.price}</span>
                  </div>
                  <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 font-bold shrink-0">{item.count} recs</span>
                </div>
              ))}
              {stats.topRecommended.length === 0 && <span className="text-white/30 italic">No recommendations logged.</span>}
            </div>
          </div>

          {/* Top Saved */}
          <div className="bg-[#0c1c30]/95 border border-outline/15 p-5 flex flex-col gap-4">
            <span className="text-[10px] text-white/70 tracking-widest uppercase font-bold border-b border-tertiary/10 pb-2">Top Saved Properties</span>
            <div className="flex flex-col gap-3">
              {stats.topSaved.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-[#081322]/50 p-2.5 border border-outline/5">
                  <div className="min-w-0 flex-1 pr-2">
                    <span className="font-serif font-bold text-white block truncate">{item.title}</span>
                    <span className="text-[10px] text-white/50">{item.location} • {item.price}</span>
                  </div>
                  <span className="px-2 py-1 bg-[#0c1c30] text-white/60 border border-outline/10 font-bold shrink-0">{item.count} saves</span>
                </div>
              ))}
              {stats.topSaved.length === 0 && <span className="text-white/30 italic">No saves logged.</span>}
            </div>
          </div>

          {/* Top Viewed */}
          <div className="bg-[#0c1c30]/95 border border-outline/15 p-5 flex flex-col gap-4">
            <span className="text-[10px] text-white/70 tracking-widest uppercase font-bold border-b border-tertiary/10 pb-2">Top Viewed Properties</span>
            <div className="flex flex-col gap-3">
              {stats.topViewed.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-[#081322]/50 p-2.5 border border-outline/5">
                  <div className="min-w-0 flex-1 pr-2">
                    <span className="font-serif font-bold text-white block truncate">{item.title}</span>
                    <span className="text-[10px] text-white/50">{item.location} • {item.price}</span>
                  </div>
                  <span className="px-2 py-1 bg-[#0c1c30] text-white/60 border border-outline/10 font-bold shrink-0">{item.count} views</span>
                </div>
              ))}
              {stats.topViewed.length === 0 && <span className="text-white/30 italic">No views logged.</span>}
            </div>
          </div>
        </div>

        {/* Logs Terminal Console */}
        <div className="bg-[#030a16] border border-tertiary/15 rounded-none overflow-hidden shadow-2xl flex flex-col h-[300px]">
          {/* Console Top Bar */}
          <div className="bg-[#050e1b] px-4 py-2 border-b border-tertiary/10 flex items-center justify-between font-sans text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/40"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/40"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/40"></span>
              <span className="text-white/50 ml-2 font-mono uppercase tracking-widest text-[10px]">Console Output logs</span>
            </div>
            <button
              onClick={() => setLogs([])}
              className="text-white/40 hover:text-white transition-colors cursor-pointer text-[10px] uppercase tracking-wider font-semibold"
            >
              Clear Logs
            </button>
          </div>
          {/* Console Content */}
          <div className="flex-1 p-5 overflow-y-auto font-mono text-xs text-green-400/95 leading-relaxed scrollbar-thin select-text">
            {logs.length === 0 ? (
              <span className="text-white/30 italic">No output logs. Run a status check or repair.</span>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} className={`mb-1 text-left ${log.includes('❌') ? 'text-red-400' : log.includes('🔧') ? 'text-yellow-400' : log.includes('✅') ? 'text-blue-400 font-bold' : ''}`}>
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
