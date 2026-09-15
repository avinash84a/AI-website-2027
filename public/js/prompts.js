// AI Tools Marathi - prompts.js
// Comprehensive Marathi Prompt Library Data & Functionality

const MARATHI_PROMPTS = [
  // Office
  {
    id: "p-off-1",
    category: "Office",
    categoryLabel: "🏢 ऑफिस",
    title: "रजेचा अधिकृत Email (Leave Application)",
    target: "ऑफिस कर्मचारी",
    tool: "ChatGPT / Gemini / Copilot",
    desc: "कौटुंबिक कामासाठी किंवा आजारपणासाठी व्यवस्थापकाला नम्र आणि व्यावसायिक ईमेल पाठवण्यासाठी.",
    prompt: `माझ्या मॅनेजरला 2 दिवसांच्या रजेसाठी (Leave Application) एक नम्र आणि अत्यंत व्यावसायिक (Professional) ईमेल मराठीत लिहून द्या.
माझे नाव: [तुमचे नाव]
रजेचे कारण: [कौटुंबिक कार्यक्रम / आजारपण]
रजेचे दिवस: [तारीख ते तारीख]
माझ्या अनुपस्थितीत तातडीच्या कामासाठी कोण संपर्क हाताळेल: [सहकाऱ्याचे नाव]
ईमेलची भाषा आदरयुक्त, स्पष्ट आणि कॉर्पोरेट निकषांनुसार असावी.`
  },
  {
    id: "p-off-2",
    category: "Office",
    categoryLabel: "🏢 ऑफिस",
    title: "मीटिंगचे इतिवृत्त (Minutes of Meeting - MOM)",
    target: "प्रकल्प व्यवस्थापक / कर्मचारी",
    tool: "ChatGPT / Claude",
    desc: "लांबलचक बैठकीच्या कच्च्या मुद्द्यांवरून व्यवस्थित MOM तयार करण्यासाठी.",
    prompt: `मी आज झालेल्या टीम मीटिंगचे काही कच्चे मुद्दे खाली देत आहे. यावरून एक सुटसुटीत आणि सुबक 'Minutes of Meeting (MoM)' तयार करा.
यात पुढील भाग असावेत:
1. बैठकीचा मुख्य उद्देश
2. घेतलेले महत्त्वाचे निर्णय (Key Decisions)
3. Action Items (कोणी काय काम कधीपर्यंत पूर्ण करायचे आहे)
4. पुढील बैठकीची तारीख

कच्चे मुद्दे:
[येथे तुमचे मीटिंगचे मुद्दे पेस्ट करा]`
  },
  {
    id: "p-off-3",
    category: "Office",
    categoryLabel: "🏢 ऑफिस",
    title: "क्लायंटला प्रोजेक्ट कोटेशन / फॉलो-अप ईमेल",
    target: "फ्रीलान्सर / व्यावसायिक",
    tool: "ChatGPT / Claude",
    desc: "प्रस्ताव पाठवल्यानंतर क्लायंटकडून प्रतिसाद मिळवण्यासाठी आदरयुक्त पाठपुरावा.",
    prompt: `मी गेल्या आठवड्यात एका क्लायंटला आमच्या सेवेचा प्रस्ताव (Quotation) पाठवला होता. अद्याप त्यांचा प्रतिसाद आलेला नाही.
त्यांना कोणतीही जबरदस्ती न वाटता, मैत्रीपूर्ण पण व्यावसायिक भाषेत फॉलो-अप (Follow-up) ईमेल लिहा. 
प्रस्तावाबद्दल काही शंका असल्यास त्या सोडवण्यासाठी आम्ही तयार आहोत, असा उल्लेख करा.`
  },

  // Education
  {
    id: "p-edu-1",
    category: "Education",
    categoryLabel: "📚 शिक्षण",
    title: "पाण्याचे चक्र (Water Cycle) सोप्या मराठीत समजावणे",
    target: "शिक्षक व पालक",
    tool: "ChatGPT / Claude / NotebookLM",
    desc: "शालेय विद्यार्थ्यांना निसर्गातील पाण्याचे चक्र सहज समजेल अशा भाषेत शिकवण्यासाठी.",
    prompt: `इयत्ता 8 वीच्या विद्यार्थ्यांसाठी 'जलचक्र' (Water Cycle) ही संकल्पना अतिशय सोप्या आणि रंजक मराठीत समजावून सांगा.
यात बाष्पीभवन, सांद्रीभवन आणि पर्जन्यमान हे टप्पे रोजच्या स्वयंपाकघरातील उदाहरणातून (उदा. चहाचे पातेले किंवा झाकणावरील थेंब) स्पष्ट करा.
शेवटी विद्यार्थ्यांना विचारण्यासाठी 3 सोपे प्रश्न (Quiz) तयार करा.`
  },
  {
    id: "p-edu-2",
    category: "Education",
    categoryLabel: "📚 शिक्षण",
    title: "इतिहास पाठावर 10 गुणांची सराव प्रश्नपत्रिका",
    target: "शिक्षक",
    tool: "ChatGPT / Gemini",
    desc: "परीक्षेसाठी विविध प्रकारच्या प्रश्नांसह जलद टेस्ट पेपर बनवणे.",
    prompt: `छत्रपती शिवाजी महाराज यांच्या 'स्वराज्य स्थापना' या प्रकरणावर 10 गुणांची एक सराव प्रश्नपत्रिका तयार करा.
स्वरूप:
- रिकाम्या जागा भरा (2 गुण)
- एका वाक्यात उत्तरे द्या (3 गुण)
- 2-3 वाक्यात उत्तरे लिहा (4 गुण)
- विचारप्रवृत्त करणारा प्रश्न (1 गुण)
सर्व प्रश्नांची उत्तरे देखील खाली स्वतंत्रपणे जोडा.`
  },
  {
    id: "p-edu-3",
    category: "Education",
    categoryLabel: "📚 शिक्षण",
    title: "कठीण गणितीय संकल्पना मराठीत समजावणे",
    target: "विद्यार्थी",
    tool: "ChatGPT / Claude",
    desc: "पायथागोरसचा सिद्धांत किंवा बीजगणित व्यावहारिक पद्धतीने शिकणे.",
    prompt: `मला 'पायथागोरसचा सिद्धांत' (Pythagoras Theorem) समजायला कठीण जात आहे.
कोणतेही किचकट सूत्र थेट न सांगता, एका सुताराचे किंवा शिडी भिंतीला लावल्याचे सोपे वास्तववादी उदाहरण देऊन हा नियम कसा तयार झाला आणि तो कुठे वापरतात हे सांगा.`
  },

  // Business
  {
    id: "p-biz-1",
    category: "Business",
    categoryLabel: "🏪 बिझनेस",
    title: "किराणा / कापड दुकानाची WhatsApp सण जाहिरात",
    target: "दुकानदार व व्यापारी",
    tool: "ChatGPT / Gemini",
    desc: "दिवाळी, गणेशोत्सव किंवा गुढीपाडव्याला ग्राहकांना WhatsApp ग्रुप्सवर पाठवण्यासाठी जाहिरात.",
    prompt: `माझ्या किराणा/कापड दुकानासाठी गणेशोत्सवानिमित्त एक आकर्षक आणि वाचनास सोपी WhatsApp जाहिरात तयार करा.
दुकानाचे नाव: [तुमच्या दुकानाचे नाव]
ऑफर: सर्व खरेदीवर 10% सूट + मोफत होम डिलिव्हरी
स्थान: [तुमचा परिसर/शहर]
मजकुरात योग्य इमोजी, सणाचा उत्साह आणि ग्राहकांनी त्वरित ऑर्डर करण्यासाठी स्पष्ट Call to Action (उदा. फोन नंबर किंवा पत्ता) असावा.`
  },
  {
    id: "p-biz-2",
    category: "Business",
    categoryLabel: "🏪 बिझनेस",
    title: "नाराज ग्राहकाच्या तक्रारीला शांत व प्रभावी उत्तर",
    target: "ग्राहक सेवा / दुकानदार",
    tool: "ChatGPT / Claude",
    desc: "वस्तू खराब निघाल्याची तक्रार आल्यास ग्राहकाचे समाधान करणारा रिप्लाय.",
    prompt: `आमच्या दुकानातून घेतलेल्या एका प्रॉडक्टबद्दल एका ग्राहकाने WhatsApp वर तक्रार केली आहे की वस्तू वेळेवर पोहोचली नाही.
त्यांना विनम्रपणे दिलगिरी व्यक्त करणारा आणि लवकरात लवकर समस्या सोडवण्याचे आश्वासन देणारा व्यावसायिक मराठी मेसेज लिहून द्या. ग्राहकाचा विश्वास कायम राहील अशी नम्र भाषा असावी.`
  },

  // Home
  {
    id: "p-home-1",
    category: "Home",
    categoryLabel: "👩 घर आणि कुटुंब",
    title: "उपलब्ध साहित्यातून 20 मिनिटांचा झटपट नाश्ता",
    target: "गृहिणी व स्वयंपाकी",
    tool: "ChatGPT / Gemini",
    desc: "घरात उरलेल्या किंवा उपलब्ध साहित्यातून पौष्टिक पदार्थ सुचवणे.",
    prompt: `माझ्याकडे घरात सध्या फक्त बटाटे, कांदा, रवा आणि थोडे पोहे शिल्लक आहेत. 
या साहित्यापासून 20 मिनिटांत तयार होणारे 3 चवदार आणि आरोग्यदायी महाराष्ट्रीयन नाश्त्याचे पर्याय कृतीसह सांगा. तेल कमी लागेल अशी काळजी घ्या.`
  },
  {
    id: "p-home-2",
    category: "Home",
    categoryLabel: "👩 घर आणि कुटुंब",
    title: "7 दिवसांचे संतुलित कौटुंबिक जेवण नियोजन (Weekly Meal Plan)",
    target: "कुटुंबप्रमुख / गृहिणी",
    tool: "ChatGPT / Claude",
    desc: "रोज रोज 'काय भाजी करायची?' हा प्रश्न सोडवणारे साप्ताहिक वेळापत्रक.",
    prompt: `4 सदस्यांच्या महाराष्ट्रीयन कुटुंबासाठी सोमवार ते रविवारचा दुपारच्या व रात्रीच्या जेवणाचा संतुलित Meal Plan तयार करा.
यात डाळी, हिरव्या पालेभाज्या, कडधान्ये आणि सॅलडचा योग्य समतोल असावा. तसेच आठवड्याच्या शेवटी बाजारातून काय भाजीपाला आणायचा याची खरेदी यादी (Shopping List) सुद्धा द्या.`
  },

  // Social Media
  {
    id: "p-soc-1",
    category: "Social Media",
    categoryLabel: "📱 सोशल मीडिया",
    title: "Instagram Reel साठी 30 सेकंदांची मराठी Script",
    target: "कंटेंट क्रिएटर्स",
    tool: "ChatGPT / Claude",
    desc: "पहिल्या 3 सेकंदात प्रेक्षकांना खिळवून ठेवणारी प्रभावी रील स्क्रिप्ट.",
    prompt: `विषय: 'स्मार्टफोनमुळे होणारा वेळ वाया घालवणे कसे थांबवायचे?'
या विषयावर 30 सेकंदांची एक हाय-एनर्जी Instagram Reel स्क्रिप्ट लिहा.
यात पुढील गोष्टी असाव्यात:
1. पहिल्या 3 सेकंदांचा हुक (Hook) जो स्क्रोल करणे थांबवेल
2. 3 अतिशय सोप्या टिप्स
3. खाली कमेंट करायला लावणारा शेवट (Call-to-Action)
4. व्हिडिओत वापरण्यासाठी 5 ट्रेंडिंग मराठी हॅशटॅग्स.`
  },
  {
    id: "p-soc-2",
    category: "Social Media",
    categoryLabel: "📱 सोशल मीडिया",
    title: "YouTube व्हिडिओसाठी 5 आकर्षक क्लिक-होणारे टायटल्स",
    target: "YouTubers",
    tool: "ChatGPT / Gemini",
    desc: "व्हिडिओला जास्त व्ह्यूज मिळवून देणारे शोधण्यायोग्य (SEO) शीर्षक.",
    prompt: `मी 'घरबसल्या AI टूल्स शिकून पैसे कसे कमवावे' या विषयावर एक मराठी YouTube व्हिडिओ बनवत आहे.
यासाठी 5 अतिशय आकर्षक, उत्सुकता निर्माण करणारे आणि YouTube सर्चमध्ये रँक होणारे टायटल्स सुचवा. सोबत व्हिडिओच्या थंबनेलवर लिहिण्यासाठी 3-4 शब्दांचे लहान वाक्यही द्या.`
  },

  // Research
  {
    id: "p-res-1",
    category: "Research",
    categoryLabel: "🔎 संशोधन व शोध",
    title: "सरकारी योजनेची खात्रीशीर माहिती शोधणे",
    target: "ज्येष्ठ नागरिक व शेतकरी",
    tool: "Perplexity / Gemini",
    desc: "थेट सरकारी संकेतस्थळांच्या लिंक्ससह योजनेचे नियम समजून घेणे.",
    prompt: `महाराष्ट्र शासनाच्या 'महात्मा ज्योतिराव फुले शेतकरी कर्जमुक्ती योजना' किंवा 'ज्येष्ठ नागरिक वयोश्री योजना' चे चालू वर्षातील पात्रता नियम काय आहेत?
अर्ज कुठे आणि कसा करायचा? यासाठी लागणारी आवश्यक कागदपत्रे कोणती? अधिकृत शासकीय लिंकसह माहिती द्या.`
  },

  // Writing
  {
    id: "p-wri-1",
    category: "Writing",
    categoryLabel: "✍️ मजकूर लेखन",
    title: "ग्रामपंचायतीला / महानगरपालिकेला रस्ता दुरुस्तीसाठी अर्ज",
    target: "सामान्य नागरिक",
    tool: "ChatGPT / Claude",
    desc: "नागरी समस्यांबद्दल सरकारी अधिकाऱ्यांना पाठवण्यासाठी अधिकृत निवेदन.",
    prompt: `आमच्या परिसरातील मुख्य रस्त्यावर मोठ्या प्रमाणावर खड्डे पडल्यामुळे नागरिकांना आणि शाळकरी मुलांना त्रास होत आहे.
हा रस्ता तात्काळ दुरुस्त करण्यात यावा या मागणीसाठी संबंधित महानगरपालिका प्रभाग अधिकाऱ्याला / ग्रामसेवकाला देण्यासाठी एक अधिकृत, मुद्देसूद आणि प्रभावी मराठी तक्रार अर्ज लिहून द्या.`
  },

  // Design
  {
    id: "p-des-1",
    category: "Design",
    categoryLabel: "🎨 डिझाईन व पोस्टर",
    title: "Canva साठी पोस्टर लेआउट व कलर पॅलेट प्लॅन",
    target: "डिझायनर्स व दुकानदार",
    tool: "Canva AI / ChatGPT",
    desc: "छान पोस्टर डिझाईन करण्यासाठी आवश्यक फॉन्ट, रंग आणि घटकांची रचना.",
    prompt: `मी Canva वर 'मराठी राज्यभाषा गौरव दिन' निमित्त एक डिजिटल पोस्टर बनवत आहे.
या पोस्टरमध्ये कोणती मुख्य हेडिंग, उपशीर्षक, कोणते पार्श्वभूमी रंग (उदा. भगवा, गडद निळा, सोनेरी) आणि कोणते ग्राफिक घटक वापरावेत याची संपूर्ण स्टेप-बाय-स्टेप डिझाइन मार्गदर्शिका तयार करा.`
  },

  // Video
  {
    id: "p-vid-1",
    category: "Video",
    categoryLabel: "🎥 व्हिडिओ निर्मिती",
    title: "CapCut मध्ये व्हिडिओ एडिटिंगसाठी व्हिज्युअल प्रॉम्प्ट्स",
    target: "व्हिडिओ एडिटर",
    tool: "CapCut AI / Flow",
    desc: "व्हिडिओच्या प्रत्येक सीनमध्ये काय दिसावे याचा टाइमलाइन प्लॅन.",
    prompt: `एका 1 मिनिटाच्या शेतीविषयक माहितीपट व्हिडिओसाठी (Documentary) सीन-बाय-सीन स्टोरीबोर्ड बनवा.
प्रत्येक 10 सेकंदासाठी:
- काय दृश्य दिसेल (उदा. उगवणारे सूर्य, हिरवेगार शेत, शेतकरी)
- पार्श्वभूमीत काय ऑडिओ/मराठी व्हॉईसओव्हर असेल
- स्क्रीनवर काय टेक्स्ट दिसेल.`
  },

  // Productivity
  {
    id: "p-prod-1",
    category: "Productivity",
    categoryLabel: "⚙️ उत्पादकता",
    title: "Excel फॉर्म्युला मराठीत समजावून घेणे",
    target: "ऑफिस कर्मचारी",
    tool: "ChatGPT / Copilot",
    desc: "VLOOKUP किंवा XLOOKUP समजून घेऊन अचूक सूत्र तयार करणे.",
    prompt: `माझ्याकडे Excel मध्ये Sheet 1 मध्ये ग्राहकाचा Roll No आणि नाव आहे. Sheet 2 मध्ये फक्त Roll No आहे, त्यासमोर मला Sheet 1 मधून नाव आणायचे आहे.
यासाठी नेमका कोणता फॉर्म्युला (VLOOKUP किंवा XLOOKUP) कसा लिहायचा हे मराठीत स्टेप बाय स्टेप उदाहरणासह समजावून सांगा.`
  }
];

// Prompt Library Page Controller
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('prompts-list-container');
  const searchInput = document.getElementById('prompt-search-input');
  const filterTabs = document.querySelectorAll('.prompt-cat-btn');
  const countBadge = document.getElementById('prompt-results-count');

  if (!container) return;

  let activeCategory = 'All';

  function renderPrompts() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = MARATHI_PROMPTS.filter(item => {
      const matchCat = activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
      const matchQuery = !query || 
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.prompt.toLowerCase().includes(query) ||
        item.target.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (countBadge) {
      countBadge.innerText = `${filtered.length} Prompts उपलब्ध`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
          <div class="text-4xl mb-3">🔍</div>
          <h3 class="text-lg font-bold text-[#041E39] mb-1 marathi-text">कोणताही Prompt सापडला नाही</h3>
          <p class="text-sm text-slate-500 marathi-text mb-4">दुसरा शब्द शोधून पहा किंवा फिल्टर रीसेट करा.</p>
          <button id="reset-prompt-search" class="px-4 py-2 bg-[#041E39] text-white rounded-xl text-sm font-medium marathi-text">सर्व Prompts पहा</button>
        </div>
      `;
      const rBtn = document.getElementById('reset-prompt-search');
      if (rBtn) {
        rBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          activeCategory = 'All';
          updateTabButtons();
          renderPrompts();
        });
      }
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="prompt-card bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2.5 py-1 text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 rounded-full marathi-text">
              ${item.categoryLabel}
            </span>
            <span class="text-xs text-slate-500 font-medium marathi-text">
              🎯 ${item.target}
            </span>
          </div>

          <h3 class="text-lg font-bold text-[#041E39] marathi-text mb-2">${item.title}</h3>
          <p class="text-xs text-slate-500 marathi-text mb-4">${item.desc}</p>

          <div class="relative mb-4">
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 font-sans text-xs text-slate-700 leading-relaxed max-h-48 overflow-y-auto prompt-text select-all marathi-text">
${item.prompt}
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <span class="text-[11px] text-slate-500 font-mono">वापरा: ${item.tool}</span>
          <button type="button" onclick="copyPrompt(this)" class="btn-copy-prompt py-2 px-3.5 bg-[#041E39] hover:bg-[#082e54] text-white rounded-xl text-xs font-semibold marathi-text transition-colors flex items-center gap-1.5 shadow-sm">
            <span>📋</span>
            <span>Prompt कॉपी करा</span>
          </button>
        </div>
      </div>
    `).join('');
  }

  function updateTabButtons() {
    filterTabs.forEach(btn => {
      const cat = btn.dataset.cat;
      if (cat.toLowerCase() === activeCategory.toLowerCase()) {
        btn.classList.add('bg-[#041E39]', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      } else {
        btn.classList.remove('bg-[#041E39]', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      }
    });
  }

  filterTabs.forEach(btn => {
    btn.addEventListener('click', function () {
      activeCategory = this.dataset.cat;
      updateTabButtons();
      renderPrompts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', renderPrompts);
  }

  renderPrompts();
});
