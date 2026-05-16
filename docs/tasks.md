# tasks.md — نقشه راه اصلاحات Hero Section

---

## تسک ۱: انگلیسی و چپ‌چین کردن چک‌لیست

### عنوان تسک
تبدیل متون چک‌لیست TaskProgressCard به انگلیسی و اعمال چیدمان LTR

### راهنمای پیاده‌سازی فنی

1. **فایل `task-progress-card.tsx` را باز کن**
2. **آرایه `tasks` را پیدا کن** — در خط ۱۴ تقریباً
3. **متون فارسی را به انگلیسی تغییر بده:**
   - `'طراحی رابط کاربری'` → `'Design User Interface'`
   - `'نوشتن کد فرانت‌اند'` → `'Write Frontend Code'`
   - `'نوشتن کد بک‌اند'` → `'Write Backend Code'`
   - `'تهیه مستندات'` → `'Create Documentation'`
4. **متون status را هم انگلیسی کن:**
   - `'انجام شد'` → `'Completed'`
   - `'در حال انجام'` → `'In Progress'`
   - `'در انتظار'` → `'Pending'`
5. **به container اصلی `dir="ltr"` اضافه کن** — به div با کلاس `backdrop-blur-xl`
6. **چیدمان flex را برعکس کن:** از `justify-between` استفاده کن ولی آیکون‌ها سمت چپ باشند

### محدودیت‌های اختصاصی تسک
- ✅ فقط این فایل را تغییر بده
- ✅ ساختار کامپوننت را حفظ کن
- ❌ انیمیشن‌های موجود را تغییر نده
- ❌ استایل‌های رنگی را تغییر نده

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/ui/task-progress-card.tsx"]
```

---

## تسک ۲: اصلاح موقعیت "Context Loaded" Badge

### عنوان تسک
فیکس کردن positioning نشان سبز Context Loaded که روی بخش بنفش overlap می‌کند

### راهنمای پیاده‌سازی فنی

1. **فایل `hero-section.tsx` را باز کن**
2. **بخش Sidebar را پیدا کن** — حدود خط ۱۵۰
3. **المان `lib/context_memory/` را پیدا کن** — div با کلاس `text-purple-200`
4. **مشکل:** Badge سبز با `absolute left-2` position شده ولی parent کافی نیست
5. **راه‌حل:**
   - مطمئن شو parent div دارای `relative` است
   - Badge را به زیر متن `lib/context_memory/` ببر (نه کنارش)
   - یا: Badge را به خارج از این div منتقل کن و جداگانه نمایش بده
6. **گزینه پیشنهادی:** Badge را به یک ردیف جدید زیر `lib/context_memory/` ببر

### محدودیت‌های اختصاصی تسک
- ✅ فقط positioning را تغییر بده
- ✅ انیمیشن‌های Badge را حفظ کن
- ❌ رنگ‌ها را تغییر نده
- ❌ متن Badge را تغییر نده (`Context Loaded` بماند)

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/sections/hero-section.tsx"]
```

---

## تسک ۳: تنظیم تایمینگ انیمیشن (۴ ثانیه + کد بی‌نهایت)

### عنوان تسک
افزایش زمان فاز `materialized` به ۴ ثانیه و اطمینان از تداوم انیمیشن کد

### راهنمای پیاده‌سازی فنی

1. **فایل `hero-section.tsx` را باز کن**
2. **بخش `useEffect` مربوط به phase را پیدا کن**
3. **خط مربوط به `materialized` را پیدا کن:**
   ```tsx
   if (phase === 'materialized') {
     const t = setTimeout(() => setPhase('resetting'), 3000)
   ```
4. **عدد `3000` را به `4000` تغییر بده** (۴ ثانیه)
5. **انیمیشن کد:** 
   - بخش `Code Stream Panel` را پیدا کن
   - مطمئن شو `motion.div` با `animate={{ y: [0, "-50%"] }}` دارای این تنظیمات است:
     ```tsx
     transition={{ repeat: Infinity, duration: 8, ease: 'linear', repeatType: 'loop' }}
     ```
   - این انیمیشن نباید وابسته به `phase` باشد

### محدودیت‌های اختصاصی تسک
- ✅ فقط عدد timeout را تغییر بده
- ✅ انیمیشن کد باید مستقل از phase باشد
- ❌ سایر timing ها را تغییر نده
- ❌ ساختار state machine را تغییر نده

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/sections/hero-section.tsx"]
```

---

## تسک ۴: تغییر متن اصلی و افکت نئونی

### عنوان تسک
تغییر هدلاین به "وایب کدینگ اینبار فرق میکنه!" با افکت نئونی پالس

### راهنمای پیاده‌سازی فنی

1. **فایل `hero-section.tsx` را باز کن**
2. **بخش Headline (`<h1>`) را پیدا کن** — حدود خط ۸۵
3. **متن فعلی را جایگزین کن:**
   - **قبلی:** 
     ```
     کدنویسی با هوش مصنوعی،
     بدون فراموشی کانتکست
     ```
   - **جدید:**
     ```
     وایب کدینگ اینبار فرق میکنه!
     ```
4. **حذف `<br />` چون متن یک‌خطی است**
5. **افکت نئونی:** به `<h1>` یا `<span>` داخلی انیمیشن اضافه کن:
   ```tsx
   <motion.h1
     animate={{
       textShadow: [
         '0 0 10px rgba(139,92,246,0.3), 0 0 20px rgba(139,92,246,0.2)',
         '0 0 20px rgba(139,92,246,0.6), 0 0 40px rgba(139,92,246,0.4)',
         '0 0 10px rgba(139,92,246,0.3), 0 0 20px rgba(139,92,246,0.2)'
       ]
     }}
     transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
   >
   ```

### محدودیت‌های اختصاصی تسک
- ✅ متن را دقیقاً همانطور که گفته شد بنویس
- ✅ افکت نئونی ظریف باشد (نه چشمک‌زن تند)
- ✅ رنگ بنفش برند را حفظ کن
- ❌ سایز فونت را تغییر نده (مگر برای responsive)

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/sections/hero-section.tsx"]
```

---

## تسک ۵: جمع‌تر کردن بخش سمت راست

### عنوان تسک
کاهش ارتفاع/پدینگ بخش Anchor برای جلوگیری از overflow

### راهنمای پیاده‌سازی فنی

1. **فایل `hero-section.tsx` را باز کن**
2. **بخش Anchor (40%) را پیدا کن** — div با کلاس `flex flex-col justify-center gap-8`
3. **تغییرات:**
   - `gap-8` → `gap-6` یا `gap-5`
   - `pr-16` → `pr-10` یا `pr-8`
   - `mt-16` در Social Proof → `mt-8` یا `mt-6`
4. **بررسی کن که headline یک‌خطی شده و فضای کمتری می‌گیرد**
5. **در صورت نیاز:** پدینگ‌های عمودی section را کم کن

### محدودیت‌های اختصاصی تسک
- ✅ از کلاس‌های Tailwind استفاده کن
- ✅ تغییرات باید در همه breakpoint ها تست شود
- ❌ المان‌ها را حذف نکن
- ❌ فونت‌سایز را کم نکن (مگر برای mobile)

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/sections/hero-section.tsx"]
```

---

## تسک ۶: تغییر متن توضیح بالای دکمه‌ها

### عنوان تسک
جایگزینی متن Subheadline با متن جدید درباره مشکلات AI Coding

### راهنمای پیاده‌سازی فنی

1. **فایل `hero-section.tsx` را باز کن**
2. **بخش Subheadline (`<p>`) را پیدا کن** — حدود خط ۹۵
3. **متن فعلی را کاملاً جایگزین کن:**
   - **قبلی:**
     ```
     کدیار اولین محیط توسعه هماهنگ با حافظه طولانی مدت است...
     ```
   - **جدید:**
     ```
     چند بار تا حالا سعی کردید پروژتون رو با هوش مصنوعی بسازید؟ یا در لوپ می‌افته یا بخاطر طولانی شدن کار، اطلاعات اصلی و اولیه را فراموش، و کد را خراب می‌کند. اما کد یار طوری ساخته شده که بسیار آسان و سریع پروژه شما را انجام می‌دهد، بدون اینکه در لوپ ارور ها بیفتد.
     ```

### محدودیت‌های اختصاصی تسک
- ✅ متن را دقیقاً کپی کن (با همان نگارش)
- ✅ کلاس‌های استایل را حفظ کن
- ❌ تگ `<p>` را تغییر نده
- ❌ max-width را تغییر نده

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/sections/hero-section.tsx"]
```

---

## تسک ۷: Responsive حرفه‌ای Hero Section (مهم‌ترین تسک)

### عنوان تسک
اصلاح responsive برای جلوگیری از شکستگی در همه سایزها — بدون تغییر ابعاد اصلی در دسکتاپ

### ⚠️ قانون حیاتی
**هیچ‌کدام از ابعاد اصلی (ارتفاع پنجره انیمیشن، سایز المان‌ها در حالت دسکتاپ بزرگ) نباید تغییر کند.** هدف این تسک فقط این است که در سایزهای کوچک‌تر، المان‌ها به‌درستی scale شوند یا مخفی شوند — نه اینکه طراحی اصلی عوض شود.

### راهنمای پیاده‌سازی فنی

#### مرحله ۱: Header (navbar) — جلوگیری از Overlap
مشکل: در مانیتورهای کوچک، هدر روی Hero Section می‌افتد.

**راه‌حل:**
```tsx
// در header یا navbar component:
// مطمئن شو که header دارای position: fixed یا sticky است
// و Hero Section دارای padding-top کافی است

// در hero-section.tsx:
// به section اصلی padding-top اضافه کن که با ارتفاع header هماهنگ باشد
className="... pt-20 sm:pt-24 lg:pt-28 ..."
// یا اگر header ارتفاع ثابت دارد:
className="... pt-[80px] lg:pt-[100px] ..."
```

**همچنین بررسی کن:**
- آیا header دارای `z-index` بالاتر از hero است؟ (باید باشد)
- آیا hero از `mt-` منفی استفاده کرده که باعث overlap شده؟

#### مرحله ۲: Section Container — بدون تغییر در lg و بالاتر
```tsx
// فقط breakpoint های کوچک‌تر را اضافه کن:
className="... 
           flex flex-col          // موبایل: یک ستون
           md:flex-row            // تبلت: دو ستون افقی
           lg:grid lg:grid-cols-[40%_60%]  // دسکتاپ: همان قبلی — تغییر نده!
           ..."
```

#### مرحله ۳: IDE Mockup — Scale کردن هوشمند (نه تغییر ارتفاع!)
```tsx
// ❌ اشتباه — ارتفاع را تغییر نده:
h-[400px] sm:h-[450px] md:h-[500px] lg:h-[580px]  // این غلط است!

// ✅ درست — از scale استفاده کن:
className="w-full 
           scale-[0.65] sm:scale-[0.75] md:scale-[0.85] lg:scale-100
           origin-top
           ..."

// یا اگر scale مشکل‌ساز بود، از container query یا max-width استفاده کن:
className="w-full max-w-[95vw] lg:max-w-none ..."
```

**نکته مهم:** ارتفاع پنجره انیمیشن در حالت `lg:` و بالاتر باید دقیقاً همان چیزی باشد که الان هست. فقط در سایزهای کوچک‌تر scale بخورد.

#### مرحله ۴: Anchor Section (متن‌ها و دکمه‌ها)
```tsx
// فقط در سایزهای کوچک تنظیم کن:
className="flex flex-col justify-center 
           gap-4 sm:gap-5 lg:gap-6    // فقط gap کوچک‌تر در موبایل
           px-4 sm:px-6 lg:pr-10      // padding کمتر در موبایل
           items-center lg:items-start 
           text-center lg:text-right"
```

#### مرحله ۵: Headline — سایز responsive
```tsx
className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
           font-bold text-zinc-100"
// نکته: سایز lg و xl باید همان سایز فعلی باشد — فقط سایزهای کوچک‌تر اضافه شود
```

#### مرحله ۶: جلوگیری از Overflow افقی
```tsx
// به section اصلی:
className="... overflow-x-hidden ..."

// به همه flex container ها:
className="... min-w-0 ..."
```

#### مرحله ۷: موبایل — ساده‌سازی
- Sidebar کاملاً مخفی: `hidden lg:flex`
- متن‌ها وسط‌چین: `text-center lg:text-right`
- IDE زیر متن‌ها قرار بگیرد (با flex-col)
- TaskProgressCard: scale کوچک‌تر یا مخفی

### محدودیت‌های سخت‌گیرانه
- ✅ از mobile-first approach استفاده کن
- ✅ تست در ۴ سایز: 375px, 768px, 1024px, 1440px
- ✅ در 1440px باید دقیقاً مثل قبل باشد
- ❌ **ارتفاع پنجره انیمیشن را در دسکتاپ تغییر نده**
- ❌ **ابعاد و موقعیت المان‌ها را در lg و بالاتر تغییر نده**
- ❌ از `!important` استفاده نکن
- ❌ مقادیر px ثابت جدید اضافه نکن (مگر برای header offset)

### معیار موفقیت
1. در 1440px: دقیقاً مثل قبل از این تسک
2. در 1024px: همه چیز جا می‌شود، هدر overlap نمی‌کند
3. در 768px: layout تک‌ستونی، المان‌ها scale شده
4. در 375px: همه چیز خوانا و قابل استفاده

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "components/layout/header.tsx", "app/globals.css"]
```

---

## ترتیب اجرای تسک‌ها

| اولویت | تسک | وابستگی |
|--------|-----|---------|
| 1 | تسک ۴ (تغییر متن headline) | — |
| 2 | تسک ۶ (تغییر متن subheadline) | — |
| 3 | تسک ۵ (جمع‌تر کردن سمت راست) | تسک ۴، ۶ |
| 4 | تسک ۱ (چک‌لیست انگلیسی) | — |
| 5 | تسک ۲ (فیکس Context Loaded) | — |
| 6 | تسک ۳ (تایمینگ ۴ ثانیه) | — |
| 7 | تسک ۷ (Responsive) | همه تسک‌های قبلی |

**نکته:** تسک ۷ (Responsive) باید آخر انجام شود چون تمام تغییرات قبلی را در نظر می‌گیرد.

---

---

## تسک ۸: Loading State حرفه‌ای برای Hero Section

### عنوان تسک
ایجاد یک صفحه لودینگ زیبا و حرفه‌ای که تا زمان لود کامل محتوا نمایش داده شود

### مشکل فعلی
وقتی صفحه در حال لود شدن است، المان‌های ناقص و بدون استایل نمایش داده می‌شوند که تجربه کاربری را خراب می‌کند.

### راهنمای پیاده‌سازی فنی

#### مرحله ۱: ایجاد کامپوننت Loading
یک فایل جدید بساز: `components/ui/hero-loading.tsx`

```tsx
'use client'

import { motion } from 'framer-motion'

export function HeroLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
      {/* لوگو یا آیکون برند با انیمیشن */}
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* لوگوی کدیار یا یک آیکون کد */}
        <motion.div
          className="relative"
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(139,92,246,0.3)',
              '0 0 40px rgba(139,92,246,0.6)',
              '0 0 20px rgba(139,92,246,0.3)'
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {/* آیکون یا لوگو اینجا */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 
                          flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{'</>'}</span>
          </div>
        </motion.div>

        {/* Progress Bar یا Spinner */}
        <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        {/* متن لودینگ (اختیاری) */}
        <motion.p
          className="text-zinc-500 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          در حال آماده‌سازی...
        </motion.p>
      </motion.div>
    </div>
  )
}
```

#### مرحله ۲: اضافه کردن State به Hero Section
در `hero-section.tsx`:

```tsx
'use client'

import { useState, useEffect } from 'react'
import { HeroLoading } from '@/components/ui/hero-loading'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // وقتی همه چیز آماده شد
    // می‌توانی از document.fonts.ready یا تایمر استفاده کنی
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500) // حداقل 500ms برای جلوگیری از flash

    // یا بهتر: صبر کن تا فونت‌ها لود شوند
    document.fonts.ready.then(() => {
      setTimeout(() => setIsLoaded(true), 300)
    })

    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return <HeroLoading />
  }

  // بقیه کد Hero Section...
}
```

#### مرحله ۳: انیمیشن ورود محتوا
وقتی لودینگ تمام شد، محتوا با انیمیشن ظاهر شود:

```tsx
<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="..."
>
  {/* محتوای Hero */}
</motion.section>
```

#### مرحله ۴ (اختیاری): Skeleton Loading
به جای صفحه سیاه، می‌توانی skeleton نمایش بدهی:

```tsx
// یک skeleton ساده برای IDE Mockup
<div className="animate-pulse">
  <div className="h-[580px] bg-zinc-800/50 rounded-xl" />
</div>
```

### محدودیت‌های اختصاصی تسک
- ✅ لودینگ باید سریع ظاهر شود (بدون delay)
- ✅ انیمیشن‌ها باید smooth و حرفه‌ای باشند
- ✅ رنگ‌ها با برند (بنفش) هماهنگ باشند
- ✅ حداقل ۳۰۰ms لودینگ نمایش داده شود (جلوگیری از flash)
- ❌ لودینگ بیش از ۲ ثانیه طول نکشد (در شرایط عادی)
- ❌ از spinner های ساده و بی‌کیفیت استفاده نکن
- ❌ متن لودینگ نباید خیلی توجه‌برانگیز باشد

### معیار موفقیت
1. هیچ محتوای ناقص یا شکسته نمایش داده نشود
2. لودینگ با برند هماهنگ و زیبا باشد
3. انتقال از لودینگ به محتوا smooth باشد
4. در mobile و desktop یکسان و زیبا باشد

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "app/globals.css"]
```

---

## ترتیب اجرای تسک‌ها (به‌روزشده)

| اولویت | تسک | وابستگی |
|--------|-----|---------|
| 1 | تسک ۴ (تغییر متن headline) | — |
| 2 | تسک ۶ (تغییر متن subheadline) | — |
| 3 | تسک ۵ (جمع‌تر کردن سمت راست) | تسک ۴، ۶ |
| 4 | تسک ۱ (چک‌لیست انگلیسی) | — |
| 5 | تسک ۲ (فیکس Context Loaded) | — |
| 6 | تسک ۳ (تایمینگ ۴ ثانیه) | — |
| 7 | تسک ۷ (Responsive) | همه تسک‌های قبلی |
| 8 | تسک ۸ (Loading State) | تسک ۷ |

**نکته:** تسک ۸ (Loading) باید بعد از Responsive انجام شود چون لودینگ هم باید responsive باشد.

---

## خلاصه فایل‌های درگیر (به‌روزشده)

| فایل | تسک‌ها |
|------|--------|
| `components/sections/hero-section.tsx` | ۲، ۳، ۴، ۵، ۶، ۷، ۸ |
| `components/ui/task-progress-card.tsx` | ۱ |
| `components/ui/hero-loading.tsx` | ۸ (فایل جدید) |
| `app/globals.css` | ۷، ۸ (در صورت نیاز) |
