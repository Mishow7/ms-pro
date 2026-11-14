import { IMAGES } from "./images";

export type Lang = "ar" | "en";

export const content = {
  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      advantages: "لماذا نحن",
      process: "منهجيتنا",
      contact: "تواصل معنا",
      cta: "ابدأ مشروعك",
    },
    hero: {
      kicker: "ابتكر  ·  ابنِ  ·  سلِّم",
      title: "حلول برمجية متكاملة",
      highlight: "لمتجرك الإلكتروني ونظامك المحاسبي",
      subtitle:
        "نحوّل أفكارك إلى منصات رقمية تعمل على مدار الساعة — من بناء المتجر وإدارته وزيادة زياراته، إلى أنظمة ERP محاسبية تمنحك رؤية مالية دقيقة وقرارات أذكى.",
      cta: "تواصل معنا اليوم",
      cta2: "استكشف خدماتنا",
      stats: [
        { value: "+200", label: "متجر إلكتروني" },
        { value: "+80", label: "نظام محاسبي" },
        { value: "98%", label: "رضا العملاء" },
        { value: "24/7", label: "دعم متواصل" },
      ],
    },
    about: {
      kicker: "من نحن",
      title: "شريكك التقني لنموٍ لا يتوقف",
      lead: "شركة MS للأعمال البرمجية متخصصة في تقديم حلول برمجية مبتكرة تشمل تطوير المتاجر الإلكترونية وأنظمة المحاسبة ERP.",
      body: "نتميّز في إدارة المتاجر الإلكترونية من أول إضافة للمنتج وحتى تحقيق زيارات يومية تتجاوز التوقعات، مما يدعم نمو الأعمال التجارية لعملائنا على الإنترنت. نؤمن أن التقنية ليست رفاهية، بل محرّك النمو الحقيقي لأي عمل طموح.",
      missionTitle: "رسالتنا",
      mission:
        "تمكين الشركات من التوسّع بذكاء عبر حلول تقنية مصمّمة خصيصاً لأعمالهم، تجمع بين أناقة التجربة الرقمية ودقّة الإدارة المالية.",
      visionTitle: "رؤيتنا",
      vision:
        "أن نكون الشريك التقني الأول للأعمال في المنطقة، ونقود تحوّلها الرقمي بمعايير عالمية وفهم عميق للسوق المحلي.",
      values: [
        { title: "الابتكار", desc: "نبتكر حلولاً تسبق احتياج السوق وتفتح آفاقاً جديدة للنمو." },
        { title: "الإتقان", desc: "نبني كل منصة بعناية هندسية وتجربة مستخدم لا تُنسى." },
        { title: "الشراكة", desc: "نجاح عميلنا هو مقياس نجاحنا، نرافقه بعد الإطلاق كما قبله." },
      ],
    },
    services: {
      kicker: "خدماتنا الرئيسية",
      title: "منصّتان. منظومة واحدة لنمو أعمالك.",
      subtitle:
        "نجمع بين قوة التجارة الإلكترونية ودقّة الأنظمة المحاسبية لنمنحك سيطرة كاملة على مبيعاتك، مخزونك، ومالك.",
      items: [
        {
          id: "ecommerce",
          tag: "01",
          title: "تطوير المتاجر الإلكترونية",
          headline: "متجرك يُبنى ليبيع، لا ليبدو جميلاً فحسب",
          desc: "نصمّم ونطوّر متجرك من الصفر بهوية بصرية فريدة، وتجربة شراء سلسة، وبنية تقنية جاهزة للتوسّع.",
          image: IMAGES.ecommerce,
          points: [
            {
              title: "بناء المتجر من الصفر",
              desc: "تصميم وتطوير متكامل: الهوية، الواجهة، بوابة الدفع، والشحن، مع لوحة تحكم سهلة.",
            },
            {
              title: "إدارة المتجر بالكامل",
              desc: "إضافة المنتجات، التخصيص، تحسين تجربة المستخدم، وإدارة الطلبات والمخزون يومياً.",
            },
            {
              title: "زيادة الزيارات والمتابعين",
              desc: "استراتيجيات وتقنيات متقدمة ترفع عدد الزيارات اليومية وتضاعف قاعدة العملاء بما يتجاوز التوقعات.",
            },
          ],
        },
        {
          id: "erp",
          tag: "02",
          title: "أنظمة المحاسبة ERP",
          headline: "قرار مالي أوضح. عملية أبسط. نمو أسرع.",
          desc: "نقدّم حلولاً متكاملة لإدارة الموارد المالية والمحاسبية، تبسّط العمليات وتمنحك تقارير دقيقة في الوقت الفعلي.",
          image: IMAGES.erp,
          points: [
            {
              title: "إدارة مالية متكاملة",
              desc: "القيود، الفواتير، الحسابات المدينة والدائنة، الأصول، والرواتب في نظام واحد.",
            },
            {
              title: "تبسيط العمليات اليومية",
              desc: "أتمتة المهام المتكررة وربط الأقسام لتقليل الأخطاء وتوفير الوقت.",
            },
            {
              title: "تقارير تدعم القرار",
              desc: "لوحات مؤشرات لحظية وتقارير دقيقة تمنحك رؤية واضحة لاتخاذ القرار بثقة.",
            },
          ],
        },
      ],
    },
    extraServices: {
      title: "ماذا نغطي داخل كل مشروع؟",
      items: [
        { icon: "store", title: "تجارة إلكترونية", desc: "سلاسة من التصفح حتى إتمام الطلب" },
        { icon: "chart", title: "تحليلات ونمو", desc: "قياس الأداء وتحسين التحويل باستمرار" },
        { icon: "shield", title: "أمان وامتثال", desc: "حماية البيانات ومعايير الدفع الآمن" },
        { icon: "mobile", title: "تجربة الجوّال", desc: "تصميم متجاوب بسرعة فائقة" },
        { icon: "cloud", title: "سحابة وتوسّع", desc: "بنية جاهزة للنمو دون توقف" },
        { icon: "support", title: "تشغيل ودعم", desc: "فريق يتابع متجرك بعد الإطلاق" },
      ],
    },
    process: {
      kicker: "منهجيتنا",
      title: "من الفكرة إلى الإطلاق… بخطوات واضحة",
      steps: [
        { num: "01", title: "اكتشاف وفهم", desc: "ندرس نشاطك، عملاءك، وأهدافك لنصمم الحل المناسب لا قالباً جاهزاً." },
        { num: "02", title: "تصميم التجربة", desc: "واجهات أنيقة، رحلة مستخدم مدروسة، ونماذج أولية توافق عليها قبل البناء." },
        { num: "03", title: "تطوير هندسي", desc: "نبني المنصة بمعايير جودة عالية، أداء سريع، وأمان على مستوى المؤسسات." },
        { num: "04", title: "إطلاق ونمو", desc: "نُطلق، ندرّب فريقك، ونتابع الأداء لتحسين المبيعات والعمليات باستمرار." },
      ],
    },
    advantages: {
      kicker: "لماذا MS؟",
      title: "مميزات تجعلنا خيار الشركات الطموحة",
      items: [
        {
          title: "فريق محترف ومتخصص",
          desc: "مطوّرون، مصمّمون، ومحاسبون تقنيون يعملون كفريق واحد ليفهموا تجارتك كما تفهمها أنت.",
          image: IMAGES.team,
        },
        {
          title: "حلول مخصّصة حسب احتياجك",
          desc: "لا قوالب جاهزة. كل متجر وكل نظام محاسبي يُفصّل على مقاس عملياتك وهويتك وأهداف نموّك.",
          image: IMAGES.about,
        },
        {
          title: "دعم مستمر وما بعد البيع",
          desc: "الإطلاق بداية الشراكة. نبقى معك للتحديثات، التدريب، وحلّ المشكلات على مدار الساعة.",
          image: IMAGES.support,
        },
      ],
    },
    cta: {
      kicker: "ابدأ الآن",
      title: "تواصل معنا اليوم لتطوير متجرك والحصول على نظام محاسبي متكامل",
      subtitle: "استشارة أولى مجانية خلال 24 ساعة. أخبرنا عن مشروعك وسنرسم لك خارطة الطريق.",
      button: "احجز استشارتك المجانية",
      phone: "اتصل بنا مباشرة",
    },
    contact: {
      kicker: "تواصل معنا",
      title: "لنبنِ نجاحك الرقمي معاً",
      subtitle: "يسعدنا الاستماع إليك. اترك رسالتك وسيتواصل معك أحد مستشارينا خلال يوم عمل.",
      form: {
        name: "الاسم الكامل",
        namePh: "محمد العتيبي",
        email: "البريد الإلكتروني",
        emailPh: "name@company.com",
        phone: "رقم الجوال",
        phonePh: "05xxxxxxxx",
        service: "الخدمة المطلوبة",
        servicePh: "اختر الخدمة",
        services: ["متجر إلكتروني", "نظام محاسبي ERP", "إدارة متجر قائم", "استشارة تقنية", "أخرى"],
        message: "نبذة عن مشروعك",
        messagePh: "أخبرنا عن نشاطك وما تطمح لتحقيقه…",
        submit: "إرسال الطلب",
        sending: "جارٍ الإرسال…",
        successTitle: "تم إرسال طلب الاستشارة",
        successBody: "سيصلك رد عبر واتساب أو اتصال على رقمك خلال 24 ساعة. تأكد من فتح واتساب لإكمال الإرسال.",
        error: "يرجى تعبئة جميع الحقول بشكل صحيح.",
      },
      info: {
        addressLabel: "العنوان",
        address: "الرياض، حي العليا، طريق الملك فهد، برج الأعمال — الطابق 14",
        phoneLabel: "الهاتف",
        phone: "0547032332",
        emailLabel: "البريد الإلكتروني",
        email: "info@mssoftware.sa",
        webLabel: "الموقع",
        web: "www.mssoftware.sa",
        hoursLabel: "ساعات العمل",
        hours: "الأحد — الخميس  ·  9:00 صباحاً — 6:00 مساءً",
      },
    },
    footer: {
      brand: "MS للأعمال البرمجية",
      tagline: "حلول برمجية مبتكرة للمتاجر الإلكترونية وأنظمة المحاسبة.",
      col1: "الشركة",
      col2: "الخدمات",
      col3: "تواصل",
      rights: "جميع الحقوق محفوظة",
      links: ["عن الشركة", "خدماتنا", "منهجيتنا", "تواصل معنا"],
    },
    wa: "تواصل عبر واتساب",
    testimonials: {
      kicker: "عملاؤنا",
      title: "قصص نمو حقيقية من شركائنا",
      items: [
        {
          quote: "من أول أسبوع بعد إطلاق المتجر تضاعفت الطلبات. فريق MS لا يبني واجهة فحسب، بل يدير النمو معنا يومياً.",
          name: "سارة القحطاني",
          role: "مؤسِّسة متجر أناقة",
        },
        {
          quote: "نظام ERP أصبح غرفة عملياتنا. التقارير اللحظية اختصرت ساعات من العمل اليدوي ومنحتنا قرارات أوضح.",
          name: "فهد العتيبي",
          role: "المدير المالي — مجموعة نور",
        },
        {
          quote: "الدعم بعد الإطلاق هو ما يفرّق. أي ملاحظة تُحل في ساعات، والمتجر يتحسّن أسبوعاً بعد أسبوع.",
          name: "ليان الحسن",
          role: "مديرة التجارة الإلكترونية",
        },
      ],
    },
    industries: ["تجارة التجزئة", "الأزياء", "الأغذية", "الجملة", "الخدمات", "التعليم"],
  },
  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      advantages: "Why MS",
      process: "Process",
      contact: "Contact",
      cta: "Start your project",
    },
    hero: {
      kicker: "Innovate  ·  Build  ·  Deliver",
      title: "Complete software solutions",
      highlight: "for your online store & accounting system",
      subtitle:
        "We turn ideas into digital platforms that run around the clock — from building, managing, and growing your e-commerce store, to ERP systems that give you financial clarity and smarter decisions.",
      cta: "Talk to us today",
      cta2: "Explore services",
      stats: [
        { value: "+200", label: "Online stores" },
        { value: "+80", label: "ERP systems" },
        { value: "98%", label: "Client satisfaction" },
        { value: "24/7", label: "Ongoing support" },
      ],
    },
    about: {
      kicker: "Who we are",
      title: "Your technology partner for unstoppable growth",
      lead: "MS Software delivers innovative software solutions spanning e-commerce development and ERP accounting systems.",
      body: "We excel at running online stores from the very first product listing through to daily traffic that exceeds expectations — fueling our clients’ commercial growth on the web. Technology is not a luxury; it is the engine of ambitious businesses.",
      missionTitle: "Mission",
      mission:
        "Empower companies to scale intelligently with tailor-made technology that unites elegant digital experiences and precise financial control.",
      visionTitle: "Vision",
      vision:
        "To be the region’s first-choice technology partner, leading digital transformation with world-class standards and deep local insight.",
      values: [
        { title: "Innovation", desc: "We craft solutions that stay ahead of the market and unlock new growth." },
        { title: "Craft", desc: "Every platform is engineered with care and an unforgettable user experience." },
        { title: "Partnership", desc: "Your success is our metric. We stay with you long after launch." },
      ],
    },
    services: {
      kicker: "Core services",
      title: "Two platforms. One system for growth.",
      subtitle:
        "We combine the power of e-commerce with the precision of accounting systems so you fully control sales, inventory, and money.",
      items: [
        {
          id: "ecommerce",
          tag: "01",
          title: "E-commerce development",
          headline: "Built to sell — not just to look good",
          desc: "We design and build your store from scratch: distinctive brand identity, frictionless checkout, and a stack ready to scale.",
          image: IMAGES.ecommerce,
          points: [
            {
              title: "Store built from zero",
              desc: "End-to-end design and development: identity, UI, payments, shipping, and an easy admin.",
            },
            {
              title: "Full store operations",
              desc: "Product listing, customization, UX optimization, and daily order & inventory management.",
            },
            {
              title: "Traffic & audience growth",
              desc: "Advanced strategies that lift daily visits and multiply your customer base beyond expectations.",
            },
          ],
        },
        {
          id: "erp",
          tag: "02",
          title: "ERP accounting systems",
          headline: "Clearer finance. Simpler operations. Faster growth.",
          desc: "Integrated solutions for financial and accounting resources — simplifying operations and delivering real-time, accurate reports.",
          image: IMAGES.erp,
          points: [
            {
              title: "Complete financial control",
              desc: "Journals, invoices, AR/AP, assets, and payroll — unified in one system.",
            },
            {
              title: "Simplified daily operations",
              desc: "Automate repetitive work and connect departments to cut errors and save time.",
            },
            {
              title: "Reports that drive decisions",
              desc: "Live KPI dashboards and precise reports so you decide with confidence.",
            },
          ],
        },
      ],
    },
    extraServices: {
      title: "What every engagement covers",
      items: [
        { icon: "store", title: "E-commerce", desc: "A seamless path from browse to paid order" },
        { icon: "chart", title: "Analytics & growth", desc: "Measure performance and keep lifting conversion" },
        { icon: "shield", title: "Security & compliance", desc: "Data protection and secure payment standards" },
        { icon: "mobile", title: "Mobile experience", desc: "Responsive design with lightning speed" },
        { icon: "cloud", title: "Cloud & scale", desc: "Infrastructure ready to grow without downtime" },
        { icon: "support", title: "Run & support", desc: "A team that stays with your store after launch" },
      ],
    },
    process: {
      kicker: "Our process",
      title: "From idea to launch — in clear steps",
      steps: [
        { num: "01", title: "Discover", desc: "We study your business, customers, and goals to design the right solution — never a generic template." },
        { num: "02", title: "Design the experience", desc: "Elegant interfaces, a considered user journey, and prototypes you approve before we build." },
        { num: "03", title: "Engineer", desc: "We ship to high quality bars: fast performance and enterprise-grade security." },
        { num: "04", title: "Launch & grow", desc: "We go live, train your team, and keep optimizing sales and operations." },
      ],
    },
    advantages: {
      kicker: "Why MS?",
      title: "What ambitious companies choose us for",
      items: [
        {
          title: "A specialist professional team",
          desc: "Developers, designers, and technical accountants working as one unit that understands your trade as well as you do.",
          image: IMAGES.team,
        },
        {
          title: "Tailored to your needs",
          desc: "No off-the-shelf molds. Every store and every ERP is cut to your operations, brand, and growth targets.",
          image: IMAGES.about,
        },
        {
          title: "Ongoing support after go-live",
          desc: "Launch is the start of the partnership. We stay for updates, training, and round-the-clock issue resolution.",
          image: IMAGES.support,
        },
      ],
    },
    cta: {
      kicker: "Start now",
      title: "Talk to us today to grow your store and get a complete accounting system",
      subtitle: "A free first consultation within 24 hours. Tell us about your project and we’ll map the path.",
      button: "Book your free consultation",
      phone: "Call us directly",
    },
    contact: {
      kicker: "Contact",
      title: "Let’s build your digital success together",
      subtitle: "We would love to hear from you. Leave a message and a consultant will reach out within one business day.",
      form: {
        name: "Full name",
        namePh: "Mohammed Alotaibi",
        email: "Email",
        emailPh: "name@company.com",
        phone: "Mobile",
        phonePh: "05xxxxxxxx",
        service: "Service needed",
        servicePh: "Select a service",
        services: ["Online store", "ERP accounting", "Existing store management", "Tech consulting", "Other"],
        message: "About your project",
        messagePh: "Tell us about your business and what you aim to achieve…",
        submit: "Send request",
        sending: "Sending…",
        successTitle: "Consultation request sent",
        successBody: "We will reply on WhatsApp or call you within 24 hours. Please allow WhatsApp to open to complete sending.",
        error: "Please fill in all fields correctly.",
      },
      info: {
        addressLabel: "Address",
        address: "Riyadh, Al Olaya, King Fahd Road, Business Tower — Floor 14",
        phoneLabel: "Phone",
        phone: "0547032332",
        emailLabel: "Email",
        email: "info@mssoftware.sa",
        webLabel: "Website",
        web: "www.mssoftware.sa",
        hoursLabel: "Hours",
        hours: "Sunday — Thursday  ·  9:00 AM — 6:00 PM",
      },
    },
    footer: {
      brand: "MS Software",
      tagline: "Innovative software solutions for e-commerce and accounting systems.",
      col1: "Company",
      col2: "Services",
      col3: "Contact",
      rights: "All rights reserved",
      links: ["About", "Services", "Process", "Contact"],
    },
    wa: "Chat on WhatsApp",
    testimonials: {
      kicker: "Clients",
      title: "Real growth stories from our partners",
      items: [
        {
          quote: "Orders doubled in the first week after launch. MS doesn’t just ship a storefront — they run growth with us every day.",
          name: "Sarah AlQahtani",
          role: "Founder, Anaqa Store",
        },
        {
          quote: "The ERP became our command center. Live reports cut hours of manual work and made decisions clearer.",
          name: "Fahad AlOtaibi",
          role: "CFO — Noor Group",
        },
        {
          quote: "Post-launch support is the difference. Issues are resolved in hours, and the store gets better every week.",
          name: "Layan AlHassan",
          role: "Head of E-commerce",
        },
      ],
    },
    industries: ["Retail", "Fashion", "F&B", "Wholesale", "Services", "Education"],
  },
};

export const company = {
  nameAr: "MS للأعمال البرمجية",
  nameEn: "MS Software",
  phone: "0547032332",
  phoneHref: "tel:+966547032332",
  waHref: "https://wa.me/966547032332",
};
