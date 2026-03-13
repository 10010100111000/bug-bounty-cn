// app/tools/components/ToolsList.tsx
'use client';

import { useState, useMemo } from 'react';
import { Search, ExternalLink, Terminal, Info, Shield } from 'lucide-react';

// 标签类型定义
type ToolTabType = 'usage' | 'install' | 'related';

// 完整的34款工具数据，1:1还原原页面内容，适配标签结构
const toolsData = [
  {
    id: "burp-suite",
    name: "Burp Suite Community",
    category: "Proxy",
    free: true,
    shortDesc: "Bug Bounty核心工具，用于拦截、分析、修改HTTP/HTTPS流量的代理工具",
    // 标签页内容
    usage: {
      why: "不可或缺，每个Bug Bounty研究者都会用。让你可以查看和修改浏览器与服务器之间的每一个请求。",
      when: "测试的所有阶段——从信息收集到漏洞利用。免费版对于入门来说完全足够。"
    },
    install: "https://portswigger.net/burp/communitydownload",
    alternatives: ["OWASP ZAP (完全免费)", "Mitmproxy", "Caido"],
    officialSite: "https://portswigger.net/burp"
  },
  {
    id: "subfinder",
    name: "Subfinder",
    category: "Recon",
    free: true,
    shortDesc: "快速子域名发现工具，通过多个被动源获取子域名",
    usage: {
      why: "扩大攻击面——每个子域名都可能包含独特的漏洞。",
      when: "在信息收集初期，发现目标的所有子域名。"
    },
    install: "go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest",
    alternatives: ["Amass", "Assetfinder", "chaos-client"],
    officialSite: "https://github.com/projectdiscovery/subfinder"
  },
  {
    id: "httpx",
    name: "httpx",
    category: "Recon",
    free: true,
    shortDesc: "快速检测存活子域名，收集HTTP响应信息的工具",
    usage: {
      why: "收集完子域名后，你需要知道哪些是存活的、有响应的。",
      when: "在subfinder/amass之后，过滤存活主机。"
    },
    install: "go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest",
    alternatives: ["httprobe", "aquatone"],
    officialSite: "https://github.com/projectdiscovery/httpx"
  },
  {
    id: "nuclei",
    name: "Nuclei",
    category: "Scanning",
    free: true,
    shortDesc: "快速、可定制的漏洞扫描器，基于社区编写的模板",
    usage: {
      why: "快速自动发现大量已知漏洞。",
      when: "发现存活主机后，快速扫描已知漏洞。"
    },
    install: "go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest",
    alternatives: ["Jaeles", "dalfox (仅XSS)"],
    officialSite: "https://github.com/projectdiscovery/nuclei"
  },
  {
    id: "ffuf",
    name: "ffuf",
    category: "Scanning",
    free: true,
    shortDesc: "超快速的模糊测试工具，用于发现隐藏的目录、文件和参数",
    usage: {
      why: "极致的速度让它成为内容发现的最佳选择。",
      when: "发现目标上隐藏的页面、路径和文件。"
    },
    install: "go install github.com/ffuf/ffuf/v2@latest",
    alternatives: ["dirsearch", "gobuster", "feroxbuster"],
    officialSite: "https://github.com/ffuf/ffuf"
  },
  {
    id: "amass",
    name: "Amass",
    category: "Recon",
    free: true,
    shortDesc: "高级攻击面绘制和主动子域名枚举工具",
    usage: {
      why: "结合被动和主动源，实现最全面的子域名发现。",
      when: "深度信息收集中，当你想要尽可能全面的结果时。"
    },
    install: "go install -v github.com/owasp-amass/amass/v4/...@master",
    alternatives: ["Subfinder", "chaos-client"],
    officialSite: "https://github.com/owasp-amass/amass"
  },
  {
    id: "sqlmap",
    name: "sqlmap",
    category: "Exploitation",
    free: true,
    shortDesc: "自动化检测和利用SQL注入漏洞的工具",
    usage: {
      why: "大幅节省发现和验证SQLi漏洞的时间。",
      when: "当你怀疑存在SQLi，仅用于验证和证明——不要完全依赖它进行深度利用。"
    },
    install: "pip3 install sqlmap  # 或 sudo apt install sqlmap",
    alternatives: ["Ghauri", "NoSQLMap (针对NoSQL)"],
    officialSite: "https://github.com/sqlmapproject/sqlmap"
  },
  {
    id: "waybackurls",
    name: "waybackurls",
    category: "Recon",
    free: true,
    shortDesc: "从Wayback Machine和AlienVault OTX获取历史URL的工具",
    usage: {
      why: "能发现可能仍然存在的旧接口和参数。",
      when: "信息收集阶段，发现隐藏或旧的URL。"
    },
    install: "go install github.com/tomnomnom/waybackurls@latest",
    alternatives: ["gau (GetAllURLs)", "hakrawler"],
    officialSite: "https://github.com/tomnomnom/waybackurls"
  },
  {
    id: "gau",
    name: "gau",
    category: "Recon",
    free: true,
    shortDesc: "GetAllURLs，从多源收集历史URL的工具",
    usage: {
      why: "waybackurls的替代方案，更多源、更全面的结果。",
      when: "URL发现阶段，收集尽可能多的接口。"
    },
    install: "go install github.com/lc/gau/v2/cmd/gau@latest",
    alternatives: ["waybackurls", "hakrawler"],
    officialSite: "https://github.com/lc/gau"
  },
  {
    id: "katana",
    name: "katana",
    category: "Recon",
    free: true,
    shortDesc: "下一代网页爬虫，支持无头浏览器JS渲染",
    usage: {
      why: "能在现代JavaScript SPA应用中发现隐藏的接口。",
      when: "当你需要对SPA和现代应用进行深度爬取时。"
    },
    install: "go install github.com/projectdiscovery/katana/cmd/katana@latest",
    alternatives: ["hakrawler", "gospider"],
    officialSite: "https://github.com/projectdiscovery/katana"
  },
  {
    id: "nmap",
    name: "Nmap",
    category: "Scanning",
    free: true,
    shortDesc: "全球最流行的端口和服务扫描工具",
    usage: {
      why: "发现服务器上开放的端口和运行的服务。",
      when: "信息收集中，了解目标的基础设施。"
    },
    install: "sudo apt install nmap  # 或 sudo brew install nmap",
    alternatives: ["Masscan (更快)", "RustScan"],
    officialSite: "https://nmap.org"
  },
  {
    id: "assetfinder",
    name: "assetfinder",
    category: "Recon",
    free: true,
    shortDesc: "简单快速的子域名发现工具，从多源获取子域名",
    usage: {
      why: "快速轻量，完美适合快速入门。",
      when: "初期快速搜索子域名。"
    },
    install: "go install github.com/tomnomnom/assetfinder@latest",
    alternatives: ["subfinder", "amass"],
    officialSite: "https://github.com/tomnomnom/assetfinder"
  },
  {
    id: "dirsearch",
    name: "dirsearch",
    category: "Scanning",
    free: true,
    shortDesc: "内容发现工具，用于搜索隐藏的目录和文件",
    usage: {
      why: "发现可能包含敏感信息或漏洞的隐藏页面。",
      when: "对每个存活子域名检查隐藏内容。"
    },
    install: "pip3 install dirsearch",
    alternatives: ["ffuf", "gobuster", "feroxbuster"],
    officialSite: "https://github.com/maurosoria/dirsearch"
  },
  {
    id: "seclists",
    name: "SecLists",
    category: "Wordlists",
    free: true,
    shortDesc: "全球最大、最全面的开源安全测试字典集合",
    usage: {
      why: "好的字典在内容发现和暴力破解的结果中起到决定性作用。",
      when: "配合所有需要字典的工具——ffuf、sqlmap、dirsearch等。"
    },
    install: "git clone https://github.com/danielmiessler/SecLists.git",
    alternatives: ["FuzzDB", "assetnote wordlists"],
    officialSite: "https://github.com/danielmiessler/SecLists"
  },
  {
    id: "caido",
    name: "Caido",
    category: "Proxy",
    free: true,
    shortDesc: "Burp Suite的现代替代方案，运行在浏览器中，快速轻量",
    usage: {
      why: "基础版完全免费，界面比Burp社区版更简洁。",
      when: "Burp Suite的替代或补充，特别适合新手。"
    },
    install: "https://caido.io/download",
    alternatives: ["Burp Suite Community", "OWASP ZAP"],
    officialSite: "https://caido.io"
  },
  {
    id: "dalfox",
    name: "Dalfox",
    category: "Exploitation",
    free: true,
    shortDesc: "高级XSS漏洞自动化发现和利用工具",
    usage: {
      why: "专注于XSS，能发现手动难以检测的复杂模式，如DOM-based和反射型XSS。",
      when: "收集带参数的URL后，扫描XSS漏洞。"
    },
    install: "go install github.com/hahwul/dalfox/v2@latest",
    alternatives: ["XSStrike", "kxss", "Nuclei (XSS templates)"],
    officialSite: "https://github.com/hahwul/dalfox"
  },
  {
    id: "gospider",
    name: "Gospider",
    category: "Recon",
    free: true,
    shortDesc: "Go编写的快速网页爬虫，用于发现接口、链接和子域名",
    usage: {
      why: "补充其他爬虫工具，发现网站中隐藏的链接。",
      when: "信息收集阶段，收集尽可能多的URL和链接。"
    },
    install: "go install github.com/jaeles-project/gospider@latest",
    alternatives: ["katana", "hakrawler", "LinkFinder"],
    officialSite: "https://github.com/jaeles-project/gospider"
  },
  {
    id: "commix",
    name: "Commix",
    category: "Exploitation",
    free: true,
    shortDesc: "自动化检测和利用命令注入漏洞的工具",
    usage: {
      why: "命令注入是最危险的漏洞之一，可能导致服务器完全RCE。",
      when: "当你怀疑输入被传递给系统命令时。"
    },
    install: "git clone https://github.com/commixproject/commix.git && cd commix && python3 setup.py install",
    alternatives: ["Manual testing", "Nuclei (command injection templates)"],
    officialSite: "https://github.com/commixproject/commix"
  },
  {
    id: "ssrfmap",
    name: "SSRFmap",
    category: "Exploitation",
    free: true,
    shortDesc: "自动化检测和利用SSRF漏洞的工具",
    usage: {
      why: "SSRF是Bug Bounty中高价值的漏洞，可能导致内部数据读取。",
      when: "当你发现接受URL或与外部服务器交互的接口时。"
    },
    install: "git clone https://github.com/swisskyrepo/SSRFmap.git && cd SSRFmap && pip3 install -r requirements.txt",
    alternatives: ["Manual testing", "Gopherus", "Nuclei (SSRF templates)"],
    officialSite: "https://github.com/swisskyrepo/SSRFmap"
  },
  {
    id: "jwt-tool",
    name: "JWT_Tool",
    category: "Exploitation",
    free: true,
    shortDesc: "专注于JWT的测试、分析和利用工具",
    usage: {
      why: "JWT广泛用于身份认证，实现错误非常常见。",
      when: "当你在应用中发现JWT令牌时——在头、Cookie或API响应中。"
    },
    install: "git clone https://github.com/ticarpi/jwt_tool.git && cd jwt_tool && pip3 install -r requirements.txt",
    alternatives: ["jwt.io (在线)", "jwt-cracker", "Nuclei JWT templates"],
    officialSite: "https://github.com/ticarpi/jwt_tool"
  },
  {
    id: "paramspider",
    name: "ParamSpider",
    category: "Recon",
    free: true,
    shortDesc: "从网页存档中快速发现任意域名参数的工具",
    usage: {
      why: "参数是大多数漏洞（如XSS、SQLi）的核心入口点。",
      when: "发现子域名和存活主机后，收集所有参数。"
    },
    install: "pip3 install paramspider",
    alternatives: ["Arjun", "x8", "ParamMiner (Burp extension)"],
    officialSite: "https://github.com/devanshbatham/ParamSpider"
  },
  {
    id: "arjun",
    name: "Arjun",
    category: "Recon",
    free: true,
    shortDesc: "使用高级模糊测试技术发现隐藏HTTP参数的工具",
    usage: {
      why: "发现特定接口中未记录的隐藏参数。",
      when: "当你想要发现某个特定接口的未记录参数时。"
    },
    install: "pip3 install arjun",
    alternatives: ["ParamSpider", "x8", "ParamMiner (Burp extension)"],
    officialSite: "https://github.com/s0md3v/Arjun"
  },
  {
    id: "secretfinder",
    name: "SecretFinder",
    category: "Recon",
    free: true,
    shortDesc: "从JavaScript文件中发现API密钥、令牌和敏感信息的工具",
    usage: {
      why: "JavaScript文件中经常泄露硬编码的密钥和凭证。",
      when: "收集JavaScript文件后，分析其中泄露的密钥。"
    },
    install: "git clone https://github.com/m4ll0k/SecretFinder.git && cd SecretFinder && pip3 install -r requirements.txt",
    alternatives: ["Nuclei templates", "grep", "truffleHog"],
    officialSite: "https://github.com/m4ll0k/SecretFinder"
  },
  {
    id: "notify",
    name: "notify",
    category: "Automation",
    free: true,
    shortDesc: "工具结果通知工具，支持多平台消息推送",
    usage: {
      why: "自动化流水线运行时，实时接收结果通知。",
      when: "在自动化脚本中，将工具的结果发送到你的通知渠道。"
    },
    install: "go install -v github.com/projectdiscovery/notify/cmd/notify@latest",
    alternatives: ["自定义脚本", "webhook"],
    officialSite: "https://github.com/projectdiscovery/notify"
  },
  {
    id: "crlfuzz",
    name: "crlfuzz",
    category: "Scanning",
    free: true,
    shortDesc: "快速发现CRLF注入漏洞的工具",
    usage: {
      why: "CRLF注入可导致HTTP响应拆分、会话固定、XSS等漏洞。",
      when: "扫描URL参数和头中的CRLF注入漏洞。"
    },
    install: "go install github.com/dwisiswant0/crlfuzz/cmd/crlfuzz@latest",
    alternatives: ["Nuclei templates", "手动测试"],
    officialSite: "https://github.com/dwisiswant0/crlfuzz"
  },
  {
    id: "gitdorker",
    name: "GitDorker",
    category: "OSINT",
    free: true,
    shortDesc: "针对GitHub的高级Dorking工具，发现敏感信息和代码泄露",
    usage: {
      why: "GitHub中经常泄露目标的源代码、密钥、凭证和内部文档。",
      when: "信息收集阶段，在GitHub上搜索目标相关的敏感信息。"
    },
    install: "git clone https://github.com/obheda12/GitDorker.git && cd GitDorker && pip3 install -r requirements.txt",
    alternatives: ["手动GitHub dorking", "gitleaks", "truffleHog"],
    officialSite: "https://github.com/obheda12/GitDorker"
  },
  {
    id: "shodan",
    name: "Shodan",
    category: "OSINT",
    free: true,
    shortDesc: "物联网搜索引擎，发现暴露在公网的设备和服务",
    usage: {
      why: "发现目标暴露的服务、开放端口、未授权的数据库和IoT设备。",
      when: "信息收集阶段，发现目标的基础设施和暴露的服务。"
    },
    install: "pip3 install shodan  # 从shodan.io获取API密钥",
    alternatives: ["Censys", "ZoomEye", "BinaryEdge"],
    officialSite: "https://shodan.io"
  },
  {
    id: "censys",
    name: "Censys",
    category: "OSINT",
    free: true,
    shortDesc: "互联网设备和网站搜索引擎，专注于证书和服务数据",
    usage: {
      why: "提供基础设施和SSL/TLS证书的全面视图。",
      when: "OSINT阶段，发现隐藏的资产和服务。"
    },
    install: "pip3 install censys  # 从censys.io获取API密钥",
    alternatives: ["Shodan", "ZoomEye", "BinaryEdge"],
    officialSite: "https://censys.io"
  },
  {
    id: "owasp-zap",
    name: "OWASP ZAP",
    category: "Proxy",
    free: true,
    shortDesc: "OWASP推出的完全开源的Web应用安全测试工具",
    usage: {
      why: "完全免费开源，作为Burp Suite的替代方案，或用于全面的自动化应用扫描。",
      when: "作为Burp的替代，或用于自动化的全应用扫描。"
    },
    install: "# 从https://www.zaproxy.org/download/下载 或 sudo snap install zaproxy --classic",
    alternatives: ["Burp Suite Community", "Caido"],
    officialSite: "https://www.zaproxy.org"
  },
  {
    id: "nikto",
    name: "Nikto",
    category: "Scanning",
    free: true,
    shortDesc: "Web服务器扫描器，检测危险文件、配置错误和服务器漏洞",
    usage: {
      why: "快速扫描Web服务器的常见配置错误和已知漏洞。",
      when: "信息收集后，对Web服务器进行基础的漏洞扫描。"
    },
    install: "sudo apt install nikto  # 或 git clone https://github.com/sullo/nikto.git",
    alternatives: ["Nuclei", "Nmap scripts"],
    officialSite: "https://github.com/sullo/nikto"
  },
  {
    id: "wpscan",
    name: "WPScan",
    category: "Scanning",
    free: true,
    shortDesc: "WordPress安全扫描器，专门针对WordPress的漏洞检测",
    usage: {
      why: "WordPress是全球最常用的CMS，存在大量主题、插件的漏洞。",
      when: "当目标使用WordPress时，扫描核心、主题、插件的漏洞。"
    },
    install: "gem install wpscan  # 或 docker pull wpscanteam/wpscan",
    alternatives: ["Nuclei WordPress templates", "wpscan.com"],
    officialSite: "https://wpscan.com"
  },
  {
    id: "feroxbuster",
    name: "feroxbuster",
    category: "Scanning",
    free: true,
    shortDesc: "Rust编写的快速、递归的内容发现工具",
    usage: {
      why: "快速递归扫描，适合深度目录发现。",
      when: "对目标进行深度的递归内容发现。"
    },
    install: "# 使用cargo: cargo install feroxbuster 或 使用apt: sudo apt install feroxbuster",
    alternatives: ["ffuf", "dirsearch", "gobuster"],
    officialSite: "https://github.com/epi052/feroxbuster"
  },
  {
    id: "subzy",
    name: "subzy",
    category: "Scanning",
    free: true,
    shortDesc: "子域名接管漏洞扫描工具",
    usage: {
      why: "子域名接管是高价值的漏洞，能让你控制失效的子域名。",
      when: "收集完子域名后，扫描子域名接管漏洞。"
    },
    install: "go install -v github.com/PentestPad/subzy@latest",
    alternatives: ["Nuclei templates", "tko-subs"],
    officialSite: "https://github.com/PentestPad/subzy"
  },
  {
    id: "ghauri",
    name: "Ghauri",
    category: "Exploitation",
    free: true,
    shortDesc: "高级SQL注入检测和利用工具，sqlmap的替代方案",
    usage: {
      why: "比sqlmap更快，专注于高级SQL注入检测和利用。",
      when: "当你需要检测和利用SQL注入漏洞时。"
    },
    install: "pip3 install ghauri",
    alternatives: ["sqlmap", "手动测试"],
    officialSite: "https://github.com/r0oth3x49/ghauri"
  }
];

// 提取所有分类
const allCategories = Array.from(new Set(toolsData.map(tool => tool.category)));

export default function ToolsList() {
  // 状态管理
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 筛选逻辑
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      // 搜索筛选
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      // 分类筛选
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      {/* 搜索与筛选栏 */}
      <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-4 mb-8 sticky top-4 z-10">
        <div className="flex flex-col md:flex-row gap-4">
          {/* 搜索框 */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999] w-5 h-5" />
            <input
              type="text"
              placeholder="搜索工具名称、描述、分类..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50"
            />
          </div>

          {/* 分类筛选 */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-[#f0f0f0]'
              }`}
            >
              全部
            </button>
            {allCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-100'
                    : 'bg-slate-800/60 text-slate-400 hover:bg-[#f0f0f0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 结果统计 */}
        <div className="mt-3 text-sm text-slate-400">
          共找到 <span className="font-bold text-slate-100">{filteredTools.length}</span> 个工具
        </div>
      </div>

      {/* 工具卡片列表 */}
      <div className="space-y-6">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}

        {/* 无结果提示 */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12 border border-dashed border-slate-700/50 rounded-lg">
            <p className="text-slate-400">没有找到匹配的工具，请调整搜索关键词或筛选条件</p>
          </div>
        )}
      </div>
    </div>
  );
}

// 工具卡片组件，完全还原原页面的标签切换结构
function ToolCard({ tool }: { tool: typeof toolsData[0] }) {
  // 管理当前激活的标签
  const [activeTab, setActiveTab] = useState<ToolTabType>('usage');

  // 标签配置
  const tabs = [
    { id: 'usage', label: '使用说明' },
    { id: 'install', label: '安装命令' },
    { id: 'related', label: '相关信息' },
  ] as const;

  return (
    <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 hover:shadow-sm transition-all">
      {/* 工具头部，和原页面布局对齐 */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div className="text-right md:text-left order-2 md:order-1">
          <p className="text-slate-400 mb-1">{tool.shortDesc}</p>
          <div className="flex flex-wrap gap-2 justify-end md:justify-start">
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 text-xs font-medium">
              {tool.category}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
              免费
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 order-1 md:order-2">
          <h4 className="text-xl font-bold">{tool.name}</h4>
          <Shield className="w-5 h-5 text-pink-400" />
        </div>
      </div>

      {/* 标签栏，还原原页面的标签切换 */}
      <div className="flex gap-1 mb-6 border-b border-slate-700/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
              activeTab === tab.id
                ? 'border-b-2 border-[#9FEF00] text-slate-100'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 标签内容区域，和原页面一一对应 */}
      <div className="min-h-[150px]">
        {/* 使用说明标签页 */}
        {activeTab === 'usage' && (
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-bold mb-2">为什么使用它？</h5>
              <p className="text-slate-400">{tool.usage.why}</p>
            </div>
            <div>
              <h5 className="text-sm font-bold mb-2">什么时候使用？</h5>
              <p className="text-slate-400">{tool.usage.when}</p>
            </div>
          </div>
        )}

        {/* 安装命令标签页 */}
        {activeTab === 'install' && (
          <div>
            <h5 className="text-sm font-bold mb-2">安装命令</h5>
            <div className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto">
              <code className="text-cyan-400 text-sm whitespace-pre-wrap break-all">
                {tool.install}
              </code>
            </div>
          </div>
        )}

        {/* 相关信息标签页 */}
        {activeTab === 'related' && (
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-bold mb-2">替代品</h5>
              <div className="flex flex-wrap gap-2">
                {tool.alternatives.map((alt, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-800/60 rounded text-xs">
                    {alt}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-sm font-bold mb-2">官方网站</h5>
              <a
                href={tool.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 font-medium hover:underline flex items-center gap-1"
              >
                {tool.officialSite} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}