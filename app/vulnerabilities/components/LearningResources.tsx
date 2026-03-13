// app/vulnerabilities/components/LearningResources.tsx
export default function LearningResources() {
  // 学习资源数据，完全对齐原页面内容
  const resourcesList = [
    {
      name: "PortSwigger Web Security Academy",
      level: "入门 - 进阶",
      desc: "Burp Suite开发方推出的完全免费的在线学习平台，覆盖了所有Web漏洞类型，提供交互式的在线实验环境，你可以直接在浏览器中完成漏洞练习。无论是新手还是进阶研究者，都是最优质的学习资源之一。",
      coverages: ["XSS", "SQL Injection", "SSRF", "CSRF", "身份认证", "访问控制", "文件上传", "反序列化"]
    },
    {
      name: "HackTheBox Academy",
      level: "入门 - 进阶",
      desc: "全面的在线学习平台，提供体系化的Web安全、网络安全课程。学习路径经过精心设计，带你从零基础成长为专业渗透测试人员，配套真实的实战环境与考核任务。",
      coverages: ["Web攻击", "网络安全", "Active Directory", "Linux权限提升", "API攻击"]
    },
    {
      name: "PentesterLab",
      level: "中级 - 进阶",
      desc: "专注于特定漏洞的实战练习，搭配详细的原理讲解。每一个练习都会教你一项特定的安全技术，然后让你在安全的实验环境中动手实践，非常适合快速积累专项实战能力。",
      coverages: ["OAuth攻击", "JWT攻击", "原型污染", "竞争条件", "GraphQL安全"]
    },
    {
      name: "TryHackMe",
      level: "入门 - 中级",
      desc: "交互式的在线学习平台，通过主题房间（Rooms）覆盖各类安全主题。界面友好，学习路径清晰，非常适合想要灵活学习的新手，帮你从零搭建安全知识体系。",
      coverages: ["Web基础", "OWASP Top 10", "Linux基础", "网络基础", "脚本编写"]
    },
    {
      name: "Nahamsec's Resources",
      level: "入门 - 中级",
      desc: "知名安全研究者Nahamsec推出的免费资源合集，包括YouTube教学视频、真实Bug Bounty实战直播，公开分享了他的测试方法论、常用工具和实战经验。",
      coverages: ["信息收集", "Bug Bounty方法论", "子域名接管", "SSRF", "实战直播"]
    },
    {
      name: "OWASP Testing Guide",
      level: "中级 - 进阶",
      desc: "OWASP组织推出的免费、全面的Web应用安全测试指南，覆盖了Web安全测试的方方面面。是系统化渗透测试的权威参考手册，由全球安全专家持续维护更新。",
      coverages: ["认证测试", "授权测试", "会话管理", "输入校验", "错误处理"]
    }
  ];

  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">漏洞学习优质资源</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          免费与付费的优质学习平台，帮你深入理解每一类安全漏洞，提升实战能力。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {resourcesList.map((item, index) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 hover:shadow-sm transition-all">
            <div className="mb-3">
              <h4 className="text-lg font-bold mb-1">{item.name}</h4>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 text-xs font-medium">
                适用人群：{item.level}
              </span>
            </div>

            <p className="text-slate-400 text-sm mb-4">{item.desc}</p>

            <div>
              <h5 className="text-xs font-semibold text-slate-400 mb-2">覆盖内容</h5>
              <div className="flex flex-wrap gap-2">
                {item.coverages.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-800/60 rounded text-xs">
                    {tag}
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