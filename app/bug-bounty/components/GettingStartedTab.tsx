'use client';

import { useState } from 'react';
import {
  Server,
  Code,
  Smartphone,
  Globe,
  Lock,
  FileCode,
  Cpu,
  Monitor,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Clock
} from "lucide-react";

export default function GettingStartedTab() {
  const [openReportTips, setOpenReportTips] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-16">
      {/* ========== 第一部分：你可以测试的目标类型 ========== */}
      <section>
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-2">
            测试目标
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">你可以测试哪些目标？</h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            漏洞赏金计划中，常见的可测试目标类型，不同的目标类型需要不同的测试技能和方法
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <Server className="w-5 h-5" />,
              title: "网络基础设施",
              desc: "网络设备、域名系统、云服务、CDN、DNS服务器、CORS配置、网络架构等。"
            },
            {
              icon: <Code className="w-5 h-5" />,
              title: "APIs 接口",
              desc: "GraphQL、REST API、WebSocket等各类接口，是漏洞高发的核心目标，常见IDOR、注入类漏洞。"
            },
            {
              icon: <Smartphone className="w-5 h-5" />,
              title: "移动应用",
              desc: "Android和iOS的移动应用，包括客户端代码、API通信、本地存储、深度链接、身份认证等安全问题。"
            },
            {
              icon: <Globe className="w-5 h-5" />,
              title: "Web 应用",
              desc: "网站和Web应用，是最常见的测试目标，也是新手入门的最佳选择，覆盖绝大多数常见的Web漏洞类型。"
            },
            {
              icon: <Lock className="w-5 h-5" />,
              title: "智能合约",
              desc: "区块链上的智能合约代码，常见重入攻击、权限漏洞、整数溢出等安全问题，需要区块链相关知识。"
            },
            {
              icon: <FileCode className="w-5 h-5" />,
              title: "源代码",
              desc: "企业开源的代码、前端源码、反编译后的代码，通过代码审计发现安全漏洞，需要代码审计能力。"
            },
            {
              icon: <Cpu className="w-5 h-5" />,
              title: "IoT 物联网设备",
              desc: "智能设备、摄像头、路由器、智能家居等物联网设备，固件安全、认证绕过、命令注入等漏洞。"
            },
            {
              icon: <Monitor className="w-5 h-5" />,
              title: "桌面应用",
              desc: "Windows、macOS、Linux的桌面客户端软件，权限问题、DLL劫持、代码执行、本地漏洞等。"
            }
          ].map((item, index) => (
            <div key={index} className="rounded-lg border border-[#e5e5e5] bg-white p-5 hover:border-[#9FEF00]/30 hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-full bg-[#9FEF00]/10 flex items-center justify-center text-[#9FEF00] mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-[#666]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 第二部分：如何分配你的测试时间 ========== */}
      <section>
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-2">
            时间管理
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">如何分配你的测试时间？</h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            资深赏金猎人的时间分配经验，帮你避开无效努力，最大化漏洞发现效率
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "范围分析与政策阅读",
              percent: 5,
              time: "≈ 30分钟",
              desc: "完整阅读项目规则、明确测试范围、禁止项、赏金规则，这是最基础也最关键的一步，避免踩坑。",
              color: "bg-[#9FEF00]"
            },
            {
              title: "信息收集与侦察 (Recon)",
              percent: 30,
              time: "≈ 3小时",
              desc: "子域名枚举、端口扫描、技术栈识别、端点发现、参数收集，信息收集决定了80%的漏洞发现概率。",
              color: "bg-[#9FEF00]"
            },
            {
              title: "漏洞测试与深度挖掘",
              percent: 15,
              time: "≈ 1.5小时",
              desc: "对收集到的端点和功能，进行针对性的漏洞测试，验证潜在的安全问题。",
              color: "bg-[#9FEF00]"
            },
            {
              title: "权限提升与漏洞利用",
              percent: 35,
              time: "≈ 3.5小时",
              desc: "把发现的小漏洞升级，构建利用链，最大化漏洞的危害影响，这是决定赏金高低的核心环节。",
              color: "bg-[#9FEF00]"
            },
            {
              title: "漏洞报告编写",
              percent: 10,
              time: "≈ 1小时",
              desc: "编写清晰、完整、可复现的漏洞报告，包含复现步骤、PoC、影响分析、修复建议。",
              color: "bg-[#9FEF00]"
            },
            {
              title: "漏洞复现与验证",
              percent: 5,
              time: "≈ 30分钟",
              desc: "在提交报告前，完整复现漏洞，确保步骤清晰、PoC有效，避免因为复现问题被驳回。",
              color: "bg-[#9FEF00]"
            },
            {
              title: "后续跟进与沟通",
              percent: 5,
              time: "按需",
              desc: "跟进报告的审核进度，回复企业的疑问，配合漏洞修复的验证工作。",
              color: "bg-[#e5e5e5]"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-xs text-[#666]">{item.time}</p>
                </div>
                <span className="text-sm font-bold">{item.percent}%</span>
              </div>
              <div className="w-full bg-[#f5f5f5] rounded-full h-2 mb-3">
                <div 
                  className={`h-full rounded-full ${item.color} transition-all`}
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <p className="text-sm text-[#666]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 第三部分：报告技巧 + 新手FAQ 两栏布局 ========== */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* 左边：成功的报告编写技巧 */}
        <div>
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-2">
              报告编写
            </div>
            <h2 className="text-2xl font-bold mb-2">写出成功报告的技巧</h2>
            <p className="text-[#666]">好的报告能大幅提高漏洞的接受率和赏金金额</p>
          </div>

          <div className="space-y-2">
            {[
              {
                title: "清晰、准确的漏洞标题",
                desc: "标题要直接说明漏洞类型、影响范围和危害，比如「用户资料处存储型XSS可导致任意用户账号接管」，而不是模糊的「页面有XSS漏洞」。"
              },
              {
                title: "正确评估漏洞的严重等级",
                desc: "使用CVSS评分标准，合理评估漏洞的严重程度，不要夸大也不要低估，同时说明漏洞对业务和用户的实际影响。"
              },
              {
                title: "完整的漏洞详情与背景说明",
                desc: "说明漏洞出现在哪里、漏洞的类型、漏洞产生的根本原因，以及漏洞的整体危害，让审核人员快速理解漏洞的核心问题。"
              },
              {
                title: "详细、可复现的步骤",
                desc: "按编号一步一步写清楚复现漏洞的完整操作，从注册账号、访问页面、到构造请求、触发漏洞的每一步，确保审核人员跟着步骤就能100%复现。"
              },
              {
                title: "完整的PoC复现证明",
                desc: "附上完整的PoC代码、请求包、截图、录屏，视频证明，让审核人员直观看到漏洞的效果，证明漏洞的真实存在。"
              },
              {
                title: "清晰的安全影响分析",
                desc: "详细说明这个漏洞会给企业和用户带来的实际危害，比如数据泄露、账号接管、服务器被控制、业务受损等，这是决定赏金的核心。"
              },
              {
                title: "专业、友好的语气",
                desc: "用专业、礼貌的语气编写报告，避免情绪化、指责性的表述，和审核团队保持良好的沟通。"
              },
              {
                title: "明确的修复建议",
                desc: "给出专业、可落地的漏洞修复方案，而不是空泛的建议，体现你的专业度，也能帮企业快速修复漏洞。"
              },
              {
                title: "严格遵守项目的报告格式",
                desc: "很多项目有固定的报告模板和要求，严格按照要求填写，不要遗漏必填项，提高审核效率。"
              },
              {
                title: "不要在报告里包含无关内容",
                desc: "只聚焦于当前漏洞的相关信息，不要加入无关的测试内容、猜测性的描述，保持报告简洁、精准。"
              },
              {
                title: "确保你的测试在范围内",
                desc: "在报告里说明你的测试完全在项目规定的范围内，符合安全港条款，避免法律风险和报告被驳回。"
              },
              {
                title: "附上完整的HTTP请求/响应",
                desc: "把触发漏洞的完整HTTP请求包和响应包附上，方便审核人员快速复现和验证漏洞。"
              }
            ].map((item, index) => (
              <div key={index} className="border border-[#e5e5e5] rounded-lg overflow-hidden bg-white">
                <button
                  className="w-full flex justify-between items-center p-4 text-left"
                  onClick={() => setOpenReportTips(openReportTips === index ? null : index)}
                >
                  <span className="font-semibold">{item.title}</span>
                  {openReportTips === index ? (
                    <ChevronUp className="w-5 h-5 text-[#666]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#666]" />
                  )}
                </button>
                {openReportTips === index && (
                  <div className="p-4 pt-0 border-t border-[#e5e5e5]">
                    <p className="text-sm text-[#666]">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 右边：Bug Bounty的第一步 新手FAQ */}
        <div>
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-2">
              新手常见问题
            </div>
            <h2 className="text-2xl font-bold mb-2">Bug Bounty 第一步常见问题</h2>
            <p className="text-[#666]">新手最常问的问题，帮你避开入门的困惑</p>
          </div>

          <div className="space-y-2">
            {[
              {
                question: "什么是负责任的漏洞披露？",
                answer: "负责任的漏洞披露，是指你先把漏洞私下上报给企业，给企业足够的时间去修复漏洞，在企业完成修复、并且明确授权你可以公开之后，再对外披露漏洞的细节。绝对不要在漏洞修复前公开发布，否则会面临法律风险，也会毁掉你的行业声誉。"
              },
              {
                question: "我需要编程基础吗？",
                answer: "入门阶段不需要很强的编程能力，掌握基础的Web知识、HTTP协议、常见漏洞原理就可以开始。但想要进阶，编程能力会给你带来巨大的优势，比如写自动化工具、代码审计、编写漏洞利用代码等，建议在学习过程中逐步掌握Python、JavaScript等基础编程能力。"
              },
              {
                question: "我需要多深的技术知识才能开始？",
                answer: "你只需要掌握：HTTP协议基础、Web工作原理、常见的Web漏洞（比如XSS、CSRF、IDOR等）的原理和基本测试方法，就可以从VDP项目开始实战练习了。漏洞赏金是一个边学边练的过程，不需要等你「完全学会」再开始。"
              },
              {
                question: "我应该先从哪里开始测试？",
                answer: "新手强烈建议先从VDP（漏洞披露计划）开始，而不是直接冲高赏金的BBP。VDP的竞争小很多，有很多简单的漏洞还没被发现，适合你积累实战经验、练习写报告、建立自己的履历，等有了一定的经验和成果，再进入BBP赏金计划。"
              },
              {
                question: "我的报告被标记为重复了怎么办？",
                answer: "重复漏洞（Duplicate）是每个赏金猎人都会遇到的事，哪怕是顶尖高手也会经常遇到。不要灰心，这说明你的漏洞判断是对的，只是别人比你早了一步。你需要做的是优化你的信息收集和测试效率，寻找竞争更小的目标，或者深耕更难发现的漏洞。"
              },
              {
                question: "企业多久会回复我的报告？",
                answer: "不同的项目差异很大。大型企业的BBP项目通常会在几天到几周内响应，而小型企业的VDP可能需要几周甚至几个月，甚至有些不会回复。你可以在平台上查看项目的平均响应时间，选择响应快的项目来测试。"
              },
              {
                question: "我可以同时测试多个项目吗？",
                answer: "可以，但新手建议先聚焦在1-2个项目上，把项目的范围、功能、业务逻辑摸透，而不是广撒网式的浅尝辄止。深度理解一个项目的业务逻辑，往往比测试很多个项目更容易发现漏洞。"
              },
              {
                question: "我需要买很多昂贵的工具吗？",
                answer: "完全不需要。绝大多数常用的安全工具都是免费开源的，比如Burp Suite社区版、ffuf、nmap、wireshark等，完全足够你入门和进阶使用。付费工具可以等你有了稳定的赏金收入后，再根据需求选择。"
              },
              {
                question: "我可以在工作时间做漏洞赏金吗？",
                answer: "绝对不要用公司的设备、网络、工作时间做漏洞赏金测试，这会违反你公司的IT政策，甚至带来法律风险。所有的测试都必须在你自己的设备、个人网络、业余时间进行，并且严格遵守目标项目的规则。"
              },
              {
                question: "发现漏洞后，我可以直接联系企业吗？",
                answer: "如果企业有正式的VDP或BBP项目，必须通过项目规定的渠道提交报告，不要私下联系员工。如果企业没有公开的漏洞披露政策，建议谨慎测试，因为未授权的测试可能会给你带来法律风险。"
              }
            ].map((item, index) => (
              <div key={index} className="border border-[#e5e5e5] rounded-lg overflow-hidden bg-white">
                <button
                  className="w-full flex justify-between items-center p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#666]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#666]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 border-t border-[#e5e5e5]">
                    <p className="text-sm text-[#666]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 第四部分：理想的漏洞报告结构 ========== */}
      <section>
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-2">
            报告模板
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">理想的漏洞报告结构</h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            专业的漏洞报告标准结构，帮你写出高通过率、高赏金的报告
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {[
            {
              step: "1",
              title: "报告标题 (Title)",
              desc: "清晰、精准地说明漏洞类型、位置和核心影响，让审核人员一眼就知道漏洞的核心信息。",
              example: "示例：用户个人资料页存储型XSS漏洞，可导致任意用户账号接管"
            },
            {
              step: "2",
              title: "严重等级 (Severity)",
              desc: "基于CVSS评分标准，标注漏洞的严重等级（Critical/High/Medium/Low/Info），并说明评分的依据。",
              example: "示例：CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H - High 高危"
            },
            {
              step: "3",
              title: "漏洞描述 (Description)",
              desc: "详细说明漏洞的背景、出现的位置、漏洞的类型、漏洞产生的根本原因，以及漏洞的整体危害。",
              example: "示例：网站的用户个人资料页的「个性签名」字段，没有对用户输入的内容进行XSS过滤和转义，攻击者可以注入恶意JavaScript代码，代码会被存储在服务器中，当其他用户访问攻击者的个人主页时，恶意代码会在受害者的浏览器中执行，导致账号接管。"
            },
            {
              step: "4",
              title: "复现步骤 (Steps to Reproduce)",
              desc: "按编号一步一步写清楚复现漏洞的完整操作，必须详细、可复现，让审核人员跟着步骤就能100%复现漏洞。",
              example: "示例：\n1. 注册一个测试账号，登录网站\n2. 进入个人资料编辑页面\n3. 在「个性签名」输入框中，填入XSS攻击载荷：<script>alert(document.cookie)</script>\n4. 点击保存，个性签名内容被成功保存\n5. 其他用户访问该测试账号的个人主页，XSS代码会自动执行，弹出用户的Cookie信息"
            },
            {
              step: "5",
              title: "概念验证 (PoC)",
              desc: "附上完整的漏洞证明，包括触发漏洞的请求包、PoC代码、截图、录屏等，直观证明漏洞的真实存在和可利用性。",
              example: "示例：附上完整的HTTP请求包、执行后的截图、录屏文件"
            },
            {
              step: "6",
              title: "安全影响 (Impact)",
              desc: "详细说明这个漏洞会给企业和用户带来的实际危害，这是决定漏洞等级和赏金金额的核心因素。",
              example: "示例：攻击者可以利用这个漏洞，盗取访问用户的Cookie信息，劫持用户的会话，完全接管用户的账号，包括管理员账号；可以窃取用户的个人敏感信息，执行任意操作，给用户和企业带来严重的安全风险。"
            },
            {
              step: "7",
              title: "修复建议 (Remediation)",
              desc: "给出专业、可落地的漏洞修复方案，体现你的专业度，帮助企业快速修复漏洞。",
              example: "示例：\n1. 对用户输入的内容进行严格的过滤和转义，对特殊字符进行HTML实体编码\n2. 实施内容安全策略（CSP），限制未授权的脚本执行\n3. 对输出到前端的内容进行统一的转义处理，避免XSS漏洞"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9FEF00] text-[#111] font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-[#666] mb-3">{item.desc}</p>
                  <div className="bg-[#f5f5f5] rounded-lg p-3 text-sm font-mono whitespace-pre-wrap">
                    {item.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 第五部分：新手必须避免的错误 ========== */}
      <section>
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-2">
            避坑指南
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">新手必须避免的错误</h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            这些常见错误会导致你的报告被驳回、账号被封禁，甚至面临法律风险，一定要避开
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "不读政策就开始测试",
              mistake: "很多新手拿到目标就直接开始扫，完全不看项目的政策和范围规则，结果测试了禁止的目标，导致账号被封，甚至面临法律问题。",
              right: "测试前必须完整阅读项目的Policy和Safe Harbor条款，明确允许的范围、禁止的操作、接受的漏洞类型，严格遵守规则。"
            },
            {
              title: "超出测试范围",
              mistake: "发现范围外的目标有漏洞，忍不住去测试，哪怕漏洞再严重，也不会给你赏金，还会导致你被平台封禁，甚至被起诉。",
              right: "永远只在项目明确规定的范围内测试，不在范围内的目标，哪怕有再大的漏洞，也绝对不要碰。"
            },
            {
              title: "操作真实用户数据",
              mistake: "在测试IDOR、SQL注入等漏洞时，下载大量用户数据、修改用户信息，这会严重违反规则，甚至触犯法律。",
              right: "只使用你自己的测试账号，用最小的操作证明漏洞存在即可，绝对不要访问、修改、下载其他真实用户的数据。"
            },
            {
              title: "夸大漏洞的严重等级",
              mistake: "为了拿更高的赏金，夸大漏洞的危害和严重等级，比如把低危的Self-XSS说成高危的账号接管，会让审核人员对你的印象变差，甚至被标记为低质量报告者。",
              right: "客观、准确地评估漏洞的严重等级和实际影响，用事实和PoC证明漏洞的危害，而不是夸大其词。"
            },
            {
              title: "提交重复漏洞",
              mistake: "不先看项目已经公开的报告，盲目测试提交，结果提交的漏洞早就被别人上报了，浪费了自己的时间，也增加了审核团队的负担。",
              right: "测试前先看项目已经公开的漏洞报告，了解哪些漏洞已经被发现了，避开已经被挖烂的点，寻找新的攻击面。"
            },
            {
              title: "提交信息级的无效报告",
              mistake: "把没有实际安全影响的问题，比如HTTP头缺失、SSL配置的小问题、版本号泄露等，当成高危漏洞提交，会被标记为Informative，没有赏金，还会影响你的声誉。",
              right: "先判断漏洞的实际安全影响，只有真正有安全风险、能被利用造成危害的漏洞，才值得提交报告。"
            },
            {
              title: "不保留测试记录",
              mistake: "测试过程中不保留截图、请求日志、操作记录，一旦出现法律纠纷，或者报告审核需要补充信息，你没有任何证据。",
              right: "测试过程中完整记录你的每一步操作，保留好所有的截图、录屏、请求日志，既能保护自己，也能帮你写出更完整的报告。"
            },
            {
              title: "漏洞修复前公开发布",
              mistake: "把还没修复的漏洞细节发到社交平台、论坛，哪怕你已经上报了，也会严重违反负责任披露的原则，面临法律风险，毁掉你的行业声誉。",
              right: "在企业完成漏洞修复，并且明确给你授权公开之前，绝对不要向任何人泄露漏洞的细节，严格遵守负责任披露的行业准则。"
            }
          ].map((item, index) => (
            <div key={index} className="rounded-lg border border-[#e5e5e5] bg-white p-5 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-red-600 mb-1">❌ 错误做法</h4>
                <p className="text-sm text-[#666]">{item.mistake}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-green-600 mb-1">✅ 正确做法</h4>
                <p className="text-sm text-[#666]">{item.right}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 第六部分：完整的测试实战流程示例 ========== */}
      <section>
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-2">
            实战流程
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">实战示例：完整的测试工作流</h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            从拿到项目到提交报告的完整标准化流程，资深赏金猎人的实战步骤
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              step: "1",
              title: "阅读项目政策，划定测试范围",
              desc: "完整阅读项目的Policy规则，明确允许测试的域名、应用、功能，明确禁止的操作和范围外的目标，把允许测试的目标整理成清单，同时记录禁止项，避免踩坑。",
              duration: "30分钟"
            },
            {
              step: "2",
              title: "信息收集与侦察，梳理攻击面",
              desc: "对范围内的目标进行全面的信息收集：子域名枚举、端口扫描、技术栈识别、目录和端点爆破、参数收集、JS文件分析，整理出完整的攻击面清单，包括所有的URL、API接口、功能模块。",
              duration: "3-4小时"
            },
            {
              step: "3",
              title: "梳理业务逻辑，标记高风险点",
              desc: "对目标网站/应用进行完整的功能遍历，理解业务逻辑，标记出高风险的功能点：比如用户认证、权限控制、文件上传、数据查询、支付相关、个人信息相关的功能，这些是漏洞高发的区域。",
              duration: "1-2小时"
            },
            {
              step: "4",
              title: "针对性漏洞测试，挖掘潜在漏洞",
              desc: "针对梳理出的端点和高风险功能，进行针对性的漏洞测试，比如对API接口测试IDOR、注入类漏洞，对用户输入点测试XSS，对认证功能测试绕过，对文件上传功能测试上传漏洞等。",
              duration: "2-3小时"
            },
            {
              step: "5",
              title: "漏洞验证与危害升级",
              desc: "发现潜在的漏洞后，完整复现漏洞，验证漏洞的可利用性，同时尝试提升漏洞的危害，比如把XSS升级为账号接管，把普通的越权升级为管理员权限越权，最大化漏洞的安全影响。",
              duration: "1-2小时"
            },
            {
              step: "6",
              title: "整理测试记录，编写漏洞报告",
              desc: "整理好漏洞的所有复现步骤、PoC、截图、录屏、请求包，按照标准的报告结构，编写完整、清晰、专业的漏洞报告，明确说明漏洞的影响和修复建议。",
              duration: "1小时"
            },
            {
              step: "7",
              title: "提交报告，跟进审核进度",
              desc: "通过平台提交漏洞报告，后续跟进报告的审核进度，及时回复审核人员的疑问，配合漏洞的验证和修复工作，直到漏洞被确认、修复，拿到对应的赏金。",
              duration: "按需跟进"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#9FEF00] text-[#111] font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <span className="text-xs font-medium bg-[#f5f5f5] px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.duration}
                </span>
              </div>
              <p className="text-[#666]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}