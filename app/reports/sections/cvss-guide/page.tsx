// app/reports/sections/cvss-guide/page.tsx
'use client';

import React from 'react';
import Accordion from '@/components/ui/Accordion';

export default function CVSSGuidePage() {
  // 完全对齐原页面的3个核心模块，补充计算器使用说明
  const cvssItems = [
    {
      id: 'cvss-metrics',
      title: '一、CVSS风险分类系统（8大核心指标）',
      content: <CVSSMetricsContent />,
    },
    {
      id: 'cvss-common-scores',
      title: '二、常见CVSS漏洞评分表',
      content: <CVSSCommonScoresContent />,
    },
    {
      id: 'cvss-examples',
      title: '三、漏洞评分示例（如何评估你的漏洞）',
      content: <CVSSExamplesContent />,
    },
    {
      id: 'cvss-calculator',
      title: '四、官方计算器使用方法',
      content: <CVSSCalculatorContent />,
    },
  ];

  return (
    <div>
      {/* 页面顶部简介，和原页面开头对齐 */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">CVSS评分指南</h2>
        <p className="text-slate-400 leading-relaxed">
          CVSS（通用漏洞评分系统）是全球公认的漏洞严重程度分类标准，准确的CVSS评分是专业漏洞报告的重要组成部分，能帮助厂商正确评估漏洞优先级，也能体现你的专业性。
        </p>
        <div className="mt-4 bg-slate-900/20 rounded-lg p-4">
          <h4 className="font-bold mb-2">CVSS评分等级划分</h4>
          <ul className="grid md:grid-cols-5 gap-2 text-sm">
            <li className="bg-red-100 text-red-800 p-2 rounded text-center">
              <span className="font-bold block">9.0-10.0</span>
              Critical 严重
            </li>
            <li className="bg-orange-100 text-orange-800 p-2 rounded text-center">
              <span className="font-bold block">7.0-8.9</span>
              High 高危
            </li>
            <li className="bg-yellow-100 text-yellow-800 p-2 rounded text-center">
              <span className="font-bold block">4.0-6.9</span>
              Medium 中危
            </li>
            <li className="bg-green-100 text-green-800 p-2 rounded text-center">
              <span className="font-bold block">0.1-3.9</span>
              Low 低危
            </li>
            <li className="bg-slate-800/60 text-slate-200 p-2 rounded text-center">
              <span className="font-bold block">0.0</span>
              None 无危
            </li>
          </ul>
        </div>
      </div>

      {/* 可折叠的核心模块 */}
      <Accordion
        items={cvssItems}
        type="multiple"
        defaultOpenIds={['cvss-metrics']}
      />
    </div>
  );
}

// 一、CVSS风险分类系统（8大核心指标），完全对应原页面的8个指标
function CVSSMetricsContent() {
  const metricsList = [
    {
      name: '1. 攻击向量 (AV - Attack Vector)',
      desc: '衡量攻击者可以通过什么途径访问到漏洞，越容易远程访问，评分越高。',
      options: [
        { label: 'Network (N) 网络', desc: '通过互联网远程即可利用，无需本地访问或特殊网络条件，最常见的漏洞类型。' },
        { label: 'Adjacent (A) 相邻网络', desc: '需要和目标在同一个局域网、受限网络内才能利用。' },
        { label: 'Local (L) 本地', desc: '需要本地登录系统、物理接触设备才能利用。' },
        { label: 'Physical (P) 物理', desc: '需要直接物理接触目标设备才能利用。' },
      ],
    },
    {
      name: '2. 攻击复杂度 (AC - Attack Complexity)',
      desc: '衡量利用漏洞的难度，是否需要特殊条件、绕过防护。',
      options: [
        { label: 'Low (L) 低', desc: '攻击条件简单，无需特殊配置、无需绕过防护，一次尝试即可成功。' },
        { label: 'High (H) 高', desc: '需要特殊的目标配置、需要绕过WAF/防护机制，攻击成功有一定的条件限制。' },
      ],
    },
    {
      name: '3. 所需权限 (PR - Privileges Required)',
      desc: '衡量利用漏洞需要的账号权限级别，权限要求越低，评分越高。',
      options: [
        { label: 'None (N) 无', desc: '无需任何登录权限，未认证的匿名用户即可利用，风险最高。' },
        { label: 'Low (L) 低', desc: '只需要普通用户的基础权限，无需管理员权限。' },
        { label: 'High (H) 高', desc: '需要管理员、高权限账号才能利用。' },
      ],
    },
    {
      name: '4. 用户交互 (UI - User Interaction)',
      desc: '衡量是否需要受害者的配合操作才能触发漏洞。',
      options: [
        { label: 'None (N) 无', desc: '完全不需要受害者做任何操作，攻击者自己就能完成利用。' },
        { label: 'Required (R) 必需', desc: '需要受害者执行操作，比如点击恶意链接、打开恶意文件、访问恶意页面等。' },
      ],
    },
    {
      name: '5. 影响范围 (S - Scope)',
      desc: '衡量漏洞是否能突破当前的安全边界，影响到其他系统/组件。',
      options: [
        { label: 'Unchanged (U) 未改变', desc: '漏洞影响范围仅限于当前的组件、系统、安全边界内。' },
        { label: 'Changed (C) 已改变', desc: '漏洞可以突破安全边界，影响到边界外的其他系统，比如XSS影响受害者的浏览器、SSRF影响内网系统。' },
      ],
    },
    {
      name: '6. 机密性影响 (C - Confidentiality)',
      desc: '衡量漏洞对数据保密性的破坏程度，数据泄露越严重，评分越高。',
      options: [
        { label: 'High (H) 高', desc: '完全泄露敏感数据，攻击者可以获取所有/核心的机密数据，比如数据库拖库、窃取用户账号Cookie。' },
        { label: 'Low (L) 低', desc: '只能泄露部分非核心数据，或者数据泄露有严格的限制。' },
        { label: 'None (N) 无', desc: '对数据保密性没有任何影响。' },
      ],
    },
    {
      name: '7. 完整性影响 (I - Integrity)',
      desc: '衡量漏洞对数据完整性的破坏程度，能否篡改数据。',
      options: [
        { label: 'High (H) 高', desc: '可以任意修改、篡改目标系统的任何数据，比如SQL注入修改管理员密码。' },
        { label: 'Low (L) 低', desc: '只能修改部分非核心数据，或者修改有严格的限制。' },
        { label: 'None (N) 无', desc: '对数据完整性没有任何影响。' },
      ],
    },
    {
      name: '8. 可用性影响 (A - Availability)',
      desc: '衡量漏洞对服务/系统可用性的破坏程度，能否导致服务中断。',
      options: [
        { label: 'High (H) 高', desc: '可以导致服务完全中断、系统宕机，拒绝服务，比如RCE、严重的DoS漏洞。' },
        { label: 'Low (L) 低', desc: '只能导致部分服务不可用、短暂的性能下降，影响有限。' },
        { label: 'None (N) 无', desc: '对服务可用性没有任何影响。' },
      ],
    },
  ];

  return (
    <div className="space-y-5">
      <p className="text-slate-400 mb-3">
        CVSS 3.1的基础评分由8个核心指标组成，每个指标的选择直接决定了漏洞的最终评分。
      </p>

      {metricsList.map((metric, idx) => (
        <div key={idx} className="bg-slate-900/20 rounded-lg p-4 border border-[#eee]">
          <h4 className="font-bold text-lg mb-2">{metric.name}</h4>
          <p className="text-slate-400 mb-3">{metric.desc}</p>
          <div className="space-y-2 pl-2">
            {metric.options.map((opt, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-md rounded p-3 border border-[#eee]">
                <p className="font-medium mb-1">{opt.label}</p>
                <p className="text-sm text-slate-400">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] rounded-lg p-4 mt-4">
        <h5 className="font-bold mb-2">CVSS向量字符串格式</h5>
        <p className="text-slate-400 mb-2">8个指标的选择结果会生成标准的向量字符串，是报告里必须包含的内容，格式如下：</p>
        <div className="bg-[#1a1a1a] rounded p-3">
          <code className="text-cyan-400 text-sm">
            CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H
          </code>
        </div>
      </div>
    </div>
  );
}

// 二、常见CVSS漏洞评分表，完全对应原页面的表格
function CVSSCommonScoresContent() {
  const scoreList = [
    {
      type: 'RCE（未授权远程代码执行）',
      score: '9.8',
      severity: 'Critical',
      vector: 'AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    },
    {
      type: 'SQL注入（未授权，可拖库）',
      score: '9.8',
      severity: 'Critical',
      vector: 'AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    },
    {
      type: '认证绕过（直接获取管理员权限）',
      score: '9.8',
      severity: 'Critical',
      vector: 'AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    },
    {
      type: '存储型XSS（可会话劫持）',
      score: '8.2',
      severity: 'High',
      vector: 'AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:L/A:N',
    },
    {
      type: 'SSRF（可访问云元数据/内网）',
      score: '8.6',
      severity: 'High',
      vector: 'AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N',
    },
    {
      type: 'IDOR越权（可访问所有用户私密数据）',
      score: '7.5',
      severity: 'High',
      vector: 'AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N',
    },
    {
      type: 'CSRF（修改绑定邮箱/密码）',
      score: '6.5',
      severity: 'Medium',
      vector: 'AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N',
    },
    {
      type: '反射型XSS',
      score: '6.1',
      severity: 'Medium',
      vector: 'AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N',
    },
    {
      type: '缺少安全头（无实际利用场景）',
      score: '0.0',
      severity: 'N/A',
      vector: 'N/A',
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-slate-400 mb-3">
        以下是赏金报告中最常见的漏洞类型的参考评分，实际分数请以漏洞的具体场景为准，建议使用官方计算器计算准确分数。
      </p>

      <div className="overflow-x-auto bg-slate-900/40 backdrop-blur-md rounded-lg border border-[#eee]">
        <table className="w-full min-w-full">
          <thead>
            <tr className="border-b border-[#eee] bg-slate-900/20">
              <th className="text-left py-3 px-4 font-bold text-[#333]">漏洞类型</th>
              <th className="text-center py-3 px-4 font-bold text-[#333]">分数</th>
              <th className="text-center py-3 px-4 font-bold text-[#333]">危险等级</th>
              <th className="text-left py-3 px-4 font-bold text-[#333]">CVSS向量</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eee]">
            {scoreList.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-900/20">
                <td className="text-left py-3 px-4 font-medium">{item.type}</td>
                <td className="text-center py-3 px-4">{item.score}</td>
                <td className="text-center py-3 px-4">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                    item.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                    item.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-slate-800/60 text-gray-700'
                  }`}>
                    {item.severity}
                  </span>
                </td>
                <td className="text-left py-3 px-4 font-mono text-sm text-slate-400 break-all">{item.vector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 三、漏洞评分示例（如何评估你的漏洞），完全对应原页面的两个示例
function CVSSExamplesContent() {
  const examples = [
    {
      title: '示例1：搜索功能的SQL注入漏洞',
      desc: '未授权即可利用，可拖库、修改数据',
      metrics: [
        { key: 'AV', value: 'N', desc: '远程网络可利用' },
        { key: 'AC', value: 'L', desc: '攻击复杂度低，无特殊条件' },
        { key: 'PR', value: 'N', desc: '无需登录，匿名用户即可利用' },
        { key: 'UI', value: 'N', desc: '无需用户交互' },
        { key: 'S', value: 'U', desc: '影响范围仅限当前系统' },
        { key: 'C', value: 'H', desc: '可完全泄露数据库所有数据' },
        { key: 'I', value: 'H', desc: '可修改、删除数据库数据' },
        { key: 'A', value: 'H', desc: '可导致服务/数据库中断' },
      ],
      vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
      finalScore: '9.8 (Critical 严重)',
    },
    {
      title: '示例2：评论区的存储型XSS漏洞',
      desc: '登录后可发布带Payload的评论，其他用户查看评论即可触发',
      metrics: [
        { key: 'AV', value: 'N', desc: '远程网络可利用' },
        { key: 'AC', value: 'L', desc: '攻击复杂度低，无特殊条件' },
        { key: 'PR', value: 'L', desc: '需要普通用户账号发布评论' },
        { key: 'UI', value: 'R', desc: '需要受害者查看评论页面' },
        { key: 'S', value: 'C', desc: '影响范围突破了网站，作用于受害者的浏览器' },
        { key: 'C', value: 'H', desc: '可窃取受害者的Cookie、敏感信息' },
        { key: 'I', value: 'L', desc: '可有限修改页面内容，无法修改服务器数据' },
        { key: 'A', value: 'N', desc: '对服务可用性无影响' },
      ],
      vector: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:L/A:N',
      finalScore: '8.2 (High 高危)',
    },
  ];

  return (
    <div className="space-y-6">
      <p className="text-slate-400 mb-3">
        以下是两个最常见漏洞的完整评分过程示例，帮助你理解如何给你的漏洞打分。
      </p>

      {examples.map((example, idx) => (
        <div key={idx} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-[#eee] p-5">
          <h4 className="font-bold text-lg mb-2">{example.title}</h4>
          <p className="text-slate-400 mb-4">{example.desc}</p>
          
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {example.metrics.map((m, i) => (
              <div key={i} className="bg-slate-900/20 rounded-lg p-3 flex justify-between items-center">
                <span className="text-sm text-slate-400">{m.desc}</span>
                <span className="font-medium">{m.key}: {m.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] rounded-lg p-4">
            <p className="font-mono text-sm mb-2 break-all">{example.vector}</p>
            <p className="font-bold text-lg text-cyan-300">最终评分：{example.finalScore}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// 四、官方计算器使用方法
function CVSSCalculatorContent() {
  return (
    <div className="space-y-4">
      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="font-bold mb-2">官方权威计算器地址</h4>
        <div className="bg-slate-900/20 rounded-lg p-4">
          <p className="text-slate-400 mb-2">
            First.org 官方CVSS 3.1计算器（全球通用，最权威）：
          </p>
          <a 
            href="https://www.first.org/cvss/calculator/3.1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-300 font-bold font-mono"
          >
            https://www.first.org/cvss/calculator/3.1
          </a>
        </div>
      </div>

      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="font-bold mb-2">使用步骤</h4>
        <ol className="list-decimal list-inside space-y-2 text-slate-400 pl-2">
          <li className="leading-relaxed">打开官方计算器，确认是CVSS 3.1版本</li>
          <li className="leading-relaxed">根据你的漏洞实际场景，在「Base Score Metrics」区域，依次选择8个指标对应的选项</li>
          <li className="leading-relaxed">选择完成后，页面会自动计算出最终的分数、危险等级</li>
          <li className="leading-relaxed">复制页面顶部生成的「Vector String」向量字符串</li>
          <li className="leading-relaxed">在你的漏洞报告里，附上分数、等级、向量字符串即可</li>
        </ol>
      </div>

      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="font-bold mb-2">报告里的标准写法</h4>
        <div className="bg-slate-900/20 rounded-lg p-4">
          <div className="bg-slate-900/40 backdrop-blur-md border border-[#eee] rounded p-3">
            <p className="font-medium">CVSS 3.1 Score: 8.2 (High)</p>
            <p className="text-slate-400 font-mono text-sm mt-1">
              Vector: CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:L/A:N
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}