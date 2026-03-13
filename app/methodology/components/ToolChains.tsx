// app/methodology/components/ToolChains.tsx
export default function ToolChains() {
  const toolChains = [
    {
      name: "完整信息收集工具链",
      tools: [
        { name: "Subfinder", desc: "子域名枚举" },
        { name: "httpx", desc: "存活主机检测" },
        { name: "nuclei", desc: "初步漏洞扫描" },
        { name: "katana", desc: "爬取与URL收集" },
        { name: "gau", desc: "历史URL收集" }
      ],
      flow: "subfinder → httpx → nuclei + katana + gau"
    },
    {
      name: "XSS测试工具链",
      tools: [
        { name: "ParamSpider", desc: "参数收集" },
        { name: "qsreplace", desc: "值替换" },
        { name: "Dalfox", desc: "自动化XSS测试" },
        { name: "Burp Suite", desc: "手动验证" }
      ],
      flow: "ParamSpider → qsreplace → Dalfox → Burp"
    },
    {
      name: "SQLi测试工具链",
      tools: [
        { name: "gau", desc: "收集带参数的URL" },
        { name: "gf", desc: "模式过滤" },
        { name: "sqlmap", desc: "自动化SQLi测试" },
        { name: "Burp Suite", desc: "手动测试" }
      ],
      flow: "gau → gf sqli → sqlmap → Burp"
    },
    {
      name: "SSRF测试工具链",
      tools: [
        { name: "ParamSpider", desc: "收集URL参数" },
        { name: "qsreplace", desc: "注入payload" },
        { name: "httpx", desc: "检查响应" },
        { name: "Burp Collaborator", desc: "发现盲SSRF" }
      ],
      flow: "ParamSpider → qsreplace → httpx → Collaborator"
    },
    {
      name: "API测试工具链",
      tools: [
        { name: "Kiterunner", desc: "接口发现" },
        { name: "Postman", desc: "请求管理" },
        { name: "Autorize", desc: "权限测试" },
        { name: "jwt_tool", desc: "JWT测试" }
      ],
      flow: "Kiterunner → Postman → Autorize + jwt_tool"
    },
    {
      name: "JavaScript分析工具链",
      tools: [
        { name: "getJS", desc: "收集JS文件" },
        { name: "LinkFinder", desc: "提取接口" },
        { name: "SecretFinder", desc: "发现密钥" },
        { name: "Retire.js", desc: "检查旧库" }
      ],
      flow: "getJS → LinkFinder + SecretFinder + Retire.js"
    }
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">推荐工具链</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          协同工作以获得最佳结果的工具组合。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {toolChains.map((chain, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
            <h4 className="text-lg font-bold mb-3">{chain.name}</h4>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {chain.tools.map((tool, i) => (
                  <div key={i} className="px-2 py-1 bg-slate-800/60 rounded text-xs">
                    <span className="font-bold">{tool.name}</span>
                    <span className="text-slate-400 ml-1">— {tool.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/30">
              <p className="text-sm font-mono">{chain.flow}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}