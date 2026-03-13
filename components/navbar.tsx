// components/navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // 导航链接配置
  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/roadmap', label: '学习路线' },
     { href: '/methodology', label: '漏洞挖掘指南' },
     { href: '/tools', label: '工具列表' },
    { href: '/vulnerabilities', label: '漏洞列表' },
    { href: '/reports', label: '漏洞报告模板' },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* 左侧：Logo/站点名 */}
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold text-slate-100 hover:text-white transition-colors">
              Bug Bounty 中文社区
            </Link>
          </div>

          {/* 中间：导航链接 - 紧凑布局，匹配项目主色调 */}
          <nav className="flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    isActive
                      ? 'text-[#5a7a00] bg-[#9FEF00]/10'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 右侧：预留位置 */}
          <div className="flex items-center space-x-2">
            {/* 这里可以后续添加搜索框、登录按钮等 */}
          </div>
        </div>
      </div>
    </header>
  );
}