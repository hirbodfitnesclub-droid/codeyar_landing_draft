# ARCHITECTURE.md

## اسکیمای دیتابیس (Database Schema)
- **وضعیت:** Stateless (در فاز فعلی لندینگ پیج، نیازی به مدل‌سازی دیتابیس نیست).

## مسیردهی API و جریان داده (API Routing & Data Flow)
جریان داده کاملاً کلاینت‌ساید (Client-side) و مبتنی بر رویداد (Event-driven) است.
۱. رویدادهای حرکتی (Mouse X/Y, Scroll Y) در بالاترین سطح ممکن (هیرو سکشن) توسط هوک‌های Framer Motion دریافت می‌شوند.
۲. این مقادیرِ انیمیشن (Motion Values) به عنوان Prop به کامپوننت‌های ایزوله فرزند (Grid, Terminal) پاس داده می‌شوند.
۳. مقادیر مستقیماً و بدون درگیر کردن Virtual DOM تبدیل (Transform) شده و روی استایل‌های سخت‌افزاری (Hardware-accelerated) اِعمال می‌شوند.

## قوانین درخت فایل (File Tree Rules)
منطق مسیردهی به این شکل سازماندهی می‌شود:
- `components/sections/hero-section.tsx`: (فایل هماهنگ‌کننده و والد) فقط وظیفه خواندن مقادیر ماوس/اسکرول و پاس دادن آن‌ها را دارد. کدهای قبلی باید کاملاً حذف شوند.
- `components/ui/perspective-grid.tsx`: (جدید) کپسوله‌سازی منطق Parallax گرید پس‌زمینه.
- `components/ui/glass-terminal.tsx`: (جدید) کپسوله‌سازی منطق 3D Tilt و افکت شیشه‌ای.
- `components/ui/kinetic-text.tsx`: (جدید) کپسوله‌سازی افکت Decrypt متن با Stagger children.
- `components/buttons/liquid-cta-button.tsx`: (موجود) استفاده مجدد درون ترمینال.