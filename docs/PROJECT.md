# PROJECT.md — لنگرگاه پروژه

## هدف بیزینس
تبدیل لندینگ‌پیج پرمیوم SaaS موجود (انگلیسی/LTR) به نسخه‌ی کاملاً فارسی و راست‌چین (RTL) بدون افت کیفیت بصری، انیمیشن و عملکرد، با حفظ تمام افکت‌های پیشرفته نظیر Liquid Metal، Lenis Smooth Scroll و Framer Motion.

## پرسونای هدف
- بازدیدکننده فارسی‌زبان لندینگ یک محصول SaaS B2B/Developer-tool
- تصمیم‌گیرنده‌های فنی (CTO، Lead Developer) و غیرفنی (Marketing/Founder) ایرانی
- کاربر دسکتاپ و موبایل با انتظار خوانایی و حرفه‌ای بودن در سطح محصولات بین‌المللی

## پشته تکنولوژی (Tech Stack)
- **Framework:** Next.js 16.0.10 (App Router)
- **Language:** TypeScript 5.x
- **Runtime:** React 19.2
- **Styling:** Tailwind CSS 4.1.9 + shadcn/ui (new-york)
- **Animation:** Framer Motion 12 + motion
- **Smooth Scroll:** @studio-freight/react-lenis
- **Special Effects:** @paper-design/shaders-react (Liquid Metal)
- **Fonts:** Vazirmatn (Variable) — جایگزین Manrope/Cal Sans/Instrument Sans
- **Icons:** lucide-react
- **Package Manager:** pnpm

## نبایدهای سخت‌گیرانه (Anti-Patterns)

### ممنوعیت‌های کتابخانه‌ای
- **ممنوع:** استفاده از `next-intl`، `react-i18next`، `i18next`، یا هر کتابخانه‌ی بین‌المللی‌سازی. متن‌های فارسی **به‌صورت hardcoded** و مستقیماً در JSX کامپوننت‌ها قرار می‌گیرند.
- **ممنوع:** ساخت لایه `lib/translations/*` یا فایل دیکشنری ترجمه. هیچ سیستم key-value برای متون ساخته نشود.
- **ممنوع:** افزودن کتابخانه‌های جدید مثل `react-pdf-rtl`، `bidi-js` و امثالهم. RTL باید با ابزارهای بومی Tailwind و CSS انجام شود.

### ممنوعیت‌های CSS و استایل
- **ممنوع:** استفاده از کلاس‌های جهت‌دار مطلق در کامپوننت‌های نهایی پس از تبدیل:
  - `ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`, `text-left`, `text-right`
- **اجباری:** استفاده از معادل‌های Logical:
  - `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `text-end`
- **ممنوع:** inline style برای direction یا text-align.
- **ممنوع:** اضافه کردن `dir="ltr"` یا `dir="rtl"` به کامپوننت‌های فرزند مگر در موارد استثنایی (مثل بلاک کد، ایمیل، URL).

### ممنوعیت‌های تایپوگرافی
- **ممنوع:** استفاده‌ی همزمان از فونت‌های انگلیسی موجود (Manrope, Cal Sans, Instrument Sans) به‌عنوان فونت پیش‌فرض.
- **اجباری:** Vazirmatn به‌عنوان `font-sans` و `font-serif` و فونت تیترها. Geist Mono فقط برای محتوای کد/عددی تکنیکال.
- **ممنوع:** استفاده از اعداد لاتین (0-9) در UI نمایشی. اعداد باید فارسی (۰-۹) باشند مگر در URL، version number، و کد.

### ممنوعیت‌های محتوایی
- **ممنوع:** ترجمه‌ی تحت‌اللفظی ماشینی. ترجمه باید بومی‌سازی‌شده (Localization) باشد نه ترجمه (Translation). مثلاً "Ship faster" → "سریع‌تر منتشر کن" نه "کشتی سریع‌تر".
- **ممنوع:** باقی گذاشتن brand name و عبارات تکنیکال جا افتاده به فارسی (مثل: API، SaaS، Dashboard در context تکنیکال می‌توانند انگلیسی بمانند).
- **اجباری:** واحد پول از `$` به `تومان` یا حداقل نمایش بومی‌سازی شده.

### ممنوعیت‌های انیمیشن
- **ممنوع:** معکوس‌سازی کورکورانه‌ی تمام انیمیشن‌های Framer Motion. هر انیمیشن افقی (`x`, `translateX`) باید case-by-case بررسی شود.
- **اجباری:** Marquee و carousel ها باید جهتشان بازبینی شود تا با چشم RTL طبیعی به نظر برسد.

### ممنوعیت‌های آیکون
- **ممنوع:** استفاده از `<ArrowRight />` بدون flip در دکمه‌های CTA فارسی. آیکون‌های جهت‌دار باید یا با `rtl:rotate-180` یا با جایگزینی به `ArrowLeft` اصلاح شوند.
- **استثنا:** آیکون‌های semantic مثل Check، Star، Sparkles نباید flip شوند.
