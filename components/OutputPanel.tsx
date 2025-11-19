
import React, { useState } from 'react';
import { Copy, Check, Sparkles, RotateCcw, AlertTriangle } from 'lucide-react';
import { Scenario } from '../types';
import { Language, TRANSLATIONS } from '../locales';

interface OutputPanelProps {
  result: string;
  isLoading: boolean;
  scenario: Scenario;
  onRegenerate: () => void;
  lang: Language;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({
  result,
  isLoading,
  scenario,
  onRegenerate,
  lang
}) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang].output;

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const charCount = result.length;
  const isTitleMode = scenario === Scenario.SEO_TITLE;
  const isOverLimit = isTitleMode && charCount > 120;

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.title}</h3>
        {result && (
           <div className={`flex items-center gap-2 text-xs font-mono font-bold px-2 py-0.5 rounded border ${
             isOverLimit 
               ? 'text-red-600 bg-red-50 border-red-200' 
               : 'text-emerald-600 bg-emerald-50 border-emerald-200'
           }`}>
             {isOverLimit && <AlertTriangle size={10} />}
             {charCount} {isTitleMode ? '/ 120' : t.chars}
           </div>
        )}
      </div>

      <div className="flex-grow relative group">
        <div 
          className={`
            w-full h-full rounded-xl p-5 text-lg font-medium leading-relaxed custom-scrollbar overflow-y-auto whitespace-pre-wrap transition-all duration-300
            ${isLoading ? 'animate-pulse bg-slate-50' : 'bg-slate-50'}
            ${isOverLimit ? 'border-2 border-red-400/50 bg-red-50/30' : 'border border-slate-100'}
            ${!result && !isLoading ? 'flex items-center justify-center text-slate-400' : 'text-slate-800'}
          `}
          style={{ minHeight: '240px' }}
        >
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="relative">
                <Sparkles className="text-[#ff5722] animate-spin" size={28} />
              </div>
              <span className="text-sm text-slate-500 font-medium">{t.processing}</span>
            </div>
          ) : result ? (
            result
          ) : (
            <div className="text-center">
              <Sparkles size={36} className="mx-auto mb-3 text-slate-200" />
              <span className="text-sm font-medium">{t.ready}</span>
            </div>
          )}
        </div>

        {/* Floating Actions */}
        {result && !isLoading && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={onRegenerate}
              className="p-2.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-all shadow-md hover:shadow-lg"
              title={t.regenerate}
            >
              <RotateCcw size={18} />
            </button>
            <button
              onClick={handleCopy}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5
                ${copied 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-[#ff5722] hover:bg-[#f4511e] text-white'}
              `}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span>{copied ? t.copied : t.copy}</span>
            </button>
          </div>
        )}
      </div>

      {/* Warning Message */}
      {isOverLimit && (
        <div className="mt-4 px-4 py-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
          <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
          <div className="text-sm text-red-600">
            <p className="font-bold">{t.errorTitle}</p>
            <p className="text-xs mt-0.5 opacity-90">{t.errorDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
};
