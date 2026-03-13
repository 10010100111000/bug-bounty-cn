// app/methodology/components/TopVulnerabilities.tsx
export default function TopVulnerabilities() {
  const topVulnerabilities = [
    {
      rank: 1,
      name: "Cross-Site Scripting (XSS)",
      percentage: "28%",
      severity: "Medium-High",
      tip: "在每个在响应中反射的输入点中查找"
    },
    {
      rank: 2,
      name: "IDOR / Broken Access Control",
      percentage: "22%",
      severity: "High-Critical",
      tip: "测试每个使用资源ID的接口"
    },
    {
      rank: 3,
      name: "Information Disclosure",
      percentage: "15%",
      severity: "Low-Medium",
      tip: "检查错误消息、响应头和JS文件"
    },
    {
      rank: 4,
      name: "SSRF",
      percentage: "8%",
      severity: "High",
      tip: "查找任何接受URL的参数"
    },
    {
      rank: 5,
      name: "SQL Injection",
      percentage: "6%",
      severity: "Critical",
      tip: "在每个与数据库交互的参数中尝试引号"
    },
    {
      rank: 6,
      name: "CSRF",
      percentage: "5%",
      severity: "Medium",
      tip: "检查每个没有CSRF token的敏感操作"
    }
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">Bug Bounty中最常见的10大漏洞</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          根据全球Bug Bounty项目中发现频率排序的漏洞。
        </p>
      </div>

      <div className="space-y-4">
        {topVulnerabilities.map((vuln, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 flex items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 flex items-center justify-center text-xl font-bold">
              {vuln.rank}
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h4 className="text-lg font-bold">{vuln.name}</h4>
                <span className="px-2 py-1 bg-slate-800/60 rounded text-xs font-medium">
                  {vuln.percentage}
                </span>
                <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 rounded text-xs font-medium">
                  {vuln.severity}
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                <span className="font-medium">提示：</span> {vuln.tip}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}