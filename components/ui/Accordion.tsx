// components/ui/Accordion.tsx
'use client';

import { useState, useId } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// 单个折叠项的类型
export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

// 组件Props类型
interface AccordionProps {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultOpenIds?: string[];
  className?: string;
}

export default function Accordion({
  items,
  type = 'multiple',
  defaultOpenIds = [],
  className = '',
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);
  const uniqueId = useId();

  // 切换折叠/展开
  const toggleItem = (itemId: string) => {
    if (type === 'single') {
      setOpenIds(openIds.includes(itemId) ? [] : [itemId]);
    } else {
      setOpenIds(
        openIds.includes(itemId)
          ? openIds.filter((id) => id !== itemId)
          : [...openIds, itemId]
      );
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const itemId = `${uniqueId}-${item.id}`;

        return (
          <div
            key={item.id}
            className="glass-card overflow-hidden"
          >
            {/* 折叠标题栏 */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              aria-expanded={isOpen}
              aria-controls={itemId}
            >
              <div className="flex-1 text-left mr-4">
                <div className="text-[#f1f5f9] font-medium">
                  {item.title}
                </div>
              </div>
              {isOpen ? (
                <ChevronDown className="w-5 h-5 text-[#cbd5e1] flex-shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-[#cbd5e1] flex-shrink-0" />
              )}
            </button>

            {/* 折叠内容区域 */}
            <div
              id={itemId}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 pt-0 border-t border-white/10 text-[#e2e8f0]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}