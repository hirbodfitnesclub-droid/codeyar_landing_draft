# ARCHITECTURE.md — لنگرگاه سیستمی کدیار

## وضعیت پروژه
پروژه موجود است (نه Zero-to-One). فقط فایل‌های جدید یا ویرایش‌شده ذکر می‌شوند.

---

## منطق مسیردهی فایل‌ها

```
app/                        ← Next.js App Router
  page.tsx                  ← orchestrator، فقط section‌ها را import می‌کند
  layout.tsx                ← تنظیمات Vazirmatn، dark mode فیکس، LenisProvider
  globals.css               ← design tokens، no new vars needed برای این تسک

components/
  sections/
    hero-section.tsx        ← [ویرایش اصلی] — کل بازطراحی اینجاست
  buttons/
    liquid-cta-button.tsx   ← [فقط خواندن] — بدون تغییر
  ui/
    liquid-metal-border.tsx ← [فقط خواندن] — بدون تغییر
    button.tsx              ← [فقط خواندن] — برای دکمه ghost استفاده می‌شود

docs/                       ← مغز پروژه (این فایل‌ها)
  PROJECT.md
  ARCHITECTURE.md
  tasks.md
  CURRENT_TASK.md
```

---

## معماری ماکت IDE در هیرو سکشن

این ماکت یک UI مصنوعی است (هیچ بک‌اند واقعی ندارد). تمام state توسط `useState` و `useEffect` کنترل می‌شود.

### جریان انیمیشن (State Machine)

```
idle → typing → contextLoaded → splitting → materialized
```

| مرحله | توضیح | تریگر |
|---|---|---|
| `idle` | ماکت نمایش داده می‌شود، هنوز تایپ شروع نشده | on mount |
| `typing` | کاراکتر به کاراکتر متن تایپ می‌شود | 800ms بعد از mount |
| `contextLoaded` | نقطه سبز Glow و تگ "Context Loaded" ظاهر می‌شوند | 1s بعد از اتمام تایپ |
| `splitting` | پنل راست دو نیم می‌شود | 600ms بعد از contextLoaded |
| `materialized` | کارت تسک منیجر با spring از ۰.۵ به ۱ scale می‌شود | 400ms بعد از splitting |

### ساختار کامپوننت‌ها (همه درون `hero-section.tsx`)

```
HeroSection (section wrapper)
├── Badge (announcement chip)
├── Headline + Subheadline
├── IDEMockup
│   ├── IDETitleBar (traffic lights + عنوان)
│   ├── IDESidebar (file tree + context_memory folder)
│   │   └── ContextMemoryGlow (نقطه سبز + "Context Loaded" tag)
│   └── IDEMain
│       ├── [pre-split] PromptPanel (textarea با typewriter)
│       └── [post-split] SplitView
│           ├── CodeStreamPanel (خطوط کد متحرک)
│           └── LivePreviewPanel (TaskManager card)
└── CTAButtons
    ├── LiquidCtaButton ("استارت خلق ایده 🚀")
    └── Button ghost ("مشاهده نمونه خروجی‌ها")
```

---

## دیتابیس
این پروژه لندینگ‌پیج است؛ هیچ دیتابیسی ندارد و نیازی ندارد.

---

## نکات فنی حیاتی

1. **RTL**: تمام انیمیشن‌های X-axis باید برای RTL معکوس شوند (مثلاً `x: -20` به جای `x: 20` برای ورود از راست).
2. **Performance**: `will-change: transform` فقط روی المان‌هایی که واقعاً animate می‌شوند اعمال شود.
3. **Overflow**: کانتینر IDEMockup باید `overflow-hidden` داشته باشد تا split animation کلیپ شود.
4. **Delay صبور**: انیمیشن‌های مرحله‌ای با `delay` درون `transition` کنترل می‌شوند، نه `setTimeout`.
5. **framer-motion فقط**: از `motion` package جداگانه import نکن؛ فقط از `framer-motion`.
