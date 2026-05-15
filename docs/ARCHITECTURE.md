# ARCHITECTURE.md — معماری سیستم

## نوع پروژه
**Existing Project** — لندینگ‌پیج تک‌صفحه‌ای (Single-page Landing). تغییرات صرفاً روی فایل‌های موجود اعمال می‌شود و **هیچ فایل جدیدی برای منطق ترجمه ساخته نمی‌شود**.

## معماری کلی
معماری همان معماری فعلی پروژه باقی می‌ماند:
- **Presentation Layer:** کامپوننت‌های React در `components/sections/*` و `components/ui/*`
- **Composition Layer:** `app/page.tsx` که سکشن‌ها را در کنار هم می‌چیند
- **Global Layer:** `app/layout.tsx` (تنظیمات HTML, dir, font) و `app/globals.css` (CSS variables و base styles)

## دیتابیس
این پروژه **stateless و static** است. هیچ دیتابیسی ندارد و در این فاز هم نیاز ندارد. تمام محتوا hardcoded داخل JSX کامپوننت‌ها است.

## مسیردهی API
این پروژه **هیچ API route ندارد**. تنها interaction خارجی Vercel Analytics است که بدون تغییر باقی می‌ماند.

## جریان داده (Data Flow)
```
app/layout.tsx (lang="fa", dir="rtl", font=Vazirmatn)
     │
     ├── LenisProvider (smooth scroll)
     │
     └── app/page.tsx
            │
            ├── <Navbar />              ← متن فارسی + RTL spacing
            ├── <HeroSection />         ← متن فارسی + اعداد فارسی + RTL
            ├── <ImpactSection />       ← اعداد فارسی + متن
            ├── <FeaturesSection />     ← متن + animation direction
            ├── <TestimonialsSection /> ← محتوای کاملاً بومی + marquee RTL
            ├── <PricingSection />      ← قیمت تومانی + متن
            ├── <CtaSection />          ← متن فارسی
            └── <FooterSection />       ← متن فارسی + RTL layout
```

## قوانین درخت فایل

### اصول مسیردهی
- **هیچ فایل جدیدی ساخته نمی‌شود** برای منطق ترجمه، utility اعداد فارسی، یا context.
- **تبدیل اعداد فارسی به‌صورت inline** انجام می‌شود (مثلاً نوشتن مستقیم `۱۰٬۰۰۰+` در JSX). نیازی به helper function نیست.
- **فونت Vazirmatn** از طریق `next/font/google` در `app/layout.tsx` لود می‌شود (نیاز به فایل فونت محلی نیست).
- **تغییرات فقط در فایل‌های موجود** اعمال می‌شود.

### فایل‌های مورد ویرایش (و فقط همین‌ها)

| مسیر فایل | نوع تغییر |
|-----------|-----------|
| `app/layout.tsx` | افزودن `lang="fa"`, `dir="rtl"`, فونت Vazirmatn |
| `app/globals.css` | تنظیم `--font-sans` به Vazirmatn، تنظیم base direction |
| `components/ui/navbar.tsx` | ترجمه متن + تبدیل `ml/mr` به `ms/me` |
| `components/sections/hero-section.tsx` | ترجمه + اعداد فارسی + RTL spacing + flip آیکون فلش |
| `components/sections/impact-section.tsx` | ترجمه + اعداد فارسی |
| `components/sections/features-section.tsx` | ترجمه + اعداد فارسی + بررسی direction انیمیشن |
| `components/sections/testimonials-section.tsx` | بومی‌سازی نظرات + معکوس کردن جهت marquee |
| `components/ui/testimonials-column.tsx` | بررسی animation direction |
| `components/sections/pricing-section.tsx` | ترجمه + تبدیل ارز به تومان + اعداد فارسی |
| `components/sections/cta-section.tsx` | ترجمه + flip آیکون |
| `components/sections/footer-section.tsx` | ترجمه + تبدیل کلاس‌های جهتی |
| `components/buttons/liquid-cta-button.tsx` | flip آیکون فلش با `rtl:rotate-180` |
| `components/ui/liquid-metal-border.tsx` | بررسی direction اگر متن دارد |

### فایل‌هایی که **نباید** دست بخورند
- `components/ui/*` (سایر کامپوننت‌های shadcn از قبیل button.tsx, card.tsx و غیره) — این‌ها Tailwind Logical Properties را پشتیبانی می‌کنند و نیازی به تغییر ندارند.
- `lib/utils.ts`
- `components/providers/lenis-provider.tsx`
- `next.config.mjs`, `tsconfig.json`, `components.json`, `tailwind.config.ts`
- `hooks/*`
- فایل‌های تصویر در `public/`

## استراتژی RTL
- **Direction در root:** `<html dir="rtl">` در `layout.tsx` کل برنامه را RTL می‌کند.
- **Logical Properties:** Tailwind 4 به‌صورت بومی از `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*` پشتیبانی می‌کند و خود به‌خود با direction تطبیق می‌یابند.
- **Flexbox direction:** خود به‌خود توسط `dir="rtl"` معکوس می‌شود؛ نیازی به `flex-row-reverse` نیست.
- **آیکون‌های جهت‌دار:** با utility واریانت `rtl:rotate-180` flip می‌شوند (Tailwind 4 از این واریانت پشتیبانی می‌کند).

## استراتژی فونت
```tsx
// app/layout.tsx
import { Vazirmatn } from 'next/font/google'

const vazirmatn = Vazirmatn({ 
  subsets: ['arabic'], 
  variable: '--font-sans',
  display: 'swap',
})
```
کلاس `vazirmatn.variable` روی `<html>` اعمال می‌شود و در `globals.css`، `--font-sans` به این متغیر نگاشت می‌شود.

## استراتژی انیمیشن
- **Marquee افقی در testimonials/logos:** جهت animation از `x: ["0%", "-50%"]` به `x: ["0%", "50%"]` تغییر می‌کند تا حرکت در RTL از چپ-به-راست (طبیعی برای چشم RTL) انجام شود.
- **انیمیشن‌های entrance (fade-up, fade-in):** نیازی به تغییر ندارند.
- **انیمیشن‌های horizontal slide در hero/cards:** case-by-case بررسی می‌شوند.

## استراتژی اعداد و ارز
- **اعداد نمایشی** (rating، آمار، قیمت، درصد): فارسی شوند (۰-۹، جداکننده هزارگان `٬`).
- **اعداد تکنیکال** (version، API count در context تکنیکال): انگلیسی بمانند.
- **ارز:** `$0` → `رایگان`، `$29/mo` → `۲۹۰٬۰۰۰ تومان/ماه`، `$99/mo` → `۹۹۰٬۰۰۰ تومان/ماه`.
