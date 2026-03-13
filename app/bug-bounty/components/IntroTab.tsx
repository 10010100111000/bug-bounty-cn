export default function IntroTab() {
  return (
    <div className="space-y-12">
      {/* 核心定义 */}
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">用最简单的话讲，什么是Bug Bounty？</h2>
          <p className="text-[#666] mb-4">
            Bug Bounty（漏洞赏金计划）是企业或机构推出的激励项目：鼓励全球的安全研究者，在其产品、网站、系统中发现安全漏洞，并以现金奖励的方式，回报给负责任地上报漏洞的研究者。
          </p>
          <p className="text-[#666] mb-4">
            企业不再被动等待黑客恶意利用漏洞，而是主动付费给**道德黑客（白帽黑客）**，让他们在漏洞被恶意利用之前，发现并负责任地上报漏洞。
          </p>
          <p className="text-[#666] mb-4">
            你可以把自己理解成一名「数字安全侦探」，受雇去寻找建筑里的安全漏洞——只不过这里的建筑是软件/网站，漏洞是黑客可以利用的安全弱点。
          </p>
          <div className="mt-6 p-4 rounded-lg bg-[#9FEF00]/5 border border-[#9FEF00]/20">
            <p className="font-medium">
              近年来，Bug Bounty行业迎来了爆发式增长。谷歌、微软、苹果、Meta等全球顶级科技公司，每年都会向安全研究者支付数百万美元的漏洞赏金。仅2023年，HackerOne平台自成立以来，就向全球研究者累计支付了超过3亿美元的赏金。
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden border border-[#e5e5e5] bg-white shadow-sm sticky top-24">
            <div className="bg-[#9FEF00]/10 px-6 py-4 border-b border-[#e5e5e5]">
              <h3 className="text-xl font-bold">Bug Bounty 完整运作流程</h3>
            </div>
            <div className="p-6 space-y-6">
              {[
                {
                  step: "1",
                  title: "企业发布漏洞赏金计划",
                  desc: "明确规定测试范围、规则、不同风险等级漏洞对应的赏金范围"
                },
                {
                  step: "2",
                  title: "安全研究者开展安全测试",
                  desc: "在计划规定的范围内，通过合规、合法的方式，使用各类工具和技术开展漏洞测试"
                },
                {
                  step: "3",
                  title: "提交漏洞报告",
                  desc: "通过平台向企业提交详细的漏洞报告，包含漏洞描述、复现步骤、PoC复现证明、安全影响分析"
                },
                {
                  step: "4",
                  title: "漏洞初审与验证（Triage）",
                  desc: "企业安全团队验证漏洞的真实性，评估漏洞的风险等级和业务影响"
                },
                {
                  step: "5",
                  title: "漏洞确认与修复",
                  desc: "企业确认漏洞有效性，启动漏洞修复流程，完成补丁开发与上线"
                },
                {
                  step: "6",
                  title: "发放赏金奖励",
                  desc: "根据漏洞的风险等级，向研究者发放对应的现金奖励，同时将研究者加入安全名人堂（Hall of Fame）"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9FEF00] text-[#111] font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-[#666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bug Bounty vs 渗透测试 完整对比表 */}
      <div className="rounded-lg border border-[#e5e5e5] bg-white overflow-hidden">
        <div className="bg-[#fafafa] px-6 py-4 border-b border-[#e5e5e5]">
          <h3 className="text-xl font-bold">Bug Bounty 与 渗透测试 的核心区别</h3>
          <p className="text-sm text-[#666] mt-1">理解两者的差异，帮你选择最适合自己的职业发展路径</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-[#fafafa] border-b border-[#e5e5e5]">
                <th className="text-left py-4 px-6 font-semibold w-1/6">对比维度</th>
                <th className="text-left py-4 px-6 font-semibold w-5/12">Bug Bounty（漏洞赏金）</th>
                <th className="text-left py-4 px-6 font-semibold w-5/12">Penetration Testing（渗透测试）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e5e5]">
              {[
                {
                  item: "核心目标",
                  bbp: "在规定的测试范围内发现漏洞，上报漏洞获得现金赏金",
                  pentest: "基于正式合同，对系统/网络做全面的安全评估"
                },
                {
                  item: "法律框架",
                  bbp: "面向所有人的公开项目，或仅限受邀者的私有项目，受项目规则和安全港条款保护",
                  pentest: "正式商业合同，包含NDA保密协议和明确的授权范围"
                },
                {
                  item: "报酬模式",
                  bbp: "按漏洞结算，每一个被确认的有效漏洞，获得对应的赏金奖励",
                  pentest: "固定项目费用或按小时收费，覆盖完整的测试服务"
                },
                {
                  item: "测试范围",
                  bbp: "严格限定在项目规定的范围内（域名、功能、应用等）",
                  pentest: "根据合同约定，范围通常会更广泛"
                },
                {
                  item: "时间限制",
                  bbp: "全年开放，你可以在任何时间开展测试",
                  pentest: "固定周期的项目，通常几天到几周不等"
                },
                {
                  item: "竞争情况",
                  bbp: "竞争激烈，全球数千名研究者同时测试同一个目标",
                  pentest: "无直接竞争，只有你或你的团队负责测试"
                },
                {
                  item: "报告要求",
                  bbp: "通过平台为每个漏洞单独提交报告",
                  pentest: "项目结束时提交一份完整的综合报告，覆盖所有发现的问题"
                },
                {
                  item: "核心能力要求",
                  bbp: "创新能力、跳出框架的思维，对特定漏洞类型的深度深耕",
                  pentest: "全面广泛的知识储备、系统化的测试方法论，通常需要行业认证"
                },
                {
                  item: "客户关系",
                  bbp: "无直接客户关系，全程通过平台沟通",
                  pentest: "和客户直接对接，定期沟通会议"
                }
              ].map((row, index) => (
                <tr key={index} className="hover:bg-[#fafafa]">
                  <td className="py-4 px-6 font-medium">{row.item}</td>
                  <td className="py-4 px-6 text-sm text-[#666]">{row.bbp}</td>
                  <td className="py-4 px-6 text-sm text-[#666]">{row.pentest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}