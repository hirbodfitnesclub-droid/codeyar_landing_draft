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
بازنویسی کامل responsive برای جلوگیری از شکستگی در همه سایزها

### راهنمای پیاده‌سازی فنی

#### مرحله ۱: Section Container
```tsx
// قبلی:
className="... lg:grid lg:grid-cols-[40%_60%] ..."

// جدید:
className="... flex flex-col lg:grid lg:grid-cols-[45%_55%] ..."
```

#### مرحله ۲: Anchor Section (سمت راست/بالا)
```tsx
// اضافه کردن breakpoint های بیشتر:
className="flex flex-col justify-center gap-4 sm:gap-5 lg:gap-6 
           px-4 sm:px-6 lg:pr-10 
           relative z-20 
           mb-8 lg:mb-0 
           items-center lg:items-start 
           text-center lg:text-right"
```

#### مرحله ۳: Headline
```tsx
// سایز responsive:
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
           font-bold text-zinc-100 
           max-w-4xl leading-[1.2]"
```

#### مرحله ۴: IDE Mockup
```tsx
// ارتفاع responsive:
className="w-full max-w-full lg:max-w-[95%] 
           lg:scale-[0.9] 
           h-[400px] sm:h-[450px] md:h-[500px] lg:h-[580px]
           ..."

// Sidebar: مخفی در موبایل
className="... hidden lg:flex"  // قبلاً: hidden md:flex

// Code Stream Panel: عرض responsive
className="w-full lg:w-[45%] ..."
```

#### مرحله ۵: جلوگیری از Overflow
- به section اصلی `overflow-x-hidden` اضافه کن
- به همه flex container ها `min-w-0` اضافه کن
- از `max-w-full` استفاده کن

#### مرحله ۶: موبایل
- در موبایل فقط یک ستون نمایش بده
- IDE Mockup باید زیر متن‌ها باشد
- Sidebar کاملاً مخفی شود
- ارتفاع IDE کمتر باشد
- متون کوچک‌تر باشند

### محدودیت‌های اختصاصی تسک
- ✅ از mobile-first approach استفاده کن (ابتدا موبایل، بعد lg:)
- ✅ هر تغییر را در ۴ سایز تست کن: 375px, 768px, 1024px, 1440px
- ✅ هیچ overflow افقی نباید باشد
- ❌ از `!important` استفاده نکن
- ❌ از مقادیر `px` ثابت استفاده نکن (مگر برای چیزهای خاص)

### کانتکست فایل‌ها
```
CONTEXT_FILES: ["components/sections/hero-section.tsx", "app/globals.css"]
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

## خلاصه فایل‌های درگیر

| فایل | تسک‌ها |
|------|--------|
| `components/sections/hero-section.tsx` | ۲، ۳، ۴، ۵، ۶، ۷ |
| `components/ui/task-progress-card.tsx` | ۱ |
| `app/globals.css` | ۷ (در صورت نیاز) |
