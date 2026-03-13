// app/reports/sections/structure/page.tsx
'use client';

import React from 'react';
import Accordion from '@/components/ui/Accordion';

export default function ReportStructure() {
  // 一级折叠项：5大核心模块（保留折叠）
  const mainAccordionItems = [
    {
      id: 'full-structure',
      title: '一、专业报告完整结构',
      content: <ReportFullStructure />,
    },
    {
      id: 'common-mistakes',
      title: '二、为什么报告会被拒绝？10个高频错误',
      content: <CommonMistakes />,
    },
    {
      id: 'rejection-reasons',
      title: '三、报告被拒的五大核心原因',
      content: <RejectionReasons />,
    },
    {
      id: 'golden-rules',
      title: '四、报告撰写的黄金法则（做与不做）',
      content: <DoDontRules />,
    },
    {
      id: 'advanced-tips',
      title: '五、让你的报告脱颖而出的高级技巧',
      content: <AdvancedTips />,
    },
  ];

  return (
    <div>
      <Accordion
        items={mainAccordionItems}
        type="multiple"
        defaultOpenIds={['full-structure']}
      />
    </div>
  );
}

// 子模块1：专业报告完整结构（修复所有显示问题，保证6个部分完整渲染）
function ReportFullStructure() {
  return (
    <div className="space-y-6">
      <p className="text-[#666] leading-relaxed">
        每一份被接受、拿到高赏金的专业报告，都遵循这个标准6段式结构。清晰的结构是报告通过审核的基础。
      </p>

      {/* 1. 标题 */}
      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="text-lg font-bold mb-3">1. 标题 (Title)</h4>
        <p className="text-[#666] leading-relaxed mb-4">
          清晰、具体的标题，必须包含「漏洞等级」+「漏洞类型」+「漏洞位置」，让审核人员一眼就能理解漏洞核心。
        </p>
        
        <div className="bg-[#fafafa] rounded-lg p-4 mb-4">
          <h5 className="font-bold mb-3 flex items-center gap-2">
            <span className="text-green-600">✅</span>
            标准标题示例
          </h5>
          <ul className="space-y-2 text-[#666]">
            <li className="leading-relaxed">• [高危] 用户个人资料页的Markdown渲染处存在存储型XSS漏洞</li>
            <li className="leading-relaxed">• [严重] IDOR漏洞：通过 /api/photos/{'{id}'} 可访问任意用户的私密照片</li>
            <li className="leading-relaxed">• [中危] 邮箱修改功能存在CSRF漏洞，可导致账号劫持</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-lg p-4 mb-4">
          <h5 className="font-bold mb-3 flex items-center gap-2 text-red-700">
            <span>❌</span>
            反面示例
          </h5>
          <ul className="space-y-2 text-red-600">
            <li>• 发现一个XSS漏洞</li>
            <li>• 网站有漏洞</li>
            <li>• 越权问题</li>
          </ul>
        </div>

        <div className="bg-[#9FEF00]/10 rounded-lg p-4">
          <h5 className="font-bold mb-2 flex items-center gap-2 text-[#5a7a00]">
            <span>💡</span>
            核心建议
          </h5>
          <p className="text-[#5a7a00] leading-relaxed">
            让标题清晰描述漏洞，审核人员只看标题就能理解漏洞的类型、位置和严重程度，不要模糊化描述。
          </p>
        </div>
      </div>

      {/* 2. 漏洞摘要 */}
      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="text-lg font-bold mb-3">2. 漏洞摘要 (Summary)</h4>
        <p className="text-[#666] leading-relaxed mb-4">
          用2-4句话简洁描述漏洞的核心，只说明「漏洞是什么、在哪里」，不要在这里展开影响和复现步骤。
        </p>
        
        <div className="bg-[#fafafa] rounded-lg p-4 mb-4">
          <h5 className="font-bold mb-2 flex items-center gap-2">
            <span className="text-green-600">✅</span>
            示例
          </h5>
          <p className="text-[#666] leading-relaxed">
            在用户个人资料页存在存储型XSS漏洞。当用户在昵称中插入JavaScript代码时，代码会在所有访问该用户资料页的访客浏览器中执行，无需用户交互。
          </p>
        </div>

        <div className="bg-[#9FEF00]/10 rounded-lg p-4">
          <h5 className="font-bold mb-2 flex items-center gap-2 text-[#5a7a00]">
            <span>💡</span>
            核心建议
          </h5>
          <p className="text-[#5a7a00] leading-relaxed">
            清晰比长度更重要，不要堆砌细节，只讲核心的漏洞逻辑。
          </p>
        </div>
      </div>

      {/* 3. 复现步骤 */}
      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="text-lg font-bold mb-3">3. 复现步骤 (Steps to Reproduce)</h4>
        <p className="text-[#666] leading-relaxed mb-4">
          用编号的、一步一步的详细步骤，描述如何复现漏洞。必须足够详细，让审核人员不需要额外询问你，就能完整复现漏洞。
        </p>
        
        <div className="bg-[#fafafa] rounded-lg p-4 mb-4">
          <h5 className="font-bold mb-3 flex items-center gap-2">
            <span className="text-green-600">✅</span>
            标准复现步骤示例
          </h5>
          <ol className="list-decimal list-inside space-y-2 text-[#666]">
            <li className="leading-relaxed">使用攻击者账号A，访问 https://target.com/login 登录系统</li>
            <li className="leading-relaxed">进入「设置 {'>'} 个人资料」页面</li>
            <li className="leading-relaxed">在「昵称」输入框中填入Payload：
              <code className="bg-[#f0f0f0] px-1.5 py-0.5 rounded text-sm mx-1">
                &lt;script&gt;alert(document.cookie)&lt;/script&gt;
              </code>
            </li>
            <li className="leading-relaxed">点击「保存」按钮，保存个人资料</li>
            <li className="leading-relaxed">使用受害者账号B，在另一个浏览器中登录系统</li>
            <li className="leading-relaxed">访问攻击者账号A的个人资料页</li>
            <li className="leading-relaxed">可以看到JavaScript代码在受害者浏览器中执行，弹出Cookie信息</li>
          </ol>
        </div>

        <div className="bg-[#9FEF00]/10 rounded-lg p-4">
          <h5 className="font-bold mb-2 flex items-center gap-2 text-[#5a7a00]">
            <span>💡</span>
            核心建议
          </h5>
          <ul className="space-y-1 text-[#5a7a00] leading-relaxed">
            <li>• 假设审核人员完全不了解这个应用，不要省略关键步骤</li>
            <li>• 每个步骤只做一件事，逻辑清晰</li>
            <li>• 明确说明需要的账号、环境、前置条件</li>
          </ul>
        </div>
      </div>

      {/* 4. 漏洞危害 */}
      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="text-lg font-bold mb-3">4. 漏洞危害 (Impact)</h4>
        <p className="text-[#666] leading-relaxed mb-4">
          详细说明漏洞被利用后，会造成什么实际危害，重点讲「对业务和用户的影响」，而不是只讲技术概念。
        </p>
        
        <div className="bg-[#fafafa] rounded-lg p-4 mb-4">
          <h5 className="font-bold mb-2 flex items-center gap-2">
            <span className="text-green-600">✅</span>
            示例
          </h5>
          <p className="text-[#666] leading-relaxed">
            攻击者可以通过该漏洞窃取任意访问其资料页的用户的会话Cookie，进而完全接管用户账号。由于用户个人资料是公开可见的，该漏洞可以被大规模利用，影响成千上万的用户，造成严重的用户数据泄露和账号安全问题。
          </p>
        </div>

        <div className="bg-red-50 rounded-lg p-4 mb-4">
          <h5 className="font-bold mb-2 flex items-center gap-2 text-red-700">
            <span>❌</span>
            反面示例
          </h5>
          <ul className="space-y-2 text-red-600">
            <li>• 危害很大，很严重</li>
            <li>• 可以执行JS代码，造成XSS</li>
            <li>• 能接管账号（没有说明怎么接管、影响范围）</li>
          </ul>
        </div>

        <div className="bg-[#9FEF00]/10 rounded-lg p-4">
          <h5 className="font-bold mb-2 flex items-center gap-2 text-[#5a7a00]">
            <span>💡</span>
            核心建议
          </h5>
          <p className="text-[#5a7a00] leading-relaxed">
            不要夸大危害，也不要低估危害。要说明「谁能利用、利用后能做什么、影响多少人、对业务有什么损害」，而不是只讲技术术语。
          </p>
        </div>
      </div>

      {/* 5. 漏洞证明（修复显示不全的核心部分） */}
      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="text-lg font-bold mb-3">5. 漏洞证明 (Proof of Concept / PoC)</h4>
        <p className="text-[#666] leading-relaxed mb-4">
          用截图、视频、完整的HTTP请求/响应包，证明漏洞真实存在。这是报告的核心，没有有效的PoC，报告几乎一定会被拒绝。
        </p>
        
        <div className="bg-[#fafafa] rounded-lg p-4 mb-4">
          <h5 className="font-bold mb-3 flex items-center gap-2">
            <span className="text-green-600">✅</span>
            合格的PoC包含
          </h5>
          <ul className="space-y-3 text-[#666]">
            <li className="leading-relaxed">• 复现每一步的关键截图</li>
            <li className="leading-relaxed">• 完整的漏洞利用演示视频（比截图更有说服力）</li>
            <li className="leading-relaxed">• Burp Suite中完整的HTTP请求/响应包</li>
            <li className="leading-relaxed">• 漏洞触发后的效果截图/录屏</li>
          </ul>
        </div>

        <div className="bg-[#9FEF00]/10 rounded-lg p-4">
          <h5 className="font-bold mb-2 flex items-center gap-2 text-[#5a7a00]">
            <span>💡</span>
            核心建议
          </h5>
          <ul className="space-y-1 text-[#5a7a00] leading-relaxed">
            <li>• 视频比截图更有力，推荐用Loom、OBS录制简短的演示视频</li>
            <li>• 截图要清晰，关键信息要高亮，不要只截局部</li>
            <li>• 复杂的漏洞一定要配视频，降低审核人员的复现成本</li>
          </ul>
        </div>
      </div>

      {/* 6. 修复建议 */}
      <div className="border-l-4 border-[#9FEF00] pl-4">
        <h4 className="text-lg font-bold mb-3">6. 修复建议 (Remediation)</h4>
        <p className="text-[#666] leading-relaxed mb-4">
          给出具体的技术修复建议，说明如何从根本上修复这个漏洞。这部分是可选的，但会极大提升你的报告专业度，给厂商留下好印象。
        </p>
        
        <div className="bg-[#fafafa] rounded-lg p-4 mb-4">
          <h5 className="font-bold mb-3 flex items-center gap-2">
            <span className="text-green-600">✅</span>
            修复建议示例（XSS场景）
          </h5>
          <ul className="space-y-2 text-[#666]">
            <li className="leading-relaxed">• 在渲染用户输入内容前，使用DOMPurify等成熟的库对用户输入进行HTML净化</li>
            <li className="leading-relaxed">• 对输出到HTML中的特殊字符进行实体编码</li>
            <li className="leading-relaxed">• 配置合理的Content Security Policy (CSP) 响应头，限制未授权脚本的执行</li>
          </ul>
        </div>

        <div className="bg-[#9FEF00]/10 rounded-lg p-4">
          <h5 className="font-bold mb-2 flex items-center gap-2 text-[#5a7a00]">
            <span>💡</span>
            核心建议
          </h5>
          <p className="text-[#5a7a00] leading-relaxed">
            不要只说「过滤用户输入」这种空泛的建议，要给出具体的、可落地的技术方案，甚至可以给出代码示例，体现你的专业性。
          </p>
        </div>
      </div>
    </div>
  );
}

// 子模块2：10个高频错误
function CommonMistakes() {
  const mistakes = [
    {
      title: '1. 漏洞严重等级评估错误',
      desc: '比如把没有实际危害的Self-XSS标为「严重」，把低危的信息泄露标为高危。严重等级必须基于实际的业务影响，而不是漏洞类型本身，错误的定级会让审核人员觉得你不专业，甚至直接拒绝报告。'
    },
    {
      title: '2. 复现步骤不完整、不清晰',
      desc: '只说「我挖到了XSS」，却没有给出详细、可复现的步骤。审核人员无法复现漏洞，报告一定会被打回或拒绝。必须把复现步骤写得足够详细，让一个完全不了解这个应用的人，也能一步步复现漏洞。'
    },
    {
      title: '3. 对危害的凭空假设',
      desc: '没有实际验证，就声称「可以导致账号接管」「可以RCE」，但实际上根本没有对应的PoC和验证。必须基于实际可验证的效果描述危害，不要夸大、不要假设。'
    },
    {
      title: '4. 测试范围外的目标',
      desc: '报告的漏洞不在厂商指定的测试范围（Scope）内，比如厂商只允许测试*.target.com，你却报告了第三方服务商的漏洞。超出范围的报告100%会被拒绝，甚至可能导致你被平台封禁。'
    },
    {
      title: '5. 垃圾批量报告',
      desc: '一次性提交几十个低危、无实际危害的漏洞，而不是专注于高质量的高价值漏洞。这种行为会让厂商对你产生负面印象，甚至直接忽略你的所有报告。'
    },
    {
      title: '6. 没有PoC漏洞证明',
      desc: '只描述了漏洞，却没有任何截图、视频、请求包来证明漏洞真实存在。没有PoC的报告，审核人员无法验证，一定会被拒绝。'
    },
    {
      title: '7. 不专业的语言和态度',
      desc: '在报告或沟通中使用威胁性、攻击性的语言，或者态度傲慢、不配合。即使漏洞是真实的，不专业的沟通也会导致你的报告被拒绝，甚至被平台拉黑。'
    },
    {
      title: '8. 没有阅读平台规则',
      desc: '没有阅读厂商的漏洞赏金规则和限制，就开始测试，比如厂商明确禁止自动化扫描，你却用工具扫崩了站点，不仅报告被拒，还可能承担法律责任。'
    },
    {
      title: '9. 重复提交的漏洞',
      desc: '提交的漏洞已经被其他研究者提前报告了，甚至已经修复了。重复报告不会获得赏金，还会浪费你和审核人员的时间。提交前一定要先查一下厂商已经公开的漏洞报告。'
    },
    {
      title: '10. 没有说明测试环境',
      desc: '没有说明你使用的浏览器、操作系统、工具版本等信息，导致审核人员在不同环境下无法复现漏洞。尤其是一些和环境相关的漏洞，必须明确说明测试的环境信息。'
    }
  ];

  return (
    <div className="space-y-4">
      <p className="text-[#666] mb-4">
        这些是导致报告被拒绝、拿不到赏金的最常见错误，一定要在提交报告前逐一检查，避免踩坑。
      </p>
      {mistakes.map((item, idx) => (
        <div key={idx} className="bg-white border border-[#e5e5e5] rounded-lg p-4">
          <h4 className="font-bold mb-2">{item.title}</h4>
          <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

// 子模块3：五大核心拒稿原因
function RejectionReasons() {
  const reasons = [
    {
      title: '1. 信息类问题 / 不是漏洞',
      desc: '你报告的问题，实际上不是安全漏洞，或者是应用的预期行为，没有实际的安全危害。这是最常见的拒稿原因。',
      examples: [
        '缺少X-Frame-Options头，但没有实际的点击劫持利用场景',
        '响应头里的版本号泄露，没有对应的可利用漏洞',
        '没有办法传播给其他用户的Self-XSS',
        '登出接口的CSRF，没有实际危害',
        '非敏感接口的缺少限流，没有实际的业务影响'
      ],
      tip: '提交前一定要问自己：这个问题，攻击者能实际利用来做什么？有没有真实的安全影响？如果没有，就不要提交。'
    },
    {
      title: '2. 重复漏洞',
      desc: '这个漏洞已经被其他研究者提前报告了，即使你是独立发现的，也不会获得赏金。',
      examples: [
        '同一个接口、同一个类型的漏洞，已经被别人报告了',
        '同一个根因导致的漏洞，即使不同的接口，也会被判定为重复',
        '依赖库的已知CVE，厂商已经知晓'
      ],
      tip: '提交前先查看厂商已经公开的漏洞报告；发现新漏洞后，尽快整理报告提交，手慢无。'
    },
    {
      title: '3. 超出测试范围',
      desc: '漏洞所在的目标、漏洞类型，不在厂商明确允许的测试范围内。超出范围的报告，100%会被拒绝，甚至可能带来法律风险。',
      examples: [
        '测试了不在Scope列表里的域名、子域名',
        '报告了第三方服务商的漏洞，厂商无法修复',
        '测试了厂商明确禁止的漏洞类型',
        '未经允许测试了预发布/测试环境'
      ],
      tip: '测试前一定要完整、仔细阅读厂商的赏金规则，把Scope的边界搞清楚，保存好规则截图，绝对不要测试范围外的目标。'
    },
    {
      title: '4. 危害不足',
      desc: '漏洞确实存在，但实际的安全危害非常小，厂商认为不值得修复，也不会支付赏金。',
      examples: [
        '没有可信钓鱼场景的开放式重定向',
        '非敏感功能的CSRF（比如切换语言、主题）',
        '不涉及敏感数据的公开信息泄露',
        '没有实际危害的安全头缺失'
      ],
      tip: '专注于高价值、高危害的漏洞，不要浪费时间在低危、无影响的小问题上。如果要提交，一定要详细说明完整的利用场景和实际危害。'
    },
    {
      title: '5. 无法复现',
      desc: '厂商的安全团队按照你写的步骤，无法复现你描述的漏洞。这是非常常见的拒稿原因，大多是因为复现步骤写得不好、缺少关键信息，或者漏洞已经被修复了。',
      examples: [
        '复现步骤不清晰、不完整，缺少关键前置条件',
        '漏洞依赖特殊的环境、账号权限，你没有说明',
        '你提交报告前，漏洞已经被厂商修复了',
        'PoC不完整，无法验证漏洞'
      ],
      tip: '写复现步骤前，先自己用无痕浏览器按照步骤复现一遍，确保步骤完整；把测试环境、账号权限、PoC截图/视频都补充完整；提交前再确认一下漏洞还存在。'
    }
  ];

  return (
    <div className="space-y-6">
      <p className="text-[#666] mb-4">
        这5个原因，占了漏洞报告被拒绝的95%以上。提交报告前，一定要对照检查，避免踩坑。
      </p>
      {reasons.map((item, idx) => (
        <div key={idx} className="bg-white border border-[#e5e5e5] rounded-lg p-5">
          <h4 className="font-bold mb-3 text-lg">{item.title}</h4>
          <p className="text-[#666] mb-3 leading-relaxed">{item.desc}</p>
          
          <div className="bg-[#fafafa] rounded-lg p-4 mb-3">
            <h5 className="font-bold mb-2 text-sm">常见场景</h5>
            <ul className="space-y-1 text-sm text-[#666]">
              {item.examples.map((ex, i) => (
                <li key={i} className="leading-relaxed">• {ex}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#9FEF00]/10 rounded-lg p-4">
            <p className="text-sm text-[#5a7a00] leading-relaxed">
              <strong>避坑方法：</strong> {item.tip}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// 子模块4：黄金法则（做与不做）
function DoDontRules() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* 要做的事 */}
      <div className="bg-white rounded-lg border border-[#e5e5e5] p-6">
        <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
          ✅ 一定要做
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">测试前完整阅读厂商的漏洞赏金规则，明确测试范围和边界</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">把复现步骤写得足够详细，每一步都截图记录</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">只使用你自己的测试账号，不要测试真实用户的数据</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">如果发现了真实的敏感数据，立即停止测试并通知厂商</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">保存好你提交的每一份报告，做好记录</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">优先使用厂商提供的测试环境进行测试</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">准确计算CVSS评分，合理评估漏洞严重等级</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">尽可能附上漏洞演示视频，大幅提高审核通过率</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">和厂商沟通时，保持专业、耐心、礼貌的态度</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">从被拒绝的报告里学习，总结经验教训</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">使用专门的邮箱来做Bug Bounty，管理好各个平台的账号</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">给每个测试的厂商建单独的笔记，记录规则、范围、发现的问题</span>
          </li>
        </ul>
      </div>

      {/* 绝对不要做的事 */}
      <div className="bg-white rounded-lg border border-[#e5e5e5] p-6">
        <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
          ❌ 绝对不要做
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要测试真实用户的数据，更不要修改、删除、泄露用户数据</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要做DoS/DDoS攻击，不要用自动化工具扫崩站点</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要超出厂商规定的测试范围，哪怕是边缘的目标</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要夸大漏洞的危害和严重等级，实事求是</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要在厂商修复前，公开泄露任何漏洞细节</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要用威胁、勒索的语气和厂商沟通，哪怕你的漏洞是对的</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要重复提交同一个漏洞，也不要批量提交低质量的垃圾报告</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要直接复制粘贴其他研究者的报告，哪怕是同类型的漏洞</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要用不理解的自动化工具盲目扫描，你要为自己发出的每一个请求负责</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要只把扫描器的输出直接当报告提交，一定要自己验证和整理</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要通过平台外的渠道联系厂商，所有沟通都在官方平台内进行</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">•</span>
            <span className="text-[#666] text-sm leading-relaxed">不要索要特定金额的赏金，赏金的评估交给厂商和平台</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// 子模块5：高级技巧
function AdvancedTips() {
  const tips = [
    {
      title: '1. 准确计算CVSS评分',
      desc: '使用官方的CVSS计算器，准确计算漏洞的严重等级和评分。这不仅能体现你的专业性，也能让厂商更准确地评估漏洞的优先级，避免因为定级错误导致报告被拒或赏金被压低。'
    },
    {
      title: '2. 附上PoC演示视频',
      desc: '一段1分钟以内的漏洞演示视频，比几十张截图更有说服力。审核人员可以直观地看到漏洞的复现过程和危害，大幅提高报告的审核速度和通过率。推荐用Loom、OBS录制，视频要清晰、步骤明确，不要多余的内容。'
    },
    {
      title: '3. 讲清楚完整的攻击场景',
      desc: '不要只讲漏洞的技术原理，要详细描述「真实的攻击者会怎么利用这个漏洞」，完整的攻击链路是什么，最终会造成什么实际的业务和用户危害。比如一个看似普通的越权漏洞，要讲清楚攻击者能拿到什么数据，这些数据能做什么，影响多少用户。'
    },
    {
      title: '4. 先确认范围，再写报告',
      desc: '花10分钟再确认一遍漏洞所在的目标、漏洞类型，是否在厂商的允许范围内。很多人花了几天挖漏洞，最后因为超出范围被拒，完全白费功夫。'
    },
    {
      title: '5. 保持专业和尊重的态度',
      desc: '哪怕厂商的审核慢、定级和你预期不符，也要保持专业、礼貌的沟通。安全圈很小，你的口碑会影响你后续在各个平台的发展。专业的态度，也会让审核人员更愿意和你沟通，甚至给你更高的赏金。'
    },
    {
      title: '6. 提交前一定要自己审核一遍',
      desc: '报告写完后，自己以审核人员的视角读一遍：步骤是不是清晰？有没有错别字？PoC是不是完整？危害是不是讲清楚了？有没有遗漏的信息？很多低级错误，自己读一遍就能发现，避免因为细节问题导致报告被打回。'
    },
    {
      title: '7. 用Markdown格式化报告',
      desc: '几乎所有的漏洞赏金平台都支持Markdown语法。用标题、列表、代码块、引用格式化你的报告，让结构更清晰，更容易阅读。不要把所有内容堆在一个段落里，审核人员每天看很多报告，清晰的格式会让他们对你的报告更有好感。'
    },
    {
      title: '8. 关联业务影响，而不只是技术影响',
      desc: '厂商更关心漏洞对业务的影响，而不只是技术上的漏洞。比如数据泄露会影响用户信任、违反合规要求；账号接管会导致品牌声誉受损；业务逻辑漏洞会导致直接的经济损失。把这些讲清楚，你的报告价值会高很多，赏金也会更可观。'
    },
    {
      title: '9. 分析漏洞的根本原因',
      desc: '不要只说「这里有个漏洞」，还要分析漏洞为什么会出现，是代码写得有问题？还是配置错误？还是安全逻辑设计缺陷？分析根本原因，不仅能体现你的专业性，也能帮助厂商从根源上修复漏洞，避免同类问题再次出现，厂商会非常认可这种能力。'
    }
  ];

  return (
    <div className="space-y-4">
      <p className="text-[#666] mb-4">
        这些技巧能让你的报告从「合格」变成「优秀」，大幅提高通过率和赏金金额，也能让厂商记住你的专业性。
      </p>
      {tips.map((item, idx) => (
        <div key={idx} className="bg-white border border-[#e5e5e5] rounded-lg p-4">
          <h4 className="font-bold mb-2">{item.title}</h4>
          <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}