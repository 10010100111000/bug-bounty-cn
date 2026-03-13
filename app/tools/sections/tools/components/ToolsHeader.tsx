// app/tools/components/ToolsHeader.tsx
// ✅ 这个文件没有引入任何其他组件，完全独立
export default function ToolsHeader() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-[#9FEF00]/10 text-[#5a7a00] text-xs font-medium mb-4">
          专业工具库
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bug Bounty 工具大全
        </h1>
        <p className="text-[#666] text-lg max-w-2xl mx-auto">
          Bug Bounty必备工具全面指南，包含34+工具的详细介绍、实战命令、使用场景、替代品和官方链接。附带自动化脚本、新手配置和学习路径。
        </p>
        <div className="mt-6 inline-block px-4 py-2 rounded-lg bg-[#9FEF00]/10 text-[#5a7a00] font-medium">
          共收录 34 款专业工具
        </div>
      </div>
    </section>
  );
}