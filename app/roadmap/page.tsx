import {
  BookOpen,
  Shield,
  Target,
  Award,
  CheckCircle2,
  Terminal,
  FileText,
  Search,
  Zap,
  Globe,
  AlertTriangle,
  Code2,
  Lock,
  Users,
  TrendingUp,
  Clock,
  BarChart3,
  PieChart,
  Calendar,
  ListChecks,
  Map,
  Flag,
  Wrench,
  Sun,
  BookMarked,
  Server,
  Briefcase,
  GraduationCap,
  UserCheck
} from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="bg-slate-900/20">
      {/* ========== 1. 页面顶部标题区（和原网站头部对齐） ========== */}
      <section className="py-16 md:py-20 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 text-xs font-medium mb-4">
            你的漏洞赏金之路
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bug Bounty 完整学习路线图
          </h1>
          <p className="text-slate-400 text-lg">
            一套体系化、分阶段的12步学习路线，带你从零基础入门，成长为专业的漏洞赏金猎人
          </p>
        </div>
      </section>

      {/* ========== 2. 12阶段总览（原网站核心概览） ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">12个阶段，走向专业</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              这是一套完整且灵活的学习路线，你无需完全学完一个阶段再进入下一个，部分阶段可以并行推进
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { phase: "阶段1", title: "技术基础", duration: "2-3个月", level: "入门" },
              { phase: "阶段2", title: "Web安全基础", duration: "3-4个月", level: "入门-中级" },
              { phase: "阶段3", title: "核心测试工具", duration: "2-3个月", level: "中级" },
              { phase: "阶段4", title: "实战靶场训练", duration: "3-4个月", level: "中级" },
              { phase: "阶段5", title: "专业漏洞报告撰写", duration: "1-2个月", level: "中级" },
              { phase: "阶段6", title: "真实Bug Bounty实战", duration: "持续进行", level: "中级-高级" },
              { phase: "阶段7", title: "高级信息收集", duration: "2-3个月", level: "高级" },
              { phase: "阶段8", title: "高级漏洞利用", duration: "3-6个月", level: "高级" },
              { phase: "阶段9", title: "垂直领域深耕", duration: "6个月以上", level: "高级" },
              { phase: "阶段10", title: "自动化与工具开发", duration: "持续进行", level: "高级" },
              { phase: "阶段11", title: "社区贡献与分享", duration: "持续进行", level: "中级-高级" },
              { phase: "阶段12", title: "专业深耕与职业发展", duration: "持续进行", level: "专家" },
            ].map((item, index) => (
              <div key={index} className="glass-panel p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-400">{item.phase}</span>
                  <span className="text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 px-2 py-0.5 rounded-full">{item.level}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">预计时长：{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. 时间分配指南（原网站核心板块） ========== */}
      <section className="py-16 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">学习与实战时间分配</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              建议的时间分配比例，帮你在测试和挖掘过程中，把精力放在最高效的环节
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { percent: "40%", title: "信息收集 (Recon)", desc: "最重要的环节，投入最多的时间", color: "bg-blue-50 border-blue-200" },
              { percent: "30%", title: "漏洞发现", desc: "对已发现的目标进行漏洞测试", color: "bg-purple-50 border-purple-200" },
              { percent: "15%", title: "报告撰写", desc: "专业、规范地记录和提交漏洞", color: "bg-orange-50 border-orange-200" },
              { percent: "10%", title: "持续学习", desc: "跟进最新的技术、工具和漏洞", color: "bg-green-50 border-green-200" },
              { percent: "5%", title: "社区交流", desc: "和同行交流，分享和学习经验", color: "bg-yellow-50 border-yellow-200" },
            ].map((item, index) => (
              <div key={index} className={`rounded-lg border ${item.color} p-5 text-center`}>
                <div className="text-3xl font-bold mb-2">{item.percent}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. 12个阶段详细内容（原网站核心主体，100%还原） ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">分阶段详细学习指南</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              每个阶段的学习目标、核心内容、推荐资源、实践项目和预期成果
            </p>
          </div>

          <div className="space-y-12">
            {/* 阶段1 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段1</span>
                  <h3 className="text-xl md:text-2xl font-bold">技术基础</h3>
                  <span className="text-sm text-slate-400 ml-auto">预计时长：2-3个月 | 难度：入门</span>
                </div>
                <p className="text-slate-400 mt-2">所有内容的核心基础，决定了你后续的上限</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>网络基础：TCP/IP、HTTP/HTTPS、DNS、OSI七层模型、常见端口与服务</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Linux系统：命令行操作、文件系统、权限管理、Shell脚本基础</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>编程基础：Python/JavaScript基础，重点是脚本编写能力</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Web应用原理：客户端-服务端架构、HTML/CSS/JavaScript、DOM</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>数据库基础：SQL基础、NoSQL基础</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>加密基础：哈希、编码、加密的区别与原理</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>浏览器工作原理与开发者工具使用</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• TryHackMe - Pre-Security Path</li>
                        <li>• CS50 计算机科学导论</li>
                        <li>• Coursera - Linux命令行基础</li>
                        <li>• freeCodeCamp - Web开发入门</li>
                        <li>• NetworkChuck - 网络基础教程</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                        推荐证书
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• CompTIA IT Fundamentals (ITF+)</li>
                        <li>• Google IT 支持专业证书</li>
                        <li>• Cisco 网络基础认证</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 不要急于求成，基础是最重要的阶段</li>
                        <li>• 学完立刻实践，不要只看不动手</li>
                        <li>• 建议把Linux作为主力系统，至少熟练使用虚拟机</li>
                        <li>• 多写小项目巩固编程知识</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 使用Apache/Nginx搭建本地Web服务器</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 编写Python端口扫描脚本</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 搭建带登录功能的简单Web页面</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 配置并自定义Linux虚拟机环境</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将完全理解Web应用和网络的工作原理，这是发现漏洞的必备基础。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段2 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段2</span>
                  <h3 className="text-xl md:text-2xl font-bold">Web安全基础</h3>
                  <span className="text-sm text-slate-400 ml-auto">预计时长：3-4个月 | 难度：入门-中级</span>
                </div>
                <p className="text-slate-400 mt-2">学习最常见的Web漏洞，掌握核心原理和检测方法</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>OWASP Top 10 详细讲解与实战</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>XSS跨站脚本：反射型、存储型、DOM型</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>SQL注入：联合查询、盲注、时间盲注、报错注入</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>IDOR不安全的直接对象引用、越权访问</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>CSRF跨站请求伪造</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>SSRF服务端请求伪造</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>认证与授权漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>HTTP请求/响应深度解析：头、方法、状态码</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>会话管理与Cookie安全</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>基础的WAF/过滤器绕过技巧</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• PortSwigger Web Security Academy（强烈推荐，完全免费）</li>
                        <li>• OWASP 测试指南 v4.2</li>
                        <li>• HackTheBox 入门路径</li>
                        <li>• OWASP Juice Shop</li>
                        <li>• 《Web Security for Developers》</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                        推荐证书
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• PortSwigger Web Security Academy 全徽章</li>
                        <li>• eLearnSecurity eWPT</li>
                        <li>• CompTIA Security+</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 优先学习PortSwigger Academy，最好的免费入门资源</li>
                        <li>• 为每种漏洞做好笔记，整理自己的速查表</li>
                        <li>• 理解漏洞的根本原因，而不只是死记利用方式</li>
                        <li>• 学会阅读应用源码，理解漏洞产生的逻辑</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 完成PortSwigger Academy所有基础实验室</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 整理自己的漏洞速查表</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 搭建OWASP Juice Shop，发现至少20个漏洞</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 自己开发一个带有漏洞的Web应用，用于练习</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将理解最常见的漏洞类型，掌握它们的发现和利用方法，这是漏洞赏金的核心能力。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段3 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段3</span>
                  <h3 className="text-xl md:text-2xl font-bold">核心测试工具</h3>
                  <span className="text-sm text-slate-400 ml-auto">预计时长：2-3个月 | 难度：中级</span>
                </div>
                <p className="text-slate-400 mt-2">精通专业赏金猎人日常使用的核心工具，提升测试效率</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Burp Suite 社区版/专业版：代理、重放、爆破、扫描等核心模块</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>nmap：网络、端口、服务扫描，高级用法与脚本</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>ffuf/dirsearch：高速目录/文件/参数爆破</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Nuclei：基于模板的漏洞扫描，自定义模板编写</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>子域名枚举：subfinder、amass、findomain</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>httpx：HTTP服务存活探测、指纹识别</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>SQLmap：自动化SQL注入检测与利用</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>cURL/HTTPie：HTTP请求手动调试</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Git/GitHub：工具与代码管理</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Docker：快速搭建测试环境</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Burp Suite 官方文档</li>
                        <li>• 《Nmap Network Scanning》</li>
                        <li>• Jason Haddix - The Bug Hunter's Methodology</li>
                        <li>• Nahamsec YouTube 方法论教程</li>
                        <li>• STÖK's Bug Bounty Toolkit</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                        推荐证书
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Burp Suite Certified Practitioner</li>
                        <li>• TCM Security - Practical Ethical Hacking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 先精通Burp Suite，这是你最核心的工具</li>
                        <li>• 学会编写自己的简单工具和脚本</li>
                        <li>• 建立自己的工具库，做好分类和管理</li>
                        <li>• 持续跟进工具的更新和新工具的发布</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 搭建多工具联动的自动化信息收集流程</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 编写Bash脚本自动化信息收集流程</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 编写自定义Nuclei模板</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 配置Burp Suite，安装常用插件，自定义设置</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将精通专业赏金猎人的核心工具链，能够搭建高效的测试工作流，大幅提升漏洞挖掘效率。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段4 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段4</span>
                  <h3 className="text-xl md:text-2xl font-bold">实战靶场训练</h3>
                  <span className="text-sm text-slate-400 ml-auto">预计时长：3-4个月 | 难度：中级</span>
                </div>
                <p className="text-slate-400 mt-2">在安全的靶场环境中反复练习，把理论转化为实战能力</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>完成PortSwigger Academy从入门到专家级的所有实验室</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>在TryHackMe和HackTheBox上持续进行靶场练习</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>搭建本地漏洞环境：DVWA、bWAPP、WebGoat</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>参加CTF夺旗比赛，锻炼实战思维</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>阅读公开的Bug Bounty报告和漏洞Writeup</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>在真实场景中练习Burp Suite的使用</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>建立自己的系统化测试方法论</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>学习如何记录发现、整理测试笔记</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>PentesterLab、Root-Me等平台的进阶练习</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• PortSwigger All Labs (Apprentice → Expert)</li>
                        <li>• DVWA - Damn Vulnerable Web App</li>
                        <li>• PentesterLab Pro</li>
                        <li>• Root-Me Challenges</li>
                        <li>• CTFtime.org 比赛信息</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                        推荐证书
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• HackTheBox Pro Labs 完成证书</li>
                        <li>• TryHackMe 学习路径完成证书</li>
                        <li>• eLearnSecurity eJPT</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 每天坚持练习，哪怕只有30分钟</li>
                        <li>• 每完成一个挑战，都要写详细的Writeup</li>
                        <li>• 不要立刻看答案，先自己尝试解决</li>
                        <li>• 和社区分享你的解决方案，获取反馈</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 完成PortSwigger Academy的100个实验室</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 在HackTheBox拿下10个Flags</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 编写5篇详细的漏洞Writeup</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 在本地搭建完整的测试靶场环境</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将获得真实的漏洞挖掘实战经验，在安全的环境中打磨技能，为进入真实的Bug Bounty实战做好准备。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段5 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段5</span>
                  <h3 className="text-xl md:text-2xl font-bold">专业漏洞报告撰写</h3>
                  <span className="text-sm text-slate-400 ml-auto">预计时长：1-2个月 | 难度：中级</span>
                </div>
                <p className="text-slate-400 mt-2">学会写出能被厂商接受、拿到高额赏金的专业漏洞报告</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>专业报告的完整结构：标题、摘要、复现步骤、影响分析</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>使用CVSS v3.1进行漏洞严重程度评估</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>清晰的复现步骤编写，让厂商能100%复现漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>漏洞证据收集：截图、录屏、PoC代码</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>有说服力的安全影响分析，让厂商理解漏洞的风险</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>报告撰写的常见错误和规避方法</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>和厂商安全团队的专业沟通技巧</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>报告被拒绝后的处理和申诉方法</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>高赏金报告的案例分析和技巧</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>专业的修复建议撰写</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• HackerOne Hacktivity - 公开漏洞报告</li>
                        <li>• Bugcrowd 漏洞严重等级分类</li>
                        <li>• CVSS v3.1 官方计算器</li>
                        <li>• 渗透测试报告模板</li>
                        <li>• 《Writing Good Bug Reports》</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 写报告时，假设读者完全不了解这个漏洞</li>
                        <li>• 内容要精准、简洁，同时信息完整</li>
                        <li>• 一定要带上PoC，视频比图片更有说服力</li>
                        <li>• 提交前一定要反复检查，确保步骤完整可复现</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 为模拟漏洞编写5篇训练报告</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 阅读HackerOne上的20篇公开报告</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 建立自己的报告模板</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 练习为不同类型的漏洞计算CVSS评分</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将掌握专业的漏洞报告撰写能力，大幅提升报告的通过率和赏金金额，好的报告能让你的赏金翻倍。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段6 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段6</span>
                  <h3 className="text-xl md:text-2xl font-bold">真实Bug Bounty实战</h3>
                  <span className="text-sm text-slate-400 ml-auto">持续进行 | 难度：中级-高级</span>
                </div>
                <p className="text-slate-400 mt-2">正式进入真实平台，开始你的漏洞赏金实战之旅</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>主流赏金平台注册与使用：HackerOne、Bugcrowd、Intigriti</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>新手友好的项目选择，先从VDP漏洞披露项目开始</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>仔细阅读每个项目的政策和测试范围，避免踩坑</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>搭建自己的信息收集工作流，系统化梳理目标资产</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>初期专注于你最熟悉的一种漏洞类型，提升成功率</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>每天阅读成功案例和公开报告，学习最新的挖掘思路</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>和其他研究者建立职业联系，交流经验</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>正确面对报告被拒绝和挫败感，保持积极的心态</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>跟踪和记录你的所有发现和结果，建立自己的知识库</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• HackerOne Hacktivity</li>
                        <li>• Bugcrowd University</li>
                        <li>• Intigriti Blog</li>
                        <li>• 《Bug Bounty Bootcamp》</li>
                        <li>• 《Web Application Hacker's Handbook》</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-cyan-400" />
                        里程碑目标
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• HackerOne 感谢徽章</li>
                        <li>• Bugcrowd MVP</li>
                        <li>• 第一份被接受的报告</li>
                        <li>• 第一笔赏金</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 先从VDP项目开始，积累经验，不要一开始就盯着高额赏金</li>
                        <li>• 前几周没有成果是完全正常的，不要灰心</li>
                        <li>• 初期专注于一个项目，把它吃透，不要频繁换目标</li>
                        <li>• 在Twitter上关注优秀的赏金猎人，学习他们的思路</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 在5个不同的Bug Bounty平台完成注册</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 对单个目标完成完整的信息收集</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 提交你的第一份漏洞报告（哪怕是低危）</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 建立本地的目标资产数据库</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将正式开启真实的Bug Bounty之旅，提交你的第一份报告，拿到你的第一笔赏金，从学习者转变为实战者。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段7-12 我会继续完整还原，这里先放核心的，后面的阶段也完全对齐原网站 */}
            {/* 阶段7 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段7</span>
                  <h3 className="text-xl md:text-2xl font-bold">高级信息收集 (Advanced Recon)</h3>
                  <span className="text-sm text-slate-400 ml-auto">预计时长：2-3个月 | 难度：高级</span>
                </div>
                <p className="text-slate-400 mt-2">掌握专业赏金猎人的高级侦察技巧，发现别人找不到的资产和漏洞</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Search className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>高级子域名枚举：主动+被动全链路收集</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>高级端口扫描与隐藏服务发现</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>高级内容发现与目录暴力破解</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>JavaScript分析与隐藏端点发现</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>GitHub Dorking与泄露的密钥/敏感信息发现</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>高级Google Dorking，发现敏感信息和未公开页面</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Shodan/Censys/Fofa，发现公网暴露的资产和服务</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>DNS侦察与域传送漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>OSINT开源情报收集，针对目标的全维度信息挖掘</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>ASN/CIDR枚举，发现目标的完整基础设施</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Wayback Machine，发现历史端点和废弃功能</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>证书透明度日志，发现隐藏的子域名</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Jason Haddix - The Bug Hunter's Methodology</li>
                        <li>• Nahamsec Recon Methodology</li>
                        <li>• OSINT Framework</li>
                        <li>• Google Hacking Database (GHDB)</li>
                        <li>• Shodan 官方文档</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 好的侦察决定了80%的漏洞发现，这是专业猎人的核心竞争力</li>
                        <li>• 尽可能自动化你的侦察流程，节省时间</li>
                        <li>• 用结构化的方式保存你的侦察结果，方便后续分析</li>
                        <li>• 持续监控目标资产的变化，及时发现新的测试目标</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 搭建一套完整的自动化信息收集流水线</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 编写Python脚本自动化子域名枚举</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 搭建目标资产变更的通知系统</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 建立结构化的侦察结果数据库</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将掌握专业级的信息收集技巧，能发现其他猎人看不到的资产和攻击面，大幅提升漏洞发现的概率和效率。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段8 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段8</span>
                  <h3 className="text-xl md:text-2xl font-bold">高级漏洞利用</h3>
                  <span className="text-sm text-slate-400 ml-auto">预计时长：3-6个月 | 难度：高级</span>
                </div>
                <p className="text-slate-400 mt-2">深入学习复杂、罕见的高价值漏洞，拿到更高的赏金，和其他猎人拉开差距</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>服务端模板注入 (SSTI)</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>XML外部实体注入 (XXE)</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>多语言环境下的不安全反序列化漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>HTTP请求走私</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>竞争条件 (Race Conditions) 漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>OAuth与OpenID Connect认证漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>JWT攻击：算法混淆、密钥注入等</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>WebSocket安全漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>GraphQL安全问题</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>JavaScript原型污染</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>CRLF注入与HTTP响应拆分</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>缓存投毒 (Web Cache Deception)</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>高级业务逻辑漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>二阶漏洞 (Second-Order Vulnerabilities)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• PortSwigger Advanced Labs</li>
                        <li>• Pentester Academy</li>
                        <li>• 《Real World Bug Hunting》</li>
                        <li>• HackerOne 公开报告库</li>
                        <li>• 新型攻击技术的研究论文</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                        推荐证书
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Offensive Security OSWE</li>
                        <li>• eLearnSecurity eWPTX</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 先专注于一种漏洞，完全精通后再进入下一个</li>
                        <li>• 多阅读相关的公开报告，学习真实场景下的利用技巧</li>
                        <li>• 尝试理解漏洞背后的源码逻辑，而不只是死记利用方式</li>
                        <li>• 在同一个目标上尝试多种不同的攻击技术</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 完成PortSwigger上所有高级实验室</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 为你发现的复杂漏洞编写详细的Writeup</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 开发针对特定漏洞的自动化检测工具</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 整理高级漏洞的完整速查表</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将能够发现和利用罕见的、高风险的漏洞，这些漏洞能带来更高的赏金，也能让你在众多赏金猎人中脱颖而出。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段9-12 继续完整还原 */}
            {/* 阶段9 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段9</span>
                  <h3 className="text-xl md:text-2xl font-bold">垂直领域深耕</h3>
                  <span className="text-sm text-slate-400 ml-auto">预计时长：6个月以上 | 难度：高级</span>
                </div>
                <p className="text-slate-400 mt-2">选择一个细分领域深入研究，建立你的核心竞争力，打开更多职业机会</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "移动应用安全",
                      desc: "Android和iOS应用的安全测试，移动端漏洞挖掘",
                      content: [
                        "Android应用逆向与安全测试",
                        "iOS应用安全测试",
                        "移动端API安全",
                        "移动应用本地存储漏洞",
                        "移动端深度链接与组件安全"
                      ]
                    },
                    {
                      title: "API安全测试",
                      desc: "REST、GraphQL、gRPC等API的安全测试，现在最热门的方向",
                      content: [
                        "REST API安全测试",
                        "GraphQL安全漏洞与利用",
                        "gRPC安全测试",
                        "API认证与授权漏洞",
                        "API速率限制与业务逻辑漏洞"
                      ]
                    },
                    {
                      title: "云安全",
                      desc: "AWS、Azure、GCP等云平台的安全测试，未来的核心方向",
                      content: [
                        "AWS云服务安全测试",
                        "Azure/GCP安全配置审计",
                        "云服务权限配置错误",
                        "S3存储桶漏洞",
                        "Serverless应用安全"
                      ]
                    },
                    {
                      title: "智能合约安全",
                      desc: "区块链/Web3的智能合约安全审计，高收益方向",
                      content: [
                        "Solidity智能合约安全",
                        "常见智能合约漏洞类型",
                        "智能合约审计方法",
                        "DeFi协议安全测试",
                        "区块链相关的Web安全"
                      ]
                    },
                    {
                      title: "IoT安全测试",
                      desc: "物联网设备的安全测试，硬件+软件结合的方向",
                      content: [
                        "IoT设备固件分析",
                        "嵌入式系统安全",
                        "物联网通信协议安全",
                        "硬件调试与逆向",
                        "智能家居设备漏洞挖掘"
                      ]
                    },
                    {
                      title: "内网渗透",
                      desc: "Active Directory安全、内网渗透测试，职业渗透测试必备",
                      content: [
                        "Windows内网渗透",
                        "Active Directory安全漏洞",
                        "内网横向移动技巧",
                        "权限提升与持久化",
                        "红队攻防方法论"
                      ]
                    }
                  ].map((item, index) => (
                    <div key={index} className="glass-panel p-5">
                      <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-400 mb-4">{item.desc}</p>
                      <ul className="space-y-2">
                        {item.content.map((line, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-400">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  <p className="text-sm font-medium">提示：移动应用和API安全是目前市场需求最高的方向，云安全是未来的趋势，选择你感兴趣的方向深耕，会让你在行业里更有竞争力。</p>
                </div>
              </div>
            </div>

            {/* 阶段10 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段10</span>
                  <h3 className="text-xl md:text-2xl font-bold">自动化与工具开发</h3>
                  <span className="text-sm text-slate-400 ml-auto">持续进行 | 难度：高级</span>
                </div>
                <p className="text-slate-400 mt-2">开发自己的工具和自动化流程，大幅提升你的效率，拉开和普通猎人的差距</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-cyan-400" />
                      核心学习内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>编写Bash脚本，自动化信息收集流程</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>用Python开发定制化的安全测试工具</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>用Java/Python开发Burp Suite扩展插件</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>编写自定义的Nuclei漏洞检测模板</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>自动化持续扫描系统搭建</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>目标资产变更的通知系统开发</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>利用赏金平台API，自动化管理你的报告</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>开发自定义的漏洞数据看板，跟踪你的成果</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>制作定制化的字典/Wordlist</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>用GitHub Actions自动化执行任务</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐学习资源
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 《Black Hat Python》</li>
                        <li>• 《Violent Python》</li>
                        <li>• 《Automate the Boring Stuff with Python》</li>
                        <li>• Burp Extender API 官方文档</li>
                        <li>• GitHub 开源安全工具合集</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 先从简单的脚本开始，逐步迭代完善</li>
                        <li>• 把你的工具开源到GitHub，建立你的行业声誉</li>
                        <li>• 学习优秀的开源工具，借鉴它们的设计思路</li>
                        <li>• 自动化能帮你节省大量时间，让你专注于复杂的漏洞挖掘</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 开发一套属于你的完整信息收集工具</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 编写5个自定义的Nuclei检测模板</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 开发一个Burp扩展，解决你测试中的痛点</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 搭建目标持续监控与通知系统</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将大幅提升自己的工作效率，用自动化完成重复的工作，专注于更有价值的漏洞挖掘，同时通过开源工具建立自己的行业声誉。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段11 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段11</span>
                  <h3 className="text-xl md:text-2xl font-bold">社区贡献与分享</h3>
                  <span className="text-sm text-slate-400 ml-auto">持续进行 | 难度：中级-高级</span>
                </div>
                <p className="text-slate-400 mt-2">分享你的知识，帮助新人，建立自己的个人品牌和行业人脉</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-cyan-400" />
                      核心学习与实践内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>撰写技术文章和博客，分享你的学习和实战经验</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>发布漏洞Writeup（在厂商修复后），分享你的挖掘思路</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>在安全会议上做演讲，分享你的研究成果</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>为新人提供指导和答疑，帮助更多人进入这个领域</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>为开源安全项目贡献代码，修复bug，添加新功能</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>举办工作坊和培训课程，系统化分享知识</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>参与CTF比赛的出题和组织工作</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>发布安全研究成果和白皮书</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>在社交媒体建立个人品牌，分享行业动态和学习心得</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        推荐平台
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Medium / Dev.to 技术文章发布</li>
                        <li>• 安全会议演讲资源</li>
                        <li>• 开源安全项目 GitHub</li>
                        <li>• 安全社区 Discord 群组</li>
                        <li>• Twitter/X 安全社区</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 先从简单的短文开始，逐步提升写作能力和内容深度</li>
                        <li>• 社区分享会给你带来意想不到的职业机会</li>
                        <li>• 帮助别人的过程中，你自己也会对知识有更深的理解</li>
                        <li>• 建立个人品牌在这个行业非常重要，会给你带来更多的机会</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    实践项目
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 在你的博客上发布10篇技术文章</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 为3位新人提供入门指导</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 在行业会议或线上活动做一次技术分享</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 为3个开源安全项目提交贡献</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将在安全社区建立起自己的个人品牌和声誉，拓展你的职业人脉，获得更多的工作和合作机会，同时帮助行业培养更多的新人。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 阶段12 */}
            <div className="glass-panel overflow-hidden">
              <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100 px-3 py-1 rounded-full">阶段12</span>
                  <h3 className="text-xl md:text-2xl font-bold">专业深耕与职业发展</h3>
                  <span className="text-sm text-slate-400 ml-auto">持续进行 | 难度：专家级</span>
                </div>
                <p className="text-slate-400 mt-2">走向专业，规划你的长期职业路径，成为行业内的专家</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      核心学习与发展内容
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>在1-2个细分领域进行深度深耕，成为该领域的专家</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>跟进最新的CVE漏洞，第一时间进行分析和复现</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>独立安全研究，发现0day漏洞</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>考取行业内的高级认证，提升你的专业背书</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>建立专业的个人作品集，展示你的能力和成果</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>和大型科技公司建立直接的安全合作关系</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>进入高赏金的私有漏洞赏金项目</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>学习漏洞赏金的谈判技巧，提升你的赏金收益</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>组建自己的渗透测试团队，承接更大的项目</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>探索安全咨询、安全培训等职业机会</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>创办自己的网络安全公司</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>关注新兴领域的安全问题，比如AI安全、量子计算安全</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                        高级认证推荐
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• OSCP (Offensive Security Certified Professional)</li>
                        <li>• OSWE (Offensive Security Web Expert)</li>
                        <li>• GXPN (GIAC Exploit Researcher)</li>
                        <li>• CREST CRT/CCT</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-cyan-400" />
                        职业发展路径
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 全职漏洞赏金猎人</li>
                        <li>• 渗透测试工程师/红队工程师</li>
                        <li>• 应用安全工程师</li>
                        <li>• 安全研究员</li>
                        <li>• 安全顾问</li>
                        <li>• 信息安全总监（CISO）</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-cyan-400" />
                        重要提示
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 永远不要停止学习，安全行业的技术更新非常快</li>
                        <li>• 建立专业的人脉关系在这个阶段非常重要</li>
                        <li>• 关注新兴的技术和安全方向，提前布局</li>
                        <li>• 分享你的经验，帮助培养行业的新人</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Flag className="w-5 h-5 text-cyan-400" />
                    里程碑目标
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">1. 发现并上报一个新的CVE漏洞</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">2. 在国际安全会议上发表演讲</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">3. 发布安全研究论文或白皮书</span>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 p-3">
                      <span className="text-sm font-medium">4. 搭建一套面向新人的培训课程</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm font-medium">预期成果：你将成为一名专业的网络安全专家，不仅能通过漏洞赏金获得丰厚的收入，还能拥有多元化的职业发展机会，在行业内建立起自己的影响力和声誉。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5. 常见错误与避坑指南（原网站板块） ========== */}
      <section className="py-16 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">常见错误与避坑指南</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              学习前人的教训，少走弯路，节省你的时间和精力
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: "急于求成，跳过基础直接学高级内容",
                solution: "在每个阶段花足够的时间，确保完全理解基础内容，再进入下一个阶段。基础决定了你的上限。"
              },
              {
                mistake: "只学工具使用，不理解漏洞原理",
                solution: "理解漏洞背后的根本原因，而不只是死记利用步骤。工具会变，但核心原理是不变的。"
              },
              {
                mistake: "不做笔记，不整理自己的知识库",
                solution: "用Notion、Obsidian等工具，记录你学到的所有内容，建立自己的知识库和速查表。"
              },
              {
                mistake: "和别人攀比进度，产生挫败感",
                solution: "每个人都有自己的学习节奏，专注于你自己的进步，和过去的自己对比，而不是和别人比。"
              },
              {
                mistake: "只看教程不实践，眼高手低",
                solution: "学完任何内容都立刻动手实践，哪怕是在简单的靶场里。实战是掌握技能的唯一方法。"
              },
              {
                mistake: "没有系统化的方法论，盲目测试",
                solution: "建立自己的系统化测试流程，每次测试都遵循固定的方法论，并且随着经验不断优化。"
              },
              {
                mistake: "忽视报告撰写能力的培养",
                solution: "一份优秀的报告能让你的赏金翻倍。提前练习报告撰写，建立自己的专业模板。"
              },
              {
                mistake: "闭门造车，不和社区交流",
                solution: "加入安全社区，和同行交流学习，分享经验。集体学习的速度远快于独自摸索。"
              }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{item.mistake}</span>
                </h3>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-400">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. 主流方法论对比（原网站板块） ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">主流测试方法论对比</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              选择适合你的方法论，或者融合多种方法的优势，建立自己的测试流程
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "OWASP 测试指南",
                desc: "全面的Web应用安全测试指南，覆盖了测试的各个方面，包含90+项分类测试。",
                pros: ["内容极其全面、详细", "完全免费、开源", "全球行业公认", "持续更新"],
                cons: ["对新手来说内容太多，容易 overwhelm", "仅聚焦于Web应用"],
                bestFor: "系统化、全面的Web应用安全测试"
              },
              {
                name: "PTES 渗透测试执行标准",
                desc: "覆盖渗透测试全流程的通用标准，从前期规划到最终报告，提供了完整的专业渗透测试框架。",
                pros: ["覆盖全流程", "适合专业渗透测试", "行业内广泛认可"],
                cons: ["更新频率不高", "对于Bug Bounty来说过于复杂", "偏正式的企业渗透测试"],
                bestFor: "全面的企业渗透测试、安全咨询项目"
              },
              {
                name: "Bug Hunter's Methodology (Jason Haddix)",
                desc: "专门为漏洞赏金猎人设计的实战方法论，聚焦于自动化、高效的信息收集和漏洞发现，专为Bug Bounty平台优化。",
                pros: ["专为Bug Bounty设计", "实战性强，持续更新", "聚焦自动化和效率"],
                cons: ["不是正式的行业标准", "需要根据目标调整"],
                bestFor: "漏洞赏金平台的实战挖掘，大规模目标测试"
              }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>

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
                    不足
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
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. 每周学习计划（原网站板块） ========== */}
      <section className="py-16 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">推荐每周学习计划</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              平衡学习与实战的每周时间安排，你可以根据自己的时间灵活调整
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                day: "周六",
                focus: "信息收集 (Recon)",
                duration: "3-4小时",
                content: [
                  "更新目标列表与子域名",
                  "用信息收集工具扫描新目标",
                  "分析目标基础设施的变化",
                  "整理和分类之前的侦察结果"
                ]
              },
              {
                day: "周日",
                focus: "漏洞测试",
                duration: "3-4小时",
                content: [
                  "对周六发现的目标进行漏洞测试",
                  "聚焦于一种你正在练习的漏洞类型",
                  "用Burp Suite分析请求和响应",
                  "系统地记录测试结果和笔记"
                ]
              },
              {
                day: "周一",
                focus: "理论学习",
                duration: "2-3小时",
                content: [
                  "阅读新的安全文章和研究",
                  "观看教学视频和讲座",
                  "从公开报告中学习新的挖掘思路",
                  "更新你的笔记和知识库"
                ]
              },
              {
                day: "周二",
                focus: "靶场实战训练",
                duration: "3-4小时",
                content: [
                  "完成PortSwigger/HackTheBox的实验室",
                  "在安全的环境中练习新技术",
                  "把周一学到的内容付诸实践",
                  "参加CTF比赛挑战"
                ]
              },
              {
                day: "周三",
                focus: "报告与工具开发",
                duration: "2-3小时",
                content: [
                  "撰写发现的漏洞的报告",
                  "优化和完善之前的报告",
                  "开发和优化个人工具/脚本",
                  "更新Nuclei模板和Burp扩展"
                ]
              },
              {
                day: "周四",
                focus: "社区交流",
                duration: "1-2小时",
                content: [
                  "参与安全社区的讨论",
                  "阅读和讨论公开的漏洞报告",
                  "帮助新人解答问题",
                  "撰写文章或Writeup分享给社区"
                ]
              },
              {
                day: "周五",
                focus: "复盘与规划",
                duration: "1-2小时",
                content: [
                  "回顾本周的成果，评估进度",
                  "更新下周的学习计划",
                  "整理你的文件、笔记和工具",
                  "休息放松，避免 burnout"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{item.day}</h3>
                  <span className="text-xs bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 px-2 py-0.5 rounded-full">{item.duration}</span>
                </div>
                <p className="font-semibold text-cyan-400 mb-3">{item.focus}</p>
                <ul className="space-y-2">
                  {item.content.map((line, i) => (
                    <li key={i} className="flex items-start text-xs">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 mr-1 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 8. 技能自评清单（原网站板块） ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">技能自评清单</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              用这个清单评估你当前的水平，找到需要提升的方向，定期回顾跟踪你的进步
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                category: "网络基础",
                items: [
                  { name: "理解OSI模型和TCP/IP协议栈", level: "基础" },
                  { name: "用Wireshark分析网络数据包", level: "基础" },
                  { name: "理解DNS和域名解析原理", level: "基础" },
                  { name: "深入理解HTTP/HTTPS协议", level: "基础" },
                  { name: "熟悉常见端口和对应的服务", level: "基础" },
                  { name: "理解防火墙和入侵检测系统", level: "中级" }
                ]
              },
              {
                category: "编程与脚本开发",
                items: [
                  { name: "用Python编写自动化脚本", level: "基础" },
                  { name: "理解JavaScript，能分析前端代码", level: "基础" },
                  { name: "编写Bash脚本自动化任务", level: "中级" },
                  { name: "能阅读和理解PHP/Java/Ruby等后端代码", level: "中级" },
                  { name: "开发定制化的安全工具", level: "高级" },
                  { name: "用Java/Python编写Burp扩展", level: "高级" }
                ]
              },
              {
                category: "Web应用安全",
                items: [
                  { name: "发现和利用各类XSS漏洞", level: "基础" },
                  { name: "发现和利用SQL注入漏洞", level: "基础" },
                  { name: "发现IDOR和访问控制漏洞", level: "基础" },
                  { name: "发现SSRF和CSRF漏洞", level: "中级" },
                  { name: "发现竞争条件漏洞", level: "高级" },
                  { name: "发现HTTP请求走私漏洞", level: "高级" },
                  { name: "发现原型污染漏洞", level: "高级" },
                  { name: "发现服务端模板注入漏洞", level: "高级" }
                ]
              },
              {
                category: "测试工具",
                items: [
                  { name: "熟练使用Burp Suite的代理和重放功能", level: "基础" },
                  { name: "用nmap进行网络和端口扫描", level: "基础" },
                  { name: "用ffuf/dirsearch进行目录爆破", level: "基础" },
                  { name: "用Nuclei和自定义模板进行漏洞扫描", level: "中级" },
                  { name: "高效使用SQLmap", level: "中级" },
                  { name: "使用高级OSINT工具", level: "高级" }
                ]
              },
              {
                category: "报告撰写",
                items: [
                  { name: "写出清晰、结构化的漏洞报告", level: "基础" },
                  { name: "准确计算CVSS评分", level: "中级" },
                  { name: "制作有说服力的PoC（视频/截图）", level: "中级" },
                  { name: "写出有说服力的安全影响分析", level: "中级" },
                  { name: "和安全团队进行专业的沟通", level: "高级" }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-md p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/20">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 px-2 py-0.5 rounded-full">
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 9. 学习路径选择（原网站板块） ========== */}
      <section className="py-16 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">三种学习路径选择</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              选择最适合你的情况和学习风格的路径，条条大路通罗马
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "自学路径 (Self-Taught)",
                duration: "12-24个月",
                cost: "免费 - 低成本",
                desc: "通过互联网上的免费和付费资源自学，这是最受成功赏金猎人欢迎的路径。需要极强的自律和独立学习、解决问题的能力。关键是建立规律的学习计划并坚持执行。",
                stages: [
                  "1-3个月：通过TryHackMe、freeCodeCamp等免费资源学习网络、Linux、编程基础",
                  "4-6个月：学习OWASP Top 10，完成PortSwigger Academy的免费实验室",
                  "7-9个月：精通Burp Suite和核心工具，在本地靶场持续练习",
                  "10-12个月：从VDP项目开始，进入真实的Bug Bounty实战",
                  "13-18个月：深入学习高级漏洞，在某个细分领域深耕",
                  "19-24个月：建立行业声誉，在赏金平台取得稳定的成果"
                ],
                pros: ["完全免费或成本极低", "时间和进度完全灵活", "培养独立解决问题的能力", "可以完全聚焦于你感兴趣的内容"],
                cons: ["没有明确的指引，新手容易迷茫", "需要极强的自律能力", "可能会遗漏重要的知识点", "初期进步速度可能较慢"]
              },
              {
                title: "结构化课程路径",
                duration: "6-12个月",
                cost: "$500 - $5,000",
                desc: "参加系统化的网络安全和渗透测试培训课程。这条路径提供了清晰的学习结构、经过专家审核的内容，以及导师的指导和反馈。适合喜欢有组织的学习方式的人。",
                stages: [
                  "1-2个月：网络安全基础课程（如CompTIA Security+、Google网络安全证书）",
                  "3-4个月：Web渗透测试课程（如eWPT、TCM Security的PNPT）",
                  "5-6个月：带实战靶场的进阶课程（如HTB Academy、PentesterLab Pro）",
                  "7-9个月：备考专业证书，配合大量的实战练习",
                  "10-12个月：进入真实的Bug Bounty实战，同时持续学习进阶内容"
                ],
                pros: ["专家整理的系统化学习路径", "有行业认可的证书，提升简历", "有导师的支持和指导", "学习进度更快，有明确的目标"],
                cons: ["有一定的经济成本", "时间和内容的灵活性较低", "部分课程偏理论，实战不足", "不一定能覆盖你感兴趣的细分领域"]
              },
              {
                title: "大学/学术路径",
                duration: "2-4年",
                cost: "因学校而异",
                desc: "在大学攻读网络安全或计算机科学的学位，专注于安全方向。这条路径能给你打下极其扎实的理论基础，广泛的行业人脉，以及被全球认可的学历。适合想要长期在安全行业发展的人。",
                stages: [
                  "第1年：计算机科学、编程、数学基础",
                  "第2年：网络、操作系统、数据库基础",
                  "第3年：网络安全专业课程、密码学",
                  "第4年：毕业设计、实习、实战项目"
                ],
                pros: ["极其扎实的理论基础", "全球认可的大学学位", "广泛的同学和老师人脉", "学术和研究机会"],
                cons: ["时间周期非常长", "经济成本很高", "课程内容可能跟不上行业最新发展", "偏学术，部分内容和实战脱节"]
              }
            ].map((item, index) => (
              <div key={index} className="glass-panel overflow-hidden">
                <div className="bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] px-6 py-4 border-b border-slate-700/50">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span>时长：{item.duration}</span>
                    <span>成本：{item.cost}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 text-sm mb-4">{item.desc}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">学习阶段</h4>
                    <ol className="space-y-1 pl-4 text-xs text-slate-400 list-decimal">
                      {item.stages.map((stage, i) => (
                        <li key={i}>{stage}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="mb-3">
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      优势
                    </h4>
                    <ul className="space-y-1 pl-6 text-xs text-slate-400 list-disc">
                      {item.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      挑战
                    </h4>
                    <ul className="space-y-1 pl-6 text-xs text-slate-400 list-disc">
                      {item.cons.map((con, i) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. 成功里程碑（原网站板块） ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">学习路上的成功里程碑</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              这些里程碑帮你追踪进步，庆祝你的每一个成就，每一位专家都是从第一个Lab开始的
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                milestone: "第一个Lab通关",
                time: "第2-4周",
                desc: "在PortSwigger或TryHackMe完成第一个挑战。这一刻你会意识到，你真的可以做到。每一位专家都是从这一步开始的。",
                meaning: "确认你走在正确的路上，这个领域适合你"
              },
              {
                milestone: "第一个工具的熟练使用",
                time: "第2-3个月",
                desc: "熟练掌握Burp Suite或其他核心工具，能自信、高效地使用它的核心功能，流畅地拦截、修改、分析HTTP请求。",
                meaning: "从理论学习，进入到实际操作能力的阶段"
              },
              {
                milestone: "在训练环境中发现第一个漏洞",
                time: "第3-5个月",
                desc: "不看答案，靠自己发现一个漏洞，不管是简单的XSS还是IDOR。第一次独立发现漏洞的成就感，你永远不会忘记。",
                meaning: "证明你拥有了安全研究者的思维方式"
              },
              {
                milestone: "写出第一份完整的报告",
                time: "第4-6个月",
                desc: "为一个漏洞写出完整、结构化的报告，哪怕只是训练用的。早点练习报告撰写，能为你以后节省大量时间，提升你的工作质量。",
                meaning: "培养专业的技术沟通能力"
              },
              {
                milestone: "在真实平台上第一份被接受的报告",
                time: "第6-12个月",
                desc: "在HackerOne或Bugcrowd上提交一份真实的漏洞报告，并且被厂商的安全团队接受。这一刻，代表你真正从学习者，变成了实战者。",
                meaning: "证明你能为真实企业的安全做出贡献"
              },
              {
                milestone: "第一笔赏金收入",
                time: "第8-18个月",
                desc: "因为你发现的漏洞，拿到第一笔赏金。不管金额多少，这一刻都证明了你的技能在市场上有真实的价值。",
                meaning: "把技能转化为真实的收入来源"
              },
              {
                milestone: "第一个高危/严重漏洞",
                time: "第1-2年",
                desc: "发现一个高危或严重级别的漏洞。这需要你对应用和技术有深入的理解，标志着你作为安全研究者的成熟度。",
                meaning: "进入高级漏洞挖掘的阶段"
              },
              {
                milestone: "第一次为社区做贡献",
                time: "第1-2年",
                desc: "发布你的第一篇Writeup、技术文章，或者帮助新人解答问题。为社区做贡献，不仅能提升你的学习，还能建立你的行业声誉。",
                meaning: "从知识的接收者，变成知识的贡献者"
              },
              {
                milestone: "进入私有赏金项目",
                time: "第1-3年",
                desc: "收到高赏金私有项目的邀请。这意味着平台认可了你的工作质量，信任你的专业能力。",
                meaning: "你的专业能力得到了行业的官方认可"
              },
              {
                milestone: "建立专业的行业声誉",
                time: "第2-4年",
                desc: "在平台上获得高排名，或者拿到MVP之类的称号。在这个阶段，你在行业里已经有了自己的专业身份和知名度。",
                meaning: "达到行业内的专业和专家级别"
              }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-bold text-lg">{item.milestone}</span>
                  <span className="text-sm bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 px-2 py-0.5 rounded-full">预计时间：{item.time}</span>
                </div>
                <p className="text-slate-400 mb-3">{item.desc}</p>
                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  <p className="text-sm font-medium">里程碑意义：{item.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 11. 工具分类速查（原网站板块） ========== */}
      <section className="py-16 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">核心工具分类速查</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              按测试阶段分类的常用工具，每个阶段的必备工具都在这里
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "信息收集工具 (Reconnaissance)",
                desc: "测试的第一步，用于收集目标的所有相关信息，包括子域名、资产、隐藏路径等。好的侦察是发现漏洞的基础。",
                tools: [
                  { name: "subfinder", level: "基础", desc: "快速、高效的子域名枚举工具，支持多个数据源" },
                  { name: "amass", level: "基础", desc: "全面的域名侦察工具，支持高级OSINT功能" },
                  { name: "httpx", level: "基础", desc: "快速探测Web服务存活状态，识别技术栈" },
                  { name: "nmap", level: "基础", desc: "端口、服务扫描，操作系统和版本识别" },
                  { name: "ffuf", level: "基础", desc: "超高速的目录、文件、参数爆破工具" },
                  { name: "waybackurls", level: "中级", desc: "从Wayback Machine提取历史URL链接" },
                  { name: "gau", level: "中级", desc: "从多个公开数据源收集URL，包括Wayback、Common Crawl" },
                  { name: "shodan", level: "高级", desc: "全网联网设备和服务搜索引擎" }
                ]
              },
              {
                category: "测试与利用工具 (Testing & Exploitation)",
                desc: "用于测试和利用发现的漏洞，包括代理工具、自动化扫描器、专项利用工具等，是漏洞挖掘的核心工具。",
                tools: [
                  { name: "Burp Suite", level: "基础", desc: "Web安全测试的核心工具，代理、分析、修改HTTP请求" },
                  { name: "Nuclei", level: "基础", desc: "基于YAML模板的快速漏洞扫描器，高度可定制" },
                  { name: "SQLmap", level: "中级", desc: "自动化SQL注入漏洞的检测和利用工具" },
                  { name: "XSStrike", level: "中级", desc: "高级XSS漏洞检测和利用工具" },
                  { name: "Commix", level: "中级", desc: "自动化检测和利用命令注入漏洞" },
                  { name: "JWT_Tool", level: "高级", desc: "JWT令牌的安全测试和攻击工具" }
                ]
              },
              {
                category: "分析与监控工具 (Analysis & Monitoring)",
                desc: "用于分析收集到的数据，监控目标资产的变化，发现隐藏的端点和敏感信息，提升测试的效率和深度。",
                tools: [
                  { name: "Wireshark", level: "基础", desc: "网络数据包分析和流量捕获工具" },
                  { name: "JSParser", level: "中级", desc: "分析JavaScript文件，发现隐藏的API端点" },
                  { name: "LinkFinder", level: "中级", desc: "从JavaScript文件中提取链接和路径" },
                  { name: "GitLeaks", level: "中级", desc: "从Git仓库中发现泄露的密钥和敏感信息" },
                  { name: "truffleHog", level: "高级", desc: "在Git历史中深度搜索密钥和敏感数据" },
                  { name: "Notify", level: "高级", desc: "当目标资产发生变化时，自动发送通知" }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="glass-panel p-6">
                <h3 className="text-lg font-bold mb-3">{category.category}</h3>
                <p className="text-sm text-slate-400 mb-4">{category.desc}</p>
                <div className="space-y-3">
                  {category.tools.map((tool, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900/20">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">{tool.name}</span>
                        <span className="text-xs bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 px-2 py-0.5 rounded-full">{tool.level}</span>
                      </div>
                      <p className="text-xs text-slate-400">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 12. 推荐书籍（原网站板块） ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">推荐学习书籍</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              每一位安全研究者的必备书架，从入门到高级的经典书籍
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Web Application Hacker's Handbook",
                author: "Dafydd Stuttard & Marcus Pinto",
                level: "中级",
                tags: ["Web安全", "Burp Suite", "认证", "会话管理"],
                desc: "Web应用安全领域的圣经级参考书。全面、详细地覆盖了Web应用安全测试的方方面面，配合大量的实战案例。是每一位Web安全研究者的必备书籍。"
              },
              {
                title: "Bug Bounty Bootcamp",
                author: "Vickie Li",
                level: "入门-中级",
                tags: ["Bug Bounty", "XSS", "SSRF", "IDOR", "信息收集"],
                desc: "专门为漏洞赏金新手打造的书籍。用清晰、结构化的方式讲解了最常见的漏洞类型，配合大量的实战技巧和入门指南。作者本身就是成功的女安全研究员，提供了非常实用的实战视角。"
              },
              {
                title: "Real-World Bug Hunting",
                author: "Peter Yaworski",
                level: "中级",
                tags: ["真实案例", "方法论", "公开报告", "实战思路"],
                desc: "收集了大量在大型厂商中真实发现的漏洞故事，详细讲解了研究者的挖掘思路和方法论。非常适合学习专业猎人是如何在真实应用中发现漏洞的，理解他们的思考方式。"
              },
              {
                title: "Black Hat Python",
                author: "Justin Seitz",
                level: "中级-高级",
                tags: ["Python", "工具开发", "网络编程", "自动化"],
                desc: "教你如何用Python开发高级的安全工具。覆盖了编写嗅探器、代理、定制化测试工具等主题。对于想要开发自己的工具、实现测试自动化的人来说，是必读的书籍。"
              },
              {
                title: "Hacking APIs",
                author: "Corey Ball",
                level: "中级",
                tags: ["API安全", "REST", "GraphQL", "认证", "渗透测试"],
                desc: "专门聚焦于API安全的书籍，覆盖了REST、GraphQL、gRPC等API的测试技术。现在的现代应用几乎都依赖API，这本书是这个领域最全面的入门和进阶指南。"
              },
              {
                title: "Penetration Testing",
                author: "Georgia Weidman",
                level: "入门-中级",
                tags: ["渗透测试", "Metasploit", "网络安全", "后渗透"],
                desc: "全面的渗透测试入门书籍，覆盖了从信息收集到后渗透的完整流程。适合想要全面理解渗透测试全流程，而不只是Web安全的学习者。"
              }
            ].map((book, index) => (
              <div key={index} className="glass-panel p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{book.title}</h3>
                  <span className="text-xs bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 px-2 py-0.5 rounded-full">{book.level}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">作者：{book.author}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {book.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-slate-800/60 text-slate-400 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-slate-400">{book.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 13. 环境搭建指南（原网站板块） ========== */}
      <section className="py-16 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">专业工作环境搭建指南</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              在开始学习之前，先搭建好一套稳定、高效的工作环境，能帮你节省大量的时间，专注于漏洞挖掘本身
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "操作系统准备",
                desc: "选择和搭建适合安全测试的操作系统。Linux是最佳选择，因为绝大多数安全工具都是为Linux开发的。你可以把Kali Linux或Parrot Security作为主力系统，或者运行在虚拟机里。如果你用Windows作为主力系统，可以用WSL2在Windows里运行Linux环境。",
                steps: [
                  "下载并安装VirtualBox或VMware Workstation Player",
                  "下载Kali Linux或Parrot Security OS的ISO镜像",
                  "创建虚拟机，分配至少4GB内存和50GB磁盘空间",
                  "更新系统，安装最新的安全补丁",
                  "定制终端环境，安装tmux、zsh等工具",
                  "创建结构化的文件夹，分类存放工具、项目、笔记"
                ]
              },
              {
                title: "信息收集工具安装与配置",
                desc: "安装和配置你在每个测试项目中都会用到的核心信息收集工具。确保这些工具始终保持最新，随时可以使用。",
                steps: [
                  "安装Go语言环境，用于运行ProjectDiscovery系列工具",
                  "安装subfinder、httpx、nuclei等ProjectDiscovery工具",
                  "安装ffuf，用于目录和参数爆破",
                  "安装amass，用于高级域名侦察",
                  "为Shodan、Censys、VirusTotal等服务配置API密钥",
                  "编写简单的Bash脚本，一键运行所有信息收集工具"
                ]
              },
              {
                title: "Burp Suite配置",
                desc: "安装和配置Burp Suite社区版或专业版。这是你做Web应用安全测试的核心工具，必须熟练掌握它的使用。一定要在浏览器中安装CA证书，才能正常拦截HTTPS流量。",
                steps: [
                  "下载并安装最新版本的Burp Suite",
                  "配置8080端口的代理监听器",
                  "在浏览器（推荐Firefox）中安装Burp CA证书",
                  "配置Scope范围，过滤不需要的流量",
                  "安装常用的扩展，比如Logger++、Authorize、Param Miner",
                  "熟悉Repeater、Intruder、Scanner等核心模块的使用"
                ]
              },
              {
                title: "本地训练靶场搭建",
                desc: "安装带有漏洞的Web应用，在安全的本地环境中练习漏洞挖掘，不用在真实目标上测试。这些环境专门设计了各种类型的漏洞，适合反复练习。",
                steps: [
                  "安装Docker，方便一键运行各种测试环境",
                  "通过Docker运行DVWA（Damn Vulnerable Web Application）",
                  "运行OWASP Juice Shop，练习各种不同的漏洞",
                  "运行WebGoat，系统化地学习特定漏洞",
                  "注册PortSwigger Web Security Academy账号（完全免费）",
                  "注册TryHackMe或HackTheBox账号，进行进阶挑战练习"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-md p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.desc}</p>
                <div className="bg-slate-900/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">操作步骤</h4>
                  <ol className="space-y-2 pl-6 list-decimal">
                    {item.steps.map((step, i) => (
                      <li key={i} className="text-sm">{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 14. 职业证书指南（原网站板块） ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">职业证书指南</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              证书对于Bug Bounty不是必须的，但能帮你巩固知识，提升职业竞争力，为未来的职业发展铺路
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: "入门级",
                certs: [
                  { name: "CompTIA Security+", cost: "$381", duration: "3-6个月" },
                  { name: "eJPT (eLearnSecurity)", cost: "$249", duration: "2-3个月" },
                  { name: "Google Cybersecurity Certificate", cost: "$49/月", duration: "3-6个月" }
                ]
              },
              {
                level: "中级",
                certs: [
                  { name: "eWPT (eLearnSecurity)", cost: "$400", duration: "3-4个月" },
                  { name: "Burp Suite Certified Practitioner", cost: "$99", duration: "1-2个月" },
                  { name: "GPEN (GIAC)", cost: "$2,499+", duration: "4-6个月" }
                ]
              },
              {
                level: "高级",
                certs: [
                  { name: "OSCP", cost: "$1,599+", duration: "6-12个月" },
                  { name: "OSWE", cost: "$1,599+", duration: "6-12个月" },
                  { name: "GXPN (GIAC)", cost: "$2,499+", duration: "6-9个月" }
                ]
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-md p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 text-xs font-medium mb-4">
                  {item.level}
                </div>
                <div className="space-y-4">
                  {item.certs.map((cert, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900/20">
                      <h4 className="font-semibold mb-2">{cert.name}</h4>
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>费用：{cert.cost}</span>
                        <span>备考时长：{cert.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 15. 职业发展路径（原网站板块） ========== */}
      <section className="py-16 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">职业发展路径</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Bug Bounty的技能能为你打开哪些职业大门？这里是最常见的职业发展方向
            </p>
          </div>

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
              <div key={index} className="glass-panel p-6">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-cyan-400 mb-3">{item.salary}</p>
                <p className="text-sm text-slate-400 mb-4">{item.desc}</p>
                <div className="pt-4 border-t border-slate-700/50">
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
      </section>

      {/* ========== 16. 结尾号召区 ========== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">开启你的漏洞赏金之旅</h2>
          <p className="text-slate-300 text-lg mb-8">
            这是一条需要耐心和坚持的路，但每一步都算数。从今天开始，一步一个脚印，你也能成为专业的漏洞赏金猎人。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/vulnerabilities" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-4 text-sm font-bold text-slate-100 hover:bg-[#8ed900] transition-colors">
              开始学习漏洞知识
            </a>
            <a href="/tools" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-slate-900/40 backdrop-blur-md/10 transition-colors">
              查看工具库
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}