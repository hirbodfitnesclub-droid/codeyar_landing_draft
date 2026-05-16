# tasks.md — نقشه راه بازطراحی هیرو سکشن (نسخه ۲)

> **قانون طلایی:** تسک‌ها متوالی هستند. هیچ دو تسکی که روی یک فایل Write دارند موازی اجرا نمی‌شوند.

---

## تسک ۱: کامپوننت جداگانه TaskProgressCard

### عنوان تسک
ساخت کامپوننت `TaskProgressCard` در فایل مستقل

### راهنمای پیاده‌سازی فنی
1. **فایل جدید** `components/ui/task-progress-card.tsx` بساز.
2. کامپوننت باید یک آرایه از تسک‌ها با این ساختار بپذیرد:
   ```ts
   type TaskItem = { id: number; label: string; status: 'done' | 'in-progress' | 'pending' }
   ```
3. **داده‌های پیش‌فرض** (hardcoded داخل کامپوننت):
   - `طراحی رابط کاربری` → `done`
   - `نوشتن کد فرانت‌اند` → `in-progress`
   - `نوشتن کد بک‌اند` → `pending`
   - `تهیه مستندات` → `pending`
4. **طراحی بصری هر آیتم** — سه وضعیت کاملاً متمایز:
   - **`done`**: نوار کنار‌چپ سبز (`border-l-2 border-green-500`), آیکون تیک سبز, متن `line-through opacity-50`, یک badge کوچک با متن `انجام شد` و `bg-green-500/10 text-green-400`.
   - **`in-progress`**: کارت با `bg-violet-500/10 border border-violet-500/30 shadow-[inset_0_0_20px_rgba(139,92,246,0.12)]`, یک اسپینر دایره‌ای animated با `border-violet-400 border-t-transparent animate-spin` (نه Framer Motion), متن روشن `text-zinc-100`, یک badge `در حال انجام` با پالس: `bg-violet-500/20 text-violet-300` و نقطه درخشان بنفش کنارش.
   - **`pending`**: `bg-zinc-900/30 border border-zinc-800/50`, آیکون `...` یا `Clock`, متن `text-zinc-500`, badge `در انتظار` با `bg-zinc-800 text-zinc-500`.
5. **انیمیشن ورود**: هر آیتم با `motion.div` و `initial={{ opacity: 0, x: -10 }}` و `animate={{ opacity: 1, x: 0 }}` با `delay: index * 0.12` وارد شود.
6. **wrapper کارت** کلی: `backdrop-blur-xl bg-zinc-950/80 border border-zinc-800 rounded-xl p-5 shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col gap-3`

### محدودیت‌های این تسک
- **باید:** این فایل کاملاً مستقل باشد و هیچ import از `hero-section.tsx` نداشته باشد.
- **باید:** از `framer-motion` برای انیمیشن ورود آیتم‌ها استفاده شود.
- **باید:** اسپینر `in-progress` با CSS `animate-spin` باشد — نه Framer Motion.
- **نباید:** هیچ state یا منطق خارجی دریافت کند — تمام داده‌ها داخلی است.
- **نباید:** از inline style استفاده شود.

```
CONTEXT_FILES: ["app/globals.css", "app/layout.tsx"]
```

---

## تسک ۲: بازطراحی چیدمان هیرو — Asymmetric Void Layout

### عنوان تسک
تبدیل چیدمان از `flex-col center` به `grid` دو‌ستونه نامتقارن (40% متن | 60% ماکت)

### راهنمای پیاده‌سازی فنی
1. **`hero-section.tsx` را بازنویسی کن** — چیدمان کلی از `flex-col items-center` به `grid grid-cols-[40%_60%]` تغییر کند.
2. **ستون راست (40%) — The Anchor**:
   - `flex flex-col justify-center gap-8 pr-8 lg:pr-16`
   - Badge اعلان (از نسخه فعلی حفظ شود)
   - Headline با `text-5xl lg:text-6xl font-bold leading-[1.1]` (tight leading)
   - نئون‌گلو روی هدلاین: `drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]` روی span رنگی
   - Subheadline با `text-zinc-400 text-base lg:text-lg leading-relaxed`
   - دکمه‌های CTA (`flex-col sm:flex-row gap-4 mt-2`)
   - Social Proof دقیقاً همانطور که در نسخه فعلی است (آواتارها + ستاره‌ها) — بدون هیچ تغییری
3. **ستون چپ (60%) — The Reality Warp**:
   - ماکت IDE با `scale(0.9)` یا `max-w-[95%]` کوچک‌شده
   - `h-[580px]` برای ارتفاع ماکت
4. **The Void Backdrop** (نور مرزی):
   - یک `div` با `absolute`, `top-0`, `bottom-0`, `w-px` در مرز 40%/60% قرار گیرد.
   - این div یک `box-shadow: 0 0 80px 40px rgba(139,92,246,0.15)` داشته باشد (از Tailwind: `shadow-[0_0_80px_40px_rgba(139,92,246,0.15)]`)
   - یک background blur دایره‌ای بزرگ (`w-96 h-[800px] bg-purple-600/10 blur-[120px]`) دقیقاً روی این مرز
5. **Responsive fallback**: در `md:` و پایین‌تر، به `flex flex-col` برگرد (ستون‌ها عمودی شوند، ماکت زیر متن قرار گیرد).

### محدودیت‌های این تسک
- **باید:** Social Proof و دکمه‌ها دست‌نخورده باقی بمانند (مقادیر، classNameها، تصاویر).
- **باید:** `LiquidCtaButton` و `Button` بدون هیچ تغییر prop اضافه‌ای استفاده شوند.
- **باید:** در موبایل (زیر `md:`) چیدمان عمودی باشد.
- **نباید:** متن هدلاین و ساب‌هدلاین تغییر کند.
- **نباید:** از inline style برای grid استفاده شود — از Tailwind arbitrary values استفاده کن (`grid-cols-[40%_60%]`).

```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "components/buttons/liquid-cta-button.tsx", "components/ui/button.tsx", "app/globals.css"]
```

---

## تسک ۳: اصلاح State Machine — Loop بی‌نهایت و باگ‌فیکس

### عنوان تسک
پیاده‌سازی loop بی‌نهایت انیمیشن، اصلاح code stream و ادغام TaskProgressCard

### راهنمای پیاده‌سازی فنی

#### الف) Loop بی‌نهایت State Machine
State machine باید loop شود. بعد از رسیدن به `materialized`:
1. **۳ ثانیه** در `materialized` بمان.
2. State را به `resetting` تغییر بده (fade-out کوتاه).
3. بعد از ۶۰۰ms، `displayedText` را پاک کن و state را به `idle` برگردان.
4. بعد از ۸۰۰ms تأخیر جدید، دوباره از `typing` شروع کن.

State کامل: `'idle' | 'typing' | 'contextLoaded' | 'splitting' | 'materialized' | 'resetting'`

منطق این کار با `useEffect` روی `phase` کنترل می‌شود — نه `setTimeout` تودرتو:
```ts
useEffect(() => {
  if (phase === 'materialized') {
    const t = setTimeout(() => setPhase('resetting'), 3000)
    return () => clearTimeout(t)
  }
  if (phase === 'resetting') {
    const t = setTimeout(() => { setDisplayedText(''); setPhase('idle') }, 600)
    return () => clearTimeout(t)
  }
}, [phase])
```

#### ب) باگ‌فیکس: Context Glow روی context_memory
مشکل: گلو سبز همیشه نمایش داده نمی‌شود یا روی المان اشتباه می‌افتد.
- شرط نمایش را به `phase !== 'idle' && phase !== 'typing'` تغییر بده.
- در فاز `resetting`، گلو باید با `opacity: 0` fade-out شود.
- مطمئن شو `absolute left-2 dir="ltr"` روی container گلو است تا در RTL محیط جابجا نشود.

#### ج) اصلاح Code Stream (بدون پرش)
مشکل: انیمیشن `y: [0, -200]` یک پرش مرئی دارد وقتی reset می‌شود.

راه‌حل:
- ارتفاع محتوای درون motion.div باید دقیقاً دو برابر ارتفاع viewport پنل باشد.
- `animate={{ y: [0, "-50%"] }}` به جای مقدار ثابت `-200`.
- تعداد آیتم‌ها را دو برابر کن (40 عدد به جای 20)، اما فقط نصف اول منحصربه‌فرد باشند و نصف دوم کپی نصف اول باشد — این seamless loop را ممکن می‌کند.
- `transition={{ repeat: Infinity, duration: 8, ease: 'linear', repeatType: 'loop' }}` — مهم: `repeatType: 'loop'` نه `reverse`.

#### د) ادغام TaskProgressCard
- `TaskProgressCard` را از `components/ui/task-progress-card.tsx` import کن.
- در `LivePreviewPanel` به جای چک‌لیست قدیم، `<TaskProgressCard />` را render کن.
- انیمیشن materialization (`scale: 0.5 → 1`) را روی wrapper `<TaskProgressCard />` نگه‌دار.

### محدودیت‌های این تسک
- **باید:** Loop بی‌نهایت و بدون هیچ memory leak (cleanup در useEffect) باشد.
- **باید:** در فاز `resetting`، ماکت IDE کامل با `opacity: 0.3` یا یک fade به صورت نرم محو شود — نه ناگهانی.
- **باید:** `TaskProgressCard` import شود — کد چک‌لیست قدیمی از `hero-section.tsx` حذف شود.
- **نباید:** هیچ `setTimeout` تودرتو یا زنجیره‌ای بدون cleanup نوشته شود.
- **نباید:** Code Stream در فاز `resetting` یا `idle` نمایش داده شود.

```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "components/ui/task-progress-card.tsx", "app/globals.css"]
```

---

## تسک ۴: دکمه‌های CTA و Social Proof — فینال سکشن (بدون تغییر)

### عنوان تسک
اطمینان از صحت دکمه‌ها و Social Proof در چیدمان جدید

### راهنمای پیاده‌سازی فنی
1. **تأیید** کن که `LiquidCtaButton` با متن `استارت خلق ایده 🚀` و link به `#pricing` است.
2. **تأیید** کن که `Button variant="outline"` با `Eye` icon و متن `مشاهده نمونه خروجی‌ها` و link به `#features` است.
3. **تأیید** کن که Social Proof (پنج آواتار + ستاره‌های زرد + متن) دقیقاً همانطور است.
4. اگر در چیدمان جدید (40%) المانی misalign است، فقط `justify-start` یا `items-start` را تنظیم کن.

### محدودیت‌های این تسک
- **نباید:** هیچ className، prop، یا محتوای دکمه‌ها تغییر کند.
- **نباید:** Social Proof (تصاویر، متن، ستاره‌ها) تغییر کند.
- **نباید:** فایلی غیر از `hero-section.tsx` دست‌کاری شود.

```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "components/buttons/liquid-cta-button.tsx", "components/ui/button.tsx"]
```
