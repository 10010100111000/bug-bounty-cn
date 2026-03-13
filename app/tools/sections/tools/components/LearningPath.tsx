// app/tools/components/LearningPath.tsx
export default function LearningPath() {
  const learningPath = [
    {
      level: "1",
      name: "基础入门",
      duration: "第1-2周",
      desc: "学习代理基础、子域名发现、内容发现",
      tools: ["Burp Suite Community", "Subfinder", "httpx", "ffuf"]
    },
    {
      level: "2",
      name: "能力拓展",
      duration: "第3-4周",
      desc: "添加自动化漏洞扫描、URL收集、服务发现",
      tools: ["Nuclei", "waybackurls", "gau", "Nmap"]
    },
    {
      level: "3",
      name: "专项精通",
      duration: "第5-6周",
      desc: "学习特定漏洞类型的专用工具",
      tools: ["Dalfox", "sqlmap", "katana", "ParamSpider"]
    },
    {
      level: "4",
      name: "自动化进阶",
      duration: "第7-8周",
      desc: "将工具组合成自动化工作流",
      tools: ["Bash Scripts", "Notify", "Amass", "SecretFinder"]
    },
    {
      level: "5",
      name: "高级精通",
      duration: "第9周+",
      desc: "高级工具、OSINT、构建自定义工具",
      tools: ["Shodan", "JWT_Tool", "SSRFmap", "GitDorker", "Custom Tools"]
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">推荐工具学习路径</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          循序渐进的学习计划，从基础到高级，避免一次性学习太多工具导致混乱。
        </p>
      </div>

      <div className="space-y-4">
        {learningPath.map((item) => (
          <div key={item.level} className="bg-white rounded-lg border border-[#e5e5e5] p-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#9FEF00] text-[#111] flex items-center justify-center font-bold">
                  {item.level}
                </div>
                <div>
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-sm text-[#666]">{item.duration}</p>
                </div>
              </div>
            </div>

            <p className="text-[#666] mb-3">{item.desc}</p>

            <div>
              <h5 className="text-xs font-bold text-[#666] mb-2">核心工具</h5>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-[#f5f5f5] rounded text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}