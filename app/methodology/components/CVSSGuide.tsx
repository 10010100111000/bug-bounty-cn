// app/methodology/components/CVSSGuide.tsx
export default function CVSSGuide() {
  return (
    <section>
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2">CVSS评分快速指南</h3>
        <p className="text-[#666] max-w-2xl mx-auto">
          CVSS（通用漏洞评分系统）是评估漏洞严重程度的全球标准。以下是正确计算的方法。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* 攻击向量 */}
        <CVSSCategory
          title="攻击向量 (AV)"
          items={[
            { value: "Network (N)", desc: "可通过网络远程利用" },
            { value: "Adjacent (A)", desc: "需要访问本地网络" },
            { value: "Local (L)", desc: "需要本地访问设备" },
            { value: "Physical (P)", desc: "需要物理访问" }
          ]}
        />

        {/* 攻击复杂度 */}
        <CVSSCategory
          title="攻击复杂度 (AC)"
          items={[
            { value: "Low (L)", desc: "不需要特殊条件" },
            { value: "High (H)", desc: "需要特殊条件或准备" }
          ]}
        />

        {/* 所需权限 */}
        <CVSSCategory
          title="所需权限 (PR)"
          items={[
            { value: "None (N)", desc: "不需要任何权限" },
            { value: "Low (L)", desc: "需要普通用户权限" },
            { value: "High (H)", desc: "需要管理员权限" }
          ]}
        />

        {/* 用户交互 */}
        <CVSSCategory
          title="用户交互 (UI)"
          items={[
            { value: "None (N)", desc: "不需要用户交互" },
            { value: "Required (R)", desc: "需要用户交互（如点击）" }
          ]}
        />

        {/* 机密性影响 */}
        <CVSSCategory
          title="影响：机密性 (C)"
          items={[
            { value: "High (H)", desc: "敏感数据完全泄露" },
            { value: "Low (L)", desc: "部分数据泄露" },
            { value: "None (N)", desc: "对机密性无影响" }
          ]}
        />

        {/* 完整性影响 */}
        <CVSSCategory
          title="影响：完整性 (I)"
          items={[
            { value: "High (H)", desc: "数据完全被篡改" },
            { value: "Low (L)", desc: "部分数据被篡改" },
            { value: "None (N)", desc: "对完整性无影响" }
          ]}
        />
      </div>

      {/* 风险等级 */}
      <div className="bg-white rounded-lg border border-[#e5e5e5] p-6">
        <h4 className="text-lg font-bold mb-4 text-center">风险等级划分</h4>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-red-100 border border-red-200">
            <p className="font-bold text-red-700">Critical</p>
            <p className="text-sm text-red-600">9.0 - 10.0</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-orange-100 border border-orange-200">
            <p className="font-bold text-orange-700">High</p>
            <p className="text-sm text-orange-600">7.0 - 8.9</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-yellow-100 border border-yellow-200">
            <p className="font-bold text-yellow-700">Medium</p>
            <p className="text-sm text-yellow-600">4.0 - 6.9</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-blue-100 border border-blue-200">
            <p className="font-bold text-blue-700">Low</p>
            <p className="text-sm text-blue-600">0.1 - 3.9</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CVSSCategory({ title, items }: { title: string; items: { value: string; desc: string }[] }) {
  return (
    <div className="bg-white rounded-lg border border-[#e5e5e5] p-6">
      <h4 className="text-sm font-bold mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm">
            <span className="font-bold">{item.value}</span>
            <span className="text-[#666] ml-2">— {item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}