// app/tools/sections/tool-chains/page.tsx
import { ArrowRight, Search } from 'lucide-react';

// 完整工具链数据，基于原页面内容，无阿拉伯语
const toolChainsData = [
  {
    id: "recon-full",
    title: "完整信息收集工具链",
    desc: "从子域名发现到接口、参数收集的全流程，覆盖被动+主动信息收集",
    steps: [
      {
        step: 1,
        title: "子域名枚举",
        tools: ["Subfinder", "Amass", "Assetfinder"],
        command: "subfinder -d target.com -all | sort -u > subs.txt && amass enum -passive -d target.com >> subs.txt && assetfinder --subs-only target.com >> subs.txt && sort -u subs.txt -o subs.txt"
      },
      {
        step: 2,
        title: "过滤存活主机",
        tools: ["httpx"],
        command: "cat subs.txt | httpx -silent -status-code -title -tech-detect -o live_hosts.txt"
      },
      {
        step: 3,
        title: "深度爬虫",
        tools: ["katana", "gospider"],
        command: "katana -list live_hosts.txt -jc -d 3 -o katana_urls.txt && gospider -S live_hosts.txt -o gospider_output --js"
      },
      {
        step: 4,
        title: "收集历史URL",
        tools: ["waybackurls", "gau"],
        command: "cat subs.txt | waybackurls >> wayback.txt && cat subs.txt | gau >> wayback.txt && sort -u wayback.txt -o all_urls.txt"
      },
      {
        step: 5,
        title: "参数发现",
        tools: ["ParamSpider"],
        command: "paramspider -d target.com --exclude woff,css,js,png,jpg -o params.txt"
      }
    ]
  },
  {
    id: "vulnerability-scan",
    title: "漏洞扫描工具链",
    desc: "自动化扫描常见的高价值漏洞，覆盖XSS、SQLi、子域名接管等常见漏洞",
    steps: [
      {
        step: 1,
        title: "已知漏洞自动化扫描",
        tools: ["Nuclei"],
        command: "nuclei -l live_hosts.txt -severity critical,high -o nuclei_results.txt"
      },
      {
        step: 2,
        title: "XSS漏洞扫描",
        tools: ["Dalfox"],
        command: "cat params.txt | dalfox pipe -o xss_results.txt"
      },
      {
        step: 3,
        title: "SQL注入扫描",
        tools: ["sqlmap"],
        command: "sqlmap -m params_with_sql.txt --batch --random-agent --level 3"
      },
      {
        step: 4,
        title: "CRLF注入扫描",
        tools: ["crlfuzz"],
        command: "cat live_hosts.txt | crlfuzz -s -o crlf_results.txt"
      },
      {
        step: 5,
        title: "子域名接管扫描",
        tools: ["Subzy"],
        command: "subzy run --targets subs.txt --hide_fails"
      }
    ]
  },
  {
    id: "osint-chain",
    title: "OSINT信息收集工具链",
    desc: "从公开源收集目标的基础设施、敏感信息、代码泄露等情报",
    steps: [
      {
        step: 1,
        title: "基础设施发现",
        tools: ["Shodan"],
        command: "shodan search 'hostname:target.com' --fields ip_str,port,org,product"
      },
      {
        step: 2,
        title: "证书与域名发现",
        tools: ["Censys"],
        command: "censys search 'services.tls.certificates.leaf.names: target.com'"
      },
      {
        step: 3,
        title: "GitHub敏感信息搜索",
        tools: ["GitDorker"],
        command: "python3 GitDorker.py -tf tokens.txt -q target.com -d dorks/alldorksv3"
      },
      {
        step: 4,
        title: "JavaScript文件敏感信息分析",
        tools: ["SecretFinder"],
        command: "cat js_files.txt | while read url; do python3 SecretFinder.py -i $url -o cli; done"
      }
    ]
  }
];

export default function ToolChainsSection() {
  return (
    <div>
      {/* 板块标题 */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">工具链实战指南</h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          如何把零散的工具串联成完整的自动化工作流，覆盖从信息收集到漏洞检测的全流程。
        </p>
      </div>

      {/* 工具链卡片列表 */}
      <div className="space-y-8">
        {toolChainsData.map((chain) => (
          <div key={chain.id} className="bg-white rounded-lg border border-[#e5e5e5] p-6 hover:shadow-sm transition-all">
            {/* 工具链头部 */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-8">
              <div className="order-2 md:order-1">
                <p className="text-[#666]">{chain.desc}</p>
              </div>
              <div className="flex items-center gap-2 order-1 md:order-2">
                <h3 className="text-xl font-bold">{chain.title}</h3>
                <Search className="w-5 h-5 text-pink-400" />
              </div>
            </div>

            {/* 步骤列表 */}
            <div className="space-y-6">
              {chain.steps.map((step) => (
                <div key={step.step} className="relative">
                  {/* 右上角：步骤编号 + 工具标签 */}
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

                  {/* 步骤标题，带箭头 */}
                  <div className="mb-3 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <ArrowRight className="w-4 h-4 text-[#666] flex-shrink-0" />
                      <h4 className="text-lg font-bold">{step.title}</h4>
                    </div>
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
    </div>
  );
}