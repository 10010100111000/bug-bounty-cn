import { FileText, Target, Shield, ListChecks, Scale, AlertTriangle } from "lucide-react";

export default function LegalIncomeTab() {
  return (
    <div className="space-y-12">
      {/* 核心法律合规要点 */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">核心法律合规注意事项</h2>
        <p className="text-slate-400 mb-6 max-w-3xl">
          理解法律边界是保护自己的核心，确保你的安全研究始终在合法合规的框架内进行，避免法律风险和账号封禁
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "完整阅读项目规则与政策",
              desc: "在开始任何测试之前，必须完整阅读项目的Policy（规则政策）和Safe Harbor（安全港条款）。明确知道什么是允许的、什么是禁止的。很多项目会禁止测试特定功能，比如账号删除、影响真实用户数据的操作。",
              icon: <FileText className="w-5 h-5 text-cyan-400" />
            },
            {
              title: "绝对不要超出测试范围",
              desc: "必须严格遵守项目规定的测试范围（Scope）。哪怕你在范围外的目标发现了很有价值的漏洞，也绝对不要去测试。超出范围的测试属于未授权行为，可能会给你带来严重的法律问题。",
              icon: <Target className="w-5 h-5 text-cyan-400" />
            },
            {
              title: "不要窃取、修改用户数据",
              desc: "在证明IDOR、SQL注入等漏洞时，只需要用最小的操作证明漏洞存在即可。绝对不要下载完整的数据库，不要修改、泄露真实用户的数据，全程只使用你自己的测试账号进行测试。",
              icon: <Shield className="w-5 h-5 text-cyan-400" />
            },
            {
              title: "保留完整的操作记录",
              desc: "测试过程中完整记录你的每一步操作，保留好所有的截图、录屏、请求日志等所有证据。这不仅能在法律层面保护你，也能帮你写出更准确、完整的漏洞报告。",
              icon: <ListChecks className="w-5 h-5 text-cyan-400" />
            },
            {
              title: "了解你所在地区的法律",
              desc: "不同国家和地区的网络犯罪相关法律有很大差异，部分国家哪怕是对白帽黑客，也有严格的法律规定。必须确保你的行为，同时符合你所在地区、以及目标企业所在地区的法律要求。",
              icon: <Scale className="w-5 h-5 text-cyan-400" />
            },
            {
              title: "漏洞修复前绝对不要公开发布",
              desc: "在企业完成漏洞修复、并且明确授权你可以公开之前，绝对不要对外泄露漏洞的任何细节。提前披露不仅会给你带来法律风险，还会严重损害你在行业内的职业声誉。",
              icon: <AlertTriangle className="w-5 h-5 text-cyan-400" />
            }
          ].map((item, index) => (
            <div key={index} className="glass-panel p-6 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 分阶段收入预期 */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">收入预期与成长阶段</h2>
        <p className="text-slate-400 mb-6 max-w-3xl">
          收入水平会根据你的技术水平、深耕程度、投入时间有很大差异，以下是基于全球主流赏金平台数据的行业平均参考
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              level: "入门级",
              duration: "0-6个月",
              monthlyIncome: "$0 - $500 / 月",
              avgBounty: "单漏洞平均赏金 $50 - $300",
              commonVulns: ["XSS", "开放重定向", "信息泄露", "CSRF"],
              tips: "重点放在学习上，而不是赚钱。从简单的漏洞开始，循序渐进。核心目标是积累技能和行业声誉。",
              color: "border-blue-200 bg-blue-50/30"
            },
            {
              level: "中级",
              duration: "6个月 - 2年",
              monthlyIncome: "$500 - $3,000 / 月",
              avgBounty: "单漏洞平均赏金 $500 - $5,000",
              commonVulns: ["IDOR", "SQL注入", "认证绕过", "SSRF"],
              tips: "开始深耕某一类特定的漏洞，受邀进入私有赏金项目，开发自己的专属工具和自动化流程。",
              color: "border-green-200 bg-green-50/30"
            },
            {
              level: "高级",
              duration: "2-4年",
              monthlyIncome: "$3,000 - $15,000 / 月",
              avgBounty: "单漏洞平均赏金 $5,000 - $50,000",
              commonVulns: ["RCE远程代码执行", "账号接管", "业务逻辑漏洞", "权限提升"],
              tips: "聚焦于深度、复杂的高危漏洞，在平台上建立强大的个人声誉，参与线下实时黑客大赛。",
              color: "border-orange-200 bg-orange-50/30"
            },
            {
              level: "专家级",
              duration: "4年以上",
              monthlyIncome: "$15,000 - $100,000+ / 月",
              avgBounty: "单漏洞平均赏金 $10,000 - $500,000+",
              commonVulns: ["0day漏洞", "漏洞利用链", "基础设施接管", "供应链攻击"],
              tips: "你已经是行业内最顶尖的研究者之一，聚焦于顶级企业的高赏金项目、受邀私有项目。",
              color: "border-red-200 bg-red-50/30"
            }
          ].map((item, index) => (
            <div key={index} className={`rounded-lg border ${item.color} p-6 h-full flex flex-col`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{item.level}</h3>
                <span className="text-xs bg-slate-900/40 backdrop-blur-md px-2 py-0.5 rounded-full font-medium">{item.duration}</span>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-400 mb-1">预期月收入</p>
                <p className="font-bold text-lg">{item.monthlyIncome}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-400 mb-1">单漏洞平均赏金</p>
                <p className="font-medium">{item.avgBounty}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-400 mb-2">常见核心漏洞</p>
                <div className="flex flex-wrap gap-2">
                  {item.commonVulns.map((vuln, i) => (
                    <span key={i} className="text-xs bg-slate-900/40 backdrop-blur-md px-2 py-0.5 rounded-full">{vuln}</span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-white/50">
                <h4 className="text-sm font-semibold mb-2">核心建议</h4>
                <p className="text-sm text-slate-400">{item.tips}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 职业发展路径 */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">相关职业发展路径</h2>
        <p className="text-slate-400 mb-6 max-w-3xl">
          漏洞赏金积累的技能，可以延伸到网络安全行业的多个高薪职业方向，以下是主流的职业选择
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "独立漏洞赏金猎人",
              salary: "年收入 $1,000 - $100,000+",
              desc: "独立在漏洞赏金平台工作，通过发现漏洞获得赏金收入。需要极强的自律能力和扎实的技术能力。",
              skills: ["Web安全", "信息收集", "报告撰写", "自律能力"]
            },
            {
              title: "渗透测试工程师",
              salary: "年收入 $60,000 - $150,000",
              desc: "在安全公司或企业内部团队工作，为企业做系统化的渗透测试。全职工作，有稳定的薪资和福利。",
              skills: ["网络安全", "Web安全", "报告撰写", "沟通能力"]
            },
            {
              title: "应用安全工程师",
              salary: "年收入 $80,000 - $180,000",
              desc: "和开发团队合作，保障应用的安全性。包括代码审计、安全设计、开发安全培训等工作。",
              skills: ["代码审计", "安全开发生命周期", "DevSecOps", "编程能力"]
            },
            {
              title: "安全研究员",
              salary: "年收入 $70,000 - $200,000",
              desc: "研究新的漏洞和攻击技术，发布研究成果，在安全会议上演讲。可以在企业工作，也可以独立研究。",
              skills: ["漏洞研究", "漏洞利用开发", "写作能力", "创新能力"]
            },
            {
              title: "安全顾问",
              salary: "年收入 $90,000 - $200,000+",
              desc: "为企业和机构提供安全咨询服务，包括风险评估、安全政策制定、员工安全培训等。",
              skills: ["沟通能力", "风险评估", "政策编写", "培训能力"]
            },
            {
              title: "信息安全总监 (CISO)",
              salary: "年收入 $120,000 - $300,000+",
              desc: "在大型组织中领导网络安全团队，负责安全战略、预算、风险管理和合规。是安全行业的高管职位。",
              skills: ["领导力", "战略规划", "风险管理", "合规管理"]
            }
          ].map((item, index) => (
            <div key={index} className="glass-panel p-6 h-full">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm font-medium text-cyan-400 mb-3">{item.salary}</p>
              <p className="text-sm text-slate-400 mb-4">{item.desc}</p>
              <div className="mt-auto pt-4 border-t border-slate-700/50">
                <h4 className="text-xs font-semibold text-slate-400 mb-2">核心技能</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-slate-800/60 text-slate-400 px-2 py-0.5 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}