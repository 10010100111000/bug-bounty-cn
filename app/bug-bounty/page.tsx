'use client';

import { useState } from 'react';
import {
  BookOpen,
  Scale,
  DollarSign,
  Target,
  ListChecks,
  FileText,
  Rocket
} from "lucide-react";

// 引入所有组件
import GettingStartedTab from './components/GettingStartedTab';
import IntroTab from './components/IntroTab';
import ProgramsTab from './components/ProgramsTab';
import LegalIncomeTab from './components/LegalIncomeTab';
import ScopeTab from './components/ScopeTab';
import TermsTab from './components/TermsTab';

// 标签页配置
const tabs = [

  {
    id: 'intro',
    label: '基础介绍',
    icon: <BookOpen className="w-4 h-4" />,
    component: <IntroTab />
  },
   {
    id: 'getting-started',
    label: '从这里开始',
    icon: <Rocket className="w-4 h-4" />,
    component: <GettingStartedTab />
  },
  {
    id: 'programs',
    label: '赏金计划类型',
    icon: <Target className="w-4 h-4" />,
    component: <ProgramsTab />
  },
  {
    id: 'legal-income',
    label: '法律与收入',
    icon: <Scale className="w-4 h-4" />,
    component: <LegalIncomeTab />
  },
  {
    id: 'scope',
    label: '范围分析',
    icon: <ListChecks className="w-4 h-4" />,
    component: <ScopeTab />
  },
  {
    id: 'terms',
    label: '术语',
    icon: <FileText className="w-4 h-4" />,
    component: <TermsTab />
  },
];

export default function BugBountyFullGuidePage() {
  const [activeTab, setActiveTab] = useState('getting-started');

  // 找到当前激活的组件
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || <GettingStartedTab />;

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* ========== 页面顶部标题区 ========== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-4">
            从零到专业的完整指南
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            什么是 Bug Bounty？
          </h1>
          <p className="text-[#666] text-lg max-w-2xl mx-auto mb-8">
            从零开始，全面理解漏洞赏金的完整世界，从基础定义、新手实战、合规规则，到行业术语、收入预期，全覆盖讲解
          </p>
          {/* 核心CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#guide-content" 
              className="inline-flex items-center justify-center rounded-full bg-[#9FEF00] px-8 py-4 text-sm font-bold text-[#111] hover:bg-[#8ed900] transition-colors gap-2"
            >
              <Rocket className="w-4 h-4" />
              从这里开始
            </a>
            <a href="/roadmap" className="inline-flex items-center justify-center rounded-full border border-[#333] bg-transparent px-8 py-4 text-sm font-bold hover:bg-[#f5f5f5] transition-colors">
              查看完整学习路线
            </a>
          </div>
        </div>
      </section>

      {/* ========== 粘性标签页导航栏 ========== */}
      <div id="guide-content" className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex space-x-1 md:space-x-2 w-full justify-between md:justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-t-lg font-medium text-sm md:text-base transition-all whitespace-nowrap border-b-2 ${
                    activeTab === tab.id
                      ? 'border-[#9FEF00] text-[#111] bg-[#9FEF00]/5'
                      : 'border-transparent text-[#666] hover:text-[#111] hover:bg-[#fafafa]'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========== 标签页内容主体区 ========== */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {ActiveComponent}
      </div>

      {/* ========== 底部下一步引导区 ========== */}
      <section className="py-16 bg-white border-t border-[#e5e5e5] mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">准备好开启你的漏洞赏金之旅了吗？</h2>
          <p className="text-[#666] text-lg mb-8 max-w-2xl mx-auto">
            现在你已经理解了Bug Bounty的完整体系，接下来可以从漏洞知识、工具指南、实战方法论开始，一步一步搭建你的技能体系。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/roadmap" className="inline-flex items-center justify-center rounded-full bg-[#9FEF00] px-6 py-3 text-sm font-bold text-[#111] hover:bg-[#8ed900] transition-colors">
              查看完整学习路线
            </a>
            <a href="/vulnerabilities" className="inline-flex items-center justify-center rounded-full border border-[#333] bg-transparent px-6 py-3 text-sm font-bold hover:bg-[#f5f5f5] transition-colors">
              学习漏洞知识
            </a>
            <a href="/tools" className="inline-flex items-center justify-center rounded-full border border-[#333] bg-transparent px-6 py-3 text-sm font-bold hover:bg-[#f5f5f5] transition-colors">
              安全工具指南
            </a>
            <a href="/platforms" className="inline-flex items-center justify-center rounded-full border border-[#333] bg-transparent px-6 py-3 text-sm font-bold hover:bg-[#f5f5f5] transition-colors">
              赏金平台大全
            </a>
          </div>
        </div>
      </section>

      {/* 隐藏滚动条的全局样式 */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}