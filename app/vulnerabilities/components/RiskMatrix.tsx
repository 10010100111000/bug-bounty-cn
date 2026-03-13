// app/vulnerabilities/components/RiskMatrix.tsx
export default function RiskMatrix() {
  // 风险等级数据，完全对齐原页面
  const riskLevels = [
    {
      level: "严重",
      cvss: "9.0 - 10.0",
      examples: ["SQL Injection", "SSTI", "HTTP Smuggling", "不安全的反序列化", "可RCE的文件上传漏洞"],
      responseTime: "24小时内紧急修复",
      rewardLevel: "项目内最高赏金"
    },
    {
      level: "高",
      cvss: "7.0 - 8.9",
      examples: ["存储型XSS", "IDOR", "SSRF", "JWT漏洞", "OAuth漏洞", "NoSQL注入"],
      responseTime: "一周内修复",
      rewardLevel: "高额赏金"
    },
    {
      level: "中",
      cvss: "4.0 - 6.9",
      examples: ["CSRF", "点击劫持", "CRLF注入", "Host头注入", "CORS配置错误"],
      responseTime: "一个月内修复",
      rewardLevel: "中等赏金"
    },
    {
      level: "低",
      cvss: "0.1 - 3.9",
      examples: ["开放重定向", "信息泄露", "版本号泄露"],
      responseTime: "下一个版本迭代修复",
      rewardLevel: "低额赏金或仅标记致谢"
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">风险等级对比矩阵</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          不同风险等级的划分标准、对应漏洞、修复响应时间与赏金等级
        </p>
      </div>

      <div className="space-y-4">
        {riskLevels.map((item, index) => {
          // 不同风险等级的配色
          const colorConfig = {
            "严重": "border-red-200 bg-red-50",
            "高": "border-orange-200 bg-orange-50",
            "中": "border-yellow-200 bg-yellow-50",
            "低": "border-blue-200 bg-blue-50",
          };
          const bgClass = colorConfig[item.level as keyof typeof colorConfig] || "border-slate-700/50 bg-slate-900/40 backdrop-blur-md";

          return (
            <div key={index} className={`rounded-lg border ${bgClass} p-6`}>
              <div className="grid md:grid-cols-5 gap-6">
                {/* 风险等级 */}
                <div className="md:col-span-1">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold mb-1">{item.level}</span>
                    <span className="text-sm font-medium text-slate-400">CVSS: {item.cvss}</span>
                  </div>
                </div>

                {/* 漏洞示例 */}
                <div className="md:col-span-1">
                  <h4 className="text-sm font-semibold mb-2">漏洞示例</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((example, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900/40 backdrop-blur-md rounded text-xs font-medium">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 响应时间 */}
                <div className="md:col-span-1">
                  <h4 className="text-sm font-semibold mb-2">响应时间</h4>
                  <p className="text-sm">{item.responseTime}</p>
                </div>

                {/* 赏金等级 */}
                <div className="md:col-span-2">
                  <h4 className="text-sm font-semibold mb-2">赏金等级</h4>
                  <p className="text-sm">{item.rewardLevel}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}