
import React from 'react';
import { Scenario, ScenarioConfig } from '../types';
import { Tag, FileText, MessageCircle, Megaphone } from 'lucide-react';
import { Language, TRANSLATIONS } from '../locales';

interface ModeSelectorProps {
  currentScenario: Scenario;
  onSelect: (scenario: Scenario) => void;
  lang: Language;
}

const SCENARIO_METADATA: ScenarioConfig[] = [
  { id: Scenario.SEO_TITLE, icon: 'Tag', placeholderKey: 'seo' },
  { id: Scenario.PRODUCT_DETAIL, icon: 'FileText', placeholderKey: 'product' },
  { id: Scenario.CUSTOMER_SERVICE, icon: 'MessageCircle', placeholderKey: 'cs' },
  { id: Scenario.MARKETING, icon: 'Megaphone', placeholderKey: 'marketing' },
];

export const ModeSelector: React.FC<ModeSelectorProps> = ({ currentScenario, onSelect, lang }) => {
  const t = TRANSLATIONS[lang].tabs;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tag': return <Tag size={18} />;
      case 'FileText': return <FileText size={18} />;
      case 'MessageCircle': return <MessageCircle size={18} />;
      case 'Megaphone': return <Megaphone size={18} />;
      default: return <Tag size={18} />;
    }
  };

  const getText = (id: Scenario) => {
    switch(id) {
      case Scenario.SEO_TITLE: return t.seo;
      case Scenario.PRODUCT_DETAIL: return t.product;
      case Scenario.CUSTOMER_SERVICE: return t.cs;
      case Scenario.MARKETING: return t.marketing;
      default: return t.seo;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {SCENARIO_METADATA.map((item) => {
        const isActive = currentScenario === item.id;
        const text = getText(item.id);
        
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`
              relative group flex flex-col items-start justify-between p-4 rounded-xl border transition-all duration-200 text-left h-full
              ${isActive 
                ? 'bg-orange-50 border-[#ff5722] shadow-orange-100 ring-1 ring-[#ff5722]/20' 
                : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'}
            `}
          >
            <div className="flex items-center gap-2 mb-2 w-full">
              <div className={`transition-colors duration-200 ${isActive ? 'text-[#ff5722]' : 'text-slate-400 group-hover:text-slate-600'}`}>
                {renderIcon(item.icon)}
              </div>
              <span className={`text-sm font-bold tracking-tight ${isActive ? 'text-[#ff5722]' : 'text-slate-700'}`}>
                {text.label}
              </span>
            </div>
            
            <p className={`text-xs leading-tight ${isActive ? 'text-orange-800/80' : 'text-slate-500'}`}>
              {text.desc}
            </p>
            
            {isActive && (
              <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#ff5722] rounded-full"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};
