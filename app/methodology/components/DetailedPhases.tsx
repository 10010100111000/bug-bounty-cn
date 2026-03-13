// app/methodology/components/DetailedPhases.tsx
'use client';

import { useState } from 'react';

// 标签类型定义
type TabType = 'tasks' | 'tools' | 'commands' | 'tips' | 'mistakes';

// 阶段数据类型
interface Phase {
  step: string;
  title: string;
  desc: string;
  time: string;
  difficulty: string;
  tasks: string[];
  tools: string[];
  commands: string[];
  tips: string[];
  mistakes: string[];
}

// 完整14个阶段的全部数据，1:1还原原页面
const phasesData: Phase[] = [
  {
    step: "01",
    title: "信息收集 (Recon)",
    desc: "在开始测试前，收集尽可能多的关于目标的信息。这是最重要的阶段，决定了你的成功。好的信息收集占渗透测试成功的70%。",
    time: "总时间的 30-40%",
    difficulty: "难度：中等",
    tasks: [
      "使用多个工具枚举所有子域名",
      "验证存活主机并确定HTTP状态",
      "从Wayback Machine和Common Crawl收集历史URL",
      "检查JavaScript文件以发现隐藏的接口",
      "从crt.sh收集Whois和证书信息",
      "在Shodan和Censys中查找暴露的服务",
      "分析HTTP头和使用的技术（Wappalyzer）",
      "查找DNS区域传输漏洞",
      "检查SPF、DKIM、DMARC记录",
      "收集与目标相关的电子邮件地址",
      "在GitHub上查找源代码泄露",
      "检查暴露的云存储（S3、Azure Blobs、GCS）",
      "分析ASN范围和IP块",
      "查找收购和合并信息以发现额外资产"
    ],
    tools: [
      "subfinder", "amass", "findomain", "puredns", "httpx",
      "gau", "waybackurls", "katana", "nuclei", "Shodan",
      "Censys", "crt.sh", "Wappalyzer", "gitdumper", "s3scanner"
    ],
    commands: [
      "subfinder -d target.com -all -o subs.txt",
      "amass enum -passive -d target.com -o amass.txt",
      "cat subs.txt | httpx -silent -status-code -title -tech-detect -o live.txt",
      "cat live.txt | gau --subs | waybackurls | sort -u > all_urls.txt",
      "nuclei -l live.txt -t exposures/ -t misconfiguration/"
    ],
    tips: [
      "使用多个工具进行子域名枚举，不要只依赖一个",
      "不要忽略历史URL，很多旧接口仍然存在",
      "JavaScript文件往往包含隐藏的宝藏",
      "云存储配置错误是非常常见的高价值漏洞",
      "收购的公司资产往往被遗忘，安全防护更弱"
    ],
    mistakes: [
      "只使用一个工具进行子域名枚举",
      "跳过JavaScript文件分析",
      "忽略历史URL和存档数据",
      "不检查云存储配置",
      "急于进入漏洞测试，信息收集不充分"
    ]
  },
  {
    step: "02",
    title: "攻击面绘制 (Surface Mapping)",
    desc: "分析并绘制目标所有入口点和功能的完整地图。这一阶段建立对应用工作原理的深入理解。",
    time: "总时间的 15-20%",
    difficulty: "难度：中等",
    tasks: [
      "发现所有隐藏的目录和文件",
      "确定应用的不同功能并绘制其地图",
      "理解应用的结构和导航流程",
      "确定不同的输入点（表单、上传、API）",
      "检查robots.txt和sitemap.xml文件",
      "查找隐藏的管理面板",
      "确定使用的技术（框架、库、服务器）",
      "检查使用的WAF并确定其类型",
      "枚举端口和开放服务",
      "分析SSL/TLS配置",
      "检查HTTP安全头",
      "绘制身份认证流程的地图",
      "确定文件上传接口",
      "检查WebSocket连接"
    ],
    tools: [
      "ffuf", "gobuster", "dirsearch", "feroxbuster",
      "Burp Suite", "Wappalyzer", "WhatWeb", "Nmap",
      "SSL Labs", "wafw00f", "nikto"
    ],
    commands: [
      "ffuf -w wordlist.txt -u https://target.com/FUZZ -mc 200,403,401",
      "nmap -sV -sC target.com",
      "gobuster dir -u https://target.com -w wordlist.txt",
      "wafw00f https://target.com"
    ],
    tips: [
      "使用多个字典进行目录扫描",
      "手动浏览应用是最好的攻击面绘制方法",
      "注意API版本，旧版本往往更脆弱",
      "WAF识别可以帮你提前准备绕过方法",
      "绘制完整的身份认证流程图"
    ],
    mistakes: [
      "完全依赖自动化工具，不手动浏览",
      "忽略旧版本的API接口",
      "不检查WebSocket连接",
      "跳过SSL/TLS配置分析",
      "不记录发现的技术栈信息"
    ]
  },
  {
    step: "03",
    title: "参数发现 (Parameter Discovery)",
    desc: "发现应用中所有可以测试的参数和输入点。隐藏的参数往往是最容易存在漏洞的。",
    time: "总时间的 10-15%",
    difficulty: "难度：中等至困难",
    tasks: [
      "收集所有明显的GET/POST参数",
      "使用Arjun和x8发现隐藏参数",
      "检查API请求中的JSON body参数",
      "分析API接口并提取参数",
      "在JavaScript文件中查找参数",
      "检查表单action和隐藏字段",
      "发现可接受的自定义HTTP头",
      "查找调试参数（debug=true、test=1）",
      "分析GraphQL查询和变更",
      "检查WebSocket消息中的参数",
      "在URL片段中查找参数",
      "分析multipart表单数据"
    ],
    tools: [
      "Arjun", "x8", "ParamSpider", "Burp Suite",
      "Kiterunner", "GraphQL Voyager", "ffuf", "qsreplace"
    ],
    commands: [
      "arjun -u https://target.com/api/endpoint",
      "paramspider -d target.com",
      "cat urls.txt | qsreplace -a | httpx -silent",
      "x8 -u https://target.com/api"
    ],
    tips: [
      "隐藏参数往往能带来高价值漏洞",
      "不要忽略JSON和XML body中的参数",
      "调试参数可能会泄露敏感信息",
      "对比不同用户角色看到的参数差异",
      "旧版本API可能有更多参数"
    ],
    mistakes: [
      "只测试URL中的明显参数",
      "忽略API请求的body参数",
      "不尝试发现隐藏参数",
      "跳过GraphQL introspection分析",
      "不记录所有发现的参数供后续测试"
    ]
  },
  {
    step: "04",
    title: "JavaScript分析 (JS Analysis)",
    desc: "分析JavaScript文件以发现隐藏的接口、API密钥和敏感信息。现代应用（React、Angular、Vue）在JS中存储了大量有价值的信息。",
    time: "总时间的 10-15%",
    difficulty: "难度：中等至困难",
    tasks: [
      "收集应用的所有JavaScript文件",
      "在JS代码中查找隐藏的API接口",
      "发现API密钥、密钥和令牌",
      "确定新的未知入口点",
      "查找包含敏感信息的注释代码",
      "检查源代码中的硬编码凭证",
      "分析webpack source maps（如果存在）",
      "查找内部URL和测试环境",
      "检查错误处理和信息泄露",
      "分析前端的身份认证逻辑",
      "查找DOM-based XSS的sink和source",
      "检查postMessage处理器",
      "分析service workers"
    ],
    tools: [
      "getJS", "LinkFinder", "SecretFinder", "Retire.js",
      "Burp Suite", "SourceMapper", "js-beautify", "grep"
    ],
    commands: [
      "getJS -u https://target.com | sort -u > js_files.txt",
      "python3 linkfinder.py -i https://target.com/app.js -o cli",
      "python3 secretfinder.py -i https://target.com/bundle.js",
      "retire --url https://target.com"
    ],
    tips: [
      "Source map是金矿，可以还原完整源代码",
      "不要忽略注释掉的代码",
      "硬编码的云凭证非常常见",
      "DOM XSS的sink在JS中很容易发现",
      "测试环境的URL往往防护更弱"
    ],
    mistakes: [
      "跳过JavaScript文件分析",
      "不检查source map",
      "忽略postMessage处理器",
      "不使用工具手动分析JS",
      "找到几个接口就停止，不深入分析"
    ]
  },
  {
    step: "05",
    title: "内容发现 (Content Discovery)",
    desc: "找到未公开的隐藏文件、页面和资源。隐藏内容往往存在漏洞，因为它没有得到与公开内容相同级别的保护。",
    time: "总时间的 10-15%",
    difficulty: "难度：简单至中等",
    tasks: [
      "使用多个字典检查常见目录",
      "查找被遗忘的backup和config文件",
      "发现隐藏的管理界面",
      "检查被遗忘的开发文件",
      "查找.env、.git、.svn、.hg目录",
      "检查临时文件和编辑器备份",
      "查找暴露的数据库dump",
      "检查公开的log文件",
      "发现API文档（Swagger、OpenAPI）",
      "查找phpinfo.php和类似文件",
      "检查备份扩展名：.bak、.old、.orig、.copy",
      "查找composer.json、package.json、requirements.txt"
    ],
    tools: [
      "ffuf", "gobuster", "dirsearch", "feroxbuster",
      "Burp Suite", "git-dumper", "sitemap-parser", "robots-parser"
    ],
    commands: [
      "ffuf -w common.txt -u https://target.com/FUZZ -e .php,.bak,.old",
      "gobuster dir -u https://target.com -w big.txt -x php,html,txt",
      "git-dumper https://target.com/.git ./git_dump"
    ],
    tips: [
      ".git目录泄露是非常高价值的发现",
      "备份文件往往包含源代码或配置",
      "API文档可以帮你发现大量隐藏接口",
      "不要忽略常见的编辑器备份文件",
      "开发和测试环境往往没有认证"
    ],
    mistakes: [
      "只使用一个字典进行扫描",
      "跳过备份文件检查",
      "不查找.git和.env文件",
      "扫描速度过快被WAF拦截",
      "找到一个文件就停止，不继续深入"
    ]
  },
  {
    step: "06",
    title: "接口枚举 (Endpoint Enumeration)",
    desc: "收集并整理所有可测试的API接口和网页。这一阶段生成一份完整的可测试点清单。",
    time: "总时间的 5-10%",
    difficulty: "难度：中等",
    tasks: [
      "以不同深度级别完整爬取应用",
      "在手动浏览时记录所有API调用",
      "分析GraphQL schema并提取所有查询和变更",
      "发现版本化API并比较版本",
      "从WSDL文件收集SOAP接口",
      "检查WebSocket接口",
      "分析重定向链",
      "从所有页面收集form action",
      "从JavaScript中发现AJAX接口",
      "检查RSS/Atom feed中的接口",
      "分析sitemap.xml以发现额外页面"
    ],
    tools: [
      "Burp Suite Crawler", "katana", "gospider", "Kiterunner",
      "GraphQL Voyager", "Postman", "curl", "httpx"
    ],
    commands: [
      "katana -u https://target.com -d 5 -jc -fx -o endpoints.txt",
      "gospider -s https://target.com -o spider_output -c 10",
      "kiterunner -w wordlist.txt -u https://api.target.com"
    ],
    tips: [
      "创建两个不同权限的账号，对比能看到的接口差异",
      "旧版本API往往更脆弱",
      "GraphQL introspection可以发现所有接口",
      "记录每个接口的认证要求",
      "注意接口的HTTP方法差异"
    ],
    mistakes: [
      "只爬取不手动浏览",
      "忽略旧版本API",
      "不对比不同用户角色的接口访问差异",
      "跳过GraphQL分析",
      "不记录接口的完整信息"
    ]
  },
  {
    step: "07",
    title: "API测试",
    desc: "对API进行全面测试，查找认证、授权和数据泄露漏洞。API是现代应用中最常见的攻击点。",
    time: "总时间的 15-20%",
    difficulty: "难度：困难",
    tasks: [
      "在每个使用资源ID的接口上测试IDOR/BOLA",
      "检查认证缺陷和会话管理问题",
      "测试批量赋值/自动绑定漏洞",
      "检查敏感接口的速率限制",
      "测试响应中的过度数据暴露",
      "检查GraphQL introspection和批量攻击",
      "测试JWT漏洞（算法混淆、none算法、弱密钥）",
      "检查旧版本API的防护缺失",
      "通过API参数测试SSRF",
      "检查错误处理和信息泄露",
      "测试文件上传接口的RCE",
      "检查分页的数据泄露",
      "测试搜索功能的注入漏洞",
      "检查webhook接口"
    ],
    tools: [
      "Burp Suite", "Postman", "jwt_tool", "Autorize",
      "Kiterunner", "GraphQL Voyager", "sqlmap", "ffuf"
    ],
    commands: [
      "python3 jwt_tool.py -t eyJhbG... -M at",
      "sqlmap -u https://api.target.com/item?id=1 --dump",
      "ffuf -w ids.txt -u https://api.target.com/users/FUZZ -H \"Authorization: Bearer token\""
    ],
    tips: [
      "API是当前Bug Bounty中漏洞最多的地方",
      "过度数据暴露非常常见且影响严重",
      "始终测试JWT的算法混淆漏洞",
      "对比v1、v2、v3版本API的差异",
      "IDOR在API中几乎无处不在"
    ],
    mistakes: [
      "只测试Web界面，忽略API",
      "不检查JWT安全性",
      "忽略旧版本API",
      "不测试批量赋值漏洞",
      "接受API响应中的所有数据，不检查过度暴露"
    ]
  },
  {
    step: "08",
    title: "访问控制测试",
    desc: "对访问控制和权限漏洞进行系统化测试。这类漏洞是OWASP Top 10中最常见、风险最高的漏洞之一。",
    time: "总时间的 10-15%",
    difficulty: "难度：困难",
    tasks: [
      "在所有用户资源（个人资料、文件、订单）中测试IDOR",
      "测试垂直权限提升（普通用户 → 管理员）",
      "检查水平访问控制（用户A → 用户B的资源）",
      "测试会话管理和会话固定",
      "检查敏感操作中的CSRF",
      "测试路径遍历以访问系统文件",
      "检查受保护页面的强制浏览",
      "测试多步骤操作的绕过",
      "检查基于referrer的访问控制",
      "测试基于IP的限制",
      "检查访问控制中的参数篡改",
      "用不同模式测试不安全的直接对象引用"
    ],
    tools: [
      "Burp Suite", "Autorize", "AutoRepeater", "Burp Repeater",
      "ffuf", "curl", "Postman"
    ],
    commands: [
      "ffuf -w user_ids.txt -u https://target.com/api/orders/FUZZ -H \"Cookie: session=victim_cookie\"",
      "curl -H \"Authorization: Bearer low_user_token\" https://target.com/api/admin/users"
    ],
    tips: [
      "为每个角色创建单独的账号，对比访问权限",
      "使用Autorize插件自动化测试权限越权",
      "不要只测试GET请求，也要测试PUT/POST/DELETE",
      "关注资源ID的所有变化形式",
      "测试多步骤流程中的权限校验缺失"
    ],
    mistakes: [
      "只测试一个接口的IDOR，不全面覆盖",
      "忽略垂直权限提升测试",
      "不测试HTTP方法的绕过",
      "只检查状态码，不检查响应内容",
      "不测试多步骤操作的绕过"
    ]
  },
  {
    step: "09",
    title: "业务逻辑测试",
    desc: "测试与业务逻辑相关的漏洞，而不仅仅是技术漏洞。这类漏洞无法通过自动化工具发现，需要创造性思维。",
    time: "总时间的 10-15%",
    difficulty: "难度：非常困难",
    tasks: [
      "测试购买操作中的价格操纵",
      "尝试绕过支付和结账流程的步骤",
      "测试优惠券/折扣滥用和重复使用",
      "检查数量和价格中的负值",
      "测试多步骤操作中的工作流绕过",
      "检查金融操作和转账中的竞争条件",
      "测试功能滥用和合法功能的恶意使用",
      "检查推荐/邀请系统的操纵",
      "测试订阅/试用滥用",
      "检查通知/邮件轰炸",
      "测试账号合并/关联漏洞",
      "测试双因素认证绕过",
      "测试文件共享权限"
    ],
    tools: [
      "Burp Suite", "Turbo Intruder", "Repeater", "Intruder",
      "Postman", "curl"
    ],
    commands: [
      "Turbo Intruder 用于竞争条件测试",
      "Burp Repeater 手动修改价格、数量参数",
      "并发请求测试竞争条件"
    ],
    tips: [
      "先完全理解业务流程，再尝试绕过",
      "思考开发者没有考虑到的边缘场景",
      "金融操作是竞争条件的高发区",
      "多步骤流程中，尝试跳过中间步骤直接访问最终步骤",
      "关注业务限制的校验是在前端还是后端"
    ],
    mistakes: [
      "只关注技术漏洞，忽略业务逻辑",
      "不理解业务流程就开始测试",
      "忽略多步骤流程的测试",
      "不测试竞争条件",
      "只测试正常流程，不尝试异常场景"
    ]
  },
  {
    step: "10",
    title: "注入测试 (Injection Testing)",
    desc: "测试所有类型的注入漏洞：XSS、SQL注入、命令注入等。这类漏洞仍然是最危险、最常见的漏洞之一。",
    time: "总时间的 10-15%",
    difficulty: "难度：中等至困难",
    tasks: [
      "在每个在响应中反射的参数中测试反射型XSS",
      "在每个会被存储并后续展示的输入中测试存储型XSS",
      "在JavaScript代码中检查DOM-based XSS",
      "在每个与数据库交互的参数中测试SQL注入",
      "使用基于时间和布尔的方法测试盲SQL注入",
      "在与系统交互的参数中测试命令注入",
      "测试服务端模板注入（SSTI）",
      "在认证功能中测试LDAP注入",
      "在MongoDB应用中测试NoSQL注入",
      "在接受XML的接口中测试XML/XXE注入",
      "检查头注入（Host、CRLF）",
      "在接受URL的参数中测试SSRF"
    ],
    tools: [
      "Burp Suite", "Dalfox", "sqlmap", "xsstrike",
      "commix", "SSRFmap", "gopherus", "Burp Collaborator"
    ],
    commands: [
      "dalfox url https://target.com/search?q=test -b your-collaborator.com",
      "sqlmap -u https://target.com/product.php?id=1 --dbs",
      "commix -u https://target.com/ping.php?ip=127.0.0.1"
    ],
    tips: [
      "对每个输入点都测试所有类型的注入",
      "关注不同上下文的编码和绕过方法",
      "使用Burp Collaborator检测盲注漏洞",
      "不要只依赖自动化工具，手动测试更重要",
      "关注不同的注入场景，比如JSON body中的注入"
    ],
    mistakes: [
      "只测试GET参数，忽略POST body、JSON、头参数",
      "完全依赖自动化工具，不手动验证",
      "忽略盲注场景",
      "不尝试WAF绕过",
      "只测试一种注入类型，忽略其他可能性"
    ]
  },
  {
    step: "11",
    title: "报告编写 (Reporting)",
    desc: "用专业、清晰、有说服力的报告记录发现的漏洞。好的报告能提高漏洞被接受的概率，加快审核流程。",
    time: "总时间的 5-10%",
    difficulty: "难度：中等",
    tasks: [
      "编写清晰、具体的标题，准确描述漏洞",
      "清晰描述漏洞和安全上下文",
      "详细、可复现地记录利用步骤",
      "添加可视化的PoC（截图+视频）",
      "说明漏洞对用户和公司的安全影响",
      "提出清晰、可落地的修复方案",
      "准确计算CVSS评分",
      "提交前至少两次审核报告",
      "确认PoC在干净环境中也能运行",
      "添加合适的参考资料和CWE ID"
    ],
    tools: [
      "Markdown编辑器", "录屏工具", "Burp Suite Logger",
      "CVSS计算器", "截图工具", "拼写检查工具"
    ],
    commands: [],
    tips: [
      "用一句话写清楚漏洞的核心信息，作为报告标题",
      "复现步骤必须足够详细，确保任何人都能按照步骤复现漏洞",
      "从业务视角说明漏洞的影响，而不仅仅是技术层面的描述",
      "修复方案要具体、可落地，而不是泛泛而谈",
      "保持报告的专业性和简洁性"
    ],
    mistakes: [
      "标题模糊不清，无法一眼看出漏洞",
      "复现步骤不详细，审核人员无法复现",
      "夸大漏洞的影响和风险等级",
      "没有提供清晰的修复方案",
      "报告中有拼写错误、格式混乱，影响专业性"
    ]
  },
  {
    step: "12",
    title: "协作与沟通 (Collaboration)",
    desc: "与安全团队和开发者协作，确保漏洞被修复。专业的沟通能建立良好的声誉，打开更多机会的大门。",
    time: "持续进行",
    difficulty: "难度：中等",
    tasks: [
      "定期跟进已提交的报告",
      "快速、礼貌地回复安全团队的询问",
      "根据要求提供额外的信息",
      "与开发者协作理解修复方案",
      "参与Bug Bounty社区",
      "与其他研究者分享知识",
      "在安全领域建立专业人脉",
      "参与现场黑客活动",
      "编写writeups记录你的经验",
      "为开源工具贡献代码"
    ],
    tools: [
      "邮件客户端", "项目平台沟通系统", "Discord/Telegram社区",
      "Twitter/LinkedIn", "博客平台", "GitHub"
    ],
    commands: [],
    tips: [
      "保持沟通的专业性和礼貌，即使报告被拒绝",
      "快速响应安全团队的问题，加快审核流程",
      "分享知识能帮助你建立声誉，也能加深自己的理解",
      "积极参与社区，能获得更多的机会和信息",
      "即使是免费的VDP项目，也要保持专业的态度"
    ],
    mistakes: [
      "提交报告后频繁催促审核，引起反感",
      "沟通态度不好，与安全团队发生冲突",
      "不回复安全团队的询问，导致报告被关闭",
      "泄露未公开的漏洞细节，违反项目规则",
      "不参与社区，闭门造车"
    ]
  },
  {
    step: "13",
    title: "专业化 (Specialization)",
    desc: "专注于特定类型的漏洞或技术。专家能比泛研究者发现更多、更深的漏洞。",
    time: "持续投入",
    difficulty: "难度：高级",
    tasks: [
      "根据你的兴趣和优势选择专业领域",
      "深入研究特定类型的漏洞",
      "构建你自己的专用工具",
      "在你的专业领域撰写研究论文和博客",
      "作为演讲者参加安全会议",
      "为你的专业领域开发专门的方法论",
      "搭建专门的训练实验室环境",
      "跟进你专业领域的最新研究"
    ],
    tools: [
      "你自己开发的专用工具", "专业领域的专用工具",
      "实验室环境", "研究文档", "博客平台"
    ],
    commands: [],
    tips: [
      "选择你真正感兴趣的领域，而不是只看热门程度",
      "深度比广度更重要，尤其是在高级阶段",
      "构建工具的过程能让你对漏洞有更深的理解",
      "分享你的研究能建立你在该领域的权威",
      "持续跟进最新的研究，保持你的专业优势"
    ],
    mistakes: [
      "什么都懂一点，但什么都不精通",
      "频繁更换专业领域，无法深入",
      "只使用别人的工具，不自己研究底层原理",
      "不分享你的研究，无法建立声誉",
      "不持续学习，跟不上技术的更新"
    ]
  },
  {
    step: "14",
    title: "持续学习 (Continuous Learning)",
    desc: "网络安全世界在不断变化。持续学习不是选择，而是保持领先的必要条件。",
    time: "每周20%的时间",
    difficulty: "难度：持续进行",
    tasks: [
      "每天完成PortSwigger Web Security Academy的挑战",
      "每周参加CTFs提升技能",
      "每天阅读公开的writeups和报告",
      "跟进最新的CVE和新发现的漏洞",
      "学习新的技术和现代框架",
      "参加安全网络研讨会和会议",
      "阅读网络安全相关书籍",
      "持续构建和更新你的方法论",
      "尝试和评估新的工具",
      "定期参加Bug Bounty项目",
      "用Python或Go编写自己的工具",
      "研究开源应用的源代码"
    ],
    tools: [
      "PortSwigger Academy", "CTF平台", "HackTheBox",
      "TryHackMe", "GitHub", "技术博客", "安全会议视频"
    ],
    commands: [],
    tips: [
      "每天固定留出学习时间，积少成多",
      "动手实践比只看文章更有效",
      "阅读别人的writeup，思考你会不会发现这个漏洞",
      "学习编程，能让你的能力提升一个量级",
      "加入学习社区，和同行一起成长"
    ],
    mistakes: [
      "只做不学习，陷入重复的工作",
      "只学不做，无法把知识转化为能力",
      "不跟进最新的技术和漏洞，知识过时",
      "害怕新的领域，停留在舒适区",
      "不记录和总结你的学习成果"
    ]
  }
];

export default function DetailedPhases() {
  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">14个专业方法论阶段</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          每个阶段都包含任务、工具、命令、技巧和常见错误。按顺序执行，但在各阶段之间保持灵活性。
        </p>
      </div>

      <div className="space-y-8">
        {phasesData.map((phase) => (
          <PhaseCard key={phase.step} phase={phase} />
        ))}
      </div>
    </section>
  );
}

// 带标签切换的阶段卡片组件，完全还原原页面设计
function PhaseCard({ phase }: { phase: Phase }) {
  // 管理当前激活的标签
  const [activeTab, setActiveTab] = useState<TabType>('tasks');

  // 标签配置
  const tabs = [
    { id: 'tasks', label: '核心任务' },
    { id: 'tools', label: '常用工具' },
    { id: 'commands', label: '常用命令' },
    { id: 'tips', label: '实战技巧' },
    { id: 'mistakes', label: '常见错误' },
  ] as const;

  return (
    <div className="bg-white rounded-lg border border-[#e5e5e5] p-6 hover:shadow-sm transition-all">
      {/* 阶段头部 */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#9FEF00] text-[#111] text-lg font-bold">
              {phase.step}
            </span>
            <h4 className="text-xl font-bold">{phase.title}</h4>
          </div>
          <p className="text-[#666] max-w-3xl">{phase.desc}</p>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span className="text-sm font-medium text-[#666]">{phase.time}</span>
          <span className="text-sm font-medium text-[#666]">{phase.difficulty}</span>
        </div>
      </div>

      {/* 标签栏 */}
      <div className="flex flex-wrap gap-1 mb-6 border-b border-[#e5e5e5]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
              activeTab === tab.id
                ? 'border-b-2 border-[#9FEF00] text-[#111]'
                : 'text-[#666] hover:text-[#111]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 标签内容区域 */}
      <div className="min-h-[200px]">
        {/* 核心任务 */}
        {activeTab === 'tasks' && (
          <div className="grid md:grid-cols-2 gap-3">
            {phase.tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-[#fafafa] border border-[#f0f0f0]">
                <span className="text-[#9FEF00] mt-0.5 flex-shrink-0">✓</span>
                <span className="text-sm">{task}</span>
              </div>
            ))}
          </div>
        )}

        {/* 常用工具 */}
        {activeTab === 'tools' && (
          <div className="flex flex-wrap gap-2">
            {phase.tools.map((tool, i) => (
              <span key={i} className="px-3 py-2 bg-[#f5f5f5] rounded-lg text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* 常用命令 */}
        {activeTab === 'commands' && (
          <div className="space-y-3">
            {phase.commands.length === 0 ? (
              <p className="text-[#666]">该阶段无常用命令</p>
            ) : (
              phase.commands.map((cmd, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto">
                  <code className="text-[#9FEF00] text-sm whitespace-pre-wrap break-all">
                    {cmd}
                  </code>
                </div>
              ))
            )}
          </div>
        )}

        {/* 实战技巧 */}
        {activeTab === 'tips' && (
          <ul className="space-y-2">
            {phase.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 p-3 rounded-lg bg-[#9FEF00]/5 border border-[#9FEF00]/10">
                <span className="text-[#5a7a00] mt-0.5 flex-shrink-0 font-bold">💡</span>
                <span className="text-[#333]">{tip}</span>
              </li>
            ))}
          </ul>
        )}

        {/* 常见错误 */}
        {activeTab === 'mistakes' && (
          <ul className="space-y-2">
            {phase.mistakes.map((mistake, i) => (
              <li key={i} className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-100">
                <span className="text-red-600 mt-0.5 flex-shrink-0 font-bold">⚠️</span>
                <span className="text-red-700">{mistake}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}