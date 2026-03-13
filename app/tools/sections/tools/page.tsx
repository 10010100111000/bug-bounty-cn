// app/tools/sections/tools/page.tsx
'use client';

import React from 'react';

// 引入工具板块的所有组件
import ToolsHeader from './components/ToolsHeader';
import ToolsList from './components/ToolsList';
import ToolsTips from './components/ToolsTips';
import BeginnerSetup from './components/BeginnerSetup';
import APIKeysGuide from './components/APIKeysGuide';
import CommonMistakes from './components/CommonMistakes';
import LearningPath from './components/LearningPath';

export default function ToolsSection() {
  return (
    <div className="space-y-16">
      {/* 1. 工具板块内部标题 */}
      <ToolsHeader />
      
      {/* 2. 核心：34个工具列表 + 分类筛选 */}
      <ToolsList />

      {/* 3. 工具使用基础建议 */}
      <ToolsTips />

      {/* 4. 新手推荐配置 */}
      <BeginnerSetup />

      {/* 5. 推荐API密钥指南 */}
      <APIKeysGuide />

      {/* 6. 常见错误避坑 */}
      <CommonMistakes />

      {/* 7. 工具学习路径 */}
      <LearningPath />
    </div>
  );
}