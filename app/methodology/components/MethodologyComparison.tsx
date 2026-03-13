// app/methodology/components/MethodologyComparison.tsx
export default function MethodologyComparison() {
  // 方法论对比数据
  const methodologies = [
    {
      name: "OWASP Testing Guide",
      fullName: "Open Web Application Security Project Testing Guide",
      focus: "Web应用安全测试",
      coverage: "11个主要测试类别",
      strengths: [
        "Web应用测试最全面的指南",
        "免费且开源",
        "由社区持续更新",
        "为每个漏洞提供详细的测试用例",
        "全球公认的行业标准"
      ],
      weaknesses: [
        "仅专注于Web应用",
        "对新手来说可能过于详细",
        "对基础设施的覆盖不够充分"
      ],
      bestFor: "Web应用渗透测试与Bug Bounty"
    },
    {
      name: "PTES",
      fullName: "Penetration Testing Execution Standard",
      focus: "全面渗透测试",
      coverage: "7个主要阶段",
      strengths: [
        "覆盖完整的渗透测试生命周期",
        "包含前期接触与规划",
        "适合专业测试与合同项目",
        "提供全面且结构化的框架"
      ],
      weaknesses: [
        "长期未更新",
        "Web方面的细节不如OWASP",
        "需要根据项目进行定制"
      ],
      bestFor: "专业渗透测试服务"
    },
    {
      name: "OSSTMM",
      fullName: "Open Source Security Testing Methodology Manual",
      focus: "全面安全测试",
      coverage: "5个测试渠道",
      strengths: [
        "科学且可量化的方法论",
        "覆盖所有类型的安全（物理、网络、无线）",
        "提供安全的量化指标（rav）",
        "适合全面评估"
      ],
      weaknesses: [
        "对新手来说过于复杂",
        "知名度不如OWASP和PTES",
        "需要深入理解方法论"
      ],
      bestFor: "全面安全评估与量化分析"
    },
    {
      name: "NIST SP 800-115",
      fullName: "Technical Guide to Information Security Testing and Assessment",
      focus: "政府机构信息安全评估",
      coverage: "4个主要阶段",
      strengths: [
        "美国政府公认的标准",
        "覆盖合规要求",
        "结构化且系统化的方法论",
        "适合政府机构"
      ],
      weaknesses: [
        "专注于政府环境",
        "灵活性不如其他方法论",
        "更新不频繁"
      ],
      bestFor: "政府机构与合规性评估"
    }
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">全球主流方法论对比</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          有几种全球公认的渗透测试方法论。根据项目类型和需求选择合适的方法论。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {methodologies.map((method, index) => (
          <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-6 hover:shadow-sm transition-all">
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-1">{method.name}</h4>
              <p className="text-sm text-[#666]">{method.fullName}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#9FEF00]/10 text-[#5a7a00] rounded text-xs font-medium">
                  {method.focus}
                </span>
                <span className="px-2 py-1 bg-[#f5f5f5] rounded text-xs">
                  {method.coverage}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {/* 优势 */}
              <div>
                <h5 className="text-sm font-bold text-green-700 mb-2">优势</h5>
                <ul className="space-y-1">
                  {method.strengths.map((strength, i) => (
                    <li key={i} className="text-sm text-[#666] flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">+</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 劣势 */}
              <div>
                <h5 className="text-sm font-bold text-red-700 mb-2">劣势</h5>
                <ul className="space-y-1">
                  {method.weaknesses.map((weakness, i) => (
                    <li key={i} className="text-sm text-[#666] flex items-start gap-2">
                      <span className="text-red-500 mt-1 flex-shrink-0">-</span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 适用场景 */}
              <div className="bg-[#9FEF00]/5 rounded-lg p-3 border border-[#9FEF00]/20">
                <h5 className="text-sm font-bold text-[#5a7a00] mb-1">最适合</h5>
                <p className="text-sm">{method.bestFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}