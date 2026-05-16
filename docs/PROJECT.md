# PROJECT.md — ستاره قطبی پروژه کدیار

## هدف بیزینس
کدیار یک محیط توسعه مبتنی بر هوش مصنوعی است که با «حافظه یکپارچه پروژه» مشکل پرش کانتکست و فراموشی مدل‌های زبانی را حل می‌کند. صفحه لندینگ باید این ارزش محوری را به وایب‌کدرهای ایرانی منتقل کند و آن‌ها را به ثبت‌نام ترغیب کند.

## پرسونای هدف
وایب‌کدرهای ایرانی (نسل Z و میلنیال) که با Cursor، v0 یا مدل‌های زبانی کد می‌زنند و از گیر کردن وسط پروژه‌های بزرگ خسته شده‌اند.

## پشته تکنولوژی (Tech Stack)

| لایه | ابزار |
|---|---|
| فریم‌ورک | Next.js 16 (App Router) |
| زبان | TypeScript |
| استایل | Tailwind CSS v4 |
| انیمیشن | Framer Motion (نصب شده: `framer-motion@12`) |
| فونت | Vazirmatn (از Google Fonts، متغیر `--font-vazir`) |
| شیدر/مرز | `@paper-design/shaders-react` |
| اسکرول | `@studio-freight/react-lenis` |
| آیکون | `lucide-react` |
| تم | `dark` فیکس شده (تاریک دائم) |
| اسکرول اسنپ | Lenis Smooth Scroll |

## نبایدهای سخت‌گیرانه (Anti-Patterns) — ممنوعیت مطلق

- **CSS خطی (inline style) ممنوع** → فقط Tailwind utility classes یا متغیرهای CSS
- **Styled Components / CSS Modules ممنوع** → فقط Tailwind
- **Redux / Context API برای state مکالمه ممنوع** → از `useState` محلی استفاده شود
- **`motion` package جداگانه ممنوع** → فقط از `framer-motion` import کن (هر دو نصب هستند اما API رسمی `framer-motion` است)
- **ساخت SVG path دستی برای آیکون‌های پیچیده ممنوع** → از `lucide-react` استفاده شود
- **هیچ تصویر placeholder ممنوع** → اگر تصویر لازم است با GenerateImage بساز
- **Light mode ممنوع** → کل پروژه dark-only است؛ کلاس `.dark` روی `<html>` فیکس است
- **`setTimeout` برای کنترل انیمیشن ممنوع** → از `delay` و `transition` خود Framer Motion استفاده شود
- **fetch داده در `useEffect` ممنوع** → از SWR یا RSC استفاده شود
