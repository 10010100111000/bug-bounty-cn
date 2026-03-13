// app/tools/components/ToolsTips.tsx
export default function ToolsTips() {
  const tips = [
    {
      title: "安全第一",
      content: "未经明确授权，不要在任何目标上使用任何工具。务必完整阅读Bug Bounty项目的规则后再开始。部分工具可能会给服务器带来过大负载——始终使用速率限制。"
    },
    {
      title: "构建你的工具链",
      content: "你不需要所有工具——先从基础工具开始（Burp + subfinder + httpx + nuclei + ffuf），然后根据需要添加工具。最重要的是在进入下一个工具之前，充分理解每一个工具。"
    },
    {
      title: "智能自动化",
      content: "信息收集自动化能节省大量时间。但不要只依赖自动化——最高价值的漏洞需要手动测试和创造性思维。要结合自动化和手动测试。"
    },
    {
      title: "学习Linux和Bash",
      content: "大多数Bug Bounty工具都运行在Linux上。学习Bash脚本基础和grep、awk、sed、sort、uniq等命令。这些技能对于连接工具和过滤结果至关重要。"
    },
    {
      title: "整理你的文件",
      content: "为每个目标创建清晰的文件夹结构。将每个工具的结果保存在带检查日期的单独文件中。这能帮助你跟踪变化，并随时间推移比较结果。"
    },
    {
      title: "使用VPN/VPS",
      content: "在VPS上运行工具，而不是你的本地设备。这能提供更高的速度、固定的IP地址，并保护你的私人网络。DigitalOcean、Linode等服务提供价格合理的VPS。"
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">工具使用核心建议</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-6">
            <h4 className="text-lg font-bold mb-3">{tip.title}</h4>
            <p className="text-[#666]">{tip.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}