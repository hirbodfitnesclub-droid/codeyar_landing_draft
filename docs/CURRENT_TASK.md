# 🎯 CURRENT TASK

## 🌳 Focus Tree
- `app/globals.css`
- `app/layout.tsx`
- `components/ui/task-progress-card.tsx`

## 📝 Current Task Details
**عنوان تسک:** ساخت کامپوننت `TaskProgressCard` در فایل مستقل

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

## 🔜 Upcoming Tasks
- **تسک ۲:** بازطراحی چیدمان هیرو — Asymmetric Void Layout
- **تسک ۳:** اصلاح State Machine — Loop بی‌نهایت و باگ‌فیکس
- **تسک ۴:** دکمه‌های CTA و Social Proof — فینال سکشن (بدون تغییر)

## 🔄 Context Relay
این اولین تسک از مسیر بازطراحی هیرو سکشن است. هیچ نکته و مشکل قبلی برای انتقال وجود ندارد.
