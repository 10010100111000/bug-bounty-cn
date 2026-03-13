'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/roadmap', label: '学习路线' },
    { href: '/methodology', label: '漏洞挖掘指南' },
    { href: '/tools', label: '工具列表' },
    { href: '/vulnerabilities', label: '漏洞列表' },
    { href: '/reports', label: '漏洞报告模板' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/70 backdrop-blur-md border-b border-slate-800/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* 左侧：Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative group cursor-pointer hidden sm:block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-700">
                 <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                    BB
                 </span>
              </div>
            </div>
            <Link href="/" className="text-lg lg:text-xl font-extrabold tracking-tight text-slate-100 hover:text-white transition-colors">
              Bug Bounty <span className="text-cyan-400 font-light hidden sm:inline">社区</span>
            </Link>
          </div>

          {/* 右侧：导航链接 */}
          <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar mask-gradient ml-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 lg:px-4 lg:py-2 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 shadow-[0_0_15px_rgba(34,211,238,0.1)]'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* 发光行动呼吁按钮 */}
            <div className="hidden lg:block pl-4 ml-2 border-l border-slate-800 shrink-0">
               <a
                 href="/roadmap"
                 className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105 whitespace-nowrap"
               >
                 开始实战
               </a>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}
