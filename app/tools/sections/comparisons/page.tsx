// app/tools/sections/comparisons/page.tsx
export default function ComparisonsSection() {
  const comparisons = [
    {
      title: "代理工具对比",
      items: [
        {
          name: "Burp Suite Community",
          pros: ["行业标准", "插件生态丰富", "文档完善"],
          cons: ["免费版有限制", "资源占用高", "界面复杂"]
        },
        {
          name: "OWASP ZAP",
          pros: ["完全免费开源", "功能全面", "自动化扫描强"],
          cons: ["性能较慢", "界面不够现代", "学习曲线陡峭"]
        },
        {
          name: "Caido",
          pros: ["轻量快速", "界面简洁", "完全免费"],
          cons: ["生态较小", "插件较少", "相对较新"]
        }
      ]
    },
    {
      title: "子域名枚举工具对比",
      items: [
        {
          name: "Subfinder",
          pros: ["速度极快", "被动源多", "输出简洁"],
          cons: ["主动扫描弱", "需要配置API"]
        },
        {
          name: "Amass",
          pros: ["功能最全", "主动+被动", "可视化好"],
          cons: ["速度较慢", "配置复杂", "资源占用高"]
        },
        {
          name: "Assetfinder",
          pros: ["极简快速", "零配置", "轻量"],
          cons: ["源较少", "功能单一"]
        }
      ]
    },
    {
      title: "内容发现工具对比",
      items: [
        {
          name: "ffuf",
          pros: ["速度最快", "功能强大", "高度可定制"],
          cons: ["命令行复杂", "需要好的字典"]
        },
        {
          name: "dirsearch",
          pros: ["界面友好", "默认字典好", "简单易用"],
          cons: ["速度较慢", "Go版本不如ffuf"]
        },
        {
          name: "gobuster",
          pros: ["稳定可靠", "简单直接"],
          cons: ["功能较少", "速度一般"]
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">工具对比</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            同类工具的优缺点对比，帮助你选择最适合的工具。
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((comparison, idx) => (
            <div key={idx} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-xl font-bold mb-6">{comparison.title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {comparison.items.map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-slate-900/20 border border-slate-700/50">
                    <h4 className="font-bold mb-4 text-center">{item.name}</h4>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-bold text-green-600 mb-2">✓ 优点</h5>
                      <ul className="space-y-1">
                        {item.pros.map((pro, j) => (
                          <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-cyan-400">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-bold text-red-600 mb-2">✗ 缺点</h5>
                      <ul className="space-y-1">
                        {item.cons.map((con, j) => (
                          <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-red-500">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}