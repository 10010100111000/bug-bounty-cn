// app/vulnerabilities/page.tsx
'use client';
import React from 'react';

// 引入所有模块组件
import VulnerabilityHeader from './components/VulnerabilityHeader';
import CommonVulnerabilities from './components/CommonVulnerabilities';
import RiskMatrix from './components/RiskMatrix';
import VulnerabilityCategoryStats from './components/VulnerabilityCategoryStats';
import RealWorldCases from './components/RealWorldCases';
import TestingPhases from './components/TestingPhases';
import CommonMisconceptions from './components/CommonMisconceptions';
import AttackChains from './components/AttackChains';
import FixPatterns from './components/FixPatterns';
import LearningResources from './components/LearningResources';
import VulnerabilityChecklist from './components/VulnerabilityChecklist';

export default function VulnerabilitiesPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">
      {/* 1. 顶部标题与统计 */}
      <VulnerabilityHeader />

      {/* 2. 核心：常见安全漏洞列表 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <CommonVulnerabilities />
      </div>

      {/* 3. 进阶指南区域 */}
      <div className="max-w-6xl mx-auto px-4">
        {/* 进阶指南标题 */}
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-2">
            进阶指南
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">漏洞分析与评估工具</h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            系统化理解漏洞之间的关联、风险评估方法、以及标准化的修复方案
          </p>
        </div>

        {/* 按原页面顺序引入所有进阶模块 */}
        <div className="space-y-16">
          <RiskMatrix />
          <VulnerabilityCategoryStats />
          <RealWorldCases />
          <TestingPhases />
          <CommonMisconceptions />
          <AttackChains />
          <FixPatterns />
          <LearningResources />
          <VulnerabilityChecklist />
        </div>
      </div>

      {/* 全局样式补充 */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}