// app/tools/sections/scripts/page.tsx
export default function ScriptsSection() {
  const scripts = [
    {
      title: "快速安装脚本",
      desc: "一键安装所有核心工具的Bash脚本",
      code: `#!/bin/bash
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
echo "[*] Add ~/go/bin to your PATH if not already done"`
    },
    {
      title: "信息收集自动化脚本",
      desc: "自动化信息收集全流程的脚本",
      code: `#!/bin/bash
# Automated Recon Script
# Usage: ./recon.sh target.com

TARGET=$1
OUTPUT_DIR="recon_\${TARGET}"
mkdir -p $OUTPUT_DIR

echo "[*] Starting recon for $TARGET..."

# Subdomain enumeration
echo "[+] Enumerating subdomains..."
subfinder -d $TARGET -all -o $OUTPUT_DIR/subs.txt
amass enum -passive -d $TARGET -o $OUTPUT_DIR/amass.txt
assetfinder --subs-only $TARGET >> $OUTPUT_DIR/subs.txt
sort -u $OUTPUT_DIR/subs.txt -o $OUTPUT_DIR/subs.txt

# Live hosts
echo "[+] Checking live hosts..."
cat $OUTPUT_DIR/subs.txt | httpx -silent -status-code -title -tech-detect -o $OUTPUT_DIR/live.txt

# URL collection
echo "[+] Collecting URLs..."
cat $OUTPUT_DIR/live.txt | awk '{print $1}' | gau --subs > $OUTPUT_DIR/urls.txt
cat $OUTPUT_DIR/live.txt | awk '{print $1}' | waybackurls >> $OUTPUT_DIR/urls.txt
sort -u $OUTPUT_DIR/urls.txt -o $OUTPUT_DIR/urls.txt

# Nuclei scan
echo "[+] Running Nuclei scan..."
nuclei -l $OUTPUT_DIR/live.txt -t exposures/ -t misconfiguration/ -o $OUTPUT_DIR/nuclei.txt

echo "[+] Recon complete! Results in $OUTPUT_DIR/"`
    },
    {
      title: "目标文件夹结构创建脚本",
      desc: "为每个目标自动创建标准文件夹结构",
      code: `#!/bin/bash
# Create Target Directory Structure
# Usage: ./create-target.sh target.com

TARGET=$1
BASE_DIR="~/bugbounty/targets"

mkdir -p $BASE_DIR/$TARGET/{
  recon/{subdomains,live_hosts,urls,params},
  scanning/{nuclei,ffuf,nmap},
  exploitation/{xss,sqli,ssrf},
  screenshots
}

touch $BASE_DIR/$TARGET/notes.md

echo "[+] Directory structure created for $TARGET"
tree $BASE_DIR/$TARGET`
    }
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">自动化脚本</h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          现成可用的自动化脚本，大幅提升你的工作效率。
        </p>
      </div>

      <div className="space-y-8">
        {scripts.map((script, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-[#e5e5e5] p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">{script.title}</h3>
              <p className="text-[#666]">{script.desc}</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-[#9FEF00] whitespace-pre-wrap break-all">
                {script.code}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}