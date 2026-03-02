import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Settings2, Info } from 'lucide-react';
import { configSchema, ConfigCategory, ConfigItem } from '../configSchema';
import { cn } from '../lib/utils';

interface ConfigPanelProps {
  config: Record<string, any>;
  onChange: (key: string, value: any) => void;
}

export function ConfigPanel({ config, onChange }: ConfigPanelProps) {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    psychological: true,
  });

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-80 h-full flex flex-col glass-panel border-r border-t-0 border-b-0 border-l-0 z-10 shrink-0">
      <div className="p-4 border-b border-[rgba(6,182,212,0.2)] flex items-center gap-2 bg-[rgba(0,0,0,0.2)]">
        <Settings2 className="w-5 h-5 text-cyan-400" />
        <h2 className="font-mono text-sm font-semibold tracking-wider text-cyan-400 uppercase">Tactical Parameters</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {configSchema.map(category => (
          <div key={category.id} className="mb-2">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between p-2 text-left rounded hover:bg-[rgba(6,182,212,0.1)] transition-colors"
            >
              <span className="font-mono text-xs font-medium text-slate-300 truncate pr-2">
                {category.title}
              </span>
              {expandedCategories[category.id] ? (
                <ChevronDown className="w-4 h-4 text-cyan-500 shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
              )}
            </button>
            
            {expandedCategories[category.id] && (
              <div className="pl-2 pr-1 py-1 space-y-4 mt-1 border-l border-[rgba(6,182,212,0.1)] ml-2">
                {category.items.map(item => (
                  <ConfigControl 
                    key={item.id} 
                    item={item} 
                    value={config[item.id]} 
                    onChange={(val) => onChange(item.id, val)} 
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfigControl({ item, value, onChange }: { item: ConfigItem, value: any, onChange: (val: any) => void }) {
  return (
    <div className="space-y-1.5 group relative">
      <div className="flex items-center justify-between">
        <label className="font-sans text-xs text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
          {item.label}
          <div className="relative flex items-center">
            <Info className="w-3 h-3 text-slate-600 cursor-help" />
            <div className="fixed left-80 ml-2 w-64 p-3 bg-slate-900 border border-cyan-900 rounded shadow-2xl text-[11px] text-slate-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
              <div className="font-mono text-cyan-400 mb-1">{item.label}</div>
              {item.description}
            </div>
          </div>
        </label>
        {item.type === 'slider' && (
          <span className="font-mono text-[10px] text-cyan-500">{value}</span>
        )}
      </div>
      
      {item.type === 'slider' && (
        <input
          type="range"
          min={item.min}
          max={item.max}
          step={item.step || 1}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
        />
      )}

      {item.type === 'toggle' && (
        <button
          onClick={() => onChange(!value)}
          className={cn(
            "w-10 h-5 rounded-full relative transition-colors border",
            value ? "bg-[rgba(6,182,212,0.2)] border-cyan-500" : "bg-slate-800 border-slate-700"
          )}
        >
          <div className={cn(
            "absolute top-0.5 w-3.5 h-3.5 rounded-full transition-all",
            value ? "left-5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" : "left-1 bg-slate-500"
          )} />
        </button>
      )}

      {item.type === 'select' && item.options && (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full tactical-input text-xs p-1.5 rounded appearance-none cursor-pointer"
        >
          {item.options.map(opt => (
            <option key={opt} value={opt} className="bg-slate-900 text-slate-200">{opt}</option>
          ))}
        </select>
      )}

      {item.type === 'text' && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full tactical-input text-xs p-1.5 rounded"
          placeholder={item.label}
        />
      )}
    </div>
  );
}
