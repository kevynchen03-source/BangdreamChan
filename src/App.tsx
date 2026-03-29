/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useMemo } from 'react';
import { toPng } from 'html-to-image';
import { Download, BarChart3, List, Star, ChevronRight, Info } from 'lucide-react';
import { BANDS, CHARACTERS, EPISODES, Character, Band, Episode } from './data';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'stats' | 'episodes'>('stats');
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number>(1);
  const statsRef = useRef<HTMLDivElement>(null);
  const episodesRef = useRef<HTMLDivElement>(null);

  const downloadImage = async (ref: React.RefObject<HTMLDivElement>, fileName: string) => {
    if (ref.current === null) return;
    try {
      // pixelRatio: 2 for retina-quality output
      // cacheBust: true to avoid stale cache issues
      // Most avatars are now local, so CORS is not an issue.
      // For remaining external SVGs (dicebear), they support CORS.
      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        backgroundColor: '#fff',
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('下载失败:', err);
      alert('下载失败，请稍后重试。');
    }
  };

  const charStats = useMemo(() => {
    const stats: Record<string, number[]> = {};
    CHARACTERS.forEach(c => stats[c.id] = []);
    EPISODES.forEach(ep => {
      ep.characters.forEach(charId => {
        if (stats[charId]) stats[charId].push(ep.id);
      });
    });
    return stats;
  }, []);

  const ranking = useMemo(() => {
    const counts: Record<number, string[]> = {};
    (Object.entries(charStats) as [string, number[]][]).forEach(([id, eps]) => {
      // 排除 special 乐队的角色（marina/box/cornet/mortis 不计入总排行）
      const char = CHARACTERS.find(c => c.id === id);
      if (!char || char.band === 'special') return;
      const count = eps.length;
      if (!counts[count]) counts[count] = [];
      counts[count].push(id);
    });
    return Object.entries(counts)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([count, ids]) => ({ count: Number(count), ids }));
  }, [charStats]);

  const selectedEpisode = EPISODES.find(e => e.id === selectedEpisodeId);

  const Avatar = ({ char, className, size = "md" }: { char: Character, className?: string, size?: "sm" | "md" | "lg" }) => {
    const sizeClasses = {
      sm: "w-10 h-10",
      md: "w-14 h-14",
      lg: "w-20 h-20"
    };
    
    return (
      <div className={cn(
        // Wrapper: only shadow + lift, NO scale here to avoid double-animation conflict
        "relative rounded-full p-0.5 shadow-md transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-0.5 will-change-transform",
        sizeClasses[size],
        className
      )} style={{ background: `linear-gradient(135deg, ${char.color}44, ${char.color})` }}>
        <div className="w-full h-full rounded-full overflow-hidden bg-white">
          <img 
            src={char.avatar} 
            alt={char.name} 
            className="w-full h-full object-cover object-top [image-rendering:auto] [transform:translateZ(0)]"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // If it's already a dicebear URL, don't try again to avoid infinite loop
              if (target.src.includes('dicebear.com')) return;
              target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(char.name)}&backgroundColor=${char.color.replace('#', '')}`;
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-pink-50 font-sans text-slate-800 pb-12 relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-30 left-10 text-pink-300 animate-pulse"><Star size={24} fill="currentColor" /></div>
        <div className="absolute top-1/2 right-5 text-pink-300 animate-bounce delay-100"><Star size={24} fill="currentColor" /></div>
        <div className="absolute bottom-40 left-1/4 text-pink-300 animate-pulse delay-300"><Star size={32} fill="currentColor" /></div>
        <div className="absolute top-1/2 right-1/3 text-pink-300 animate-bounce delay-500"><Star size={20} fill="currentColor" /></div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-pink-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <Star fill="currentColor" size={24} />
            </div>
            <h1 className="text-xl font-bold text-pink-600 tracking-tight">元祖！BanG Dream Chan 数据站</h1>
          </div>
          
          <nav className="flex bg-pink-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('stats')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeTab === 'stats' ? "bg-white text-pink-600 shadow-sm" : "text-pink-400 hover:text-pink-500"
              )}
            >
              <BarChart3 size={18} /> 统计
            </button>
            <button
              onClick={() => setActiveTab('episodes')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeTab === 'episodes' ? "bg-white text-pink-600 shadow-sm" : "text-pink-400 hover:text-pink-500"
              )}
            >
              <List size={18} /> 分集
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-8">
        {activeTab === 'stats' ? (
          <div className="space-y-8">
            <div className="flex justify-end">
              <button
                onClick={() => downloadImage(statsRef, 'bandori-chan-stats')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-md transition-colors"
              >
                <Download size={16} /> 下载统计长图
              </button>
            </div>

            <div ref={statsRef} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100 p-6 space-y-8">
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-black text-pink-600">角色出场统计</h2>
                <p className="text-slate-400 text-xs">数据来源：元祖！BanG Dream Chan (截至第25期)</p>
              </div>

              {/* Ranking Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-pink-500 pl-4">
                  <h3 className="text-lg font-bold text-slate-800">总排行</h3>
                </div>
                <div className="space-y-4">
                  {ranking.map((group, idx) => (
                    <div key={group.count} className="bg-white rounded-2xl p-3 border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg transform -rotate-2",
                          idx === 0 ? "bg-yellow-400" : idx === 1 ? "bg-slate-300" : idx === 2 ? "bg-amber-600" : "bg-pink-400"
                        )}>
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">出场次数</p>
                          <p className="text-base font-black text-pink-600">{group.count} <span className="text-xs font-normal text-slate-400">次</span></p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {group.ids.map(id => {
                          const char = CHARACTERS.find(c => c.id === id);
                          if (!char) return null;
                          return (
                            <div key={id} className="flex flex-col items-center gap-1.5 group">
                              <div className="relative">
                                <Avatar char={char} size="md" className="hover:scale-105 transition-transform duration-200" />
                                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full shadow-sm flex items-center justify-center overflow-hidden bg-white" style={{ color: char.color }}>
                                  <Star size={10} fill="currentColor" />
                                </div>
                              </div>
                              <span className="text-[10px] font-bold text-slate-700 group-hover:text-pink-600 transition-colors">{char.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Band Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-pink-500 pl-4">
                  <h3 className="text-lg font-bold text-slate-800">按乐队划分</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {BANDS.filter(b => b.id !== 'special').map(band => (
                    <div key={band.id} className="rounded-2xl p-4 hover:shadow-lg transition-all border border-slate-100 bg-white group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 -mr-6 -mt-6 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: band.color }} />
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-50 relative z-10">
                        <h4 className="font-black text-base" style={{ color: band.color }}>{band.name}</h4>
                        <span className="text-xs font-black px-2 py-0.5 rounded-lg bg-slate-50 text-slate-400">
                          {CHARACTERS.filter(c => c.band === band.id).reduce((acc, c) => acc + charStats[c.id].length, 0)} 次
                        </span>
                      </div>
                      <div className="space-y-3 relative z-10">
                        {CHARACTERS.filter(c => c.band === band.id).map(char => (
                          <div key={char.id} className="flex items-center gap-3 group/char">
                            <Avatar char={char} size="sm" className="hover:scale-110 transition-transform duration-200" />
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-700">{char.name}</span>
                                <span className="text-xs font-black text-pink-500">{charStats[char.id].length} 次</span>
                              </div>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {charStats[char.id].map(ep => (
                                  <span key={ep} className="text-xs w-6 h-6 rounded-full bg-pink-50 text-pink-400 font-black flex items-center justify-center border border-pink-100">
                                    {ep}
                                  </span>
                                ))}
                                {charStats[char.id].length === 0 && <span className="text-[10px] text-slate-300 italic">暂无出场</span>}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Special Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-pink-500 pl-4">
                  <h3 className="text-lg font-bold text-slate-800">特殊角色</h3>
                </div>
                <div className="flex flex-wrap gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                  {CHARACTERS.filter(c => c.band === 'special').map(char => (
                    <div key={char.id} className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <Avatar char={char} size="sm" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">{char.name}</p>
                        <div className="flex gap-1 mt-0.5">
                          {charStats[char.id].map(ep => (
                            <span key={ep} className="text-xs w-5 h-5 rounded-full bg-slate-100 text-slate-500 font-black flex items-center justify-center">
                              {ep}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {EPISODES.map(ep => (
                  <button
                    key={ep.id}
                    onClick={() => setSelectedEpisodeId(ep.id)}
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                      selectedEpisodeId === ep.id
                        ? "bg-pink-500 text-white shadow-lg scale-110"
                        : "bg-white text-pink-400 border border-pink-100 hover:bg-pink-50"
                    )}
                  >
                    {ep.id}
                  </button>
                ))}
              </div>
              <button
                onClick={() => downloadImage(episodesRef, `bandori-chan-ep-${selectedEpisodeId}`)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full flex shrink-0 items-center gap-2 text-sm font-medium shadow-md transition-colors"
              >
                <Download size={16} /> 下载分享图
              </button>
            </div>

            <div ref={episodesRef} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100">
              {selectedEpisode && (
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between border-b border-pink-50 pb-4">
                    <div>
                      <h2 className="text-2xl font-black text-pink-600">{selectedEpisode.title}</h2>
                      <p className="text-slate-400 font-medium mt-0.5 text-sm">元祖！BanG Dream Chan</p>
                    </div>
                    <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500">
                      <Star fill="currentColor" size={24} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left: Characters */}
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="flex items-center gap-2 text-base font-bold text-slate-800">
                        <div className="w-2 h-5 bg-pink-500 rounded-full" />
                        本集登场角色
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                        {selectedEpisode.characters.map(id => {
                          const char = CHARACTERS.find(c => c.id === id);
                          if (!char) return null;
                          const countSoFar = charStats[id].filter(ep => ep <= selectedEpisodeId).length;
                          return (
                            <div key={id} className="bg-slate-50 rounded-xl p-4 flex flex-col items-center gap-2 border border-slate-100">
                              <Avatar char={char} size="lg" />
                              <div className="text-center">
                                <p className="text-sm font-bold text-slate-700 truncate w-full">{char.name}</p>
                                <p className="text-xs text-pink-500 font-black">第 {countSoFar} 次</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right: Highlights */}
                    <div className="space-y-4">
                      <h3 className="flex items-center gap-2 text-base font-bold text-slate-800">
                        <div className="w-2 h-5 bg-pink-500 rounded-full" />
                        本集看点
                      </h3>
                      <div className="space-y-3">
                        {selectedEpisode.highlights.map((h, i) => (
                          <div key={i} className="flex gap-2 bg-pink-50/50 p-4 rounded-xl border border-pink-100">
                            <ChevronRight size={14} className="text-pink-500 mt-0.5 shrink-0" />
                            <p className="text-sm text-slate-700 leading-relaxed">{h}</p>
                          </div>
                        ))}
                        {selectedEpisode.highlights.length === 0 && (
                          <p className="text-xs text-slate-400 italic">暂无特别看点记录</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 mt-12 text-center">
        <div className="h-px bg-pink-200 w-full mb-6" />
        <p className="text-pink-400 text-xs font-medium">
          &copy; 2026 BanG Dream! Chan Data Station | Created for Fans
        </p>
      </footer>
    </div>
  );
}

