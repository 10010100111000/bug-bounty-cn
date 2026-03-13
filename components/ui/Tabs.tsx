// components/ui/Tabs.tsx
'use client';

import { useState, useId } from 'react';

// 标签项类型
export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

// 组件Props类型
interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export default function Tabs({
  items,
  defaultTabId,
  className = '',
}: TabsProps) {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || items[0]?.id || ''
  );
  const uniqueId = useId();

  return (
    <div className={className}>
      {/* 标签栏 */}
      <div className="flex flex-wrap gap-1 border-b border-[#e5e5e5] mb-6 overflow-x-auto">
        {items.map((tab) => {
          const isActive = activeTabId === tab.id;
          const tabId = `${uniqueId}-tab-${tab.id}`;
          const panelId = `${uniqueId}-panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              id={tabId}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-5 py-3 text-sm font-medium transition-all whitespace-nowrap border-b-2 -mb-px ${
                isActive
                  ? 'border-[#9FEF00] text-[#111]'
                  : 'border-transparent text-[#666] hover:text-[#111] hover:border-[#e5e5e5]'
              }`}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 标签内容区域 */}
      <div>
        {items.map((tab) => {
          const isActive = activeTabId === tab.id;
          const panelId = `${uniqueId}-panel-${tab.id}`;

          if (!isActive) return null;

          return (
            <div
              key={tab.id}
              id={panelId}
              role="tabpanel"
              aria-labelledby={`${uniqueId}-tab-${tab.id}`}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}