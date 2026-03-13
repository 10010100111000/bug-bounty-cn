// app/methodology/components/DecisionTree.tsx
export default function DecisionTree() {
  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2">从哪里开始？</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          使用这个决策树，根据你当前的情况，确定最佳的测试起点。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 第一列：目标类型 */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
          <h4 className="text-lg font-bold mb-4 text-center">你的目标是什么类型？</h4>
          <div className="space-y-3">
            {[
              {
                type: "Web应用",
                path: "从子域名枚举开始 → 内容发现 → JS分析"
              },
              {
                type: "纯API",
                path: "从阅读文档开始 → 接口枚举 → 参数模糊测试"
              },
              {
                type: "移动应用",
                path: "从APK/IPA分析开始 → 代理配置 → API测试"
              },
              {
                type: "云基础设施",
                path: "从资产发现开始 → 配置错误扫描 → 权限提升"
              }
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-slate-900/20 border border-slate-700/50">
                <h5 className="font-bold mb-1">{item.type}</h5>
                <p className="text-sm text-slate-400">{item.path}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 第二列：经验水平 */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
          <h4 className="text-lg font-bold mb-4 text-center">你的经验水平如何？</h4>
          <div className="space-y-3">
            {[
              {
                level: "新手",
                focus: "专注于XSS和IDOR — 这是最容易入门的漏洞。使用PortSwigger Academy进行训练。"
              },
              {
                level: "中级",
                focus: "扩大你的范围，覆盖SSRF和业务逻辑漏洞。开始构建自己的专属工具。"
              },
              {
                level: "高级",
                focus: "专注于竞争条件、反序列化和攻击链。寻找0day漏洞。"
              }
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-slate-900/20 border border-slate-700/50">
                <h5 className="font-bold mb-1">{item.level}</h5>
                <p className="text-sm text-slate-400">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 第三列：项目类型 */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-700/50 p-6">
          <h4 className="text-lg font-bold mb-4 text-center">这是什么类型的Bug Bounty项目？</h4>
          <div className="space-y-3">
            {[
              {
                program: "VDP（无赏金）",
                advice: "适合训练和建立你的声誉。专注于质量而非数量。"
              },
              {
                program: "公开BBP（有赏金）",
                advice: "寻找高影响的漏洞。通过寻找独特的漏洞来避免重复。"
              },
              {
                program: "私有项目",
                advice: "黄金机会 — 竞争小得多。花更多时间在深度信息收集上。"
              }
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-slate-900/20 border border-slate-700/50">
                <h5 className="font-bold mb-1">{item.program}</h5>
                <p className="text-sm text-slate-400">{item.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}