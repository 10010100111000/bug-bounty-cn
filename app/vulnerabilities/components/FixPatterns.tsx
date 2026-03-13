// app/vulnerabilities/components/FixPatterns.tsx
export default function FixPatterns() {
  // 漏洞修复方案数据，完全对齐原页面内容
  const fixGuides = [
    {
      vulnerability: "XSS 跨站脚本攻击",
      fixes: [
        "根据输出的上下文，使用对应的输出编码（HTML、JavaScript、URL、CSS场景分别适配）",
        "启用内容安全策略（CSP），阻止不可信来源的脚本执行",
        "为敏感Cookie开启HttpOnly和Secure标记，防止脚本读取Cookie",
        "在服务端和客户端同时实施输入校验",
        "使用DOMPurify等成熟库，对用户输入的HTML内容进行安全过滤"
      ]
    },
    {
      vulnerability: "SQL 注入",
      fixes: [
        "始终使用参数化查询/预编译语句，杜绝直接拼接SQL语句",
        "使用ORM框架，替代手写的动态SQL",
        "为数据库连接账号遵循最小权限原则，限制账号的操作范围",
        "启用WAF作为额外的防护层",
        "不要向用户暴露详细的数据库错误信息"
      ]
    },
    {
      vulnerability: "SSRF 服务端请求伪造",
      fixes: [
        "使用白名单机制，严格限制允许访问的URL地址/域名",
        "禁止访问内网IP地址、云服务元数据接口等敏感地址",
        "校验DNS解析结果，防止DNS重绑定攻击",
        "严格限制允许使用的协议，仅开放HTTP/HTTPS",
        "使用专用的代理服务器处理外部资源请求"
      ]
    },
    {
      vulnerability: "IDOR 不安全的直接对象引用",
      fixes: [
        "在每一次资源访问操作前，都必须在服务端校验用户的权限",
        "使用不可预测的UUID，替代自增的数字ID作为资源标识",
        "在API层面实施访问控制列表（ACL）",
        "记录未授权的访问尝试日志",
        "对每一个接口都进行系统化的权限测试"
      ]
    },
    {
      vulnerability: "CSRF 跨站请求伪造",
      fixes: [
        "为每个会话/每个请求生成唯一的CSRF令牌",
        "为敏感Cookie启用SameSite=Strict属性",
        "校验请求的Origin和Referer头",
        "对敏感操作要求用户二次认证",
        "使用Double Submit Cookie模式作为备选方案"
      ]
    },
    {
      vulnerability: "RCE 远程代码执行",
      fixes: [
        "绝对不要在用户输入可控的场景下使用eval()、exec()、system()等执行函数",
        "对命令执行操作实施沙箱隔离",
        "使用白名单机制，仅允许执行预设的安全命令",
        "将运行进程的权限降到最低限度",
        "全面审计反序列化、文件上传等可能导致RCE的风险点"
      ]
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">常见漏洞修复方案</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          理解漏洞的修复方法，能帮你写出更专业的报告，为安全团队提供可落地的修复建议。
        </p>
      </div>

      <div className="space-y-4">
        {fixGuides.map((item, index) => (
          <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-6 hover:shadow-sm transition-all">
            <h4 className="text-lg font-bold mb-4">{item.vulnerability}</h4>
            <ul className="space-y-2">
              {item.fixes.map((fix, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#9FEF00] mt-1 flex-shrink-0">•</span>
                  <span className="text-[#666]">{fix}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}