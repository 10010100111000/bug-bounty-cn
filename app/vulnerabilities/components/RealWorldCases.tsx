// app/vulnerabilities/components/RealWorldCases.tsx
export default function RealWorldCases() {
  // 真实案例数据，完全对齐原页面内容
  const caseList = [
    {
      vulnerability: "SQL Injection",
      event: "通过网站搜索页面的SQL注入漏洞，入侵了包含数百万条记录的数据库",
      affectedData: "数百万用户的个人信息与金融数据",
      lesson: "使用预编译语句（Prepared Statements）可以完全杜绝这类攻击。"
    },
    {
      vulnerability: "SSRF",
      event: "通过SSRF漏洞访问了AWS元数据接口，窃取了IAM身份凭证",
      affectedData: "对云资源的完全访问权限，包括数据库、对象存储",
      lesson: "强制使用IMDSv2，限制对元数据接口的访问。"
    },
    {
      vulnerability: "JWT Vulnerabilities",
      event: "由于使用了可被破解的弱密钥，导致JWT令牌被伪造",
      affectedData: "可伪造包括管理员在内的任意用户身份",
      lesson: "使用256位以上的随机强密钥，以及安全的加密算法。"
    },
    {
      vulnerability: "不安全的反序列化",
      event: "通过Cookie中的序列化Java对象，实现了远程代码执行",
      affectedData: "服务器的完全控制权与所有数据",
      lesson: "绝对不要对来自不可信来源的数据进行反序列化操作。"
    },
    {
      vulnerability: "OAuth Vulnerabilities",
      event: "通过OAuth回调地址的开放重定向漏洞，窃取了授权码",
      affectedData: "通过OAuth登录的用户账号被劫持",
      lesson: "严格校验redirect_uri的匹配规则，强制使用state参数。"
    },
    {
      vulnerability: "缓存投毒",
      event: "通过X-Forwarded-Host头实现缓存投毒，向网站首页注入了XSS代码",
      affectedData: "所有访问首页的用户都会受到XSS攻击",
      lesson: "将所有影响页面内容的输入参数，纳入缓存键的计算范围。"
    },
    {
      vulnerability: "HTTP请求走私",
      event: "通过CDN与后端服务器的HTTP解析差异，实现了请求走私，窃取了用户的登录凭证",
      affectedData: "用户的登录请求与敏感凭证信息",
      lesson: "标准化HTTP头的处理，解决前后端服务器的解析歧义。"
    },
    {
      vulnerability: "原型污染",
      event: "在Node.js应用中，将原型污染转化为了远程代码执行（RCE）",
      affectedData: "服务器的完全控制权",
      lesson: "使用Object.create(null)创建无原型对象，避免对用户输入进行递归合并操作。"
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">漏洞真实利用案例</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          各类漏洞在真实场景中的利用事件、造成的影响，以及从中总结的经验教训
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {caseList.map((item, index) => (
          <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-6 hover:shadow-sm transition-all">
            <div className="mb-3">
              <h4 className="text-lg font-bold">{item.vulnerability}</h4>
            </div>

            <div className="space-y-3">
              <div>
                <h5 className="text-xs font-semibold text-[#666] mb-1">事件详情</h5>
                <p className="text-sm">{item.event}</p>
              </div>
              <div>
                <h5 className="text-xs font-semibold text-[#666] mb-1">受影响数据</h5>
                <p className="text-sm">{item.affectedData}</p>
              </div>
              <div className="bg-[#9FEF00]/5 rounded-lg p-3 border border-[#9FEF00]/20">
                <h5 className="text-xs font-semibold text-[#5a7a00] mb-1">经验教训</h5>
                <p className="text-sm">{item.lesson}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}