# CURRENT_TASK.md

## تسک فعال: تسک ۱
**ساختار پایه ماکت IDE شیشه‌ای با انیمیشن تایپ‌رایتر**

### وضعیت
- [ ] تسک ۱: ساختار پایه IDE و تایپ‌رایتر ← **فعال**
- [ ] تسک ۲: Framer Motion — Context Glow و Split View
- [ ] تسک ۳: دکمه‌های CTA و Social Proof

### فایل‌هایی که باید تغییر کنند
- `components/sections/hero-section.tsx` ← بازنویسی کامل

### فایل‌های کانتکست (فقط خواندن)
```json
CONTEXT_FILES: ["components/sections/hero-section.tsx", "components/buttons/liquid-cta-button.tsx", "app/globals.css", "app/layout.tsx"]
```

### چک‌لیست تسک ۱
- [ ] State machine با `useState`: `idle | typing | contextLoaded | splitting | materialized`
- [ ] Title Bar با ترافیک‌لایت Mac OS
- [ ] Sidebar با File Tree و `lib/context_memory/`
- [ ] Prompt Panel با textarea ظاهری
- [ ] انیمیشن تایپ‌رایتر کاراکتر به کاراکتر (۴۵ms/char)
- [ ] تغییر state به `contextLoaded` بعد از اتمام تایپ
- [ ] پنل راست فعلاً `hidden` باشد
