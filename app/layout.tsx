import './globals.css';
import Navbar from '@/components/navbar';
import BackToTop from '@/components/ui/BackToTop';

export const metadata = {
  title: 'Bug Bounty 中文社区 | 漏洞挖掘实战指南',
  description: '专为中文学习者打造的 Bug Bounty 全栈平台。从信息收集到漏洞利用，涵盖 XSS、SQLi 等核心技术。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen overflow-x-hidden w-full text-slate-50 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">

        {/* 背景光效 (纯CSS性能友好) */}
        <div className="fixed top-[-50%] left-[-20%] w-[120vw] h-[120vh] rounded-[100%] bg-violet-900/10 blur-[150px] -z-10 pointer-events-none"></div>
        <div className="fixed bottom-[-50%] right-[-20%] w-[120vw] h-[120vh] rounded-[100%] bg-cyan-900/10 blur-[150px] -z-10 pointer-events-none"></div>

        {/* 顶部导航 */}
        <Navbar />

        {/* 核心内容区 */}
        <main className="relative z-0">
          {children}
        </main>

        {/* 科技感页脚 */}
        <footer className="mt-32 border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl">
          <div className="w-full max-w-[1280px] mx-auto px-8 py-12">
            <div className="flex justify-between items-center border-b border-slate-800 pb-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold font-mono">
                  B
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Bug Bounty <span className="text-cyan-400">CN</span>
                </span>
              </div>
              <div className="flex gap-6 text-sm text-slate-400">
                <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Discord</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
              </div>
            </div>
            <div className="text-center text-sm text-slate-500">
              <p>Bug Bounty 中文社区 © {new Date().getFullYear()} | 致力于构建专业的网络安全技术交流平台</p>
              <p className="mt-2 text-xs">⚠️ 警告：本站所有技术文章仅供授权测试及学习研究使用，严禁用于任何非法用途。</p>
            </div>
          </div>
        </footer>

        {/* 全局回到顶部组件 */}
        <BackToTop />
      </body>
    </html>
  );
}
