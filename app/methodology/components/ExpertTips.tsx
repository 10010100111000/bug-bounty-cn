// app/methodology/components/ExpertTips.tsx
export default function ExpertTips() {
  const tipCategories = [
    {
      title: "耐心与坚持",
      tips: [
        "不要期待立即的结果 — 这需要时间和练习",
        "第一个赏金可能在几周或几个月后才来 — 不要放弃",
        "每一份被拒绝的报告都是一次学习的机会",
        "Bug Bounty的成功需要与开发者不同的思维方式"
      ]
    },
    {
      title: "时间管理",
      tips: [
        "为Bug Bounty分配固定的时间",
        "不要在一个目标上花超过两天而没有任何结果",
        "记录所有事情以节省未来的时间",
        "使用自动化处理重复性任务"
      ]
    },
    {
      title: "建立声誉",
      tips: [
        "报告的质量比数量更重要",
        "在与安全团队打交道时保持专业",
        "分享你已公开报告的writeups",
        "参加会议和现场黑客活动"
      ]
    },
    {
      title: "持续成长",
      tips: [
        "每周学习一项新技术",
        "每天阅读已公开的报告",
        "参加CTFs以提高技能",
        "用Python或Go构建你自己的工具"
      ]
    }
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">专家建议</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tipCategories.map((category, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
            <h4 className="text-lg font-bold mb-4">{category.title}</h4>
            <ul className="space-y-2">
              {category.tips.map((tip, i) => (
                <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}