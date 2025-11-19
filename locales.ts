
export type Language = 'en' | 'zh';

export const TRANSLATIONS = {
  en: {
    header: {
      title: "Lên Đơn",
      subtitle: "VN E-COMMERCE AI",
      settings: "Settings",
      setKey: "Set API Key",
      sellerCenter: "Shopee Seller Center",
      modelPro: "Gemini 3.0 Pro (Best Quality)",
      modelFlash: "Gemini 2.5 Flash (Fastest)"
    },
    tabs: {
      seo: { label: "SEO Title", desc: "Structured: Brand + Model + Features. Auto-adds [Freeship]" },
      product: { label: "Description", desc: "Feature → Benefit logic, Emoji list, Size warnings" },
      cs: { label: "Support", desc: "Polite 'Dạ/Vâng' start, soft tone, professional closing" },
      marketing: { label: "Marketing", desc: "FOMO words: 'Sale sập sàn', 'Giá hủy diệt' for TikTok/FB" }
    },
    input: {
      source: "Source (Chinese)",
      chars: "chars",
      clear: "Clear",
      glossaryTitle: "Glossary / Term Lock",
      glossaryPlaceholder: "Brand, Model, ID (comma separated)...",
      glossaryTip: "These terms will remain untranslated.",
      keywordTitle: "Inject Keywords / Slang",
      placeholder: "Enter text..."
    },
    output: {
      title: "Result (Vietnamese)",
      chars: "chars",
      copy: "Copy",
      copied: "Copied",
      regenerate: "Regenerate",
      ready: "Ready to generate",
      processing: "AI is localizing content...",
      errorTitle: "SEO Limit Exceeded",
      errorDesc: "Shopee titles must be under 120 characters to avoid penalty. Try removing adjectives."
    },
    action: {
      process: "Localize Content",
      processing: "Processing..."
    },
    settings: {
      title: "API Configuration",
      envDetected: "Environment Key Detected.",
      envDesc: "You are using a pre-configured key. You can override it below if needed.",
      label: "Google Gemini API Key",
      placeholder: "AIzaSy...",
      storageTip: "Your key is stored locally in your browser's storage.",
      getKey: "Get a key here.",
      cancel: "Cancel",
      save: "Save Settings"
    }
  },
  zh: {
    header: {
      title: "Lên Đơn (出单)",
      subtitle: "越南电商 AI 助手",
      settings: "设置",
      setKey: "配置 Key",
      sellerCenter: "Shopee 卖家中心",
      modelPro: "Gemini 3.0 Pro (效果最好)",
      modelFlash: "Gemini 2.5 Flash (速度最快)"
    },
    tabs: {
      seo: { label: "SEO 标题", desc: "结构化：品牌+型号+卖点+人群。自动添加 [Freeship]" },
      product: { label: "商品详情", desc: "功能转利益点 (卖点)，Emoji 清单，自动添加尺码预警" },
      cs: { label: "客服回复", desc: "强制礼貌用语 (Dạ/Vâng)，语气软化，专业结尾" },
      marketing: { label: "营销文案", desc: "植入 FOMO 词汇：Sale sập sàn (跳楼价), Giá hủy diệt 等" }
    },
    input: {
      source: "源文本 (中文)",
      chars: "字符",
      clear: "清空",
      glossaryTitle: "术语锁定 / 不翻译",
      glossaryPlaceholder: "品牌名, 型号, ID (逗号分隔)...",
      glossaryTip: "输入的内容将保持原文，不进行翻译。",
      keywordTitle: "植入热搜词 / 黑话",
      placeholder: "请输入中文文案..."
    },
    output: {
      title: "翻译结果 (越南语)",
      chars: "字符",
      copy: "复制",
      copied: "已复制",
      regenerate: "换个说法",
      ready: "准备生成",
      processing: "AI 正在进行本土化翻译...",
      errorTitle: "SEO 字数超标",
      errorDesc: "Shopee 标题必须少于 120 字符以免被限流。建议删除形容词或使用更短的词。"
    },
    action: {
      process: "开始本土化翻译",
      processing: "生成中..."
    },
    settings: {
      title: "API 设置",
      envDetected: "检测到环境变量 Key",
      envDesc: "您正在使用预配置的 Key。如有需要，可在下方覆盖。",
      label: "Google Gemini API Key",
      placeholder: "AIzaSy...",
      storageTip: "您的 Key 仅保存在本地浏览器的存储中。",
      getKey: "点击获取 Key",
      cancel: "取消",
      save: "保存设置"
    }
  }
};
