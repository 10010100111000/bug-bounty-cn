// app/methodology/components/MethodologyHeader.tsx
export default function MethodologyHeader() {
  // 时间分配数据
  const timeDistribution = [
    { phase: "信息收集 (Recon)", percent: 35, color: "bg-gradient-to-r from-violet-500 to-cyan-500" },
    { phase: "攻击面绘制与内容发现", percent: 15, color: "bg-blue-500" },
    { phase: "参数与JS文件分析", percent: 15, color: "bg-purple-500" },
    { phase: "漏洞测试", percent: 25, color: "bg-orange-500" },
    { phase: "报告编写", percent: 10, color: "bg-teal-500" }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-900/40 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 text-xs font-medium mb-4">
          专业方法论
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bug Bounty 完整方法论
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          从第一刻到提交报告的完整14阶段流程，包含工具、命令、技巧和真实案例的全面实战指南。
        </p>

        {/* 时间分配模块 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-6">如何分配你的测试时间？</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            理想的时间分配会根据目标类型和你的经验而变化，但这是针对新手和中级研究者的推荐分配方案。
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            {timeDistribution.map((item, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{item.phase}</span>
                  <span className="font-bold">{item.percent}%</span>
                </div>
                <div className="w-full bg-slate-800/60 rounded-full h-3">
                  <div 
                    className={`h-full rounded-full ${item.color} transition-all`}
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}