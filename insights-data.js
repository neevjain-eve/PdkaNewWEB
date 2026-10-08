/* PDKA Insights: the single source of truth for every article on the site.
 *
 * To add an article:
 *   1. Save its body (plain HTML: <h3>, <p>, <ul>) as insights/<id>.html
 *   2. Add one entry to the list below (newest first is tidy but not required).
 *   3. status: 'published' = visible on the site, 'hold' = kept but hidden, 'draft' = hidden.
 * Optional: featured:true (prefers it on the home page), i18n:{ja:{title,summary},hi:{title,summary}},
 * sources:[{label,url}] (shown under the article).
 * Content must be factual and informational (ICAI Code of Ethics): no solicitation, comparison or claims of superiority.
 */
/* Freshness: the site shows only the newest PDKA_MAX_VISIBLE published articles.
 * Older ones drop off automatically (kept in this file and in insights/, never deleted).
 * Change the number to show more or fewer. */
window.PDKA_MAX_VISIBLE = 8;
window.PDKA_CATEGORIES = {
  "ICAI": "ICAI",
  "ITR": "Taxation",
  "FEMA": "FEMA",
  "GST": "GST",
  "COMPANY": "Company Law",
  "DPDPA": "DPDPA",
  "CFO": "Virtual CFO",
  "FDI": "FDI & India Entry",
  "MNC": "MNC & Subsidiaries",
  "DTAA": "DTAA & Treaties"
};
window.PDKA_INSIGHTS = [
  {
    "id": "cafirmblr2026",
    "category": "COMPANY",
    "topic": "Bangalore",
    "date": "2026-06-22",
    "title": "Best CA Firm in Bangalore 2026: How to Choose the Right Chartered Accountant for Your Business",
    "summary": "With over 8,000 registered CAs in Bangalore, choosing the right firm is critical. A practical guide on what credentials, sector experience, and service depth to look for — and why specialisation beats size.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "indiaentry2026",
    "category": "FDI",
    "topic": "FDI",
    "date": "2026-06-20",
    "title": "India Entry Strategy for Foreign Companies 2026: Subsidiary, Branch Office or Liaison Office?",
    "summary": "A practical guide for MNCs and foreign companies choosing between the three RBI-approved entry structures for doing business in India — with tax, FEMA, and operational trade-offs compared.",
    "readMins": 8,
    "status": "published",
    "sources": []
  },
  {
    "id": "auditblr2026",
    "category": "ICAI",
    "topic": "Bangalore",
    "date": "2026-06-19",
    "title": "Statutory Audit in Bangalore 2026: Requirements, Process & Choosing the Right Auditor",
    "summary": "Selecting a statutory auditor is a board-level decision with long-term implications. What to check for — peer review certificate, sector expertise, CARO 2020 track record, and independence requirements under the Companies Act.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "gstmnc2026",
    "category": "GST",
    "topic": "GST",
    "date": "2026-06-18",
    "title": "GST Registration & Compliance for Foreign Companies in India 2026: NRTP, LUT & ITC Refunds",
    "summary": "Foreign companies operating in India face unique GST obligations — from Non-Resident Taxable Person registration to claiming zero-rated export refunds. A step-by-step compliance guide.",
    "readMins": 7,
    "status": "published",
    "sources": []
  },
  {
    "id": "pli2026",
    "category": "MNC",
    "topic": "MNC",
    "date": "2026-06-15",
    "title": "PLI Scheme 2026: How Manufacturing MNCs Can Claim Government Subsidies in India",
    "summary": "India's Production Linked Incentive scheme offers up to 20% cash subsidies across 14 sectors. Here is a sector-by-sector breakdown and the compliance steps to claim PLI benefits as a foreign manufacturer.",
    "readMins": 7,
    "status": "published",
    "sources": []
  },
  {
    "id": "itconsultblr2026",
    "category": "ITR",
    "topic": "Bangalore",
    "date": "2026-06-14",
    "title": "Income Tax Consultant in Bangalore 2026: ITR Filing, Advance Tax & International Taxation",
    "summary": "Bangalore-based companies — from IT services firms to manufacturing subsidiaries — face complex income tax obligations. What a good income tax consultant in Bangalore should handle for you, and what it typically costs.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "dtaa2026",
    "category": "DTAA",
    "topic": "DTAA",
    "date": "2026-06-10",
    "title": "India's Tax Treaties (DTAA) 2026: How MNCs Reduce Withholding Tax on Dividends, Royalties & Fees",
    "summary": "India's 96 Double Tax Avoidance Agreements contain treaty-reduced WHT rates that most MNCs fail to claim correctly. A country-by-country DTAA rate guide with claim procedure.",
    "readMins": 8,
    "status": "published",
    "sources": []
  },
  {
    "id": "pe2026",
    "category": "FDI",
    "topic": "FDI",
    "date": "2026-06-05",
    "title": "Permanent Establishment (PE) Risk in India: How Foreign Companies Avoid Unexpected Tax Liability",
    "summary": "A single employee in India — or a long-running service contract — can create a taxable Permanent Establishment. Here is how to structure your India operations to minimise PE risk.",
    "readMins": 7,
    "status": "published",
    "sources": []
  },
  {
    "id": "gstblr2026",
    "category": "GST",
    "topic": "Bangalore",
    "date": "2026-05-30",
    "title": "GST Consultant in Bangalore 2026: Registration, Returns, Refunds & GST Audit for Tech Companies",
    "summary": "Bangalore is home to India's largest IT sector. Yet most IT companies leave significant GST refunds unclaimed and miss ITC optimisation opportunities. What a specialist GST consultant does for IT firms in Bangalore.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "tpmnc2026",
    "category": "MNC",
    "topic": "MNC",
    "date": "2026-05-28",
    "title": "Transfer Pricing for MNCs in India 2026: OECD BEPS, Master File & CBDT Documentation",
    "summary": "With CBDT tightening scrutiny on intra-group transactions, MNCs must maintain OECD-aligned transfer pricing documentation or face penalties of up to 2% of transaction value. A complete compliance guide.",
    "readMins": 8,
    "status": "published",
    "sources": []
  },
  {
    "id": "sez2026",
    "category": "MNC",
    "topic": "MNC",
    "date": "2026-05-25",
    "title": "SEZ Benefits for MNCs in India 2026: Tax Holidays, Duty-Free Import & How to Set Up",
    "summary": "India's Special Economic Zones offer 100% income tax exemption for 5 years, duty-free capital goods imports, and simplified single-window compliance. What MNCs need to qualify and apply.",
    "readMins": 6,
    "status": "published",
    "sources": []
  },
  {
    "id": "femablr2026",
    "category": "FEMA",
    "topic": "Bangalore",
    "date": "2026-05-22",
    "title": "FEMA Consultant in Bangalore 2026: FC-GPR, FLA, Compounding & FEMA Compliance for Foreign Companies",
    "summary": "FEMA compliance is a blind spot for many Bangalore IT companies and startup founders. SOFTEX filings, 15CA/15CB certificates, LRS compliance, and ODI filings — what Bangalore companies typically miss and how to fix it.",
    "readMins": 6,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "vcfomnc2026",
    "category": "MNC",
    "topic": "MNC",
    "date": "2026-05-18",
    "title": "Virtual CFO for MNC Subsidiaries in India: What It Covers, Cost & When You Need One",
    "summary": "Foreign subsidiaries in India often operate without a full-time CFO — but the compliance calendar demands senior financial oversight. What a Virtual CFO does, what it costs, and whether you need one now.",
    "readMins": 6,
    "status": "hold",
    "sources": [],
    "holdReason": "Needs partner review: firm-specific wording or heavy edits (ICAI advertising rules)"
  },
  {
    "id": "tpblr2026",
    "category": "ITR",
    "topic": "Bangalore",
    "date": "2026-05-15",
    "title": "Transfer Pricing Consultant in Bangalore 2026: TP Documentation, Benchmarking & CBDT Disputes",
    "summary": "Bangalore hosts hundreds of MNC Global Capability Centres (GCCs) — all of which have mandatory transfer pricing obligations. What Bangalore-based TP consultants do, typical fees, and what CBDT scrutinises most in IT and R&D companies.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "femafdi2026",
    "category": "FDI",
    "topic": "FDI",
    "date": "2026-05-10",
    "title": "FEMA Compliance for Foreign Companies in India: FC-GPR, FLA, ODI & RBI Obligations",
    "summary": "Non-compliance with FEMA attracts compounding penalties from RBI. This guide covers FC-GPR, FLA return, ODI filings, SOFTEX, and ECB compliance obligations for foreign companies and their Indian subsidiaries.",
    "readMins": 7,
    "status": "published",
    "sources": []
  },
  {
    "id": "vcfoblr2026",
    "category": "CFO",
    "topic": "Bangalore",
    "date": "2026-04-28",
    "title": "Virtual CFO Services in Bangalore 2026: Startups, Funded Companies & MNC Subsidiaries",
    "summary": "Bangalore's startup and GCC ecosystem needs senior financial leadership at a fraction of a full-time CFO cost. What virtual CFO firms in Bangalore cover, how they differ from bookkeeping services, and what to ask before signing up.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "tax15pct2026",
    "category": "ITR",
    "topic": "Taxation",
    "date": "2026-04-22",
    "title": "Section 115BAB: India's 15% Corporate Tax Rate for New Manufacturing Companies — Full 2026 Guide",
    "summary": "New manufacturing companies in India can pay just 15% corporate tax — the lowest rate globally for an emerging economy. Eligibility, exclusions, and how MNCs can structure to qualify.",
    "readMins": 6,
    "status": "published",
    "sources": []
  },
  {
    "id": "icai2026",
    "category": "ICAI",
    "topic": "ICAI",
    "date": "2026-04-15",
    "title": "ICAI Code of Ethics 2026: Key Changes Every CA and CA Firm Must Know",
    "summary": "The 13th Edition of the ICAI Code of Ethics effective April 2026 brings significant changes to advertising, website, and networking guidelines for CA firms.",
    "readMins": 6,
    "status": "hold",
    "sources": [],
    "featured": true,
    "i18n": {
      "ja": {
        "title": "ICAI倫理規程2026：CA事務所への変更点",
        "summary": "2026年4月施行のICAI倫理規程第13版により、CA事務所の広告、ウェブサイト、ネットワーキングガイドラインに重要な変更が加えられました。"
      },
      "hi": {
        "title": "ICAI आचार संहिता 2026: CA फर्मों पर प्रभाव",
        "summary": "अप्रैल 2026 से लागू ICAI आचार संहिता के 13वें संस्करण में CA फर्मों के विज्ञापन, वेबसाइट और नेटवर्किंग दिशानिर्देशों में महत्वपूर्ण बदलाव किए गए हैं।"
      }
    },
    "holdReason": "Needs partner review: firm-specific wording or heavy edits (ICAI advertising rules)"
  },
  {
    "id": "compregblr2026",
    "category": "FDI",
    "topic": "Bangalore",
    "date": "2026-04-15",
    "title": "Company Registration in Bangalore 2026: Private Limited, OPC, LLP & Foreign Subsidiary Setup",
    "summary": "Bangalore is India's preferred city for foreign companies setting up IT, R&D, and GCC operations. A step-by-step guide to registering a Private Limited Company in Bangalore with foreign shareholding — from SPICe+ to first RBI filing.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "japanentry2026",
    "category": "FDI",
    "topic": "FDI",
    "date": "2026-04-10",
    "title": "Japan-India Business 2026: Setting Up a Japanese Company's India Subsidiary",
    "summary": "India and Japan share a comprehensive DTAA and growing economic ties. A dedicated guide for Japanese companies — covering structure, FEMA compliance, India-Japan treaty rates, and transfer pricing.",
    "readMins": 7,
    "status": "hold",
    "sources": [],
    "holdReason": "Needs partner review: firm-specific wording or heavy edits (ICAI advertising rules)"
  },
  {
    "id": "itr2026",
    "category": "ITR",
    "topic": "Taxation",
    "date": "2026-04-08",
    "title": "ITR Filing FY 2025-26: Compliance Checklist for Companies, LLPs and Professionals",
    "summary": "Key deadlines, updated ITR forms, and a practical compliance checklist to ensure accurate and timely ITR filing for FY 2025-26.",
    "readMins": 7,
    "status": "published",
    "sources": [],
    "featured": true,
    "i18n": {
      "ja": {
        "title": "ITR申告 FY2025-26：企業向けコンプライアンスチェックリスト",
        "summary": "FY2025-26の正確・適時なITR申告を確実にするための主要期限、更新されたITRフォーム、実践的なコンプライアンスチェックリストをご紹介します。"
      },
      "hi": {
        "title": "ITR फाइलिंग FY2025-26: व्यवसायों के लिए अनुपालन चेकलिस्ट",
        "summary": "FY2025-26 के लिए सटीक और समय पर ITR फाइलिंग सुनिश्चित करने हेतु प्रमुख तिथियां, अपडेट किए गए ITR फॉर्म और व्यावहारिक अनुपालन चेकलिस्ट।"
      }
    }
  },
  {
    "id": "isauditblr2026",
    "category": "ICAI",
    "topic": "Bangalore",
    "date": "2026-04-05",
    "title": "IS Audit (Information Systems Audit) in Bangalore 2026: CISA-Certified CA Firm",
    "summary": "Information Systems Audit is mandatory for many banks, NBFCs, listed companies, and IT multinationals. What CISA-certified IS auditors in Bangalore do, which companies need it, and how it differs from a financial audit.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "dpdpablr2026",
    "category": "DPDPA",
    "topic": "Bangalore",
    "date": "2026-03-25",
    "title": "DPDPA Compliance in Bangalore 2026: India's Digital Personal Data Protection Act — What IT Companies Must Do",
    "summary": "Bangalore's IT sector will be most affected by India's Digital Personal Data Protection Act. What a DPDPA compliance consultant in Bangalore does, which companies need to act now, and the penalty exposure for non-compliance.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "startupindia2026",
    "category": "FDI",
    "topic": "FDI",
    "date": "2026-03-20",
    "title": "Startup India for Foreign-Owned Startups: DPIIT Recognition, Angel Tax Exemption & Fund Repatriation",
    "summary": "Foreign-owned or foreign-funded startups in India can access DPIIT recognition, income tax exemption for 3 years, and angel tax relief under Section 56(2)(viib). Full eligibility and application guide.",
    "readMins": 6,
    "status": "published",
    "sources": []
  },
  {
    "id": "gccblr2026",
    "category": "CFO",
    "topic": "Bangalore",
    "date": "2026-03-12",
    "title": "GCC Setup in Bangalore 2026: Finance, Compliance & CA Services for Global Capability Centres",
    "summary": "Every Bangalore startup needs a CA from day one — but not all CA firms understand venture-backed businesses. What startup founders should look for: DPIIT registration, angel tax advisory, 409A-equivalent valuations, and ESOP accounting.",
    "readMins": 6,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "gst2026",
    "category": "GST",
    "topic": "GST",
    "date": "2026-03-10",
    "title": "GSTR-9 & GSTR-9C FY 2025-26: Filing Guide & Common Errors",
    "summary": "A practical guide to filing the GST Annual Return and Reconciliation Statement, covering common reconciliation pitfalls and how to avoid notices from the GST department.",
    "readMins": 6,
    "status": "published",
    "sources": []
  },
  {
    "id": "stateincentives2026",
    "category": "MNC",
    "topic": "MNC",
    "date": "2026-03-05",
    "title": "State Industrial Incentives for MNCs in India 2026: Karnataka, Tamil Nadu, Telangana & Maharashtra",
    "summary": "Each Indian state competes aggressively for MNC investment with capital subsidies, power tariff concessions, and stamp duty waivers. A head-to-head comparison for manufacturing and IT companies.",
    "readMins": 7,
    "status": "published",
    "sources": []
  },
  {
    "id": "companylaw2025",
    "category": "COMPANY",
    "topic": "Company Law",
    "date": "2026-02-18",
    "title": "Companies Act Amendments 2025: Key Changes for Private Limited Companies",
    "summary": "MCA's 2025 amendments to the Companies Act introduce revised thresholds for small companies, new CSR reporting formats, and tightened related-party transaction disclosures.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Needs partner review: firm-specific wording or heavy edits (ICAI advertising rules)"
  },
  {
    "id": "compliance2026",
    "category": "MNC",
    "topic": "MNC",
    "date": "2026-02-01",
    "title": "India Subsidiary Annual Compliance Calendar 2026: RBI, MCA, Income Tax, GST & TP Deadlines",
    "summary": "Missing a single RBI or MCA deadline can trigger penalties and compound interest that cost more than the underlying compliance. The complete month-by-month calendar for Indian subsidiaries of foreign companies.",
    "readMins": 6,
    "status": "published",
    "sources": []
  },
  {
    "id": "startupCAblr2026",
    "category": "COMPANY",
    "topic": "Bangalore",
    "date": "2026-01-20",
    "title": "Best CA for Startups in Bangalore 2026: Fundraising, ESOP, DPIIT & Compliance",
    "summary": "A startup CA in Bangalore needs to do much more than file taxes. The typical startup CA engagement spans: DPIIT recognition, angel tax exemption, founder ESOP structuring, investment documentation (SHA/SSA financial review), conve",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Written as a \"Bangalore / best CA\" keyword page: partner review needed (ICAI advertising rules)"
  },
  {
    "id": "tp2026",
    "category": "ITR",
    "topic": "Transfer Pricing",
    "date": "2026-01-12",
    "title": "Transfer Pricing Documentation: What Indian Companies Must Prepare for FY 2025-26",
    "summary": "With CBDT tightening TP scrutiny, Indian companies in international transactions must maintain robust Master File and Local File documentation or face steep penalties.",
    "readMins": 7,
    "status": "hold",
    "sources": [],
    "holdReason": "Needs partner review: firm-specific wording or heavy edits (ICAI advertising rules)"
  },
  {
    "id": "dpdpa2025",
    "category": "DPDPA",
    "topic": "DPDPA",
    "date": "2025-12-05",
    "title": "DPDPA 2023: A Practical Compliance Roadmap for Businesses",
    "summary": "India's Digital Personal Data Protection Act enforcement begins May 2027. Here is a step-by-step readiness roadmap — from data mapping to consent management and breach response protocols.",
    "readMins": 8,
    "status": "published",
    "sources": []
  },
  {
    "id": "vcfo2025",
    "category": "CFO",
    "topic": "Virtual CFO",
    "date": "2025-11-22",
    "title": "When Does a Startup Need a Virtual CFO? 7 Signs to Watch For",
    "summary": "As startups scale from ₹1 Cr to ₹25 Cr revenue, financial complexity grows faster than the team. Here are the clear signals that it is time to engage a Virtual CFO.",
    "readMins": 5,
    "status": "hold",
    "sources": [],
    "holdReason": "Needs partner review: firm-specific wording or heavy edits (ICAI advertising rules)"
  },
  {
    "id": "gstit2025",
    "category": "GST",
    "topic": "GST",
    "date": "2025-10-08",
    "title": "GST on IT Services: Place of Supply, Export Benefits & ITC Optimisation",
    "summary": "IT and software companies often leave significant GST refunds on the table. This guide covers export of services, place of supply rules, and how to maximise ITC for tech businesses.",
    "readMins": 6,
    "status": "hold",
    "sources": [],
    "holdReason": "Needs partner review: firm-specific wording or heavy edits (ICAI advertising rules)"
  },
  {
    "id": "fema2025",
    "category": "FEMA",
    "topic": "FEMA",
    "date": "2025-01-20",
    "title": "FEMA 2025-26: Foreign Remittances, ODI Rules & Compliance for IT Companies",
    "summary": "Updated FEMA compliance guide covering overseas direct investment, LRS limits, and key obligations for IT & ITES companies with foreign operations.",
    "readMins": 7,
    "status": "published",
    "sources": [],
    "featured": true,
    "i18n": {
      "ja": {
        "title": "FEMA 2025：IT企業向け海外送金・ODIルール・コンプライアンス",
        "summary": "海外直接投資、LRS上限額、外国事業を持つIT・ITES企業向けの主要義務を網羅したFEMAコンプライアンスガイド更新版。"
      },
      "hi": {
        "title": "FEMA 2025: IT कंपनियों के लिए विदेशी प्रेषण, ODI नियम एवं अनुपालन",
        "summary": "विदेशी प्रत्यक्ष निवेश, LRS सीमाएं और विदेशी कारोबार वाली IT/ITES कंपनियों के लिए प्रमुख दायित्वों को कवर करने वाली FEMA अनुपालन मार्गदर्शिका।"
      }
    }
  }
];
