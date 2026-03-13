// app/vulnerabilities/components/TestingPhases.tsx
export default function TestingPhases() {
  // 测试阶段数据，完全对齐原页面内容
  const testingPhases = [
    {
      step: "1",
      title: "侦察阶段 (Reconnaissance)",
      desc: "在正式测试开始前，全面收集目标的相关信息。这一阶段决定了你后续测试的范围和漏洞挖掘的方向。",
      targetVulnerabilities: ["信息泄露", "CORS配置错误", "Host头注入"],
      tools: ["subfinder", "httpx", "nuclei", "Shodan", "Google Dorks"],
      tips: [
        "在开始测试前，先收集全所有子域名和接口端点",
        "分析目标使用的技术栈，锁定潜在的漏洞方向",
        "主动查找暴露的敏感文件，比如 .git、.env、robots.txt 等"
      ]
    },
    {
      step: "2",
      title: "扫描阶段 (Scanning)",
      desc: "对应用进行系统化的扫描，发现潜在的脆弱点。建议结合自动化工具与手动校验，避免漏报和误报。",
      targetVulnerabilities: ["XSS", "SQL注入", "CRLF注入", "开放重定向"],
      tools: ["Burp Suite Scanner", "Nuclei", "Nikto", "Nmap"],
      tips: [
        "不要完全依赖自动化工具，手动校验是必不可少的",
        "对每一个接口端点进行单独的分析和测试",
        "重点关注异常的响应内容和错误提示信息"
      ]
    },
    {
      step: "3",
      title: "利用阶段 (Exploitation)",
      desc: "验证发现的潜在漏洞，证明漏洞的可利用性与实际影响。这一阶段需要你对每类漏洞有深入的理解。",
      targetVulnerabilities: ["SSRF", "SSTI", "不安全的反序列化", "JWT漏洞"],
      tools: ["Burp Suite Repeater", "sqlmap", "ysoserial", "jwt_tool"],
      tips: [
        "先从简单的PoC开始，再逐步扩大漏洞的影响范围",
        "对每一步操作都做好截图或录屏的记录留存",
        "绝对不要超出项目规定的测试范围"
      ]
    },
    {
      step: "4",
      title: "报告阶段 (Reporting)",
      desc: "编写清晰、有说服力的漏洞报告，完整描述漏洞、影响范围、复现方法与修复方案。",
      targetVulnerabilities: ["所有已发现的漏洞"],
      tools: ["Markdown编辑器", "录屏工具", "Burp Suite Logger"],
      tips: [
        "用一句话写清楚漏洞的核心信息，作为报告标题",
        "复现步骤必须足够详细，确保任何人都能按照步骤复现漏洞",
        "从业务视角说明漏洞的影响，而不仅仅是技术层面的描述"
      ]
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">渗透测试各阶段对应漏洞</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          渗透测试的每个阶段，都会对应不同类型的漏洞。了解各阶段的目标、对应漏洞与常用工具，建立系统化的测试流程。
        </p>
      </div>

      <div className="space-y-4">
        {testingPhases.map((phase, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 hover:shadow-sm transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 font-bold flex items-center justify-center">
                {phase.step}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{phase.title}</h4>
                <p className="text-slate-400">{phase.desc}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 ml-12">
              {/* 目标漏洞 */}
              <div>
                <h5 className="text-sm font-semibold mb-2">目标漏洞</h5>
                <div className="flex flex-wrap gap-2">
                  {phase.targetVulnerabilities.map((vuln, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800/60 rounded text-xs">
                      {vuln}
                    </span>
                  ))}
                </div>
              </div>

              {/* 常用工具 */}
              <div>
                <h5 className="text-sm font-semibold mb-2">常用工具</h5>
                <div className="flex flex-wrap gap-2">
                  {phase.tools.map((tool, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800/60 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 实战技巧 */}
            <div className="ml-12 mt-4">
              <h5 className="text-sm font-semibold mb-2">实战技巧</h5>
              <ul className="space-y-1">
                {phase.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}