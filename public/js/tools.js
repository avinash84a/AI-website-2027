// AI Tools Marathi - tools.js
// Comprehensive tools dataset with Marathi metadata

const ALL_TOOLS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    marathiTagline: "तुमचा रोजचा AI Assistant",
    category: "AI Assistant",
    categorySlug: "assistant",
    difficulty: "Beginner",
    audience: "सर्वांसाठी (All)",
    description: "प्रश्न विचारणे, ईमेल लिहिणे, शिकणे, भाषांतर आणि विविध कामांत त्वरित मदत करणारा जगातील सर्वात लोकप्रिय AI Assistant.",
    icon: "🤖",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    slug: "chatgpt.html",
    freePlan: true,
    bestFor: "All-round AI Assistant, Writing & Questions",
    tags: ["writing", "assistant", "email", "learning", "translation", "chat", "ideas"],
    featured: true,
    officialUrl: "https://chatgpt.com"
  },
  {
    id: "gemini",
    name: "Gemini",
    marathiTagline: "Google चे सामर्थ्य असलेला AI",
    category: "AI Assistant",
    categorySlug: "assistant",
    difficulty: "Beginner",
    audience: "विद्यार्थी, कर्मचारी, शिक्षक",
    description: "Google Docs, Gmail आणि थेट ताज्या इंटरनेट माहितीशी जोडलेला शक्तिशाली Google चा मोफत AI Assistant.",
    icon: "✨",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    slug: "gemini.html",
    freePlan: true,
    bestFor: "Google Ecosystem & Real-time Web Data",
    tags: ["google", "research", "gmail", "docs", "writing", "assistant", "photos"],
    featured: true,
    officialUrl: "https://gemini.google.com"
  },
  {
    id: "claude",
    name: "Claude",
    marathiTagline: "सखोल अभ्यास आणि मानवी लिखाण",
    category: "AI Assistant",
    categorySlug: "assistant",
    difficulty: "Intermediate",
    audience: "लेखक, संशोधक, कोडर",
    description: "मोठमोठे पेपर्स, पुस्तके आणि लांबलचक मजकूर समजून घेऊन अत्यंत नैसर्गिक आणि सुंदर मानवी भाषेत उत्तर देणारा AI.",
    icon: "🧠",
    iconBg: "bg-amber-50 text-amber-700 border-amber-200",
    slug: "claude.html",
    freePlan: true,
    bestFor: "Deep Analysis, Long Documents & Human-like Text",
    tags: ["writing", "analysis", "coding", "summary", "research", "long-text"],
    featured: true,
    officialUrl: "https://claude.ai"
  },
  {
    id: "perplexity",
    name: "Perplexity",
    marathiTagline: "संदर्भ आणि पुराव्यांसह Live Web Research",
    category: "Research",
    categorySlug: "research",
    difficulty: "Beginner",
    audience: "विद्यार्थी, पत्रकार, संशोधक",
    description: "Google Search पेक्षा 10 पट हुशार! थेट इंटरनेटवरून माहिती शोधून प्रत्येक उत्तरासोबत मूळ संदर्भ आणि Link देणारा AI Search Engine.",
    icon: "🔎",
    iconBg: "bg-teal-50 text-teal-700 border-teal-200",
    slug: "perplexity.html",
    freePlan: true,
    bestFor: "Live Web Research & Direct Citations",
    tags: ["research", "search", "links", "citations", "current-affairs", "facts"],
    featured: true,
    officialUrl: "https://www.perplexity.ai"
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    marathiTagline: "तुमच्या स्वतःच्या PDF व पुस्तकांचा वैयक्तिक गुरु",
    category: "Study & PDF",
    categorySlug: "study",
    difficulty: "Beginner",
    audience: "विद्यार्थी, शिक्षक, अभ्यासक",
    description: "तुमची कोणतीही PDF, पुस्तक किंवा नोट्स अपलोड करा; हा AI फक्त तुमच्याच साहित्यातून अचूक उत्तरे आणि ऑडिओ चर्चा तयार करतो.",
    icon: "📚",
    iconBg: "bg-purple-50 text-purple-700 border-purple-200",
    slug: "notebooklm.html",
    freePlan: true,
    bestFor: "PDF Analysis, Study Notes & Audio Overviews",
    tags: ["pdf", "study", "notes", "education", "google", "audio-discussion"],
    featured: true,
    officialUrl: "https://notebooklm.google.com"
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    marathiTagline: "ऑफिस कामांसाठी Microsoft चा AI साथी",
    category: "Office",
    categorySlug: "office",
    difficulty: "Beginner",
    audience: "ऑफिस कर्मचारी, व्यावसायिक",
    description: "Word, Excel, PowerPoint आणि Windows सोबत काम करणारा आणि ऑफिस कामांचा वेळ 70% कमी करणारा AI.",
    icon: "💼",
    iconBg: "bg-sky-50 text-sky-700 border-sky-200",
    slug: "copilot.html",
    freePlan: true,
    bestFor: "Microsoft Office, Word, Excel & Windows",
    tags: ["office", "excel", "word", "powerpoint", "corporate", "productivity"],
    featured: false,
    officialUrl: "https://copilot.microsoft.com"
  },
  {
    id: "canva",
    name: "Canva AI",
    marathiTagline: "एका क्लिकवर पोस्टर्स, बॅनर आणि डिझाईन",
    category: "Design",
    categorySlug: "design",
    difficulty: "Beginner",
    audience: "दुकानदार, सोशल मीडिया, ग्राफिक क्रिएटर्स",
    description: "फक्त काय हवे ते सांगा आणि काही सेकंदात मराठी सण, दुकानांच्या जाहिराती, पोस्टर्स आणि व्हिज्युअल डिझाईन तयार करा.",
    icon: "🎨",
    iconBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    slug: "canva.html",
    freePlan: true,
    bestFor: "Instant Graphic Design, Posters & Social Media",
    tags: ["design", "poster", "graphics", "social-media", "banner", "canva", "flyer"],
    featured: true,
    officialUrl: "https://www.canva.com"
  },
  {
    id: "gamma",
    name: "Gamma App",
    marathiTagline: "फक्त Prompt वरून देखणी PPT आणि डॉक्युमेंट",
    category: "Design",
    categorySlug: "design",
    difficulty: "Beginner",
    audience: "विद्यार्थी, शिक्षक, व्यावसायिक",
    description: "विषयाचे नाव टाका आणि अवघ्या 30 सेकंदात चित्रे, मुद्दे आणि आकर्षक फॉरमॅटसह संपूर्ण Presentation (PPT) तयार करा.",
    icon: "📊",
    iconBg: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    slug: "gamma.html",
    freePlan: true,
    bestFor: "AI Presentations (PPT), Webpages & Documents",
    tags: ["ppt", "presentation", "slides", "documents", "office", "design"],
    featured: false,
    officialUrl: "https://gamma.app"
  },
  {
    id: "capcut",
    name: "CapCut AI",
    marathiTagline: "Reels, Shorts आणि व्हिडिओंचे जलद एडिटिंग",
    category: "Video",
    categorySlug: "video",
    difficulty: "Beginner",
    audience: "व्हिडिओ क्रिएटर्स, तरुण, दुकानदार",
    description: "ऑटोमॅटिक सबटायटल्स, बॅकग्राउंड काढणे, आवाजातील गोंधळ हटवणे आणि एका क्लिकवर व्हिडिओ एडिटींग करणारा सोपा AI.",
    icon: "🎥",
    iconBg: "bg-rose-50 text-rose-700 border-rose-200",
    slug: "capcut.html",
    freePlan: true,
    bestFor: "Reels, Shorts, Video Captions & Cutouts",
    tags: ["video", "reels", "shorts", "editing", "subtitles", "mobile"],
    featured: true,
    officialUrl: "https://www.capcut.com"
  },
  {
    id: "google-vids",
    name: "Google Vids",
    marathiTagline: "ऑफिस आणि ट्रेनिंगसाठी AI व्हिडिओ निर्माता",
    category: "Video",
    categorySlug: "video",
    difficulty: "Beginner",
    audience: "ऑफिस कर्मचारी, शिक्षक, ट्रेनर्स",
    description: "Google Workspace चा भाग असून प्रेझेंटेशन, ट्रेनिंग आणि संकल्पनांचे पटकन प्रोफेशनल व्हिडिओंमध्ये रूपांतर करतो.",
    icon: "🎬",
    iconBg: "bg-red-50 text-red-700 border-red-200",
    slug: "google-vids.html",
    freePlan: true,
    bestFor: "Workplace Videos, Training & Pitch Videos",
    tags: ["google", "video", "training", "workspace", "education"],
    featured: false,
    officialUrl: "https://workspace.google.com/products/vids"
  },
  {
    id: "flow",
    name: "Flow AI",
    marathiTagline: "क्रिएटिव्ह व्हिज्युअल आणि व्हिडिओ जनरेटर",
    category: "Video",
    categorySlug: "video",
    difficulty: "Intermediate",
    audience: "क्रिएटिव्ह डिझायनर्स, आर्टिस्ट",
    description: "टेक्स्ट प्रॉम्प्टवरून उच्च दर्जाचे सिनेमॅटिक व्हिडिओ आणि मोशन आर्ट तयार करणारे प्रगत AI टूल.",
    icon: "🌊",
    iconBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    slug: "flow.html",
    freePlan: true,
    bestFor: "Text to Cinematic Video & Visual Motion",
    tags: ["video", "cinematic", "motion", "creative", "art"],
    featured: false,
    officialUrl: "https://flow.art"
  },
  {
    id: "suno",
    name: "Suno AI",
    marathiTagline: "शब्दांवरून संगीत आणि गाणी तयार करा",
    category: "Music",
    categorySlug: "music",
    difficulty: "Beginner",
    audience: "गायक, क्रिएटर्स, संगीतरसिक",
    description: "तुम्ही लिहिलेल्या मराठी कविता किंवा ओळींना ताल, सुरेल संगीत आणि आवाजासह संपूर्ण गाण्यात रूपांतरित करणारा जादूई AI.",
    icon: "🎵",
    iconBg: "bg-pink-50 text-pink-700 border-pink-200",
    slug: "suno.html",
    freePlan: true,
    bestFor: "AI Song Making, Marathi Music & Jingles",
    tags: ["music", "songs", "lyrics", "audio", "jingles", "singing"],
    featured: false,
    officialUrl: "https://suno.com"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    marathiTagline: "अतिशय नैसर्गिक मानवी आवाज (Voiceover)",
    category: "Voice",
    categorySlug: "voice",
    difficulty: "Beginner",
    audience: "YouTubers, पॉडकास्टर्स, जाहिरातदार",
    description: "कुठलाही मजकूर दिल्यास अगदी खऱ्या माणसासारखा भावपूर्ण आणि स्पष्ट आवाजात Voiceover तयार करणारा अव्वल दर्जाचा AI.",
    icon: "🎙️",
    iconBg: "bg-amber-50 text-amber-700 border-amber-200",
    slug: "elevenlabs.html",
    freePlan: true,
    bestFor: "Ultra-realistic Voiceover & Text-to-Speech",
    tags: ["voice", "voiceover", "audio", "speech", "youtube", "podcast"],
    featured: false,
    officialUrl: "https://elevenlabs.io"
  },
  {
    id: "omnivoice",
    name: "OmniVoice AI",
    marathiTagline: "कॉल आणि कस्टमर सपोर्टसाठी व्हॉईस AI",
    category: "Voice",
    categorySlug: "voice",
    difficulty: "Intermediate",
    audience: "कॉल सेंटर्स, छोटे व मोठे उद्योजक",
    description: "ग्राहकांशी थेट संवाद साधण्यासाठी, फोन कॉल्स ऑटोमेट करण्यासाठी आणि बहुभाषिक व्हॉईस सपोर्टसाठी AI प्लॅटफॉर्म.",
    icon: "📞",
    iconBg: "bg-violet-50 text-violet-700 border-violet-200",
    slug: "omnivoice.html",
    freePlan: true,
    bestFor: "Customer Calling, Voice Bots & Support",
    tags: ["voice", "telephony", "customer-support", "calls", "business"],
    featured: false,
    officialUrl: "https://omnivoice.ai"
  },
  {
    id: "google-ai-studio",
    name: "Google AI Studio",
    marathiTagline: "Gemini मॉडेल्स वापरून स्वतःचे AI ॲप्स बनवा",
    category: "Development",
    categorySlug: "development",
    difficulty: "Advanced",
    audience: "सॉफ्टवेअर डेव्हलपर्स, तंत्रज्ञ",
    description: "Google चे सर्वात वेगवान Gemini 1.5/2.0 मॉडेल्स टेस्ट करण्यासाठी, प्रॉम्प्ट ट्यून करण्यासाठी आणि API की मिळवण्यासाठीचे अधिकृत व्यासपीठ.",
    icon: "⚡",
    iconBg: "bg-blue-50 text-blue-700 border-blue-200",
    slug: "google-ai-studio.html",
    freePlan: true,
    bestFor: "Gemini API Prototyping, Prompt Tuning & Coding",
    tags: ["developer", "api", "gemini", "prompt-engineering", "coding", "google"],
    featured: false,
    officialUrl: "https://aistudio.google.com"
  },
  {
    id: "google-lens",
    name: "Google Lens",
    marathiTagline: "फोटोवरून माहिती, भाषांतर आणि शोध",
    category: "Research",
    categorySlug: "research",
    difficulty: "Beginner",
    audience: "सामान्य नागरिक, गृहिणी, ज्येष्ठ नागरिक",
    description: "मोबाईलचा कॅमेरा धरून कोणत्याही पाटीचे, कागदपत्राचे किंवा औषधाचे मराठीत भाषांतर करा आणि वस्तूची संपूर्ण माहिती मिळवा.",
    icon: "📸",
    iconBg: "bg-green-50 text-green-700 border-green-200",
    slug: "google-lens.html",
    freePlan: true,
    bestFor: "Camera Search, Real-time Translation & Object Info",
    tags: ["camera", "translation", "mobile", "scanner", "plants", "medicines"],
    featured: false,
    officialUrl: "https://lens.google"
  },
  {
    id: "zapier",
    name: "Zapier",
    marathiTagline: "7,000+ ॲप्सना कोड न लिहिता जोडा",
    category: "Automation",
    categorySlug: "automation",
    difficulty: "Intermediate",
    audience: "व्यावसायिक, मार्केटर्स, ऑफिस टीम्स",
    description: "Gmail, Google Sheets, WhatsApp, Facebook यांना एकत्र जोडून तुमची दररोजची पुनरावृत्ती होणारी कामे आपोआप चालू ठेवा.",
    icon: "⚡",
    iconBg: "bg-orange-50 text-orange-700 border-orange-200",
    slug: "zapier.html",
    freePlan: true,
    bestFor: "No-code App Workflows & Simple Automation",
    tags: ["automation", "no-code", "sheets", "gmail", "leads", "business"],
    featured: false,
    officialUrl: "https://zapier.com"
  },
  {
    id: "make",
    name: "Make.com",
    marathiTagline: "व्हिज्युअल वर्कफ्लो ऑटोमेशन प्लॅटफॉर्म",
    category: "Automation",
    categorySlug: "automation",
    difficulty: "Intermediate",
    audience: "एजन्सी मालक, डेटा ऑपरेटर्स",
    description: "गुंतागुंतीचे बिझनेस प्रोसेस नकाशे (Visual Flow) बनवून स्वयंचलित करा. Zapier पेक्षा जास्त लवचिक आणि वाजवी दरात.",
    icon: "🔄",
    iconBg: "bg-purple-50 text-purple-700 border-purple-200",
    slug: "make.html",
    freePlan: true,
    bestFor: "Complex Visual Business Workflows & Scenarios",
    tags: ["automation", "workflow", "integration", "visual", "leads"],
    featured: false,
    officialUrl: "https://www.make.com"
  },
  {
    id: "n8n",
    name: "n8n",
    marathiTagline: "ओपन सोर्स आणि AI Agents ऑटोमेशन",
    category: "Automation",
    categorySlug: "automation",
    difficulty: "Advanced",
    audience: "तांत्रिक व्यावसायिक, स्टार्ट-अप्स, डेव्हलपर्स",
    description: "स्वतःच्या सर्व्हरवर चालणारे आणि AI मॉडेल्सना जोडून स्वायत्त AI Agents बनवणारे आधुनिक, सुरक्षित ऑटोमेशन टूल.",
    icon: "⚙️",
    iconBg: "bg-red-50 text-red-700 border-red-200",
    slug: "n8n.html",
    freePlan: true,
    bestFor: "Self-hosted AI Agents, Open Source Workflows",
    tags: ["automation", "ai-agents", "open-source", "developer", "privacy"],
    featured: true,
    officialUrl: "https://n8n.io"
  }
];

// Helper to render a tool card HTML
function createToolCardHtml(tool) {
  const difficultyBadge = tool.difficulty === 'Beginner' 
    ? '<span class="px-2.5 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full">★ Beginner Friendly</span>'
    : tool.difficulty === 'Intermediate'
    ? '<span class="px-2.5 py-1 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full">★★ Intermediate</span>'
    : '<span class="px-2.5 py-1 text-xs font-semibold bg-rose-100 text-rose-800 rounded-full">★★★ Advanced</span>';

  return `
    <div class="tool-card bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-slate-300" data-category="${tool.category}" data-difficulty="${tool.difficulty}">
      <div>
        <div class="flex items-start justify-between gap-4 mb-4">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border ${tool.iconBg} shadow-sm">
            ${tool.icon}
          </div>
          ${difficultyBadge}
        </div>
        
        <h3 class="text-xl font-bold text-[#041E39] tracking-tight mb-1">${tool.name}</h3>
        <p class="text-sm font-semibold text-[#F7B500] marathi-text mb-3">${tool.marathiTagline}</p>
        
        <p class="text-sm text-slate-600 line-clamp-3 marathi-text mb-4">
          ${tool.description}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-100 mt-auto">
        <div class="flex items-center justify-between text-xs text-slate-500 marathi-text mb-4">
          <span class="inline-flex items-center gap-1">
            <span class="font-medium text-slate-700">विभाग:</span> ${tool.category}
          </span>
          <span class="inline-flex items-center gap-1">
            <span class="font-medium text-slate-700">👥</span> ${tool.audience}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <a href="/tools/${tool.slug}" class="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#041E39] hover:bg-[#082e54] text-white font-medium text-sm marathi-text transition-colors duration-150 flex items-center justify-center gap-2">
            <span>हे Tool शिका</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="${tool.officialUrl}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors text-sm" title="अधिकृत वेबसाईट उघडा" aria-label="${tool.name} वेबसाईट">
            🌐
          </a>
        </div>
      </div>
    </div>
  `;
}
