import { AlertTriangle } from "lucide-react";

export default function ScopeTab() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">项目范围分析专业指南</h2>
        <p className="text-[#666]">
          范围分析是你开始测试前的第一步，也是最关键的一步。错误的范围分析会导致你浪费大量时间、甚至面临法律风险和账号封禁。遵循以下6个步骤，完成专业的项目分析。
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {[
          {
            priority: "关键",
            step: "1",
            title: "先完整阅读项目规则政策",
            desc: "第一步必须完整阅读项目的完整政策。理解通用规则、限制条件、允许测试的目标。特别注意例外情况和特殊说明，很多项目会禁止使用特定的工具，或特定的测试技术。",
            color: "bg-red-50 border-red-200",
            priorityColor: "bg-red-500 text-white"
          },
          {
            priority: "高",
            step: "2",
            title: "明确核心测试目标",
            desc: "整理出所有允许测试的域名、应用、API清单，按类型（Web、移动端、API）分类。根据目标的年限、复杂度，判断哪些目标更有可能存在未被发现的漏洞。",
            color: "bg-orange-50 border-orange-200",
            priorityColor: "bg-orange-500 text-white"
          },
          {
            priority: "关键",
            step: "3",
            title: "明确禁止测试的范围",
            desc: "必须精准知道什么是绝对不能测试的。很多项目会有很长的禁止列表，无视这些规则可能会导致你被平台封禁。同时要注意，哪些类型的漏洞企业明确不接受、不会修复。",
            color: "bg-red-50 border-red-200",
            priorityColor: "bg-red-500 text-white"
          },
          {
            priority: "高",
            step: "4",
            title: "明确企业接受的漏洞类型",
            desc: "部分项目只接受特定类型的漏洞。比如，很多项目不接受Self-XSS，或老旧组件的低危漏洞。提前知道企业关注的漏洞类型，能帮你节省大量的时间，避免做无用功。",
            color: "bg-orange-50 border-orange-200",
            priorityColor: "bg-orange-500 text-white"
          },
          {
            priority: "中等",
            step: "5",
            title: "了解赏金规则与等级",
            desc: "理解企业的赏金计算规则：是基于风险等级的固定赏金表，还是根据漏洞影响评估赏金？不同漏洞等级对应的赏金范围是多少？这能帮你判断，应该把精力放在哪些漏洞上，才能获得最高的投入回报比。",
            color: "bg-blue-50 border-blue-200",
            priorityColor: "bg-blue-500 text-white"
          },
          {
            priority: "中等",
            step: "6",
            title: "调研项目的历史情况",
            desc: "阅读项目过往已经公开的漏洞报告。这能让你知道，企业通常接受什么类型的漏洞，对报告的细节要求是什么，哪些漏洞已经被大量发现了。从别人的成功和失败中学习经验。",
            color: "bg-blue-50 border-blue-200",
            priorityColor: "bg-blue-500 text-white"
          }
        ].map((item, index) => (
          <div key={index} className={`rounded-lg border ${item.color} p-6`}>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9FEF00] text-[#111] font-bold flex items-center justify-center">
                {item.step}
              </div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.priorityColor}`}>
                {item.priority}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-[#666]">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-lg bg-[#9FEF00]/5 border border-[#9FEF00]/20 max-w-4xl mx-auto">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-[#9FEF00]" />
          范围分析的核心原则
        </h3>
        <p className="text-[#666]">
          永远记住：<strong>不在范围内的目标，哪怕有再严重的漏洞，也绝对不要去测试</strong>。超出范围的测试不仅不会给你带来赏金，还会导致你被平台封禁，甚至面临法律诉讼。安全研究的第一准则，永远是合规和授权。
        </p>
      </div>
    </div>
  );
}