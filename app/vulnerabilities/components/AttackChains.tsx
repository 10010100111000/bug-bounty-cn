// app/vulnerabilities/components/AttackChains.tsx
export default function AttackChains() {
  // 攻击链数据，完全对齐原页面内容
  const attackChains = [
    {
      title: "从开放重定向到账号劫持",
      severity: "严重",
      steps: [
        "OAuth回调页面存在开放重定向漏洞",
        "攻击者发送带有恶意redirect_uri的认证链接",
        "受害者完成登录，OAuth授权码被发送到攻击者的服务器",
        "攻击者使用窃取的授权码，完全接管受害者的账号"
      ],
      lesson: "开放重定向 + OAuth = 账号劫持。永远要测试OAuth流程中的redirect_uri。"
    },
    {
      title: "从信息泄露到远程代码执行",
      severity: "严重",
      steps: [
        "通过路径遍历漏洞，暴露了.env或.git文件",
        "从中提取出数据库凭证或API密钥",
        "访问数据库，发现管理员账号的凭证",
        "以管理员身份登录，利用文件上传漏洞获取Web Shell"
      ],
      lesson: "信息泄露看起来简单，但往往是完整攻击链的起点。永远不要轻视任何信息泄露。"
    },
    {
      title: "从Self-XSS到账号劫持",
      severity: "高",
      steps: [
        "在用户名或个人资料字段发现Self-XSS漏洞",
        "结合CSRF漏洞，将XSS载荷注入到受害者的账号中",
        "XSS载荷窃取了会话Cookie或CSRF令牌",
        "攻击者使用窃取的信息，完全控制受害者的账号"
      ],
      lesson: "Self-XSS单独提交会被拒绝，但结合CSRF就变成了可接受的高风险漏洞。"
    },
    {
      title: "从SSRF到完整云数据窃取",
      severity: "严重",
      steps: [
        "在图片加载服务或Webhook功能中发现SSRF漏洞",
        "访问AWS元数据接口：169.254.169.254",
        "提取出临时的IAM角色凭证",
        "使用这些凭证访问S3存储桶或云数据库"
      ],
      lesson: "云环境中的SSRF往往意味着对企业所有资源的访问权。这是赏金最高的漏洞之一。"
    },
    {
      title: "从竞争条件到财务欺诈",
      severity: "高",
      steps: [
        "在优惠券使用或余额转账的接口发现竞争条件",
        "同时发送数十个使用同一优惠券的请求",
        "系统在完成校验前，就同时处理了多个请求",
        "获得了重复的折扣或不应得的额外余额"
      ],
      lesson: "金融操作中的竞争条件属于严重漏洞。使用Turbo Intruder或类似工具。"
    },
    {
      title: "从IDOR到大规模数据泄露",
      severity: "严重",
      steps: [
        "在返回用户数据的API接口发现IDOR漏洞",
        "编写脚本遍历所有可用的用户ID",
        "自动化地批量提取数千用户的数据",
        "获取到完整的个人信息：姓名、邮箱、地址、电话号码"
      ],
      lesson: "IDOR + 自动化 = 大规模数据泄露。在报告中说明自动化批量获取的可能性，以提升漏洞的风险等级。"
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">漏洞攻击链详解</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          在真实场景中，最危险的攻击往往是由多个简单漏洞串联而成的完整利用链。理解如何关联漏洞，是高级研究者的核心能力。
        </p>
      </div>

      <div className="space-y-4">
        {attackChains.map((chain, index) => {
          // 风险等级配色
          const severityColor = chain.severity === "严重" 
            ? "bg-red-100 text-red-700" 
            : "bg-orange-100 text-orange-700";

          return (
            <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 hover:shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h4 className="text-xl font-bold">{chain.title}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${severityColor}`}>
                  {chain.severity}
                </span>
              </div>

              {/* 攻击步骤 */}
              <div className="space-y-3 mb-4">
                {chain.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#9FEF00]/20 text-cyan-300 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-slate-400">{step}</p>
                  </div>
                ))}
              </div>

              {/* 经验教训 */}
              <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                <h5 className="text-sm font-semibold text-cyan-300 mb-1">经验教训</h5>
                <p className="text-[#333]">{chain.lesson}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}