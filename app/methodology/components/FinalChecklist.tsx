// app/methodology/components/FinalChecklist.tsx
export default function FinalChecklist() {
  const checklistItems = [
    "漏洞是否在项目范围内 (in-scope)？",
    "你是否确认漏洞不是重复的 (duplicate)？",
    "利用步骤是否清晰且可复现？",
    "你是否添加了截图或视频PoC？",
    "你是否正确计算了CVSS评分？",
    "你是否清晰说明了安全影响？",
    "你是否提出了修复方案？",
    "你是否添加了合适的CWE ID？",
    "标题是否清晰且具体？",
    "你是否检查了报告的拼写错误？",
    "你是否确认PoC在干净环境中也能运行？",
    "你是否添加了完整的HTTP请求/响应？",
    "你是否从业务角度描述了影响？",
    "你是否避免了对风险等级的夸大？",
    "你是否添加了参考资料和引用来源？",
    "你是否确认报告中没有泄露敏感数据？"
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">提交报告前的最终检查清单</h3>
      </div>

      <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-8">
        <ul className="space-y-3">
          {checklistItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 flex-shrink-0 text-xl">□</span>
              <span className="text-slate-400">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}