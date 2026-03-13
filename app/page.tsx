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
  Lock,
  ArrowRight,
  Database
} from "lucide-react";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="w-full relative overflow-x-hidden">

      {/* ========== 1. 英雄区 (Hero Section) ========== */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 flex flex-col items-center justify-center min-h-[90vh]">
        {/* 背景光效网格 */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] pointer-events-none"></div>

        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* 左侧文字区 */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              <Zap className="w-4 h-4 mr-2 text-violet-400" />
              全新升级的 Bug Bounty 实战指南
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              <span className="text-slate-100">从零到专业的</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                漏洞赏金猎人
              </span>
            </h1>

            <p className="text-slate-400 text-lg lg:text-xl mb-12 max-w-2xl leading-relaxed font-light">
              专为中文学习者打造的 Bug Bounty 全栈技术平台。深入解析核心漏洞原理，提供专业的实战挖掘方法论，带你拿下第一笔丰厚赏金。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link href="/roadmap" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-950 bg-cyan-400 rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] w-full sm:w-auto">
                <span className="relative z-10 flex items-center">
                  开启学习之旅 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <Link href="/vulnerabilities" className="inline-flex items-center justify-center px-8 py-4 font-bold text-slate-300 border border-slate-700 rounded-full bg-slate-900/50 backdrop-blur-md hover:text-white hover:border-violet-500/50 hover:bg-violet-900/20 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] w-full sm:w-auto">
                浏览漏洞图鉴
              </Link>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap gap-4 mt-12 opacity-80">
              <div className="flex items-center text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-cyan-400" /> 100% 开源免费
              </div>
              <div className="flex items-center text-sm font-medium text-slate-300">
                <Shield className="w-4 h-4 mr-1.5 text-cyan-400" /> 涵盖主流 Web 漏洞
              </div>
              <div className="flex items-center text-sm font-medium text-slate-300">
                <Code2 className="w-4 h-4 mr-1.5 text-cyan-400" /> 硬核实战导向
              </div>
            </div>
          </div>

          {/* 右侧终端代码区 */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 perspective-1000">
            {/* 发光底层托盘 */}
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>

            <div className="tech-code-block w-full shadow-2xl lg:transform lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">
              {/* 终端栏 */}
              <div className="tech-code-header flex justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-wider">hacker@bounty-cn:~</div>
              </div>

              {/* 终端内容 */}
              <div className="p-6 text-sm lg:text-base leading-relaxed h-[320px] flex flex-col justify-center overflow-y-auto">
                <div className="mb-2">
                  <span className="text-violet-400 font-bold">$</span> <span className="text-slate-300">subfinder -d target.com -all | httpx -sc -title</span>
                </div>
                <div className="text-slate-500 mb-4 font-mono text-xs">
                  [INF] Found 1420 subdomains for target.com<br/>
                  [INF] 200 OK - https://admin.target.com [Admin Dashboard]
                </div>

                <div className="mb-2">
                  <span className="text-violet-400 font-bold">$</span> <span className="text-slate-300">ffuf -w wordlist.txt -u https://api.target.com/v1/FUZZ -mc 200</span>
                </div>
                <div className="text-slate-500 mb-4 font-mono text-xs">
                  users                   [Status: 200, Size: 1042, Words: 24]<br/>
                  graphql                 [Status: 200, Size: 45, Words: 2]
                </div>

                <div className="mb-2">
                  <span className="text-violet-400 font-bold">$</span> <span className="text-slate-300">nuclei -u https://admin.target.com -t cves/ -c 50</span>
                </div>
                <div className="mt-4 border-l-2 border-cyan-500 pl-3">
                  <span className="text-cyan-400 font-bold animate-pulse">[CRITICAL]</span> <span className="text-rose-400 font-bold">CVE-2024-XXXXX [RCE Found!]</span>
                  <br/><span className="text-emerald-400 text-xs"># Bounty Expected: $15,000+</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========== 2. 核心知识库 (Feature Grid) ========== */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-16 lg:mb-20">
             <h2 className="text-3xl lg:text-4xl font-bold mb-4">掌握渗透测试<span className="text-gradient-primary">全景技能</span></h2>
             <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mb-6"></div>
             <p className="text-slate-400 text-lg max-w-2xl">体系化梳理Bug Bounty核心流程，从被动侦察到漏洞利用，填补你所有的技术盲区。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search className="w-8 h-8 text-cyan-400" />, title: "深入信息收集", desc: "资产发现、子域名枚举、指纹识别。没有挖不到的洞，只有扫不出的资产。掌握大范围 Recon 的艺术。" },
              { icon: <Database className="w-8 h-8 text-violet-400" />, title: "Web 漏洞图鉴", desc: "深挖 SQLi, XSS, SSRF, IDOR 等 15+ 种常见高危漏洞的底层原理与绕过技巧，拒绝纸上谈兵。" },
              { icon: <Terminal className="w-8 h-8 text-cyan-400" />, title: "武器库构建", desc: "熟练运用 Burp Suite, Nuclei, Ffuf 等神兵利器，打造属于你自己的自动化高并发扫描流水线。" },
              { icon: <Target className="w-8 h-8 text-violet-400" />, title: "实战方法论", desc: "分享顶尖白帽客的思维模型。如何突破 WAF？如何在别人挖过无数遍的目标中找到逻辑漏洞？" },
              { icon: <FileText className="w-8 h-8 text-cyan-400" />, title: "高赏金报告", desc: "写出让审核人员秒懂的精美 PoC。掌握 CVSS 评分规则，让你的有效漏洞报告实现收益最大化。" },
              { icon: <Globe className="w-8 h-8 text-violet-400" />, title: "平台避坑指南", desc: "HackerOne, Bugcrowd, Intigriti 深度解析。教你如何选择项目、与 Triage 沟通、规避 Duplicate。" }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 group">
                <div className="w-16 h-16 rounded-xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. 高危漏洞速览 (Vulnerabilities Preview) ========== */}
      <section className="py-24 lg:py-32 bg-slate-900/40 border-y border-slate-800/50 backdrop-blur-md relative z-10">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">核心漏洞 <span className="text-gradient-primary">重点突破</span></h2>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mb-6"></div>
                <p className="text-slate-400 text-lg">锁定赏金收益最高、最易出现的高危安全问题</p>
              </div>
              <Link href="/vulnerabilities" className="btn-tech-secondary whitespace-nowrap mt-4 lg:mt-0">
                浏览完整漏洞图鉴
              </Link>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Server-Side Request Forgery", abbr: "SSRF", level: "high", desc: "服务端请求伪造，云环境中的顶级杀手。" },
                { name: "Insecure Direct Object Reference", abbr: "IDOR", level: "high", desc: "越权访问，业务逻辑漏洞中最易获利的金矿。" },
                { name: "Remote Code Execution", abbr: "RCE", level: "critical", desc: "远程代码执行，直接接管服务器的核弹级漏洞。" },
                { name: "Cross-Site Scripting", abbr: "XSS", level: "medium", desc: "跨站脚本攻击，最常见的前端大杀器。" },
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 flex flex-col justify-between h-full border-t-4 border-t-transparent hover:border-t-cyan-400 transition-all">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-2xl font-black text-slate-200 tracking-tight">{item.abbr}</span>
                       <span className={`badge badge-${item.level}`}>{item.level === 'critical' ? '严重' : item.level === 'high' ? '高危' : '中危'}</span>
                    </div>
                    <h3 className="font-semibold text-slate-300 mb-3">{item.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center text-cyan-500 text-sm font-bold group cursor-pointer hover:text-cyan-300 pt-4">
                    查看详情 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ========== 4. 起步路径 (4-Step Guide - TimeLine Style) ========== */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="w-full max-w-[1024px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
             <h2 className="text-3xl lg:text-4xl font-bold mb-4">猎人养成 <span className="text-gradient-primary">四步走</span></h2>
             <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
             <p className="text-slate-400 text-lg">清晰的路线图，告别迷茫，拒绝从入门到放弃</p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:border-l-0">
            {/* 时间轴中间线 (仅桌面端) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2"></div>

            {[
              {
                step: "01",
                title: "夯实网络安全基石",
                duration: "Phase 1 / 1-2 个月",
                side: "left",
                content: "深入掌握 HTTP/HTTPS 协议细节，熟悉 Linux 基础命令。理解前端三剑客与后端运行机制，学习 OWASP Top 10 核心理念。"
              },
              {
                step: "02",
                title: "虚拟靶场实战演练",
                duration: "Phase 2 / 2-3 个月",
                side: "right",
                content: "通关 PortSwigger Web 安全学院，在 HackTheBox 和 TryHackMe 中锻炼思维。不要急于实战，先在安全环境中磨练你的工具链。"
              },
              {
                step: "03",
                title: "锁定 VDP 积累经验",
                duration: "Phase 3 / 持续进行",
                side: "left",
                content: "参与无赏金的漏洞披露项目 (VDP)。挑选范围明确、对新手友好的目标，专注于你最擅长的一两种漏洞类型进行深度挖掘。"
              },
              {
                step: "04",
                title: "进军高额 BBP 赢取赏金",
                duration: "Phase 4 / 终身修行",
                side: "right",
                content: "建立大规模自动化侦察系统，研究高级逻辑漏洞。撰写无可挑剔的专业级报告，成为受厂商信任的顶级安全研究员。"
              }
            ].map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center mb-16 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>

                {/* 时间轴节点球 */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.8)] border-4 border-slate-950 z-10 mt-6 md:mt-0"></div>

                {/* 内容卡片 */}
                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                   <div className="glass-panel p-6 lg:p-8 border-l-4 border-l-cyan-500 hover:border-l-violet-500 transition-colors">
                      <div className="flex flex-wrap items-baseline gap-2 lg:gap-4 mb-4">
                        <span className="text-3xl lg:text-4xl font-black text-cyan-300 drop-shadow-sm">{item.step}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-violet-400">{item.duration}</span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-200 mb-4">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm lg:text-base">{item.content}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/roadmap" className="btn-tech-primary shadow-xl">
              查看详细学习路线图
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 5. 行业数据与期望 ========== */}
      <section className="py-20 lg:py-24 bg-slate-950 border-y border-slate-800/80 relative z-10">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-slate-800/50">
              {[
                { number: "$100k+", label: "头部猎人年收入" },
                { number: "25%", label: "逻辑漏洞占比" },
                { number: "800+", label: "全球活跃 BBP 项目" },
                { number: "$500", label: "新手首单平均赏金" }
              ].map((item, i) => (
                <div key={i} className="text-center px-2 lg:px-4">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-3 drop-shadow-lg">
                    {item.number}
                  </div>
                  <div className="text-slate-400 text-xs lg:text-sm font-semibold tracking-wider uppercase">{item.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ========== 6. FAQ (科技感手风琴式布局) ========== */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="w-full max-w-[896px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold mb-4">常见问题 <span className="text-gradient-primary">解答</span></h2>
             <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "挖洞需要很强的编程能力吗？",
                a: "不需要成为全职开发，但必须“能看懂”。熟练掌握 HTTP 协议、HTML/JS 基础是最关键的。后期如果需要编写自动化脚本，掌握 Python 或 Go 会让你如虎添翼。"
              },
              {
                q: "实战挖洞是否会面临法律风险？",
                a: "完全合法，前提是：严格遵守目标项目（如 HackerOne 上）明确规定的测试范围 (Scope) 和规则。严禁进行破坏性测试（如 DDoS）、严禁拖库或查看敏感用户数据。"
              },
              {
                q: "初学者最容易拿到赏金的漏洞是什么？",
                a: "IDOR (越权访问) 和 业务逻辑漏洞。这类漏洞扫描器极难发现，完全依赖人工测试和对业务流的理解，竞争相对较小，且危害往往极高（高赏金）。"
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-slate-200 mb-4 flex items-start">
                  <span className="text-cyan-500 mr-3 mt-1">Q.</span> {item.q}
                </h3>
                <p className="text-slate-400 leading-relaxed text-base lg:text-lg pl-8 lg:pl-8">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. 底部 CTA ========== */}
      <section className="py-24 lg:py-32 relative z-10 text-center overflow-hidden">
         {/* 背景强光 */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

         <div className="w-full max-w-[768px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
               准备好获取你的<br/>
               <span className="text-gradient-primary">第一笔赏金</span> 了吗？
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 mb-12 font-light">
               不要停留在纸上谈兵，点击下方按钮，开始你真正的黑客实战旅程。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link href="/roadmap" className="btn-tech-primary text-base lg:text-lg px-8 py-4 lg:px-10 lg:py-5">
                 立刻开始学习
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
