import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function ProgramsTab() {
  return (
    <div className="space-y-12">
      {/* 4类赏金计划详解 */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">漏洞赏金计划的四大类型</h2>
        <p className="text-slate-400 mb-6 max-w-3xl">
          了解不同类型的计划，选择最适合你的水平和目标的类型，新手建议从VDP开始积累经验
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Bug Bounty Program (BBP)",
              subtitle: "漏洞赏金计划",
              desc: "企业推出的正式赏金计划，为有效漏洞支付现金奖励。分为面向所有人的公开计划，和仅限受邀者的私有计划。",
              pros: [
                "真实的现金奖励，从几百美元到几十万美元不等",
                "通过安全港条款提供明确的法律保护",
                "建立行业公认的职业声誉",
                "有机会测试全球顶级企业的系统",
                "持续提升你的技术能力"
              ],
              cons: [
                "公开计划的竞争非常激烈",
                "收入无保障，可能花了很多天也拿不到赏金",
                "部分项目的响应和付款速度很慢",
                "重复漏洞（Duplicate）非常打击积极性"
              ],
              bestFor: "希望通过安全研究获得现金收入，拥有扎实技术能力的研究者",
              color: "border-blue-200"
            },
            {
              title: "Vulnerability Disclosure Program (VDP)",
              subtitle: "漏洞披露计划",
              desc: "企业推出的负责任漏洞披露通道，通常没有现金奖励，只会提供精神上的认可，部分会赠送周边礼品（Swag）。",
              pros: [
                "竞争远小于BBP赏金计划",
                "对新手非常友好，是积累实战经验和履历的绝佳机会",
                "可以在真实的企业系统上进行实战学习",
                "部分VDP后续会升级为正式的BBP赏金计划",
                "能为你的简历增加非常有价值的实战经历"
              ],
              cons: [
                "绝大多数情况没有现金奖励",
                "部分企业甚至不会给你任何回复",
                "部分公司不会认真对待你提交的漏洞报告"
              ],
              bestFor: "希望积累实战经验和行业声誉的新手，在进入付费赏金计划前先积累经验",
              color: "border-green-200"
            },
            {
              title: "Private Bug Bounty Program",
              subtitle: "私有漏洞赏金计划",
              desc: "仅限受邀者参与的私有赏金计划。平台会根据你的行业声誉、过往提交的漏洞成果，向你发出邀请。",
              pros: [
                "竞争小得多，只有有限数量的研究者能参与",
                "赏金通常比公开计划更高",
                "大部分是全新的、很少被人测试过的目标",
                "和企业安全团队的沟通更顺畅、响应更快",
                "发现漏洞的概率远高于公开计划"
              ],
              cons: [
                "需要你有良好的行业声誉才能获得邀请",
                "通常会有严格的NDA保密协议",
                "可参与的项目数量有限"
              ],
              bestFor: "已经在平台上建立了良好声誉的高级研究者",
              color: "border-purple-200"
            },
            {
              title: "Live Hacking Events",
              subtitle: "实时黑客大赛",
              desc: "线下/线上的实时黑客活动，会邀请顶尖的安全研究者，在短时间内（通常1-2天）对特定目标进行集中测试。",
              pros: [
                "赏金通常会翻倍，甚至3倍",
                "有机会和全球顶尖的安全研究者交流、结识",
                "通常会报销差旅和住宿费用",
                "独特、有激励性的实战体验",
                "可以接触到全新的、未被测试过的目标"
              ],
              cons: [
                "仅限顶尖研究者受邀参与",
                "现场压力大、竞争激烈",
                "可用于测试的时间非常有限"
              ],
              bestFor: "在平台上有出色成果、收到邀请的顶尖研究者",
              color: "border-orange-200"
            }
          ].map((item, index) => (
            <div key={index} className={`rounded-lg border ${item.color} bg-slate-900/40 backdrop-blur-md overflow-hidden`}>
              <div className="bg-slate-900/20 px-6 py-4 border-b border-slate-700/50">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.subtitle}</p>
              </div>
              <div className="p-6">
                <p className="text-slate-400 mb-4">{item.desc}</p>

                <div className="mb-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    优势
                  </h4>
                  <ul className="space-y-1 pl-6 text-sm text-slate-400 list-disc">
                    {item.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    挑战
                  </h4>
                  <ul className="space-y-1 pl-6 text-sm text-slate-400 list-disc">
                    {item.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <p className="text-sm font-medium">最适合：{item.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VDP vs BBP 完整对比表 */}
      <div className="glass-panel overflow-hidden">
        <div className="bg-slate-900/20 px-6 py-4 border-b border-slate-700/50">
          <h3 className="text-xl font-bold">VDP 与 BBP 详细对比</h3>
          <p className="text-sm text-slate-400 mt-1">新手最关心的两类计划，帮你清晰理解两者的核心差异，选择适合自己的起点</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-slate-900/40 backdrop-blur-md">
            <thead>
              <tr className="bg-slate-900/20 border-b border-slate-700/50">
                <th className="text-left py-4 px-6 font-semibold w-1/6">对比维度</th>
                <th className="text-left py-4 px-6 font-semibold w-5/12">VDP（漏洞披露计划）</th>
                <th className="text-left py-4 px-6 font-semibold w-5/12">BBP（漏洞赏金计划）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e5e5]">
              {[
                {
                  item: "现金奖励",
                  vdp: "无现金奖励",
                  bbp: "根据漏洞风险等级提供现金赏金"
                },
                {
                  item: "法律保护",
                  vdp: "保护有限，完全取决于企业的政策",
                  bbp: "有明确的安全港条款，法律保护完善"
                },
                {
                  item: "竞争程度",
                  vdp: "低，参与的研究者数量少",
                  bbp: "极高，全球数千名研究者同时参与"
                },
                {
                  item: "响应速度",
                  vdp: "通常很慢，可能需要几周甚至几个月",
                  bbp: "更快，通常几天到几周内会有响应"
                },
                {
                  item: "认可方式",
                  vdp: "精神认可，部分会提供安全名人堂展示",
                  bbp: "现金奖励+行业声誉+平台认可+名人堂展示"
                },
                {
                  item: "测试范围",
                  vdp: "通常范围很广，覆盖企业的所有产品",
                  bbp: "有严格、明确的限定测试范围"
                },
                {
                  item: "新手友好度",
                  vdp: "更友好，很多简单的漏洞还没被发现",
                  bbp: "难度高，大部分简单的漏洞已经被人发现了"
                },
                {
                  item: "职业收益",
                  vdp: "积累实战经验，丰富个人简历",
                  bbp: "现金收入+实战经验+行业声誉+职业机会"
                }
              ].map((row, index) => (
                <tr key={index} className="hover:bg-slate-900/20">
                  <td className="py-4 px-6 font-medium">{row.item}</td>
                  <td className="py-4 px-6 text-sm text-slate-400">{row.vdp}</td>
                  <td className="py-4 px-6 text-sm text-slate-400">{row.bbp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}