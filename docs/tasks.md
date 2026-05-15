# tasks.md — نقشه راه اجرا

تسک‌ها به ترتیب اجرا می‌شوند. تسک‌های با شماره یکسان (مثلاً ۴.۱ و ۴.۲) روی فایل‌های متفاوت کار می‌کنند و می‌توانند موازی اجرا شوند. سایر تسک‌ها باید **متوالی** اجرا شوند چون به وضعیت قبلی وابسته‌اند یا روی فایل‌های مشترک کار می‌کنند.

---

## TASK 1 — راه‌اندازی RTL در ریشه برنامه

**راهنمای پیاده‌سازی فنی:**
1. در `app/layout.tsx`:
   - import کردن `Vazirmatn` از `next/font/google` با subset `arabic` و variable `--font-sans`.
   - حذف فونت‌های انگلیسی فعلی (Manrope, Cal Sans, Instrument Sans) از import و className.
   - تنظیم `<html lang="fa" dir="rtl" className={cn("dark", vazirmatn.variable)}>`.
   - بروزرسانی `<title>` و `<meta description>` به فارسی.
2. بدنه فایل (children, providers) دست‌نخورده باقی بماند.

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** فقط ویرایش `app/layout.tsx`.
- **انجام نده:** هیچ فایل دیگری را در این تسک تغییر نده. فونت لوکال یا فایل woff اضافه نکن.

**CONTEXT_FILES:** `["app/layout.tsx"]`

---

## TASK 2 — تنظیم استایل سراسری برای RTL و فونت فارسی

**راهنمای پیاده‌سازی فنی:**
1. در `app/globals.css`:
   - مقدار `--font-sans` و `--font-serif` و `--font-heading` را به `var(--font-sans), system-ui, sans-serif` تغییر بده تا از Vazirmatn استفاده کند.
   - متغیر `--font-mono` را روی Geist Mono حفظ کن.
   - در selector `body` یا `:root`، property های مربوط به letter-spacing را برای فارسی بازتنظیم کن (مثلاً `letter-spacing: 0` چون فارسی نباید tracking داشته باشد).
   - اطمینان حاصل کن که هیچ rule صریحی `direction: ltr` یا `text-align: left` ندارد. اگر وجود دارد، حذف یا اصلاح کن.

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** فقط ویرایش بخش‌های مرتبط با فونت و direction.
- **انجام نده:** ساختار CSS variables رنگی (oklch) را تغییر نده. تم رنگی Dark Mode دست‌نخورده باقی بماند.

**CONTEXT_FILES:** `["app/globals.css", "app/layout.tsx"]`

---

## TASK 3 — فارسی‌سازی و راست‌چین کردن Navbar

**راهنمای پیاده‌سازی فنی:**
1. در `components/ui/navbar.tsx`:
   - متن لینک‌های منو را ترجمه کن: `Features → امکانات`, `Testimonials → نظرات کاربران`, `Pricing → قیمت‌گذاری`.
   - دکمه `Get Started → شروع کنید`.
   - تمام کلاس‌های `ml-*` به `ms-*` و `mr-*` به `me-*` تبدیل شوند.
   - اگر لوگو/برند با فاصله‌ای از سمت چپ بود، فاصله را به سمت start (راست در RTL) منتقل کن.
   - اگر آیکون منوی موبایل وجود دارد، position آن بررسی شود (در RTL باید سمت چپ بنشیند، که با logical properties خود به خود انجام می‌شود).

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** فقط تغییر متن و کلاس‌های جهتی.
- **انجام نده:** ساختار JSX، breakpoint ها، یا انیمیشن‌های موجود را تغییر نده.

**CONTEXT_FILES:** `["components/ui/navbar.tsx"]`

---

## TASK 4 — فارسی‌سازی Hero Section

**راهنمای پیاده‌سازی فنی:**
1. در `components/sections/hero-section.tsx`:
   - تمام متن‌های انگلیسی به فارسی بومی‌سازی شوند:
     - Badge: `Introducing v2.0 — Now with AI` → `معرفی نسخه ۲.۰ — اکنون با هوش مصنوعی`
     - Headline: `Build faster. Ship smarter.` → `سریع‌تر بساز. هوشمندانه‌تر منتشر کن.`
     - Description: ترجمه‌ی روان و بومی.
     - CTA primary: `Start Free Trial` → `شروع رایگان`
     - CTA secondary: `See how it works` → `نحوه کارکرد را ببینید`
     - Trust line: `Trusted by 10,000+ developers` → `مورد اعتماد بیش از ۱۰٬۰۰۰ توسعه‌دهنده`
   - اعداد لاتین به فارسی: `5.0` → `۵٫۰`، `10,000+` → `۱۰٬۰۰۰+`.
   - کلاس‌های جهتی: `ml-*` → `ms-*`, `-space-x-3` → `-space-x-reverse -space-x-3` (یا حذف space و استفاده از gap).
   - آیکون فلش CTA: افزودن کلاس `rtl:rotate-180` (یا از کامپوننت liquid-cta-button استفاده شده که در تسک ۱۰ اصلاح می‌شود).

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** ترجمه + اعداد فارسی + تبدیل کلاس‌های جهتی.
- **انجام نده:** ساختار grid، sizing، یا انیمیشن‌های entrance را تغییر نده. تصویر hero را تغییر نده.

**CONTEXT_FILES:** `["components/sections/hero-section.tsx", "components/buttons/liquid-cta-button.tsx"]`

---

## TASK 5 — فارسی‌سازی Impact Section

**راهنمای پیاده‌سازی فنی:**
1. در `components/sections/impact-section.tsx`:
   - عنوان: `Our Impact` → `دستاوردهای ما`
   - زیرعنوان: `Trusted by teams worldwide` → `مورد اعتماد تیم‌ها در سراسر جهان`
   - چهار آمار:
     - `99.99% Uptime SLA` → `۹۹٫۹۹٪ تضمین در دسترس بودن`
     - `10M+ API Requests/Day` → `بیش از ۱۰ میلیون درخواست API در روز`
     - `<50ms Avg Response` → `کمتر از ۵۰ میلی‌ثانیه میانگین پاسخ`
     - `150+ Countries` → `۱۵۰+ کشور`
   - اعداد در همه‌جا فارسی شوند.

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** فقط متن و اعداد.
- **انجام نده:** layout grid را تغییر نده.

**CONTEXT_FILES:** `["components/sections/impact-section.tsx"]`

---

## TASK 6 — فارسی‌سازی Features Section

**راهنمای پیاده‌سازی فنی:**
1. در `components/sections/features-section.tsx`:
   - عنوان سکشن: `Everything you need to succeed` → `هر آن‌چه برای موفقیت نیاز دارید`
   - عناوین ۴ feature card:
     - `Real-time Dashboard` → `داشبورد بلادرنگ`
     - `Blazing Fast` → `سرعت خیره‌کننده`
     - `Keyboard First` → `کیبورد در اولویت`
     - `100+ Integrations` → `بیش از ۱۰۰ یکپارچه‌سازی`
   - توضیحات هر کارت ترجمه روان.
   - مقادیر mockup داشبورد (مثل `12.4K`، `$48.2K`): به فارسی تبدیل شوند یا اگر در تصویر داخل دشبورد هستند، بدون تغییر بمانند.
   - کلاس‌های `ml-1` → `ms-1`.

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** ترجمه + اعداد + کلاس‌های جهتی.
- **انجام نده:** chart ها یا mock UI پیچیده داخل کارت‌ها را بازنویسی نکن؛ فقط متن‌های روی آن‌ها را فارسی کن.

**CONTEXT_FILES:** `["components/sections/features-section.tsx"]`

---

## TASK 7 — فارسی‌سازی Testimonials Section (شامل اصلاح Marquee)

**راهنمای پیاده‌سازی فنی:**
1. در `components/sections/testimonials-section.tsx`:
   - عنوان سکشن و توضیحات به فارسی.
   - تمام ۹ نظر کاربر را با **محتوای کاملاً بومی** بازنویسی کن (نه ترجمه ماشینی):
     - نام‌ها: نام‌های ایرانی واقعی (مثلاً «سارا محمدی»، «امیر رضایی»).
     - سمت‌ها: «مدیر فنی»، «بنیان‌گذار»، «توسعه‌دهنده ارشد» و...
     - شرکت‌ها: می‌توانند fictional ایرانی باشند.
     - متن نظرات: کوتاه، طبیعی و باورپذیر به زبان فارسی محاوره‌ای-رسمی.
2. در `components/ui/testimonials-column.tsx`:
   - بررسی `motion.div` با `animate={{ y: [...] }}` یا `x: [...]`. اگر marquee افقی است، جهت `x` معکوس شود تا حس طبیعی RTL داشته باشد.
   - اگر marquee عمودی (`y`) است، تغییری نیاز ندارد.

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** بومی‌سازی محتوایی + اصلاح direction انیمیشن.
- **انجام نده:** تعداد ستون‌ها یا تعداد تستیمونیال‌ها را تغییر نده. کلاس‌های blur/mask gradient را تغییر نده.

**CONTEXT_FILES:** `["components/sections/testimonials-section.tsx", "components/ui/testimonials-column.tsx"]`

---

## TASK 8 — فارسی‌سازی Pricing Section

**راهنمای پیاده‌سازی فنی:**
1. در `components/sections/pricing-section.tsx`:
   - عنوان: ترجمه و بومی‌سازی.
   - نام پلن‌ها: `Starter → پایه`، `Pro → حرفه‌ای`، `Enterprise → سازمانی`.
   - قیمت‌ها:
     - `$0/mo` → `رایگان`
     - `$29/mo` → `۲۹۰٬۰۰۰ تومان/ماه`
     - `$99/mo` یا `Custom` → `۹۹۰٬۰۰۰ تومان/ماه` یا `سفارشی`
   - تمام ویژگی‌های هر پلن (feature list) ترجمه روان.
   - دکمه‌های CTA: ترجمه (`Get Started`, `Contact Sales` و...).
   - badge «Most Popular» → «محبوب‌ترین».
   - کلاس‌های جهتی Check icon در feature list: `mr-2` → `me-2` یا `ms-2` بسته به layout.

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** ترجمه + ارز تومانی + اعداد فارسی + کلاس‌های جهتی.
- **انجام نده:** ساختار کارت‌های قیمت یا تعداد پلن‌ها را تغییر نده.

**CONTEXT_FILES:** `["components/sections/pricing-section.tsx"]`

---

## TASK 9 — فارسی‌سازی CTA Section

**راهنمای پیاده‌سازی فنی:**
1. در `components/sections/cta-section.tsx`:
   - عنوان نهایی، توضیحات و دکمه CTA به فارسی.
   - اطمینان از flip آیکون فلش (از طریق liquid-cta-button که در تسک ۱۰ اصلاح می‌شود).

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** فقط ترجمه.
- **انجام نده:** افکت‌های بصری (gradient، shader) را تغییر نده.

**CONTEXT_FILES:** `["components/sections/cta-section.tsx", "components/buttons/liquid-cta-button.tsx"]`

---

## TASK 10 — اصلاح Liquid CTA Button برای RTL

**راهنمای پیاده‌سازی فنی:**
1. در `components/buttons/liquid-cta-button.tsx`:
   - آیکون `ArrowRight` (یا هر آیکون جهت‌دار): اضافه کردن کلاس `rtl:rotate-180` یا `rtl:-scale-x-100`.
   - اگر `translate-x-1` در hover animation دارد، به `rtl:-translate-x-1` تبدیل شود تا فلش در hover به سمت طبیعی (چپ در RTL) حرکت کند.
   - متن دکمه‌ها از prop می‌آید، نیازی به ترجمه داخل خود کامپوننت نیست (در فراخوانی‌کننده‌ها ترجمه شده).

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** اصلاح جهت آیکون و انیمیشن hover.
- **انجام نده:** افکت shader یا liquid metal background را تغییر نده.

**CONTEXT_FILES:** `["components/buttons/liquid-cta-button.tsx"]`

---

## TASK 11 — فارسی‌سازی Footer Section

**راهنمای پیاده‌سازی فنی:**
1. در `components/sections/footer-section.tsx`:
   - عنوان ستون‌ها: `Product → محصول`، `Company → شرکت`، `Legal → قوانین`.
   - تمام لینک‌های زیرمجموعه ترجمه شوند.
   - copyright: `© 2025 ... All rights reserved.` → `© ۱۴۰۴ ... تمامی حقوق محفوظ است.`
   - تبدیل کلاس‌های جهتی به logical properties.
   - آیکون‌های شبکه اجتماعی: نیازی به flip ندارند.

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** ترجمه + اعداد + کلاس‌های جهتی.
- **انجام نده:** ساختار grid فوتر یا تعداد ستون‌ها را تغییر نده.

**CONTEXT_FILES:** `["components/sections/footer-section.tsx"]`

---

## TASK 12 — بررسی نهایی و اعتبارسنجی (QA Sweep)

**راهنمای پیاده‌سازی فنی:**
1. تمام فایل‌های ویرایش‌شده را مجدداً Read کن.
2. Grep برای patterns زیر در `components/` و `app/`:
   - `text-left`, `text-right`, `ml-`, `mr-`, `pl-`, `pr-` — هر مورد باقی‌مانده‌ای را به logical equivalent تبدیل کن.
   - متن‌های انگلیسی باقی‌مانده (regex `[A-Za-z]{4,}` در JSX). aria-label و alt هم بررسی شوند.
   - اعداد لاتین (regex `\d`) — تنها در URL، className، و کد مجاز است؛ در text node JSX باید فارسی باشد.
3. بررسی aria-label و alt تصاویر — همه باید فارسی باشند.
4. بررسی meta tag های SEO در layout — title، description فارسی.

**محدودیت‌های اختصاصی تسک:**
- **انجام بده:** اصلاح هر چیزی که از تسک‌های قبلی جا مانده.
- **انجام نده:** ریفکتور بزرگ، تغییر دیزاین، یا افزودن فیچر جدید.

**CONTEXT_FILES:** `["app/layout.tsx", "app/globals.css", "app/page.tsx", "components/ui/navbar.tsx", "components/sections/hero-section.tsx", "components/sections/impact-section.tsx", "components/sections/features-section.tsx", "components/sections/testimonials-section.tsx", "components/sections/pricing-section.tsx", "components/sections/cta-section.tsx", "components/sections/footer-section.tsx", "components/buttons/liquid-cta-button.tsx", "components/ui/testimonials-column.tsx"]`
