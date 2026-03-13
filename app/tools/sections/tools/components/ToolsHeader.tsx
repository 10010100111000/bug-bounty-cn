// app/tools/components/ToolsHeader.tsx
// ✅ 这个文件没有引入任何其他组件，完全独立
export default function ToolsHeader() {
  return (
    <section className="py-12 md:py-16 bg-slate-900/40 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 text-xs font-medium mb-4">
          专业工具库
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bug Bounty 工具大全
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Bug Bounty必备工具全面指南，包含34+工具的详细介绍、实战命令、使用场景、替代品和官方链接。附带自动化脚本、新手配置和学习路径。
        </p>
        <div className="mt-6 inline-block px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-300 font-medium">
          共收录 34 款专业工具
        </div>
      </div>
    </section>
  );
}