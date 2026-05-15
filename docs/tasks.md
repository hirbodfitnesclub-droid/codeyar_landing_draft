# tasks.md

## Task 1: معماری زیرساخت رویدادها و ساخت The Void Grid
- **راهنمای پیاده‌سازی فنی:**
  ۱. محتوای فعلی `hero-section.tsx` را کاملاً پاک کن.
  ۲. یک کلین کامپوننت از نوع `"use client"` بساز. در این فایل، یک `<section>` تاریک و تمام‌صفحه (`min-h-screen`, `bg-black`, `overflow-hidden`) ایجاد کن.
  ۳. مقادیر `useMotionValue` برای ماوس (x, y) و `useScroll` را در این فایل تعریف کن.
  ۴. یک فایل جدید `perspective-grid.tsx` در پوشه UI بساز. این کامپوننت باید مقادیر ماوس را به عنوان prop بگیرد و با `useTransform`، موقعیت یک گرید SVG (با خطوط نئونی بنفش/آبی) را در خلاف جهت ماوس حرکت دهد (Parallax).
- **محدودیت‌های اختصاصی تسک:** از `useEffect` برای ثبت Event Listener ماوس روی `window` استفاده کن و مقادیر را در `useMotionValue` آپدیت کن. به هیچ وجه از `useState` استفاده نکن.
- **آرایه کانتکست ماشین‌خوان:**
  `CONTEXT_FILES: ["components/sections/hero-section.tsx"]`

## Task 2: کپسوله‌سازی و پیاده‌سازی Glass Terminal (3D Tilt)
- **راهنمای پیاده‌سازی فنی:**
  ۱. فایل جدید `glass-terminal.tsx` را در پوشه UI بساز.
  ۲. این کامپوننت یک `motion.div` است که کلاس‌های Tailwind (`backdrop-blur-md`, `bg-white/5`, `border-white/10`) را دارد.
  ۳. مقادیر ماوس را از والد دریافت کن و با فرمول `useTransform`، مقادیر `rotateX` و `rotateY` را بساز.
  ۴. انیمیشن باز شدن فنری (Boot-up Spring) از `scale: 0` به `scale: 1` را برای زمان ماونت شدن پیاده‌سازی کن.
  ۵. این ترمینال را در مرکز `hero-section.tsx` (روی گرید) قرار بده.
- **محدودیت‌های اختصاصی تسک:** ویژگی `perspective` باید روی کانتینر والدِ این ترمینال تنظیم شود تا افکت 3D به درستی کار کند.
- **آرایه کانتکست ماشین‌خوان:**
  `CONTEXT_FILES: ["components/sections/hero-section.tsx"]`

## Task 3: خلق Kinetic Typography و یکپارچه‌سازی Liquid Buttons
- **راهنمای پیاده‌سازی فنی:**
  ۱. فایل جدید `kinetic-text.tsx` را ایجاد کن.
  ۲. یک انیمیشن Text Reveal با استفاده از `variants` در Framer Motion بنویس. حالت اولیه `blur(8px)` و `opacity: 0`، و حالت نهایی `blur(0)` با `opacity: 1` باشد. از ویژگی `staggerChildren` برای لود شدن حرف به حرفِ کلمات (افکت Decrypt) استفاده کن.
  ۳. این متن را درون `glass-terminal.tsx` قرار بده.
  ۴. کامپوننت دکمه‌های موجود (`liquid-cta-button.tsx`) را ایمپورت کرده و در پایین ترمینال شیشه‌ای چیدمان کن.
- **محدودیت‌های اختصاصی تسک:** این تسک فقط روی خوانایی و ترتیب اجرای انیمیشن‌های داخلی ترمینال تمرکز دارد. دکمه‌ها نباید ساختار داخلی خودشان را از دست بدهند.
- **آرایه کانتکست ماشین‌خوان:**
  `CONTEXT_FILES: ["components/sections/hero-section.tsx", "components/buttons/liquid-cta-button.tsx"]`

## Task 4: مهندسی انیمیشن Zoom-through Scroll (میکرو-اینتراکشن)
- **راهنمای پیاده‌سازی فنی:**
  ۱. در فایل `hero-section.tsx`، از مقدار `scrollY` (که از `useScroll` به دست می‌آید) استفاده کن.
  ۲. یک `useTransform` بساز که با افزایش عدد اسکرول (مثلاً از 0 تا 500 پیکسل)، `scale` کل کانتینرِ `Glass Terminal` را به شدت افزایش دهد (مثلاً از 1 به 10) تا لبه‌های آن از کادر تصویر خارج شود.
  ۳. به صورت همزمان، `opacity` عناصر داخل ترمینال (متن و دکمه‌ها) را با اسکرول به صفر برسان تا کاربر به آرامی از درون ترمینال عبور کرده و به سکشن بعدی برسد.
- **محدودیت‌های اختصاصی تسک:** والد `hero-section.tsx` باید استایل `sticky top-0` داشته باشد تا در حین اسکرول شدنِ صفحه، انیمیشن Scale اجرا شود و سپس صفحه به طور طبیعی به سکشن‌های بعدی بغلتد.
- **آرایه کانتکست ماشین‌خوان:**
  `CONTEXT_FILES: ["components/sections/hero-section.tsx", "app/page.tsx"]`