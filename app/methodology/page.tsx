// app/methodology/page.tsx
'use client';

import React from 'react';

import MethodologyHeader from './components/MethodologyHeader';
import DecisionTree from './components/DecisionTree';
import DetailedPhases from './components/DetailedPhases';
import MethodologyComparison from './components/MethodologyComparison';
import RealScenarios from './components/RealScenarios';
import AutomationScripts from './components/AutomationScripts';
import FinalChecklist from './components/FinalChecklist';
import ToolChains from './components/ToolChains';
import CVSSGuide from './components/CVSSGuide';
import ExpertTips from './components/ExpertTips';
import ReportTemplates from './components/ReportTemplates';
import TopVulnerabilities from './components/TopVulnerabilities';

export default function MethodologyPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">
      <MethodologyHeader />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <DecisionTree />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <DetailedPhases />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <MethodologyComparison />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <RealScenarios />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <AutomationScripts />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <FinalChecklist />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <ToolChains />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <CVSSGuide />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <ExpertTips />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <ReportTemplates />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <TopVulnerabilities />
      </div>
    </div>
  );
}