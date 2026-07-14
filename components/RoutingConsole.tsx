"use client";

import { useEffect, useState } from "react";
import { baseNodes, exits, initialLatencies } from "@/data/console";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatClock(d: Date) {
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
}

export default function RoutingConsole() {
  const [clock, setClock] = useState("00:00:00");
  const [exitIdx, setExitIdx] = useState(0);
  const [latencies, setLatencies] = useState<number[]>(initialLatencies);

  useEffect(() => {
    setClock(formatClock(new Date()));
    const clockTimer = setInterval(() => setClock(formatClock(new Date())), 1000);
    return () => clearInterval(clockTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setExitIdx((i) => (i + 1) % exits.length);
      setLatencies((prev) =>
        prev.map((l) => {
          const jitter = Math.round((Math.random() - 0.48) * 8);
          return Math.max(14, Math.min(90, l + jitter));
        })
      );
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  const nodes = baseNodes.map((n, i) => {
    const latency = latencies[i];
    const good = latency < 45;
    const active = i === exitIdx % baseNodes.length;
    return {
      ...n,
      active,
      latency,
      latColor: good ? "#2F7F6D" : "rgba(18,51,44,0.66)",
      dotColor: active ? "#0F3F35" : good ? "#2F7F6D" : "#5E9A8B",
    };
  });

  return (
    <div className="console-wrap">
      <svg viewBox="0 0 24 24" className="console-corner console-corner--tl" aria-hidden="true">
        <line x1="12" y1="0" x2="12" y2="24" />
        <line x1="0" y1="12" x2="24" y2="12" />
        <circle cx="12" cy="12" r="6" />
      </svg>
      <svg viewBox="0 0 24 24" className="console-corner console-corner--br" aria-hidden="true">
        <line x1="12" y1="0" x2="12" y2="24" />
        <line x1="0" y1="12" x2="24" y2="12" />
        <circle cx="12" cy="12" r="6" />
      </svg>

      <div className="console-card">
        <div className="console-header">
          <div className="console-header-left">
            <span className="console-header-dot" />
            <span className="console-header-label">ROUTING CONSOLE</span>
          </div>
          <span className="console-clock">{clock} UTC</span>
        </div>

        <div className="console-route-map" aria-hidden="true">
          <svg viewBox="0 0 520 168">
            <path className="route-map-line route-map-line--base" d="M28 118 C104 26 178 142 256 76 S406 18 492 104" />
            <path className="route-map-line route-map-line--active" d="M28 118 C104 26 178 142 256 76 S406 18 492 104" />
            <circle className="route-map-packet" r="5">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M28 118 C104 26 178 142 256 76 S406 18 492 104" />
            </circle>
            <g className="route-map-nodes">
              <circle cx="28" cy="118" r="6" />
              <circle cx="256" cy="76" r="7" />
              <circle cx="492" cy="104" r="6" />
            </g>
          </svg>
          <div className="console-route-meta">
            <span>entry: iad-04</span>
            <span>policy: stealth</span>
            <span>exit: {exits[exitIdx]}</span>
          </div>
        </div>

        <div className="console-body">
          <div className="console-columns">
            <span>NODE</span>
            <span>COORDINATES</span>
            <span style={{ textAlign: "right" }}>LATENCY</span>
          </div>
          {nodes.map((node) => (
            <div className="console-row" data-active={node.active} key={node.code}>
              <span className="console-row-node">
                <span className="console-row-dot" style={{ background: node.dotColor }} />
                {node.code}
              </span>
              <span className="console-row-coords">{node.coords}</span>
              <span className="console-row-latency" style={{ color: node.latColor }}>
                {node.latency}ms
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="console-chip">
        <span className="console-chip-dot" />
        <div>
          <div className="console-chip-title">Session rotated</div>
          <div className="console-chip-sub">exit - {exits[exitIdx]}</div>
        </div>
      </div>

      <div className="console-pool">
        <span className="console-pool-label">POOL 72,441,208 IPs</span>
      </div>
    </div>
  );
}
