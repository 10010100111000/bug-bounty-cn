import {
  Code2,
  BookOpen,
  Target,
  Shield,
  Search,
  FileText,
  GraduationCap,
  CheckCircle2,
  Zap,
  Users,
  Globe,
  Terminal,
  BarChart3,
  TrendingUp,
  Award,
  Clock,
  AlertTriangle,
  Lock
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="text-slate-100">
      {/* ========== 1. 顶部英雄区（和原网站布局对齐） ========== */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* 左边：代码终端图（和原网站一致） */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-sm">
                {/* 终端顶部栏 */}
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 flex items-center gap-1.5 border-b border-white/20">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-[#9FEF00]"></div>
                  <span className="ml-2 text-xs text-slate-300">bugbounty-cn.com</span>
                </div>
                {/* 终端代码内容 */}
                <div className="bg-slate-900 p-5 text-sm font-mono text-[#9FEF00] leading-relaxed">
                  <div><span className="text-slate-400">$</span> subfinder -d target.com | httpx</div>
                  <div><span className="text-slate-400">$</span> ffuf -w wordlist.txt -u https://target.com/FUZZ</div>
                  <div><span className="text-slate-400">$</span> nuclei -l targets.txt -t cves/</div>
                  <div className="mt-2 text-slate-400"># 1500 Vulnerability found!</div>
                </div>
              </div>
              {/* 原网站的小标签 */}
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-[#9FEF00]/10 text-[#5a7a00]">
                  <Code2 className="w-3 h-3 mr-1" />
                  实战教程
                </div>
                <div className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-white/10 text-slate-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  100% 免费
                </div>
                <div className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-white/10 text-slate-300">
                  <Shield className="w-3 h-3 mr-1" />
                  14+ 漏洞详解
                </div>
                <div className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-white/10 text-slate-300">
                  <BookOpen className="w-3 h-3 mr-1" />
                  完整学习路线
                </div>
              </div>
            </div>

            {/* 右边：大标题+按钮 */}
            <div className="w-full md:w-1/2 text-center md:text-right order-1 md:order-2">
              <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-4">
                专为中文学习者打造的 Bug Bounty 指南
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                从零到专业<br />
                漏洞赏金完整指南
              </h1>
              <p className="text-slate-300 text-lg mb-8 max-w-lg md:ml-auto">
                专为中文用户打造的Bug Bounty全栈学习平台，从零基础入门到拿下第一笔赏金，你需要的一切都在这里
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                <a href="/roadmap" className="inline-flex items-center justify-center rounded-full bg-[#9FEF00] px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-[#8ed900] transition-colors">
                  立即开始学习
                </a>
                <a href="/vulnerabilities" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-3 text-sm font-medium hover:border-[#9FEF00] transition-colors">
                  查看漏洞库
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. 全内容一站式覆盖（原网站核心板块） ========== */}
      <section className="py-16 bg-white/10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">你需要的一切，都在这里</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">从基础理论到实战技巧，覆盖Bug Bounty全流程的核心知识</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Search className="w-5 h-5" />,
                title: "信息收集与侦察",
                desc: "子域名枚举、端口扫描、资产发现、指纹识别，掌握完整的侦察方法论"
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Web漏洞详解",
                desc: "XSS、SQL注入、IDOR、SSRF等14+常见漏洞的原理、检测方法和利用技巧"
              },
              {
                icon: <Terminal className="w-5 h-5" />,
                title: "工具使用大全",
                desc: "Burp Suite、ffuf、Nuclei等常用工具的安装、使用和实战技巧"
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "实战方法论",
                desc: "专业赏金猎人的测试流程、目标选择技巧、漏洞挖掘思路和避坑指南"
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: "漏洞报告撰写",
                desc: "专业的漏洞报告模板、撰写技巧，教你写出一次性通过的高赏金报告"
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "赏金平台指南",
                desc: "国内外主流赏金平台的注册、规则、避坑技巧，帮你选对平台拿赏金"
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl p-5 hover:border-[#9FEF00]/40 transition-colors">
                <div className="mb-3 text-[#9FEF00]">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. 核心漏洞类型全覆盖 ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">核心漏洞类型全覆盖</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">详细讲解Bug Bounty中最常见、赏金最高的各类安全漏洞</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "XSS 跨站脚本", level: "高风险" },
              { name: "SQL 注入", level: "严重风险" },
              { name: "IDOR 越权访问", level: "高风险" },
              { name: "SSRF 服务端请求伪造", level: "高风险" },
              { name: "CSRF 跨站请求伪造", level: "中风险" },
              { name: "RCE 远程代码执行", level: "严重风险" },
              { name: "文件上传漏洞", level: "高风险" },
              { name: "业务逻辑漏洞", level: "中高风险" }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl p-5 hover:border-[#9FEF00]/40 transition-colors">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <span className="text-xs text-slate-300">{item.level}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/vulnerabilities" className="inline-flex items-center justify-center rounded-full bg-[#9FEF00] px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-[#8ed900] transition-colors">
              查看完整漏洞库
            </a>
          </div>
        </div>
      </section>

      {/* ========== 4. 4步起步指南（和原网站时间线对齐） ========== */}
      <section className="py-16 bg-white/10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">4步起步指南</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">从零基础到获得第一个真实Bug Bounty赏金的清晰路径</p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "学习基础知识",
                duration: "2-3个月",
                content: [
                  "深入理解HTTP/HTTPS协议",
                  "学习Linux基础和命令行操作",
                  "掌握HTML、JavaScript基础",
                  "理解网络安全基本原理",
                  "学习OWASP Top 10核心漏洞"
                ]
              },
              {
                step: "02",
                title: "实验室实战训练",
                duration: "3-4个月",
                content: [
                  "PortSwigger Web安全学院靶场练习",
                  "TryHackMe零基础入门路径",
                  "HackTheBox进阶实战训练",
                  "OWASP WebGoat漏洞练习",
                  "PentesterLab真实场景复现"
                ]
              },
              {
                step: "03",
                title: "选择目标开始实战",
                duration: "1个月",
                content: [
                  "从免费的VDP漏洞披露项目开始",
                  "选择范围清晰、对新手友好的目标",
                  "先专注于一种你最熟悉的漏洞类型",
                  "阅读项目过往的公开报告，学习经验",
                  "熟练使用基础的侦察和测试工具"
                ]
              },
              {
                step: "04",
                title: "发现漏洞并提交报告",
                duration: "持续进行",
                content: [
                  "遵循专业的测试方法论，不盲目乱扫",
                  "用截图、录屏记录每一步操作",
                  "撰写清晰、详细、可复现的漏洞报告",
                  "准确描述漏洞的安全影响和风险",
                  "耐心跟进回复，保持专业的沟通"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl p-6 flex flex-col md:flex-row gap-6 hover:border-[#9FEF00]/30 transition-colors">
                <div className="md:w-64 flex-shrink-0">
                  <div className="text-[#9FEF00] font-bold text-sm mb-1">{item.step} | {item.duration}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <div className="flex-1">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {item.content.map((line, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#9FEF00] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. 分级学习路径（原网站对应板块） ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">选择你的学习路径</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">无论你是零基础新手，还是有经验的研究者，都有适合你的内容</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: "入门级",
                title: "零基础入门",
                desc: "完全没有网络安全基础？从这里开始，一步步学习基础理论、工具使用和简单漏洞原理",
                color: "border-green-200 bg-green-50/30"
              },
              {
                level: "进阶级",
                title: "实战能力提升",
                desc: "有基础但缺乏实战经验？这里教你专业的挖掘方法论、漏洞进阶利用技巧和实战避坑指南",
                color: "border-blue-200 bg-blue-50/30"
              },
              {
                level: "专业级",
                title: "赏金猎人进阶",
                desc: "已经拿到过赏金，想提升效率和收益？这里有高阶漏洞技巧、大规模侦察方法、报告优化技巧",
                color: "border-orange-200 bg-orange-50/30"
              }
            ].map((item, index) => (
              <div key={index} className={`rounded-lg border ${item.color} p-6`}>
                <div className="text-sm font-semibold mb-2 opacity-70">{item.level}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300 mb-6">{item.desc}</p>
                <a href="/roadmap" className="text-sm font-semibold hover:underline">
                  查看详细路径 →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. 行业核心数据（原网站统计板块） ========== */}
      <section className="py-16 bg-white/10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">漏洞赏金行业核心数据</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">来自全球主流赏金平台的真实数据参考</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                number: "$150 - $5000",
                desc: "新手平均单笔赏金范围",
                icon: <DollarSign className="w-5 h-5" />
              },
              {
                number: "3倍",
                desc: "中高危漏洞的赏金倍数差距",
                icon: <TrendingUp className="w-5 h-5" />
              },
              {
                number: "15-20小时",
                desc: "新手每周建议的学习时长",
                icon: <Clock className="w-5 h-5" />
              },
              {
                number: "80%",
                desc: "赏金来自中高危逻辑漏洞",
                icon: <BarChart3 className="w-5 h-5" />
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl p-5 text-center hover:border-[#9FEF00]/30 transition-colors">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9FEF00]/10 text-[#9FEF00] mb-3">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold mb-2">{item.number}</div>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. 漏洞赏金预期范围 ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">漏洞赏金预期范围</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">根据漏洞严重程度和项目规模，行业通用的平均赏金范围参考</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                level: "低危 (Low)",
                range: "$50 - $200",
                ratio: "约 15% 的报告",
                color: "border-slate-200"
              },
              {
                level: "中危 (Medium)",
                range: "$200 - $1,000",
                ratio: "约 35% 的报告",
                color: "border-yellow-200 bg-yellow-50/30"
              },
              {
                level: "高危 (High)",
                range: "$1,000 - $5,000",
                ratio: "约 35% 的报告",
                color: "border-orange-200 bg-orange-50/30"
              },
              {
                level: "严重 (Critical)",
                range: "$5,000 - $50,000+",
                ratio: "约 15% 的报告",
                color: "border-red-200 bg-red-50/30"
              }
            ].map((item, index) => (
              <div key={index} className={`rounded-lg border ${item.color} p-6 text-center hover:shadow-sm transition-shadow`}>
                <h3 className="font-semibold text-lg mb-2">{item.level}</h3>
                <div className="text-2xl font-bold mb-2">{item.range}</div>
                <p className="text-sm text-slate-300">{item.ratio}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-300 mt-8 max-w-3xl mx-auto text-sm">
            注：以上为行业平均水平，Google、Apple等大型厂商的严重漏洞赏金最高可达10万美元以上。
            赏金的核心决定因素是漏洞的实际影响、可利用性和厂商的赏金政策。
          </p>
        </div>
      </section>

      {/* ========== 8. 专业必备工具库 ========== */}
      <section className="py-16 bg-white/10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">漏洞赏金必备工具</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">专业赏金猎人日常使用的核心工具，从侦察到漏洞利用全覆盖</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Burp Suite",
                tag: "核心必备",
                desc: "Web应用渗透测试必备的代理工具，可拦截、修改、重放HTTP请求，是漏洞测试的核心工具"
              },
              {
                name: "ffuf",
                tag: "Fuzzing工具",
                desc: "高速Web Fuzzing工具，可用于目录爆破、参数爆破、子域名爆破，是赏金猎人最常用的Fuzz工具"
              },
              {
                name: "Nuclei",
                tag: "漏洞扫描器",
                desc: "基于模板的快速漏洞扫描器，内置数千个漏洞模板，可快速批量检测目标的已知漏洞"
              },
              {
                name: "Subfinder",
                tag: "侦察工具",
                desc: "高速子域名发现工具，通过多个公开数据源枚举目标的子域名，是信息收集阶段的核心工具"
              },
              {
                name: "httpx",
                tag: "HTTP探测工具",
                desc: "快速批量探测HTTP服务存活状态，可获取标题、状态码、技术栈等信息，适配大规模侦察"
              },
              {
                name: "Nmap",
                tag: "网络扫描器",
                desc: "全球最流行的端口和服务扫描器，可探测目标开放端口、运行的服务和版本，是侦察必备工具"
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl p-5 hover:border-[#9FEF00]/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-[#9FEF00]/10 text-[#5a7a00]">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/tools" className="inline-flex items-center justify-center rounded-full bg-[#9FEF00] px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-[#8ed900] transition-colors">
              查看完整工具库
            </a>
          </div>
        </div>
      </section>

      {/* ========== 9. 常见问题FAQ ========== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">常见问题</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">新手入门最常问的问题，一次性给你清晰的答案</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "我需要编程经验才能开始Bug Bounty吗？",
                a: "不需要成为专业程序员，但理解HTML、JavaScript和HTTP的基础知识非常重要。你可以在学习Bug Bounty的同时，同步学习这些必备的基础知识，不用提前花几个月专门学编程。"
              },
              {
                q: "我需要多长时间才能获得第一个赏金？",
                a: "这取决于你投入的努力和时间。很多学习者在3-6个月内获得了第一个赏金，也有部分人需要更长时间。持续学习、坚持实战、做好记录，是快速拿到第一笔赏金的关键。"
              },
              {
                q: "Bug Bounty合法且安全吗？",
                a: "是的，只要你严格在项目规定的范围内工作，完全遵循平台和项目的规则，Bug Bounty是100%合法的。HackerOne、Bugcrowd等主流平台，都会为合规测试的研究者提供法律保护。"
              },
              {
                q: "对于初学者，最容易上手的漏洞类型是什么？",
                a: "IDOR和XSS是最适合新手入门的漏洞。IDOR更多依赖逻辑思维而非复杂的技术技巧，容易理解和发现；XSS有成熟的检测工具和明确的学习路径，容易上手和验证。"
              },
              {
                q: "我需要买很贵的设备和服务才能开始吗？",
                a: "完全不需要。一台普通的电脑、免费的Kali Linux系统，加上大量免费的开源工具和靶场，就足够你完成从入门到实战的全部学习，不用花一分钱就能开始。"
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl p-6 hover:border-[#9FEF00]/30 transition-colors">
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. 结尾号召区 ========== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">开启你的漏洞赏金之旅</h2>
          <p className="text-slate-300 text-lg mb-8">
            从零开始，一步步学习，拿下属于你的第一笔漏洞赏金
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/roadmap" className="inline-flex items-center justify-center rounded-full bg-[#9FEF00] px-8 py-4 text-sm font-bold text-slate-100 hover:bg-[#8ed900] transition-colors">
              查看完整学习路线
            </a>
            <a href="/vulnerabilities" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-white/10 backdrop-blur-xl/10 transition-colors">
              学习漏洞知识
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// 补充用到的图标组件
function DollarSign(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
}