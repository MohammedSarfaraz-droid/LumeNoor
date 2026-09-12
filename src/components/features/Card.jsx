import React from "react";
import {
  Code2,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Check,
  Sparkles,
  Zap,
  Activity,
  Globe,
  Gauge,
  Lock,
  RefreshCw,
} from "lucide-react";

export const Card = ({ card, index }) => {
  const isEvenCard = index % 2 === 1;

  // Icon map per card
  const getCardIcon = (id) => {
    switch (id) {
      case 1:
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 2:
        return <BrainCircuit className="w-6 h-6 text-teal-400" />;
      case 3:
        return <TrendingUp className="w-6 h-6 text-pink-400" />;
      case 4:
        return <ShieldCheck className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  // Render custom, high-end visual previews based on service ID
  const renderVisualPreview = (id) => {
    switch (id) {
      case 1:
        // Custom Frontend Web Dev Preview
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-slate-950/90 rounded-2xl border border-blue-500/30 text-xs font-mono shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-slate-400 ml-2 font-sans text-xs">CustomFrontend.tsx</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 font-sans font-semibold">100% Bespoke</span>
            </div>

            <div className="py-4 space-y-2 text-slate-300">
              <p><span className="text-purple-400">const</span> <span className="text-blue-300">Website</span> = () =&gt; &#123;</p>
              <p className="pl-4"><span className="text-purple-400">return</span> (</p>
              <p className="pl-8 text-emerald-400">&lt;<span className="text-pink-400">BespokeArchitecture</span></p>
              <p className="pl-12 text-slate-400">responsive=&#123;<span className="text-amber-300">true</span>&#125;</p>
              <p className="pl-12 text-slate-400">framework=&#123;<span className="text-teal-300">"Next.js"</span>&#125;</p>
              <p className="pl-12 text-slate-400">usMarketOptimized=&#123;<span className="text-amber-300">true</span>&#125;</p>
              <p className="pl-8 text-emerald-400">/&gt;</p>
              <p className="pl-4">);</p>
              <p>&#125;;</p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-slate-400 font-sans">
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">99/100 Performance</span>
              </div>
              <span className="text-slate-500 text-[11px]">Zero Templates</span>
            </div>
          </div>
        );

      case 2:
        // AI Analytics & Strategy Preview
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-slate-950/90 rounded-2xl border border-teal-500/30 text-xs shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-teal-400" />
                <span className="font-semibold text-slate-200">AI Growth Intelligence</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-teal-500/20 text-teal-300 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" /> Live Tracking
              </span>
            </div>

            {/* Sparkline Graph */}
            <div className="my-3 space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-slate-400 text-xs">Monthly Conversion Rate</span>
                <span className="text-teal-400 font-bold text-sm">+142.8%</span>
              </div>
              <div className="h-16 w-full flex items-end gap-1.5 pt-2">
                {[35, 42, 40, 58, 65, 72, 85, 98].map((h, i) => (
                  <div key={i} className="flex-1 bg-slate-800 rounded-t overflow-hidden relative group">
                    <div
                      className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t transition-all duration-500"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* AI Report Callout */}
            <div className="p-2.5 rounded-xl bg-teal-950/60 border border-teal-500/30 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-teal-200/90 leading-tight">
                <span className="font-semibold">AI Recommendation:</span> Move main booking form above fold to increase conversion by 28%.
              </p>
            </div>
          </div>
        );

      case 3:
        // Conversion Rate Optimization Preview
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-slate-950/90 rounded-2xl border border-pink-500/30 text-xs shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-pink-400" />
                <span className="font-semibold text-slate-200">Conversion Funnel</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-pink-500/20 text-pink-300 font-semibold">CRO Optimized</span>
            </div>

            {/* Funnel Steps */}
            <div className="my-2 space-y-2">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">1. Website Visitors</span>
                <span className="font-mono text-slate-400">10,000</span>
              </div>
              <div className="p-2 rounded-lg bg-pink-950/30 border border-pink-500/20 flex items-center justify-between ml-2">
                <span className="text-pink-200">2. Form Engagement</span>
                <span className="font-mono text-pink-300 font-semibold">4,200 (42%)</span>
              </div>
              <div className="p-2 rounded-lg bg-pink-900/50 border border-pink-400/40 flex items-center justify-between ml-4">
                <span className="text-white font-semibold">3. Paying Clients</span>
                <span className="font-mono text-emerald-400 font-bold">1,850 (18.5%)</span>
              </div>
            </div>

            <div className="pt-2 text-center text-pink-300/80 text-[11px] font-medium">
              ⚡ Frictionless Booking & Form Optimization
            </div>
          </div>
        );

      case 4:
        // Monthly Management & Support Preview
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-slate-950/90 rounded-2xl border border-purple-500/30 text-xs shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span className="font-semibold text-slate-200">Monthly Control Hub</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> All Systems Active
              </span>
            </div>

            <div className="my-2 space-y-2 font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>High-Speed Uptime</span>
                </div>
                <span className="text-emerald-400 font-bold">99.99%</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-purple-400" />
                  <span>24/7 Security Shield</span>
                </div>
                <span className="text-purple-300">Protected</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300">
                  <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
                  <span>Daily Cloud Backups</span>
                </div>
                <span className="text-blue-300">Synced</span>
              </div>
            </div>

            <div className="pt-2 text-slate-400 text-[11px] flex items-center justify-between font-sans">
              <span>Ongoing Support</span>
              <span className="text-purple-400 font-medium">Monthly Strategy Included</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full relative group">
      {/* Glow */}
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse, ${card.color}66, transparent 70%)`,
        }}
      />
      <div
        className={`max-w-7xl mx-auto rounded-3xl p-4 sm:p-8 lg:p-12 relative backdrop-blur-md border 
        bg-white/90 dark:bg-black/20 border-gray-200/50 dark:border-white/10`}
        style={{
          background: `
            radial-gradient(circle at bottom left, ${card.color}15, transparent 80%),
            radial-gradient(circle at top right, ${card.color}15, transparent 80%)
          `,
        }}
      >
        <div className="absolute inset-0 -z-10 pointer-events-none rounded-2xl">
          <div className="w-full h-full rounded-2xl bg-[radial-gradient(circle,_rgba(168,85,247,0.3)_1px,_transparent_1px)] bg-[length:7px_7px] opacity-20" />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center">
          {/* Content */}
          <div
            className={`space-y-4 lg:space-y-6 text-gray-900 dark:text-white ${
              isEvenCard ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0"
                style={{
                  backgroundColor: `${card.color}15`,
                  borderColor: `${card.color}40`,
                }}
              >
                {getCardIcon(card.id)}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                {card.title}
              </h2>
            </div>
            <p className="text-sm lg:text-base text-gray-700 dark:text-white/80 leading-relaxed max-w-2xl">
              {card.description}
            </p>
            <div className="space-y-2 lg:space-y-3 pt-2">
              {card.features.map((f, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                    style={{
                      backgroundColor: card.color,
                    }}
                  >
                    <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                  </div>
                  <span className="text-sm lg:text-base">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div
            className={`${isEvenCard ? "lg:order-1" : "lg:order-2"} relative`}
          >
            <div
              className="bg-transparent dark:bg-transparent relative backdrop-blur-sm rounded-2xl p-2 lg:p-4 border min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] flex items-center justify-center transition-transform duration-500 hover:scale-[1.01]"
              style={{
                borderColor: `${card.color}40`,
                boxShadow: `0 8px 30px ${card.color}25`,
              }}
            >
              {renderVisualPreview(card.id)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

