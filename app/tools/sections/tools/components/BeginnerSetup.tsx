// app/tools/components/BeginnerSetup.tsx
export default function BeginnerSetup() {
  // 快速安装脚本
  const installScript = `#!/bin/bash
# Quick Install Script for Bug Bounty Tools
# Run: chmod +x install.sh && ./install.sh

echo "[*] Installing Bug Bounty Tools..."

# Install Go tools
echo "[+] Installing Go-based tools..."
go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest
go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest
go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest
go install -v github.com/projectdiscovery/katana/cmd/katana@latest
go install -v github.com/projectdiscovery/notify/cmd/notify@latest
go install github.com/ffuf/ffuf/v2@latest
go install github.com/tomnomnom/waybackurls@latest
go install github.com/tomnomnom/assetfinder@latest
go install github.com/lc/gau/v2/cmd/gau@latest
go install github.com/hahwul/dalfox/v2@latest
go install github.com/jaeles-project/gospider@latest
go install github.com/dwisiswant0/crlfuzz/cmd/crlfuzz@latest
go install -v github.com/PentestPad/subzy@latest
go install -v github.com/owasp-amass/amass/v4/...@master

# Install Python tools
echo "[+] Installing Python-based tools..."
pip3 install sqlmap paramspider arjun ghauri

# Install SecLists
echo "[+] Cloning SecLists..."
git clone --depth 1 https://github.com/danielmiessler/SecLists.git ~/SecLists

# Update Nuclei templates
echo "[+] Updating Nuclei templates..."
nuclei -update-templates

echo "[*] Installation complete!"
echo "[*] Add ~/go/bin to your PATH if not already done"`;

  // 文件夹结构
  const folderStructure = `bugbounty/
├── tools/          # 手动安装的工具
├── wordlists/      # SecLists和自定义字典
├── scripts/        # 自动化脚本
├── templates/      # 自定义Nuclei模板
├── reports/        # 报告模板
└── targets/        # 所有目标的测试结果
    └── target.com/
        ├── recon/
        │   ├── subdomains/
        │   ├── live_hosts/
        │   ├── urls/
        │   └── params/
        ├── scanning/
        │   ├── nuclei/
        │   ├── ffuf/
        │   └── nmap/
        ├── exploitation/
        │   ├── xss/
        │   ├── sqli/
        │   └── ssrf/
        ├── screenshots/
        └── notes.md`;

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">新手推荐配置</h3>
      </div>

      <div className="space-y-6">
        {/* 系统要求 */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
          <h4 className="text-lg font-bold mb-4">系统要求</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-slate-900/20 border border-[#f0f0f0]">
              <h5 className="font-bold mb-1">操作系统</h5>
              <p className="text-sm text-slate-400">Ubuntu/Kali Linux（或Windows上的WSL2）</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/20 border border-[#f0f0f0]">
              <h5 className="font-bold mb-1">基础依赖</h5>
              <p className="text-sm text-slate-400">Go 1.21+, Python 3.10+, Git, pip3</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/20 border border-[#f0f0f0]">
              <h5 className="font-bold mb-1">硬件要求</h5>
              <p className="text-sm text-slate-400">最低4GB RAM、SSD、高速网络连接</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/20 border border-[#f0f0f0]">
              <h5 className="font-bold mb-1">推荐环境</h5>
              <p className="text-sm text-slate-400">Linux VPS + 本地Burp Suite环境</p>
            </div>
          </div>
        </div>

        {/* 快速安装脚本 */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
          <h4 className="text-lg font-bold mb-4">一键安装脚本</h4>
          <p className="text-slate-400 mb-4">使用这个脚本一键安装所有核心工具，适合新手快速搭建环境。</p>
          <div className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto">
            <pre className="text-cyan-400 text-sm whitespace-pre-wrap break-all">
              {installScript}
            </pre>
          </div>
        </div>

        {/* 推荐文件夹结构 */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
          <h4 className="text-lg font-bold mb-4">推荐文件夹结构</h4>
          <p className="text-slate-400 mb-4">清晰的文件夹结构能帮你整理结果，避免丢失重要信息。</p>
          <div className="bg-slate-900/20 rounded-lg p-4 overflow-x-auto border border-slate-700/50">
            <pre className="text-sm text-slate-400 whitespace-pre">
              {folderStructure}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}