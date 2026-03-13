// app/reports/page.tsx
'use client';

import React from 'react';
import Tabs from '@/components/ui/Tabs';

// 引入板块内容
import ReportStructure from './sections/structure/page';
import ReportExamples from './sections/exaxmples/page';
import CVSSGuide from './sections/cvss-guide/page';
import ReportTemplates from './sections/templates/page';
import ImpactEscalation from './sections/impact/page';
import ProfessionalCommunication from './sections/communication/page';

export default function ReportsPage() {
  // 你指定的6个板块，和原页面内容一一对应
  const tabs = [
    {
      id: 'structure',
      label: '报告结构',
      content: <ReportStructure />,
    },
    {
      id: 'examples',
      label: '优秀报告示例',
      content: <ReportExamples />,
    },
    {
      id: 'cvss-guide',
      label: 'CVSS评分指南',
      content: <CVSSGuide />,
    },
    {
      id: 'templates',
      label: '报告模板',
      content: <ReportTemplates />,
    },
    {
      id: 'impact',
      label: '危害提升',
      content: <ImpactEscalation />,
    },
    {
      id: 'communication',
      label: '专业沟通',
      content: <ProfessionalCommunication />,
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">
      {/* 页面顶部标题 */}
      <div className="bg-white py-12 md:py-16 border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Bug Bounty 报告写作指南
          </h1>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            写出高通过率、高赏金的专业漏洞报告，包含完整结构、避坑指南、模板示例、评分标准和沟通技巧
          </p>
        </div>
      </div>

      {/* 核心：6个标签切换 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs items={tabs} defaultTabId="structure" />
      </div>
    </div>
  );
}