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
        <p className="text-[#666] max-w-2xl mx-auto">
          根据全球Bug Bounty项目中发现频率排序的漏洞。
        </p>
      </div>

      <div className="space-y-4">
        {topVulnerabilities.map((vuln, index) => (
          <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-6 flex items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9FEF00] text-[#111] flex items-center justify-center text-xl font-bold">
              {vuln.rank}
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h4 className="text-lg font-bold">{vuln.name}</h4>
                <span className="px-2 py-1 bg-[#f5f5f5] rounded text-xs font-medium">
                  {vuln.percentage}
                </span>
                <span className="px-2 py-1 bg-[#9FEF00]/10 text-[#5a7a00] rounded text-xs font-medium">
                  {vuln.severity}
                </span>
              </div>
              <p className="text-[#666] text-sm">
                <span className="font-medium">提示：</span> {vuln.tip}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}