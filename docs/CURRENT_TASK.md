# CURRENT_TASK.md — نشانگر وضعیت

## تسک فعال: تسک ۱ از ۴

**عنوان:** ساخت کامپوننت `TaskProgressCard` در فایل مستقل

---

## چک‌لیست اجرایی

- [ ] فایل `components/ui/task-progress-card.tsx` ساخته شود
- [ ] آرایه چهار تسک با وضعیت‌های `done / in-progress / pending` تعریف شود
- [ ] استایل سه وضعیت کاملاً متمایز پیاده‌سازی شود
- [ ] انیمیشن ورود `x: -10 → 0` با stagger روی آیتم‌ها
- [ ] اسپینر `in-progress` با CSS `animate-spin` (نه Framer Motion)
- [ ] هیچ وابستگی به `hero-section.tsx` نداشته باشد

---

## تسک‌های بعدی (به ترتیب)

1. ✅ **تسک ۱** — ساخت `TaskProgressCard` ← **فعال**
2. ⏳ **تسک ۲** — بازطراحی چیدمان (Asymmetric Void Layout)
3. ⏳ **تسک ۳** — اصلاح State Machine + Loop بی‌نهایت + باگ‌فیکس‌ها
4. ⏳ **تسک ۴** — تأیید نهایی دکمه‌ها و Social Proof

---

## فایل‌های مجاز در این تسک

```
CONTEXT_FILES: ["app/globals.css", "app/layout.tsx"]
```

**فایل خروجی:** `components/ui/task-progress-card.tsx` (فایل جدید)
