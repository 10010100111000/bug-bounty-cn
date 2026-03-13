'use client';

import { useState } from 'react';

export default function TermsTab() {
  const [searchTerm, setSearchTerm] = useState('');

  // 完整的术语列表
  const termsList = [
    // 基础通用术语
    {
      term: "Scope",
      translation: "测试范围",
      desc: "漏洞赏金计划中明确规定的、允许你进行安全测试的目标（域名、应用、功能等）。必须严格遵守，超出范围的测试可能带来法律风险和账号封禁。"
    },
    {
      term: "Out of Scope",
      translation: "禁止测试范围",
      desc: "项目中明确禁止测试的目标。对禁止范围内的目标进行测试，可能会导致你被项目封禁，甚至面临法律问题。"
    },
    {
      term: "Hall of Fame",
      translation: "安全名人堂",
      desc: "企业为感谢并表彰提交了有效漏洞的安全研究者，设立的公开荣誉榜单。是安全研究者职业履历的重要背书。"
    },
    {
      term: "Bounty",
      translation: "漏洞赏金",
      desc: "企业为你提交的有效漏洞，支付的现金奖励。赏金金额从几十美元的低危漏洞，到几十万美元的严重漏洞不等。"
    },
    {
      term: "Severity",
      translation: "漏洞风险等级",
      desc: "漏洞的危险程度分级，行业通用分为：Critical（严重）、High（高危）、Medium（中危）、Low（低危）、Info（信息级）。等级由漏洞的影响范围和利用难度决定。"
    },
    {
      term: "PoC (Proof of Concept)",
      translation: "漏洞概念验证/复现证明",
      desc: "用来证明漏洞真实存在、且可被利用的代码、步骤、截图或录屏。一份清晰的PoC是漏洞报告的核心，必须可复现。"
    },
    {
      term: "Triage",
      translation: "漏洞初审/分诊",
      desc: "企业安全团队对你提交的漏洞报告进行审核、验证、分级的过程。这个过程通常需要几天到几周不等。"
    },
    {
      term: "Duplicate",
      translation: "重复漏洞",
      desc: "你提交的漏洞，已经有其他研究者提前上报给企业了。通常重复的漏洞不会获得赏金，是新手最常遇到的挫折。"
    },
    {
      term: "Informative",
      translation: "信息级报告",
      desc: "你提交的内容，因为没有实际的安全影响，或者属于预期的正常行为，不符合赏金发放的标准，不会获得奖励。"
    },
    {
      term: "CVSS",
      translation: "通用漏洞评分系统",
      desc: "全球通用的漏洞风险等级评分标准，分值从0到10分。评分会综合考虑漏洞的影响范围、利用难度、权限要求等多个因素，是确定漏洞等级和赏金的核心依据。"
    },
    {
      term: "Recon",
      translation: "信息收集/侦察",
      desc: "测试的第一步，对目标进行全维度的信息收集。包括子域名枚举、端口扫描、技术栈识别、攻击面梳理、隐藏端点发现等。好的侦察决定了80%的漏洞发现概率。"
    },
    {
      term: "Attack Surface",
      translation: "攻击面",
      desc: "目标系统中所有可以被攻击的入口点。攻击面越大，发现漏洞的机会就越多。信息收集的核心目标，就是尽可能完整地梳理出目标的全部攻击面。"
    },
    {
      term: "Endpoint",
      translation: "端点",
      desc: "目标系统中的URL、API接口、功能点，都是潜在的测试目标。每一个端点，都是发现漏洞的潜在机会。"
    },
    {
      term: "Payload",
      translation: "攻击载荷",
      desc: "在漏洞测试中，你提交的、用来触发漏洞的代码或特殊数据。比如XSS攻击中的JavaScript代码，SQL注入中的SQL语句。"
    },
    {
      term: "VDP",
      translation: "漏洞披露计划",
      desc: "企业推出的负责任漏洞披露通道，通常没有现金奖励，只会提供精神上的认可，适合新手积累实战经验。"
    },
    {
      term: "BBP",
      translation: "漏洞赏金计划",
      desc: "企业推出的正式赏金计划，会为有效漏洞支付现金奖励，是安全研究者最主要的收入来源。"
    },
    {
      term: "WAF",
      translation: "Web应用防火墙",
      desc: "用来保护Web应用的安全系统，会拦截常见的攻击请求，可能会阻止你的测试请求。绕过WAF是漏洞赏金猎人的核心必备技能。"
    },
    {
      term: "Subdomain",
      translation: "子域名",
      desc: "主域名下的二级/多级域名，比如api.example.com、admin.example.com。子域名枚举是信息收集阶段的核心工作，很多漏洞藏在不起眼的子域名里。"
    },
    {
      term: "Escalation",
      translation: "漏洞危害升级",
      desc: "把一个简单的低危漏洞，升级成危害更大的高危漏洞。比如把一个普通的XSS漏洞，升级为完整的用户账号接管，从而获得更高的赏金。"
    },
    {
      term: "Chaining",
      translation: "漏洞利用链",
      desc: "把多个简单的小漏洞串联起来，实现更大的攻击影响。这是区分普通研究者和专业高手的高级技能。"
    },
    {
      term: "Impact",
      translation: "漏洞影响",
      desc: "漏洞会给企业和用户造成的实际安全危害。是决定漏洞等级和赏金金额的最核心因素。"
    },
    {
      term: "Responsible Disclosure",
      translation: "负责任的漏洞披露",
      desc: "安全行业的通用准则：先把漏洞私下上报给企业，给企业足够的时间去修复漏洞；在企业完成修复、并且明确授权可以公开之后，再对外披露漏洞的细节。"
    },
    {
      term: "Zero-Day",
      translation: "0day漏洞",
      desc: "之前从未被公开、也没有官方修复补丁的全新漏洞。是安全领域最危险、也价值最高的漏洞类型。"
    },
    {
      term: "CVE",
      translation: "通用漏洞披露编号",
      desc: "全球通用的公开漏洞唯一标识编号，格式比如CVE-2024-1234。每一个被收录的公开漏洞，都会获得一个唯一的CVE编号。"
    },
    {
      term: "Bypass",
      translation: "绕过",
      desc: "突破安全防护机制或过滤规则。比如绕过WAF、绕过XSS过滤、绕过权限校验。绕过能力是漏洞赏金猎人的核心竞争力。"
    },
    {
      term: "Race Condition",
      translation: "竞争条件漏洞",
      desc: "因为系统并发操作的时序处理不当，导致的安全漏洞。比如在同一时间发起两次请求，实现重复提现、重复领取福利等越权操作。"
    },
    {
      term: "TOCTOU",
      translation: "时间检查与时间使用漏洞",
      desc: "竞争条件漏洞的一种，发生在系统对资源的检查和使用之间，状态发生了变化。常见于文件系统、权限校验场景。"
    },
    {
      term: "Reputation",
      translation: "声誉/信誉分",
      desc: "漏洞赏金平台上的研究者信誉分。你提交的有效报告会提升你的声誉，被拒绝的低质量报告会降低你的声誉。高声誉是获得私有项目邀请的核心条件。"
    },
    {
      term: "Private Program",
      translation: "私有赏金计划",
      desc: "仅限受邀者参与的赏金计划。只有你在平台上有良好的声誉和成果，才会收到邀请。私有项目竞争小、赏金更高。"
    },
    {
      term: "Swag",
      translation: "周边礼品",
      desc: "企业赠送的周边礼品，比如T恤、贴纸、纪念品等。部分VDP项目会用周边礼品代替现金奖励，部分BBP项目也会在赏金之外赠送周边。"
    },
    {
      term: "Patch",
      translation: "补丁/安全更新",
      desc: "厂商发布的、用来修复已知漏洞的安全更新。跟踪补丁的更新内容，也可以帮你发现其他系统中类似的漏洞。"
    },
    {
      term: "Fuzzing",
      translation: "模糊测试",
      desc: "一种自动化测试技术，通过向应用发送大量随机、非预期的数据，来发现程序的错误和漏洞。常用工具比如ffuf、wfuzz。"
    },
    {
      term: "Lateral Movement",
      translation: "横向移动",
      desc: "在渗透测试中，从已经攻陷的系统，横向渗透到同一内网中的其他系统。是基础设施渗透测试的高级技能。"
    },
    {
      term: "Persistence",
      translation: "权限持久化",
      desc: "在攻陷系统后，使用各种技术保持对系统的访问权限，即便是系统重启后也能维持访问。是红队攻防中的核心概念。"
    },
    // 核心漏洞类型术语
    {
      term: "XSS",
      translation: "跨站脚本攻击",
      desc: "最常见的Web漏洞之一。攻击者可以往Web页面中注入恶意JavaScript代码，代码会在用户的浏览器中执行，可实现盗取Cookie、账号接管等攻击。分为反射型、存储型、DOM型三类。"
    },
    {
      term: "SQLi",
      translation: "SQL注入",
      desc: "高危Web漏洞。攻击者可以往应用的输入点中注入恶意SQL语句，操控后端数据库，实现数据泄露、数据篡改、甚至远程代码执行。"
    },
    {
      term: "CSRF",
      translation: "跨站请求伪造",
      desc: "Web漏洞类型，攻击者可以诱导已登录的用户，在不知情的情况下，在应用中执行非预期的操作。"
    },
    {
      term: "IDOR",
      translation: "不安全的直接对象引用",
      desc: "最常见的漏洞类型之一。因为系统没有做权限校验，攻击者可以通过修改请求中的对象ID，访问、修改其他用户的私有数据。"
    },
    {
      term: "SSRF",
      translation: "服务端请求伪造",
      desc: "高危漏洞类型。攻击者可以强制让服务端发起网络请求，访问内网资源、云服务元数据接口，甚至实现内网端口扫描、攻击内网系统。"
    },
    {
      term: "RCE",
      translation: "远程代码执行",
      desc: "最危险的高危漏洞之一。攻击者可以在目标服务器上执行任意系统命令，完全控制服务器。"
    },
    {
      term: "Account Takeover",
      translation: "账号接管",
      desc: "攻击者可以完全控制其他用户的账号，是赏金很高的高危漏洞类型，也是很多漏洞的最终利用目标。"
    },
    {
      term: "Deserialization",
      translation: "反序列化漏洞",
      desc: "高危漏洞，发生在应用将序列化的数据转换为对象的过程中。在Java、PHP、Python等语言中都可能出现，严重时可导致远程代码执行。"
    },
    {
      term: "Mass Assignment",
      translation: "批量赋值漏洞",
      desc: "常见于API和现代开发框架的漏洞，攻击者可以通过在请求中发送额外的数据，修改应用不允许用户修改的对象字段，比如修改用户权限、余额等。"
    },
    {
      term: "Open Redirect",
      translation: "开放重定向漏洞",
      desc: "漏洞允许攻击者诱导用户重定向到恶意网站，常用于钓鱼攻击、OAuth流程中的token窃取。"
    },
    {
      term: "JWT",
      translation: "JSON Web Token",
      desc: "一种常用的身份认证令牌，包含了加密的用户数据。常见的JWT漏洞包括签名未校验、弱算法、密钥注入等。"
    },
    {
      term: "OAuth",
      translation: "开放授权协议",
      desc: "一种常用的第三方授权标准，比如网站的微信登录、Google登录。配置不当的OAuth会导致账号接管、权限泄露等安全问题。"
    },
    {
      term: "SSTI",
      translation: "服务端模板注入",
      desc: "高危漏洞，攻击者可以往服务端模板中注入恶意代码，在服务端执行，最终导致远程代码执行。"
    },
    {
      term: "XXE",
      translation: "XML外部实体注入",
      desc: "高危漏洞，当应用解析恶意的XML输入时，攻击者可以读取服务器文件、发起SSRF请求、甚至执行代码。"
    },
    {
      term: "CORS",
      translation: "跨域资源共享",
      desc: "浏览器的跨域资源共享机制，配置不当的CORS会导致敏感数据泄露、跨域攻击等安全问题。"
    },
    {
      term: "CSP",
      translation: "内容安全策略",
      desc: "Web安全防护机制，通过指定浏览器允许加载的资源来源，来防御XSS等跨站脚本攻击。"
    },
    {
      term: "Clickjacking",
      translation: "点击劫持",
      desc: "界面伪装攻击，攻击者通过透明的层，诱导用户在不知情的情况下点击隐藏的按钮，执行非预期的操作。"
    },
    {
      term: "Subdomain Takeover",
      translation: "子域名接管",
      desc: "高危漏洞，当一个子域名解析到了已经失效的第三方服务（比如GitHub Pages、AWS S3），攻击者可以接管这个子域名，托管恶意内容、实施钓鱼攻击等。"
    },
    {
      term: "Command Injection",
      translation: "命令注入",
      desc: "高危漏洞，攻击者可以在应用中注入并执行系统命令，完全控制后端服务器，属于RCE的一种。"
    },
    {
      term: "Path Traversal",
      translation: "路径遍历漏洞",
      desc: "也叫目录穿越漏洞，攻击者可以通过构造特殊的路径字符，访问服务器上的任意文件，比如系统配置文件、源码等。"
    },
    {
      term: "File Upload",
      translation: "文件上传漏洞",
      desc: "高危漏洞，应用没有对用户上传的文件做严格的校验，攻击者可以上传恶意脚本文件，实现远程代码执行。"
    },
    {
      term: "Business Logic Flaw",
      translation: "业务逻辑漏洞",
      desc: "因为业务流程设计不当导致的安全漏洞，比如绕过支付流程、重复领取福利、越权操作等。这类漏洞无法被自动化扫描器发现，是赏金猎人的核心竞争力之一。"
    },
    {
      term: "Privilege Escalation",
      translation: "权限提升",
      desc: "攻击者从低权限账号，通过漏洞获得更高的权限，比如从普通用户升级为管理员，从普通系统用户升级为root/系统管理员权限。"
    },
    {
      term: "Information Disclosure",
      translation: "信息泄露",
      desc: "应用意外泄露了敏感信息，比如源码、服务器配置、用户数据、API密钥等。根据泄露信息的敏感程度，风险等级从低危到高危不等。"
    },
    {
      term: "Authentication Bypass",
      translation: "认证绕过",
      desc: "高危漏洞，攻击者可以绕过应用的登录认证机制，无需账号密码就能访问需要登录的功能，甚至直接登录其他用户的账号。"
    },
    {
      term: "Session Hijacking",
      translation: "会话劫持",
      desc: "攻击者窃取到用户的会话凭证（比如Cookie、Session ID），从而冒充该用户登录应用，实现账号接管。"
    }
  ];

  // 过滤搜索结果
  const filteredTerms = termsList.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bug Bounty 核心术语大全</h2>
        <p className="text-slate-400">
          覆盖70+网安行业核心术语，从基础概念到高级漏洞类型，完整翻译+专业详解，新手也能轻松看懂
        </p>
      </div>

      {/* 术语搜索框 */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索术语，比如 XSS、SQLi、IDOR..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-700/50 focus:outline-none focus:border-[#9FEF00] focus:ring-2 focus:ring-[#9FEF00]/20"
          />
        </div>
      </div>

      {/* 术语网格 */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredTerms.map((item, index) => (
          <div key={index} className="glass-panel p-5">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-lg font-bold font-mono">{item.term}</h3>
              <span className="text-sm font-medium bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 px-2 py-0.5 rounded-full">
                {item.translation}
              </span>
            </div>
            <p className="text-sm text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}