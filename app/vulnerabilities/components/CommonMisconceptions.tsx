// app/vulnerabilities/components/CommonMisconceptions.tsx
export default function CommonMisconceptions() {
  // 常见错误认知数据，完全对齐原页面内容
  const misconceptions = [
    {
      wrong: "XSS 是简单且不危险的漏洞",
      right: "XSS 可以导致完整的账号劫持、敏感数据泄露、键盘记录器安装，甚至在某些情况下实现服务器端代码执行。特别是存储型XSS，可能一次性影响数千用户。大型企业会为有实际影响的XSS漏洞支付数千美元的赏金。"
    },
    {
      wrong: "SQL注入在现代应用中已经不存在了",
      right: "尽管有ORM和预编译语句，SQL注入仍然广泛存在。老旧应用、自定义代码、动态查询仍然容易受到攻击。即使是现代应用，也可能在JSON/XML处理等意想不到的地方存在SQL注入。"
    },
    {
      wrong: "如果有SameSite Cookie，CSRF就不重要了",
      right: "SameSite=Lax 并不能保护所有CSRF场景。改变状态的GET请求仍然容易受到攻击。一些旧浏览器不支持SameSite。而且有些应用出于技术原因使用SameSite=None，这会完全取消保护。"
    },
    {
      wrong: "SSRF需要访问内网才危险",
      right: "即使没有内网访问权限，SSRF仍然很危险。可以用它来扫描端口、通过file://协议读取本地文件、访问云服务元数据（AWS、GCP、Azure），甚至在某些情况下通过gopher://或dict://协议执行命令。"
    },
    {
      wrong: "竞争条件很罕见，不值得研究",
      right: "竞争条件比很多人想象的更常见。任何包含「先检查后执行」（Check-Then-Act）的操作，或者余额更新、优惠券使用、账户升级等场景，都容易受到竞争条件攻击。Turbo Intruder等工具让发现这类漏洞变得更容易。"
    },
    {
      wrong: "开放重定向永远是低风险漏洞",
      right: "开放重定向本身可能是低风险的，但当它与其他漏洞结合时，就会变成高风险。可以用它来窃取OAuth令牌、绕过SSRF过滤器，或者构建非常有说服力的钓鱼攻击，因为链接以可信的企业域名开头。"
    },
    {
      wrong: "JavaScript客户端的漏洞不重要",
      right: "客户端漏洞如DOM XSS、原型污染、PostMessage漏洞可能非常危险。DOM XSS不经过服务器，使得它更难被发现和防护。原型污染在Node.js环境中可能导致远程代码执行。"
    },
    {
      wrong: "WAF可以防护所有漏洞",
      right: "WAF不是万能的。可以通过多种方式绕过：不同的编码方式、拆分攻击载荷、使用HTTP/2特性，或者简单地找到针对特定WAF规则的绕过方法。WAF增加了一层保护，但不能替代安全的代码编写。"
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">对漏洞的常见错误认知</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          很多新手在理解安全漏洞时，都会陷入这些常见的误区。让我们来纠正这些错误认知。
        </p>
      </div>

      <div className="space-y-4">
        {misconceptions.map((item, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 hover:shadow-sm transition-all">
            {/* 错误认知 */}
            <div className="mb-4 flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center">
                ✕
              </span>
              <div>
                <h4 className="text-sm font-semibold text-red-600 mb-1">错误认知</h4>
                <p className="font-medium">{item.wrong}</p>
              </div>
            </div>

            {/* 正确认知 */}
            <div className="ml-11 flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9FEF00]/20 text-cyan-300 font-bold flex items-center justify-center">
                ✓
              </span>
              <div>
                <h4 className="text-sm font-semibold text-cyan-300 mb-1">事实真相</h4>
                <p className="text-slate-400">{item.right}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}