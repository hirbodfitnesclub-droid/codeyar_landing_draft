# ARCHITECTURE.md — لنگرگاه سیستمی

## ساختار کلی پروژه
این یک لندینگ پیج استاتیک است (بدون دیتابیس). معماری بر اساس کامپوننت‌های ماژولار Next.js است.

## درخت فایل فعلی (مرتبط با این تسک)

```
/
├── app/
│   ├── globals.css          # CSS Variables + Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # صفحه اصلی (ترکیب سکشن‌ها)
│
├── components/
│   ├── sections/
│   │   └── hero-section.tsx # ⭐ کامپوننت اصلی Hero (تغییرات اصلی)
│   │
│   └── ui/
│       └── task-progress-card.tsx # ⭐ چک‌لیست انیمیشن (تغییرات متنی)
│
└── docs/
    ├── PROJECT.md
    ├── ARCHITECTURE.md
    └── tasks.md
```

## جریان داده در Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                        HeroSection                              │
│  ┌───────────────────┐    ┌───────────────────────────────────┐ │
│  │   Anchor (40%)    │    │      Reality Warp (60%)           │ │
│  │   ─────────────   │    │   ┌─────────────────────────────┐ │ │
│  │   • Badge         │    │   │      IDE Mockup             │ │ │
│  │   • Headline      │    │   │  ┌─────────┬──────────────┐ │ │ │
│  │   • Subheadline   │    │   │  │Sidebar  │ Main Content │ │ │ │
│  │   • CTA Buttons   │    │   │  │         │              │ │ │ │
│  │   • Social Proof  │    │   │  │         │ Phase-based: │ │ │ │
│  │                   │    │   │  │         │ • Typing     │ │ │ │
│  │                   │    │   │  │         │ • Split View │ │ │ │
│  │                   │    │   │  │         │   - Preview  │ │ │ │
│  │                   │    │   │  │         │   - Code     │ │ │ │
│  │                   │    │   │  └─────────┴──────────────┘ │ │ │
│  │                   │    │   └─────────────────────────────┘ │ │
│  └───────────────────┘    └───────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## State Machine انیمیشن (فعلی)

```
idle → typing → contextLoaded → splitting → materialized → resetting → idle
 │        │           │            │             │            │
 800ms   ~3s       600ms        800ms         3000ms        600ms
```

## State Machine انیمیشن (هدف)

```
idle → typing → contextLoaded → splitting → materialized → resetting → idle
 │        │           │            │             │            │
 800ms   ~3s       600ms        800ms         4000ms        600ms
                                               ↑
                                    افزایش به 4 ثانیه
```

## قوانین Responsive (الزامی)

### Desktop (lg و بالاتر)
- Layout: Grid با دو ستون (40% / 60%)
- IDE Mockup: نمایش کامل با Sidebar
- Scale: 0.9 برای IDE

### Tablet (md)
- Layout: همچنان Grid ولی با پدینگ کمتر
- IDE Mockup: Sidebar مخفی نیست ولی فشرده‌تر
- متن: سایز کوچک‌تر

### Mobile (کمتر از md)
- Layout: Flex column (یک ستونه)
- IDE Mockup: فقط Main Content (بدون Sidebar)
- Scale: تطبیق با عرض صفحه
- ارتفاع ثابت برای جلوگیری از overflow

## نکات مهم پیاده‌سازی

### 1. انیمیشن کد بی‌نهایت
- انیمیشن scroll کد سمت چپ باید `repeat: Infinity` باشد
- نباید با تغییر phase متوقف شود
- از `repeatType: 'loop'` استفاده شود

### 2. Context Loaded Badge
- باید درون container خودش position شود
- نباید روی المان‌های دیگر overlap کند
- استفاده از `relative` برای parent و positioning صحیح

### 3. افکت نئونی متن
- استفاده از `text-shadow` یا `drop-shadow`
- انیمیشن intensity با `animate` در Framer Motion
- چرخه: کم → زیاد → کم

### 4. Responsive بدون شکستگی
- استفاده از `clamp()` برای سایزها
- `min-w-0` برای جلوگیری از overflow در flex
- `overflow-hidden` در container های اصلی
