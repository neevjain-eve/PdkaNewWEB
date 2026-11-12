/* PDKA extra translations for index.html: sections that are not swapped by setLang()
   (About, DPDPA band + guide modal, hero headline). Text is replaced in place so the countdown, counters
   and icons keep working. Language comes from localStorage 'pdka-lang' (en / ja / hi).
   An entry whose English key ends with '*' matches by prefix; otherwise the whole text must match.
   A translation containing '<' replaces the element's HTML; otherwise only its first text node (keeps icons). */
(function () {
  'use strict';
  var ENTRIES = [
{
"k": "About the Firm",
"ja": "事務所概要",
"hi": "फर्म के बारे में"
},
{
"k": "Years of Professional Services",
"ja": "年の専門サービス実績",
"hi": "वर्षों की व्यावसायिक सेवाएँ"
},
{
"k": "PDKA is a professional CA firm based in Bangalore*",
"ja": "PDKAはバンガロールを拠点とする専門の会計士事務所で、インドおよび9か国（米国、英国、オーストラリア、ドバイ、シンガポール、アイルランド、日本、イタリア）のクライアントにサービスを提供しています。",
"hi": "PDKA बेंगलुरु स्थित एक पेशेवर CA फर्म है, जो भारत और 9 देशों — अमेरिका, यूके, ऑस्ट्रेलिया, दुबई, सिंगापुर, आयरलैंड, जापान और इटली — के ग्राहकों को सेवाएँ देती है।"
},
{
"k": "FCA Leadership",
"ja": "FCAによるリーダーシップ",
"hi": "FCA नेतृत्व"
},
{
"k": "CISA · IS Audit",
"ja": "CISA · IS監査",
"hi": "CISA · IS ऑडिट"
},
{
"k": "DISA Certified",
"ja": "DISA認定",
"hi": "DISA प्रमाणित"
},
{
"k": "9 Countries",
"ja": "9か国",
"hi": "9 देश"
},
{
"k": "DPDPA · India Data Protection Act 2023",
"ja": "DPDPA · インド個人データ保護法 2023",
"hi": "DPDPA · भारत का डेटा संरक्षण अधिनियम 2023"
},
{
"k": "DPDPA compliance is a transformation journey, not a last-minute fix.",
"ja": "DPDPAへの対応は、直前の応急処置ではなく、組織変革の道のりです。",
"hi": "DPDPA अनुपालन एक परिवर्तन यात्रा है, अंतिम समय का समाधान नहीं।"
},
{
"k": "Full enforcement begins*",
"ja": "全面施行は<strong style=\"color:white;\">2027年5月13日</strong>です。インドのデジタル個人データ保護法は、同意に基づくデータの取扱い、72時間以内の漏えい報告、データ主体の権利を義務付けています。罰則は1件の違反につき最大<strong style=\"color:white;\">₹250クロール（25億ルピー）</strong>です。",
"hi": "पूर्ण प्रवर्तन <strong style=\"color:white;\">13 मई 2027</strong> से शुरू होगा। भारत का डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम सहमति-आधारित डेटा प्रबंधन, 72 घंटे के भीतर उल्लंघन की रिपोर्टिंग और डेटा प्रिंसिपल के अधिकार अनिवार्य करता है। दंड प्रति उल्लंघन <strong style=\"color:white;\">₹250 करोड़</strong> तक।"
},
{
"k": "Consent Management",
"ja": "同意管理",
"hi": "सहमति प्रबंधन"
},
{
"k": "72-hr Breach Reporting",
"ja": "72時間以内の漏えい報告",
"hi": "72 घंटे में उल्लंघन रिपोर्टिंग"
},
{
"k": "Data Principal Rights",
"ja": "データ主体の権利",
"hi": "डेटा प्रिंसिपल के अधिकार"
},
{
"k": "₹250 Cr Penalty Risk",
"ja": "罰則リスク 最大₹250クロール",
"hi": "₹250 करोड़ तक दंड का जोखिम"
},
{
"k": "Get DPDPA Ready",
"ja": "DPDPAに備える",
"hi": "DPDPA के लिए तैयार हों"
},
{
"k": "Read the full guide",
"ja": "詳細ガイドを読む",
"hi": "पूरा गाइड पढ़ें"
},
{
"k": "Time to Full Enforcement",
"ja": "全面施行まで",
"hi": "पूर्ण प्रवर्तन में शेष समय"
},
{
"k": "Days",
"ja": "日",
"hi": "दिन"
},
{
"k": "Hrs",
"ja": "時間",
"hi": "घंटे"
},
{
"k": "Mins",
"ja": "分",
"hi": "मिनट"
},
{
"k": "Secs",
"ja": "秒",
"hi": "सेकंड"
},
{
"k": "Digital Personal Data Protection Act, 2023",
"ja": "デジタル個人データ保護法 2023",
"hi": "डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023"
},
{
"k": "India's DPDPA — Complete Guide",
"ja": "インドDPDPA 完全ガイド",
"hi": "भारत का DPDPA — संपूर्ण मार्गदर्शिका"
},
{
"k": "Everything you need to know about compliance, rights, penalties, and the enforcement timeline.",
"ja": "コンプライアンス、権利、罰則、施行スケジュールについて知っておくべきこと。",
"hi": "अनुपालन, अधिकार, दंड और प्रवर्तन समय-सारणी के बारे में आपको जो कुछ जानना चाहिए।"
},
{
"k": "Overview",
"ja": "概要",
"hi": "अवलोकन"
},
{
"k": "The Digital Personal Data Protection Act, 2023 (DPDPA) was enacted*",
"ja": "デジタル個人データ保護法2023（DPDPA）は<strong>2023年8月11日</strong>に制定され、同日に大統領の承認を得ました。組織（データ受託者）による個人（データ主体）の<em>デジタル個人データ</em>の取扱いを規律する、インド初の包括的なデータ保護法です。全面施行に関する規則は<strong>2027年5月13日</strong>までに通知される見込みです。",
"hi": "डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 (DPDPA) <strong>11 अगस्त 2023</strong> को अधिनियमित हुआ और उसी दिन इसे राष्ट्रपति की स्वीकृति मिली। यह भारत का पहला व्यापक डेटा संरक्षण कानून है, जो संगठनों (डेटा फिड्यूशियरी) द्वारा व्यक्तियों (डेटा प्रिंसिपल) के <em>डिजिटल व्यक्तिगत डेटा</em> के प्रसंस्करण को नियंत्रित करता है। पूर्ण प्रवर्तन के नियम <strong>13 मई 2027</strong> तक अधिसूचित होने की उम्मीद है।"
},
{
"k": "Applicability",
"ja": "適用範囲",
"hi": "प्रयोज्यता"
},
{
"k": "Applies to all entities processing digital personal data within India*",
"ja": "インド国内でデジタル個人データを取り扱うすべての事業体に適用されます。また、インド国内の人に商品・サービスを提供する場合は、インド国外での取扱いにも適用されます。",
"hi": "भारत के भीतर डिजिटल व्यक्तिगत डेटा का प्रसंस्करण करने वाली सभी संस्थाओं पर लागू; और यदि भारत में व्यक्तियों को वस्तुएँ/सेवाएँ दी जाती हैं तो भारत के बाहर होने वाले प्रसंस्करण पर भी।"
},
{
"k": "Exemptions",
"ja": "適用除外",
"hi": "छूट"
},
{
"k": "Personal/domestic use, journalistic/research purposes*",
"ja": "個人・家庭目的の利用、報道・研究目的、国家安全保障のための国による取扱い、公開されているデータ、およびインドの事業体がインド国外で処理するデータ。",
"hi": "व्यक्तिगत/घरेलू उपयोग, पत्रकारिता/अनुसंधान के उद्देश्य, राष्ट्रीय सुरक्षा के लिए राज्य द्वारा प्रसंस्करण, सार्वजनिक रूप से उपलब्ध डेटा, और भारतीय संस्थाओं द्वारा भारत के बाहर प्रसंस्कृत डेटा।"
},
{
"k": "Key Provisions",
"ja": "主な規定",
"hi": "प्रमुख प्रावधान"
},
{
"k": "Lawful Basis (Sec 4–5):*",
"ja": "<strong>適法な根拠（第4～5条）：</strong>個人データは適法な目的のためにのみ処理できます。自由で、十分な情報に基づく、特定された無条件の<em>同意</em>があるか、一定の<em>正当な利用</em>（雇用、医療上の緊急事態、法的義務、公益）に該当する場合に限られます。",
"hi": "<strong>वैध आधार (धारा 4–5):</strong> व्यक्तिगत डेटा का प्रसंस्करण केवल वैध उद्देश्य के लिए हो सकता है — या तो स्वतंत्र, सूचित, विशिष्ट और बिना शर्त <em>सहमति</em> से, या कुछ <em>वैध उपयोगों</em> (रोज़गार, चिकित्सा आपात स्थिति, कानूनी दायित्व, जनहित) के लिए।"
},
{
"k": "Consent Management (Sec 6–8):*",
"ja": "<strong>同意管理（第6～8条）：</strong>同意は、細分化され、目的ごとに特定され、与えたときと同様に容易にいつでも撤回できるものでなければなりません。同意マネージャー（登録された仲介者）は、データ主体に代わって同意を管理できます。",
"hi": "<strong>सहमति प्रबंधन (धारा 6–8):</strong> सहमति विस्तृत, उद्देश्य-विशिष्ट और किसी भी समय उतनी ही आसानी से वापस लेने योग्य होनी चाहिए जितनी आसानी से दी गई थी। सहमति प्रबंधक (पंजीकृत मध्यस्थ) डेटा प्रिंसिपल की ओर से सहमति का प्रबंधन कर सकते हैं।"
},
{
"k": "Notice Requirements (Sec 5):*",
"ja": "<strong>通知要件（第5条）：</strong>データ受託者は、データ収集の前または収集時に、収集する個人データ、その目的、およびデータ主体の権利を記載した明確な通知を行わなければなりません。",
"hi": "<strong>सूचना संबंधी आवश्यकताएँ (धारा 5):</strong> डेटा फिड्यूशियरी को डेटा एकत्र करने से पहले या उसके समय एकत्र किए गए व्यक्तिगत डेटा, उद्देश्य और डेटा प्रिंसिपल के अधिकारों का स्पष्ट विवरण देने वाली सूचना देनी होगी।"
},
{
"k": "Purpose Limitation:*",
"ja": "<strong>目的の限定：</strong>データは、収集した目的のためにのみ処理できます。目的が達成された後は、法令で保持が義務付けられていない限り、データを消去しなければなりません。",
"hi": "<strong>उद्देश्य की सीमा:</strong> डेटा केवल उसी उद्देश्य के लिए प्रसंस्कृत किया जा सकता है जिसके लिए उसे एकत्र किया गया था। उद्देश्य पूरा होने पर, जब तक कानून द्वारा प्रतिधारण अनिवार्य न हो, डेटा मिटाना होगा।"
},
{
"k": "Data Localisation:*",
"ja": "<strong>データの国内保存：</strong>一定のデータは、国境を越える移転が制限される場合があります。政府は、データ移転が許可または制限される国・地域を通知できます。",
"hi": "<strong>डेटा स्थानीयकरण:</strong> कुछ डेटा के सीमा-पार हस्तांतरण पर रोक लगाई जा सकती है। सरकार उन देशों/क्षेत्रों को अधिसूचित कर सकती है जहाँ डेटा हस्तांतरण की अनुमति है या प्रतिबंधित है।"
},
{
"k": "Security Safeguards (Sec 8):*",
"ja": "<strong>安全管理措置（第8条）：</strong>データ受託者は、個人データの漏えいを防ぐため、合理的な技術的・組織的措置を講じなければなりません。",
"hi": "<strong>सुरक्षा उपाय (धारा 8):</strong> डेटा फिड्यूशियरी को व्यक्तिगत डेटा उल्लंघनों को रोकने के लिए उचित तकनीकी और संगठनात्मक उपाय लागू करने होंगे।"
},
{
"k": "Breach Notification (Sec 8):*",
"ja": "<strong>漏えい通知（第8条）：</strong>漏えいが発生した場合、データ受託者は<em>インド・データ保護委員会（DPBI）</em>および影響を受けた各データ主体に速やかに通知しなければなりません（規則案では72時間以内となる見込み）。",
"hi": "<strong>उल्लंघन की सूचना (धारा 8):</strong> उल्लंघन होने पर डेटा फिड्यूशियरी को <em>भारतीय डेटा संरक्षण बोर्ड (DPBI)</em> और प्रभावित प्रत्येक डेटा प्रिंसिपल को शीघ्र सूचित करना होगा (मसौदा नियमों के अंतर्गत संभवतः 72 घंटे के भीतर)।"
},
{
"k": "Children's Data (Sec 9):*",
"ja": "<strong>児童のデータ（第9条）：</strong>児童（18歳未満）のデータの処理には、検証可能な保護者の同意が必要です。児童に有害な処理や、追跡・ターゲティングのための処理は禁止されています。",
"hi": "<strong>बच्चों का डेटा (धारा 9):</strong> बच्चों (18 वर्ष से कम) के डेटा के प्रसंस्करण के लिए सत्यापन योग्य अभिभावकीय सहमति आवश्यक है। बच्चों के लिए हानिकारक या ट्रैकिंग/लक्ष्यीकरण हेतु प्रसंस्करण प्रतिबंधित है।"
},
{
"k": "Significant Data Fiduciaries (Sec 10):*",
"ja": "<strong>重要データ受託者（第10条）：</strong>政府は、データ量、機微性、国家安全保障上のリスクなどに基づき、特定の事業体を重要データ受託者（SDF）に指定できます。SDFには、インド在住のデータ保護責任者（DPO）の任命、データ保護影響評価（DPIA）の実施、定期監査などの追加義務があります。",
"hi": "<strong>महत्वपूर्ण डेटा फिड्यूशियरी (धारा 10):</strong> सरकार डेटा की मात्रा, संवेदनशीलता, राष्ट्रीय सुरक्षा के जोखिम आदि के आधार पर कुछ संस्थाओं को SDF नामित कर सकती है। SDF पर भारत में स्थित डेटा संरक्षण अधिकारी (DPO) की नियुक्ति, डेटा संरक्षण प्रभाव आकलन (DPIA) और आवधिक ऑडिट सहित अतिरिक्त दायित्व होते हैं।"
},
{
"k": "Data Principal Rights (Sec 11–16)",
"ja": "データ主体の権利（第11～16条）",
"hi": "डेटा प्रिंसिपल के अधिकार (धारा 11–16)"
},
{
"k": "Right to Information",
"ja": "情報へのアクセス権",
"hi": "सूचना का अधिकार"
},
{
"k": "Access a summary of personal data being processed*",
"ja": "処理されている個人データの概要と、それを取り扱うすべてのデータ受託者および処理者の身元を確認できます。",
"hi": "संसाधित किए जा रहे व्यक्तिगत डेटा का सारांश और उसे संभालने वाले सभी डेटा फिड्यूशियरी और प्रोसेसर की पहचान जानना।"
},
{
"k": "Right to Correction & Erasure",
"ja": "訂正・消去の権利",
"hi": "सुधार और मिटाने का अधिकार"
},
{
"k": "Request correction of inaccurate/incomplete data*",
"ja": "不正確・不完全なデータの訂正と、特定された目的に不要となったデータの消去を請求できます。",
"hi": "गलत/अधूरे डेटा के सुधार और घोषित उद्देश्य के लिए अब आवश्यक न रहे डेटा को मिटाने का अनुरोध करना।"
},
{
"k": "Right to Grievance Redressal",
"ja": "苦情救済の権利",
"hi": "शिकायत निवारण का अधिकार"
},
{
"k": "Register complaints with the Data Fiduciary first*",
"ja": "まずデータ受託者に苦情を申し立て、解決しない場合はデータ保護委員会に申し立てます。",
"hi": "पहले डेटा फिड्यूशियरी के पास शिकायत दर्ज करें; समाधान न होने पर डेटा संरक्षण बोर्ड के पास ले जाएँ।"
},
{
"k": "Right to Nominate",
"ja": "指名の権利",
"hi": "नामित करने का अधिकार"
},
{
"k": "Nominate an individual who can exercise rights*",
"ja": "死亡または判断能力の喪失の場合に、データ主体に代わって権利を行使できる個人を指名できます。",
"hi": "मृत्यु या अक्षमता की स्थिति में डेटा प्रिंसिपल की ओर से अधिकारों का प्रयोग करने वाले किसी व्यक्ति को नामित करना।"
},
{
"k": "Penalties (Schedule — Sec 33)",
"ja": "罰則（附則・第33条）",
"hi": "दंड (अनुसूची — धारा 33)"
},
{
"k": "Personal data breach due to inadequate security safeguards",
"ja": "安全管理措置の不備による個人データ漏えい",
"hi": "अपर्याप्त सुरक्षा उपायों के कारण व्यक्तिगत डेटा उल्लंघन"
},
{
"k": "Failure to notify Data Protection Board and affected individuals of a breach",
"ja": "漏えいをデータ保護委員会および影響を受けた個人に通知しなかった場合",
"hi": "उल्लंघन की सूचना डेटा संरक्षण बोर्ड और प्रभावित व्यक्तियों को न देना"
},
{
"k": "Non-compliance with Significant Data Fiduciary obligations",
"ja": "重要データ受託者の義務の不遵守",
"hi": "महत्वपूर्ण डेटा फिड्यूशियरी के दायित्वों का पालन न करना"
},
{
"k": "Violation of children's data processing obligations",
"ja": "児童のデータ処理に関する義務違反",
"hi": "बच्चों के डेटा के प्रसंस्करण संबंधी दायित्वों का उल्लंघन"
},
{
"k": "Non-compliance with other provisions of the Act or rules",
"ja": "法またはその規則のその他の規定の不遵守",
"hi": "अधिनियम या नियमों के अन्य प्रावधानों का पालन न करना"
},
{
"k": "Failure to comply with Data Protection Board direction/order",
"ja": "データ保護委員会の指示・命令の不遵守",
"hi": "डेटा संरक्षण बोर्ड के निर्देश/आदेश का पालन न करना"
},
{
"k": "Up to ₹250 Cr",
"ja": "最大₹250クロール",
"hi": "₹250 करोड़ तक"
},
{
"k": "Up to ₹200 Cr",
"ja": "最大₹200クロール",
"hi": "₹200 करोड़ तक"
},
{
"k": "Up to ₹150 Cr",
"ja": "最大₹150クロール",
"hi": "₹150 करोड़ तक"
},
{
"k": "Up to ₹50 Cr",
"ja": "最大₹50クロール",
"hi": "₹50 करोड़ तक"
},
{
"k": "Up to ₹10,000",
"ja": "最大₹10,000",
"hi": "₹10,000 तक"
},
{
"k": "Enforcement Timeline",
"ja": "施行スケジュール",
"hi": "प्रवर्तन समय-सारणी"
},
{
"k": "Aug 2023",
"ja": "2023年8月",
"hi": "अगस्त 2023"
},
{
"k": "Jan 2025",
"ja": "2025年1月",
"hi": "जनवरी 2025"
},
{
"k": "13 May 2027",
"ja": "2027年5月13日",
"hi": "13 मई 2027"
},
{
"k": "DPDPA enacted — received Presidential assent on 11 August 2023.",
"ja": "DPDPA制定 — 2023年8月11日に大統領の承認を得ました。",
"hi": "DPDPA अधिनियमित — 11 अगस्त 2023 को राष्ट्रपति की स्वीकृति मिली।"
},
{
"k": "Draft DPDP Rules published by MeitY for public consultation.",
"ja": "MeitYがDPDP規則案をパブリックコメントのために公表。",
"hi": "MeitY ने सार्वजनिक परामर्श के लिए मसौदा DPDP नियम प्रकाशित किए।"
},
{
"k": "Final rules expected to be notified; Data Protection Board of India constituted.",
"ja": "最終規則の通知が見込まれ、インド・データ保護委員会が設置される予定。",
"hi": "अंतिम नियम अधिसूचित होने की उम्मीद; भारतीय डेटा संरक्षण बोर्ड का गठन।"
},
{
"k": "Full enforcement deadline.*",
"ja": "<strong>全面施行期限。</strong>対象となるすべての事業体は、データマッピング、同意の枠組み、漏えい対応、DPOの任命、DPIAを整備し、準拠している必要があります。",
"hi": "<strong>पूर्ण प्रवर्तन की अंतिम तिथि।</strong> सभी आच्छादित संस्थाओं को अनुपालन करना होगा — डेटा मैपिंग, सहमति ढाँचे, उल्लंघन प्रतिक्रिया, DPO की नियुक्ति और DPIA लागू होने चाहिए।"
},
{
"k": "How PDKA Can Help",
"ja": "PDKAがお手伝いできること",
"hi": "PDKA कैसे मदद कर सकता है"
},
{
"k": "Data Mapping & Gap Analysis",
"ja": "データマッピングとギャップ分析",
"hi": "डेटा मैपिंग और गैप विश्लेषण"
},
{
"k": "Identify all personal data flows*",
"ja": "すべての個人データの流れを特定し、データの種類を分類し、DPDPAの義務に対するギャップを評価します。",
"hi": "सभी व्यक्तिगत डेटा प्रवाहों की पहचान, डेटा प्रकारों का वर्गीकरण और DPDPA दायित्वों के विरुद्ध आपकी कमियों का आकलन।"
},
{
"k": "Consent Framework Design",
"ja": "同意フレームワークの設計",
"hi": "सहमति ढाँचे का डिज़ाइन"
},
{
"k": "Design and implement granular consent mechanisms*",
"ja": "法の通知・同意要件に沿った、細分化された同意の仕組みを設計・導入します。",
"hi": "अधिनियम की सूचना और सहमति आवश्यकताओं के अनुरूप विस्तृत सहमति तंत्र का डिज़ाइन और कार्यान्वयन।"
},
{
"k": "Breach Response Planning",
"ja": "漏えい対応計画",
"hi": "उल्लंघन प्रतिक्रिया योजना"
},
{
"k": "Build a 72-hour breach detection*",
"ja": "DPBIの要件を満たす、72時間以内の漏えい検知・通知・報告プロトコルを構築します。",
"hi": "DPBI की अपेक्षाओं को पूरा करने वाला 72 घंटे का उल्लंघन पहचान, सूचना और रिपोर्टिंग प्रोटोकॉल बनाना।"
},
{
"k": "SDF Advisory & DPO Support",
"ja": "SDFアドバイザリーとDPO支援",
"hi": "SDF सलाह और DPO सहायता"
},
{
"k": "Assess whether you qualify as a Significant Data Fiduciary*",
"ja": "重要データ受託者に該当するかを評価し、DPO、DPIA、監査の要件への対応を支援します。",
"hi": "आकलन करना कि आप महत्वपूर्ण डेटा फिड्यूशियरी की श्रेणी में आते हैं या नहीं, और DPO, DPIA तथा ऑडिट आवश्यकताओं की पूर्ति।"
},
{
"k": "Source: Digital Personal Data Protection Act, 2023 (No. 22 of 2023) & MeitY Draft Rules 2025",
"ja": "出典：デジタル個人データ保護法2023（2023年法律第22号）およびMeitY規則案2025",
"hi": "स्रोत: डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 (2023 का अधिनियम सं. 22) और MeitY मसौदा नियम 2025"
},
{
"k": "Start Your Compliance Journey",
"ja": "コンプライアンスの道のりを始める",
"hi": "अपनी अनुपालन यात्रा शुरू करें"
}
];
  var SCOPE = '#about, #dpdpa, #dpdpaModal';
  var HERO = {
    ja: { l1: 'ビジネスに', l2: '寄り添う力：', word: '信頼' },
    hi: { l1: 'व्यवसायों को', l2: 'सशक्त बनाने का आधार:', word: 'विश्वास' }
  };
  var HERO_EN = { l1: 'Empowering', l2: 'Businesses with', word: 'Confidence' };
  var PHRASES = {
    en: ['Tax Advisory', 'Audit & Assurance', 'Compliance Services', 'Business Advisory', 'CFO Services'],
    ja: ['税務アドバイザリー', '監査・保証', 'コンプライアンス・サービス', 'ビジネスアドバイザリー', 'CFOサービス'],
    hi: ['कर सलाह', 'ऑडिट और अश्योरेंस', 'अनुपालन सेवाएँ', 'व्यावसायिक सलाह', 'CFO सेवाएँ']
  };
  window.PDKA_HERO_PHRASES = PHRASES;
  var IDX = { ja: 'ja', hi: 'hi' };
  var items = null;

  function norm(s) { return (s || '').replace(/\s+/g, ' ').trim(); }
  function lang() { try { return localStorage.getItem('pdka-lang') || 'en'; } catch (e) { return 'en'; } }
  function firstTextNode(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.nodeValue.trim()) return n;
    }
    return null;
  }

  function scan() {
    items = [];
    var done = [];
    var roots = document.querySelectorAll(SCOPE);
    for (var r = 0; r < roots.length; r++) {
      var all = roots[r].querySelectorAll('*');
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (/^(SCRIPT|STYLE|svg|path|I|BR|IMG)$/i.test(el.tagName)) continue;
        var skip = false;
        for (var d = 0; d < done.length; d++) if (done[d].contains(el)) { skip = true; break; }
        if (skip) continue;
        var t = norm(el.textContent);
        if (!t) continue;
        var wrapper = false;                       // e.g. <li><i></i><span>text</span></li>: let the inner element match
        for (var c = 0; c < el.children.length; c++) if (norm(el.children[c].textContent) === t) { wrapper = true; break; }
        if (wrapper || el.querySelector('div,p,ul,ol,li,h1,h2,h3,h4,h5,h6,section,table')) continue;   // containers are never translated as a whole
        var hit = null;
        for (var e = 0; e < ENTRIES.length; e++) {
          var k = ENTRIES[e].k;
          if (k.charAt(k.length - 1) === '*' ? t.indexOf(k.slice(0, -1)) === 0 : t === k) { hit = ENTRIES[e]; break; }
        }
        if (!hit) continue;
        done.push(el);
        items.push({ el: el, entry: hit, html: null, node: null, orig: null });
      }
    }
  }

  function applyItems(l) {
    if (!items) scan();
    for (var i = 0; i < items.length; i++) {
      var it = items[i], tr = IDX[l] ? it.entry[IDX[l]] : null;
      var isHtml = tr ? tr.indexOf('<') >= 0 : (it.html !== null);
      if (isHtml || (!tr && it.html !== null)) {
        if (it.html === null) it.html = it.el.innerHTML;
        var want = tr || it.html;
        if (it.el.innerHTML !== want) it.el.innerHTML = want;
      } else {
        if (!it.node) { it.node = firstTextNode(it.el); if (it.node) it.orig = it.node.nodeValue; }
        if (!it.node) continue;
        var lead = it.orig.match(/^\s*/)[0], trail = it.orig.match(/\s*$/)[0];
        var wantT = tr ? lead + tr + trail : it.orig;
        if (it.node.nodeValue !== wantT) it.node.nodeValue = wantT;
      }
    }
  }

  function hero(l) {
    var h = document.querySelector('.hero-title'); if (!h) return;
    var tn = [];
    for (var i = 0; i < h.childNodes.length; i++) if (h.childNodes[i].nodeType === 3) tn.push(h.childNodes[i]);
    var s = HERO[l] || HERO_EN;
    if (tn[0] && tn[0].nodeValue !== s.l1) tn[0].nodeValue = s.l1;
    if (tn[1] && tn[1].nodeValue !== s.l2) tn[1].nodeValue = s.l2;
    // the rotating word is typed by index.html; only the static (no-motion / no-JS) word is set here
    var w = document.getElementById('hero-word');
    var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (w && still) w.textContent = s.word;
    if (typeof window.pdkaSetHeroPhrases === 'function') window.pdkaSetHeroPhrases(PHRASES[l] || PHRASES.en);
  }

  function apply(l) { applyItems(l); hero(l); }

  try {
    var orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      var r = orig.apply(this, arguments);
      if (k === 'pdka-lang') apply(v);
      return r;
    };
  } catch (e) {}

  function init() { apply(lang()); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.addEventListener('load', init);
  window.addEventListener('pageshow', init);
})();
