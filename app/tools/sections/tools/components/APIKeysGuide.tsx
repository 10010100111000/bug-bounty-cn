// app/tools/components/APIKeysGuide.tsx
export default function APIKeysGuide() {
  const apiKeys = [
    {
      name: "Shodan",
      free: true,
      desc: "发现基础设施和服务",
      site: "shodan.io"
    },
    {
      name: "SecurityTrails",
      free: true,
      desc: "历史DNS数据和子域名",
      site: "securitytrails.com"
    },
    {
      name: "Censys",
      free: true,
      desc: "证书和服务搜索",
      site: "censys.io"
    },
    {
      name: "VirusTotal",
      free: true,
      desc: "文件、URL、域名分析",
      site: "virustotal.com"
    },
    {
      name: "GitHub",
      free: true,
      desc: "仓库搜索（GitDorker）",
      site: "github.com"
    },
    {
      name: "WPScan",
      free: true,
      desc: "WordPress漏洞数据库",
      site: "wpscan.com"
    },
    {
      name: "Chaos",
      free: true,
      desc: "ProjectDiscovery的子域名数据",
      site: "chaos.projectdiscovery.io"
    },
    {
      name: "BinaryEdge",
      free: true,
      desc: "基础设施搜索",
      site: "binaryedge.io"
    },
    {
      name: "Hunter.io",
      free: true,
      desc: "电子邮件地址发现",
      site: "hunter.io"
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">推荐API密钥</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          这些密钥能大幅提升信息收集工具的结果——大多数都有免费额度，差异非常大。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {apiKeys.map((item, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold">{item.name}</h4>
              <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                免费
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-3">{item.desc}</p>
            <a
              href={`https://${item.site}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 font-medium hover:underline"
            >
              {item.site}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}