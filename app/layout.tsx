// app/layout.tsx
import './globals.css';
import Navbar from '@/components/navbar'; // 引入你的导航栏
import BackToTop from '@/components/BackToTop'; // 引入回到顶部按钮

export const metadata = {
  title: 'Bug Bounty中文社区',
  description: '专注于Bug Bounty、渗透测试、网络安全的学习社区',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">
        {/* 全局导航栏 */}
        <Navbar />

        {/* 页面主体内容 */}
        <main>
          {children}
        </main>

        {/* 全局页脚（保留你原来的） */}
        <footer className="bg-white/10 backdrop-blur-xl border-t border-white/20 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-300 text-sm">
            Bug Bounty中文社区 © 2024 | 仅供学习交流，严禁用于非法用途
          </div>
        </footer>

        {/* 全局回到顶部按钮 */}
        <BackToTop />
      </body>
    </html>
  );
}
