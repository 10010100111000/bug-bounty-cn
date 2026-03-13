// app/methodology/components/RealScenarios.tsx
export default function RealScenarios() {
  // 真实场景数据
  const scenarios = [
    {
      title: "场景1：电商应用测试",
      duration: "5-7 天",
      tech: "React + Node.js 电商平台",
      days: [
        {
          day: "第1天：信息收集",
          items: [
            "子域名枚举：发现47个活跃子域名",
            "发现 staging.target.com 使用相同的数据库",
            "检查crt.sh发现 internal-api.target.com",
            "Shodan发现暴露在6379端口的Redis实例"
          ]
        },
        {
          day: "第2天：攻击面绘制与内容发现",
          items: [
            "ffuf发现 /admin-panel/ 和 /api-docs/",
            "Wappalyzer识别：React, Express.js, MongoDB, Cloudflare",
            "在 /api/v2/docs 发现Swagger文档",
            "检查robots.txt发现 /backup/ 目录"
          ]
        },
        {
          day: "第3天：JS与API分析",
          items: [
            "LinkFinder发现23个隐藏API接口",
            "SecretFinder在JS bundle中发现Stripe API密钥",
            "Source map可用，暴露完整源代码",
            "GraphQL introspection开启 — 发现完整schema"
          ]
        },
        {
          day: "第4-5天：深度测试",
          items: [
            "/api/v1/orders/{id} 存在IDOR — 可查看任意用户订单",
            "/api/v1/users 存在批量赋值 — 添加 role=admin",
            "结账时存在价格操纵 — 在请求中修改价格",
            "产品评论字段存在存储型XSS"
          ]
        },
        {
          day: "第6-7天：报告编写",
          items: [
            "编写4份详细报告，每个漏洞都有PoC",
            "为每个漏洞计算CVSS评分",
            "为每个漏洞录制视频PoC",
            "审核并与安全团队沟通"
          ]
        }
      ],
      vulnerabilities: [
        "IDOR (严重)",
        "批量赋值 (高)",
        "价格操纵 (高)",
        "存储型XSS (中)",
        "API密钥暴露 (中)"
      ],
      reward: "$4,500"
    },
    {
      title: "场景2：SaaS应用测试",
      duration: "3-5 天",
      tech: "项目管理SaaS平台",
      days: [
        {
          day: "第1天：快速信息收集",
          items: [
            "子域名枚举发现12个子域名",
            "发现 app.target.com, api.target.com, admin.target.com",
            "DNS检查发现 mail.target.com 在不同服务器上",
            "GitHub dorking发现内部文档"
          ]
        },
        {
          day: "第2天：应用分析",
          items: [
            "创建两个账号：普通用户和团队管理员",
            "绘制完整的API接口地图（58个接口）",
            "发现用于实时更新的WebSocket接口",
            "分析JWT令牌 — 使用RS256算法"
          ]
        },
        {
          day: "第3-4天：测试",
          items: [
            "通过API可越权访问其他团队的项目（IDOR）",
            "通过密码重置漏洞实现账号劫持",
            "通过URL预览功能发现SSRF",
            "邀请系统存在竞争条件"
          ]
        },
        {
          day: "第5天：报告",
          items: [
            "编写3份高质量报告",
            "为每个漏洞添加详细的影响分析",
            "提供修复建议"
          ]
        }
      ],
      vulnerabilities: [
        "账号劫持 (严重)",
        "IDOR (高)",
        "SSRF (高)",
        "竞争条件 (中)"
      ],
      reward: "$6,200"
    },
    {
      title: "场景3：移动应用后端测试",
      duration: "4-6 天",
      tech: "金融服务移动应用",
      days: [
        {
          day: "第1天：应用分析",
          items: [
            "在模拟器上安装应用并配置代理",
            "使用Burp Suite捕获所有API调用",
            "使用Frida绕过SSL Pinning",
            "从APK中提取API接口"
          ]
        },
        {
          day: "第2天：API分析",
          items: [
            "记录34个API接口",
            "分析身份认证流程（OAuth 2.0）",
            "发现旧的v1 API仍在运行",
            "检查证书绑定实现"
          ]
        },
        {
          day: "第3-5天：深度测试",
          items: [
            "v1 API存在认证缺陷 — 不校验令牌",
            "交易历史存在IDOR — 可查看他人交易",
            "JWT声明操纵 — 修改token中的user_id",
            "/api/v2/profile 存在过度数据暴露 — 返回所有数据",
            "OTP接口缺少速率限制"
          ]
        },
        {
          day: "第6天：报告",
          items: [
            "编写5份报告，重点关注金融影响",
            "PoC展示完整利用场景",
            "提供全面的修复计划"
          ]
        }
      ],
      vulnerabilities: [
        "认证缺陷 (严重)",
        "交易IDOR (严重)",
        "JWT操纵 (高)",
        "数据暴露 (中)",
        "缺少速率限制 (中)"
      ],
      reward: "$12,000"
    }
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">真实场景实战案例</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          展示如何在不同类型的目标上应用方法论的真实场景，包含预期结果和赏金。
        </p>
      </div>

      <div className="space-y-8">
        {scenarios.map((scenario, index) => (
          <div key={index} className="bg-white rounded-lg border border-[#e5e5e5] p-6 hover:shadow-sm transition-all">
            {/* 场景头部 */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h4 className="text-xl font-bold mb-1">{scenario.title}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#9FEF00]/10 text-[#5a7a00] rounded text-xs font-medium">
                    {scenario.duration}
                  </span>
                  <span className="px-2 py-1 bg-[#f5f5f5] rounded text-xs">
                    {scenario.tech}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-[#666]">总赏金</span>
                <p className="text-2xl font-bold text-[#9FEF00]">{scenario.reward}</p>
              </div>
            </div>

            {/* 每日进度 */}
            <div className="space-y-4 mb-6">
              {scenario.days.map((day, dIndex) => (
                <div key={dIndex} className="p-4 rounded-lg bg-[#fafafa] border border-[#e5e5e5]">
                  <h5 className="font-bold mb-2">{day.day}</h5>
                  <ul className="space-y-1">
                    {day.items.map((item, iIndex) => (
                      <li key={iIndex} className="text-sm text-[#666] flex items-start gap-2">
                        <span className="text-[#9FEF00] mt-1 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 发现的漏洞 */}
            <div className="bg-[#9FEF00]/5 rounded-lg p-4 border border-[#9FEF00]/20">
              <h5 className="text-sm font-bold text-[#5a7a00] mb-2">发现的漏洞</h5>
              <div className="flex flex-wrap gap-2">
                {scenario.vulnerabilities.map((vuln, vIndex) => (
                  <span key={vIndex} className="px-2 py-1 bg-white rounded text-xs border border-[#9FEF00]/30">
                    {vuln}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}