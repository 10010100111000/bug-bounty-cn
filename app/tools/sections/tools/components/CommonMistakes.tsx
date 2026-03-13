// app/tools/components/CommonMistakes.tsx
export default function CommonMistakes() {
  const mistakes = [
    {
      title: "完全依赖自动化",
      desc: "自动化工具找不到所有漏洞。高价值漏洞如IDOR和业务逻辑漏洞需要手动测试。"
    },
    {
      title: "不验证结果",
      desc: "不要直接基于工具的结果提交报告。在报告前手动验证每一个结果，避免报告被拒绝。"
    },
    {
      title: "忽略速率限制",
      desc: "不设速率限制发送数千个请求，可能会导致你被封禁，甚至被取消项目的参与资格。"
    },
    {
      title: "一次性安装所有工具",
      desc: "你不需要所有工具。先从5-6个基础工具开始，充分掌握它们，再根据需要添加工具。"
    },
    {
      title: "无视测试范围",
      desc: "测试范围外的目标可能会导致法律问题。仔细阅读规则，始终遵守范围限制。"
    },
    {
      title: "不整理结果",
      desc: "没有良好的组织，你会丢失重要的结果。使用清晰的文件夹结构，保存所有带日期的内容。"
    },
    {
      title: "忽略工具更新",
      desc: "旧工具意味着旧模板和不完整的结果。定期更新你的工具和模板。"
    },
    {
      title: "不使用API密钥",
      desc: "很多工具没有API密钥只能提供有限的结果。花时间设置免费的API密钥——差异非常大。"
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">必须避免的常见错误</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map((item, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
            <h4 className="text-lg font-bold mb-2 text-red-600">{item.title}</h4>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}