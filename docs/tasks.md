# tasks.md — نقشه راه بازطراحی هیرو سکشن

> **قانون طلایی:** تسک‌ها متوالی هستند. هیچ دو تسکی که روی یک فایل Write دارند موازی اجرا نمی‌شوند.

---

## تسک ۱: ساختار پایه ماکت IDE و انیمیشن تایپینگ

### عنوان تسک
ساخت اسکلت ماکت IDE شیشه‌ای با انیمیشن تایپ‌رایتر

### راهنمای پیاده‌سازی فنی
1. **فایل `hero-section.tsx` را کاملاً بازنویسی کن** — کد قدیم حذف می‌شود.
2. یک `section` wrapper با پس‌زمینه `bg-zinc-950` و `min-h-screen` بساز.
3. **ماکت IDE** را به صورت یک `div` با:
   - `backdrop-blur-xl`, `bg-zinc-900/60`, `border border-zinc-800`
   - `rounded-xl`, `overflow-hidden`, `shadow-2xl`
   بساز (Glassmorphism ظاهر).
4. **Title Bar**: یک نوار بالایی با سه دایره رنگی (قرمز، زرد، سبز) به سبک Mac OS و عنوان `codeyar — vibe-coder.tsx` در مرکز.
5. **Sidebar**: یک پنل باریک سمت راست (RTL) با ساختار File Tree:
   - `app/page.tsx`
   - `components/ui/`
   - `lib/context_memory/` ← این پوشه خاص است
6. **Prompt Panel**: یک `textarea` ظاهری (غیرفعال) در پنل اصلی.
7. **State Machine**: یک `useState` با مقادیر `'idle' | 'typing' | 'contextLoaded' | 'splitting' | 'materialized'` تعریف کن.
8. **انیمیشن تایپ‌رایتر**:
   - متن کامل: `«یه اپ تسک منیجر برام بساز. رابط کاربریش به شدت لوکس و Glassmorphism باشه، دارک مودِ خفن با سایه‌های نئونی بنفش داشته باشه و انیمیشن‌هاش دقیقا مناسب نسل زد باشه. دیتابیسش هم یکپارچه کن.»`
   - با `useEffect` و `setInterval` کاراکتر به کاراکتر اضافه کن (هر ۴۵ms یک کاراکتر).
   - در فواصل فاصله (space)، ۱۵ms تأخیر اضافه کن تا تایپ طبیعی به نظر برسد.
   - پس از اتمام تایپ، state را به `contextLoaded` تغییر بده.

### محدودیت‌های این تسک
- **باید:** پنل راست (live preview / code stream) فعلاً `hidden` باشد — در تسک ۲ فعال می‌شود.
- **نباید:** هنوز هیچ `motion.div` اضافه کنی — در تسک بعدی Framer Motion اضافه می‌شود.
- **نباید:** دکمه‌های CTA اضافه شوند — در تسک ۳ می‌آیند.
- **نباید:** از inline style استفاده شود.

```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "components/buttons/liquid-cta-button.tsx", "app/globals.css", "app/layout.tsx"]
```

---

## تسک ۲: افکت‌های Framer Motion — Context Glow و Split View

### عنوان تسک
پیاده‌سازی انیمیشن‌های Framer Motion برای Context Loaded و Materialization

### راهنمای پیاده‌سازی فنی
1. **Import**: `import { motion, AnimatePresence } from "framer-motion"` اضافه کن.
2. **Context Glow**:
   - وقتی state برابر `contextLoaded` یا بالاتر است، یک `motion.div` با `initial={{ opacity: 0, scale: 0 }}` و `animate={{ opacity: 1, scale: 1 }}` کنار `lib/context_memory/` ظاهر شود.
   - این نقطه باید `bg-green-400`, `rounded-full`, `w-2 h-2` باشد با یک `animate={{ boxShadow: ['0 0 4px #4ade80', '0 0 12px #4ade80', '0 0 4px #4ade80'] }}` (pulse glow).
   - یک `motion.span` با تگ `Context Loaded` با `delay: 0.3` بعد از نقطه ظاهر شود.
3. **Pulse افکت IDE** (پالس نوری):
   - لحظه‌ای که state به `contextLoaded` می‌رسد، یک `motion.div` دایره‌ای با `border border-green-400/20` از مرکز ماکت expand شود (`scale: 0 → 2, opacity: 1 → 0`) و محو شود.
4. **Split View**:
   - ۶۰۰ms بعد از `contextLoaded`، state به `splitting` تغییر یابد.
   - با `AnimatePresence`, پنل اصلی از یک `div` به دو `div` کنار هم تبدیل شود:
     - **پنل چپ (Code Stream)**: خطوط کد با `opacity: 0.3–0.7` و `y: -10 → 0` در لوپ scroll می‌کنند. از `motion.div` با `animate={{ y: [0, -200] }}` و `transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}` استفاده کن.
     - **پنل راست (Live Preview)**: یک کارت Glassmorphism TaskManager.
5. **Materialization**:
   - کارت TaskManager با `initial={{ scale: 0.5, opacity: 0, y: 30 }}` و `animate={{ scale: 1, opacity: 1, y: 0 }}` و `transition={{ type: 'spring', stiffness: 200, damping: 20 }}` ظاهر شود.
   - کارت شامل: یک تایتل «تسک منیجر»، دو چک‌باکس با `border-violet-400` (نئونی) و یک `ring-violet-400/30`.

### محدودیت‌های این تسک
- **باید:** تمام انیمیشن‌ها با `delay` درون `transition` کنترل شوند، نه `setTimeout`.
- **باید:** RTL را در نظر بگیری — پنل Code Stream باید سمت چپ (راست در RTL) قرار گیرد.
- **نباید:** از `motion` package جداگانه import کنی. فقط `framer-motion`.
- **نباید:** `will-change` روی المان‌هایی که animate نمی‌شوند اعمال شود.

```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "app/globals.css"]
```

---

## تسک ۳: دکمه‌های CTA و Social Proof — فینال سکشن

### عنوان تسک
اضافه کردن دکمه‌های CTA بازنویسی‌شده و Social Proof با انیمیشن Y-offset

### راهنمای پیاده‌سازی فنی
1. **دکمه اول (Liquid)**:
   - از `LiquidCtaButton` موجود استفاده کن.
   - متن: `استارت خلق ایده 🚀`
   - Link به `#pricing`.
2. **دکمه دوم (Ghost)**:
   - از `Button` در `components/ui/button.tsx` با `variant="outline"` استفاده کن.
   - متن: `مشاهده نمونه خروجی‌ها`
   - یک آیکون `Eye` از `lucide-react` در کنار متن (سمت چپ دکمه، چون RTL).
   - Link به `#features`.
3. **انیمیشن Y-offset دکمه‌ها**:
   - هر دو دکمه را درون یک `motion.div` با `initial={{ opacity: 0, y: 20 }}` و `animate={{ opacity: 1, y: 0 }}` بپیچ.
   - دکمه دوم `delay: 0.15` بیشتر داشته باشد.
4. **Social Proof**: بخش social proof موجود (آواتارها و ستاره‌ها) را به `HeroSection` جدید منتقل کن — بدون تغییر محتوا.
5. **Badge** اعلان بالای هدلاین را از نسخه قدیم حفظ کن.

### محدودیت‌های این تسک
- **باید:** تنها تغییر فایل `hero-section.tsx` باشد — هیچ فایل دیگری تغییر نکند.
- **باید:** `LiquidCtaButton` و `Button` بدون تغییر در فایل‌های اصلی‌شان استفاده شوند.
- **نباید:** متن هدلاین و ساب‌هدلاین تغییر کند — همان متن فارسی موجود حفظ شود.
- **نباید:** بخش Social Proof حذف شود.

```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "components/buttons/liquid-cta-button.tsx", "components/ui/button.tsx"]
```
