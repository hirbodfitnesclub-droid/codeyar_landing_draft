# ARCHITECTURE.md — لنگرگاه سیستمی کدیار (نسخه ۲)

## وضعیت پروژه
پروژه موجود است (نه Zero-to-One). فقط فایل‌های جدید یا ویرایش‌شده ذکر می‌شوند.

---

## منطق مسیردهی فایل‌ها

```
app/
  page.tsx                  ← orchestrator، فقط section‌ها را import می‌کند
  layout.tsx                ← تنظیمات Vazirmatn، dark mode فیکس، LenisProvider
  globals.css               ← design tokens

components/
  sections/
    hero-section.tsx        ← [ویرایش اصلی] — چیدمان و state machine اینجاست
  buttons/
    liquid-cta-button.tsx   ← [فقط خواندن] — بدون تغییر
  ui/
    task-progress-card.tsx  ← [فایل جدید] — کامپوننت مستقل کارت تسک‌ها
    liquid-metal-border.tsx ← [فقط خواندن] — بدون تغییر
    button.tsx              ← [فقط خواندن] — برای دکمه outline استفاده می‌شود

docs/
  PROJECT.md
  ARCHITECTURE.md
  tasks.md
  CURRENT_TASK.md
```

---

## چیدمان کلی هیرو سکشن — Asymmetric Void

```
┌─────────────────────────────────────────────────────────────┐
│  section (bg-zinc-950, min-h-screen, grid md:grid-cols-2)  │
│                                                             │
│  ┌─────────────── 40% ──────────────┐  ┌───── 60% ──────┐  │
│  │  [The Anchor — Right Column]      │  │ [Reality Warp] │  │
│  │                                   │  │                │  │
│  │  Badge اعلان                      │  │  ماکت IDE      │  │
│  │  Headline (tight leading + neon)  │  │  (scale 0.9,   │  │
│  │  Subheadline                      │  │   h-580px)     │  │
│  │  CTAs (Liquid + Outline)          │  │                │  │
│  │  Social Proof (avatars + stars)   │  │                │  │
│  │                                   │  │                │  │
│  └───────────────────────────────────┘  └────────────────┘  │
│                    ↑                                         │
│          Void Glow (بنفش، روی مرز 40/60)                   │
└─────────────────────────────────────────────────────────────┘
```

**Responsive**: زیر `md:` به `flex-col` تبدیل می‌شود (ماکت زیر متن).

---

## معماری State Machine — Loop بی‌نهایت

```
idle → typing → contextLoaded → splitting → materialized → resetting → idle → ...
```

| مرحله | توضیح | تریگر |
|---|---|---|
| `idle` | ماکت نمایش داده می‌شود، cursor چشمک می‌زند | on mount / بعد از resetting |
| `typing` | کاراکتر به کاراکتر متن تایپ می‌شود | 800ms بعد از idle |
| `contextLoaded` | نقطه سبز Glow + تگ "Context Loaded" | بعد از اتمام تایپ |
| `splitting` | پنل به Code Stream + Live Preview تقسیم می‌شود | 600ms بعد از contextLoaded |
| `materialized` | TaskProgressCard با spring ظاهر می‌شود | 400ms بعد از splitting |
| `resetting` | fade-out نرم، پاک کردن متن | 3000ms بعد از materialized |

**قانون مهم:** loop در `resetting` دوباره به `idle` برمی‌گردد. این loop بی‌نهایت است.

---

## ساختار کامپوننت‌ها

```
HeroSection (section wrapper)
├── VoidGlow (div مطلق روی مرز 40/60 — فقط desktop)
├── AnchorColumn (ستون راست 40%)
│   ├── Badge
│   ├── Headline + Subheadline
│   ├── CTAButtons
│   │   ├── LiquidCtaButton
│   │   └── Button (outline)
│   └── SocialProof (آواتارها + ستاره‌ها — دست‌نخورده)
└── RealityWarpColumn (ستون چپ 60%)
    └── IDEMockup
        ├── IDETitleBar
        ├── IDESidebar (file tree + context_memory)
        │   └── ContextMemoryGlow (شرط: phase !== 'idle' && phase !== 'typing')
        └── IDEMain
            ├── [pre-split] PromptPanel
            └── [post-split: splitting/materialized] SplitView
                ├── CodeStreamPanel (seamless loop با "-50%" y)
                └── LivePreviewPanel → <TaskProgressCard />
```

---

## مشخصات فنی کامپوننت TaskProgressCard

**مسیر فایل:** `components/ui/task-progress-card.tsx`

```ts
type TaskStatus = 'done' | 'in-progress' | 'pending'
type TaskItem = { id: number; label: string; status: TaskStatus }
```

**داده‌های داخلی (hardcoded):**
```ts
const tasks: TaskItem[] = [
  { id: 1, label: 'طراحی رابط کاربری', status: 'done' },
  { id: 2, label: 'نوشتن کد فرانت‌اند', status: 'in-progress' },
  { id: 3, label: 'نوشتن کد بک‌اند', status: 'pending' },
  { id: 4, label: 'تهیه مستندات', status: 'pending' },
]
```

**استایل هر وضعیت:**
- `done`: نوار سبز چپ, تیک سبز, متن line-through, badge `انجام شد`
- `in-progress`: کارت violet با glow داخلی, اسپینر CSS, badge `در حال انجام` + نقطه pulse
- `pending`: کارت تیره, clock icon, متن خاکستری, badge `در انتظار`

---

## مشخصات فنی Code Stream (بدون پرش)

```ts
// ✅ درست — seamless loop
animate={{ y: [0, "-50%"] }}
transition={{ repeat: Infinity, duration: 8, ease: 'linear', repeatType: 'loop' }}

// محتوا: 40 آیتم (20 منحصربه‌فرد + 20 کپی)
// این باعث می‌شود وقتی به "-50%" می‌رسد، دقیقاً همان تصویر اول را می‌بینیم
```

---

## نکات فنی حیاتی

1. **RTL + گلو**: container نقطه سبز `context_memory` باید `dir="ltr"` داشته باشد تا گلو در چپ صفحه (نه راست) قرار گیرد.
2. **Loop cleanup**: هر `setTimeout` در `useEffect` باید cleanup داشته باشد.
3. **resetting phase**: در این فاز `displayedText` پاک می‌شود و ماکت IDE با `opacity: 0.4` fade می‌شود.
4. **Performance**: `will-change: transform` فقط روی `motion.div` code stream.
5. **Glow condition**: `phase !== 'idle' && phase !== 'typing'` (نه آرایه‌ای از حالت‌ها — این خواناتر و bug-proof‌تر است).
6. **موبایل**: در `md:` و پایین‌تر، grid به `flex flex-col` تبدیل می‌شود. Void Glow فقط desktop نمایش داشته باشد.
