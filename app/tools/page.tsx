// app/tools/page.tsx
'use client';

import React, { useState } from 'react';

// 引入5个板块
import ToolsSection from './sections/tools/page';
import ToolChainsSection from './sections/tool-chains/page';
import ComparisonsSection from './sections/comparisons/page';
import WorkflowsSection from './sections/workflows/page';
import ScriptsSection from './sections/scripts/page';

// 标签类型定义
type TabType = 'tools' | 'tool-chains' | 'comparisons' | 'workflows' | 'scripts';

// 标签配置
const tabs = [
  { id: 'tools', label: '🛠️ 工具大全' },
  { id: 'tool-chains', label: '📚 工具链' },
  { id: 'comparisons', label: '⚖️ 工具对比' },
  { id: 'workflows', label: '📋 Workflows' },
  { id: 'scripts', label: '📝 自动化脚本' },
] as const;

export default function ToolsPage() {
  // 管理当前激活的标签
  const [activeTab, setActiveTab] = useState<TabType>('tools');

  return (
    <div className="bg-slate-900/20 min-h-screen pb-20">
      {/* ✅ 删掉了原来重复的全局大标题 */}

      {/* 核心：顶部标签切换栏 */}
      <div className="sticky top-0 z-20 bg-slate-900/40 backdrop-blur-md border-b border-slate-700/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1 py-3 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100'
                    : 'bg-slate-800/60 text-slate-400 hover:bg-[#f0f0f0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 标签内容区域 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'tools' && <ToolsSection />}
        {activeTab === 'tool-chains' && <ToolChainsSection />}
        {activeTab === 'comparisons' && <ComparisonsSection />}
        {activeTab === 'workflows' && <WorkflowsSection />}
        {activeTab === 'scripts' && <ScriptsSection />}
      </div>
    </div>
  );
}