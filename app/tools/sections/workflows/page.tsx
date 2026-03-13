// app/tools/sections/workflows/page.tsx
export default function WorkflowsSection() {
  const workflows = [
    {
      title: "快速信息收集工作流",
      steps: [
        "运行 subfinder 收集子域名",
        "用 httpx 过滤存活主机",
        "用 katana 爬取所有链接",
        "用 gau + waybackurls 收集历史URL",
        "用 nuclei 做初步扫描"
      ],
      time: "30-60分钟"
    },
    {
      title: "深度漏洞挖掘工作流",
      steps: [
        "完整信息收集（多工具并行）",
        "参数发现与整理",
        "按漏洞类型分类测试（XSS/SQLi/SSRF）",
        "自动化扫描 + 手动验证",
        "权限越权与业务逻辑测试"
      ],
      time: "4-8小时"
    },
    {
      title: "API专项测试工作流",
      steps: [
        "API接口枚举与整理",
        "导入Postman建立集合",
        "认证与会话管理测试",
        "IDOR与权限越权测试",
        "注入漏洞与数据泄露测试"
      ],
      time: "3-6小时"
    }
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Workflows</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          标准化的测试工作流，帮助你系统化地进行测试，避免遗漏。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {workflows.map((workflow, idx) => (
          <div key={idx} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{workflow.title}</h3>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 text-xs font-medium rounded-full">
                {workflow.time}
              </span>
            </div>
            
            <ol className="space-y-3">
              {workflow.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-400 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}