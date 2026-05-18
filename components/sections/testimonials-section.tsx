"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "دیگه نگران فیلتر بودن ابزارهای AI نیستم. کدیار با سرعت عالی و درک پروژه، کارم رو خیلی راحت کرده.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "امیررضا علوی",
    role: "وایب‌کدر مستقل",
  },
  {
    text: "با کدیار تونستم ایده استارتاپم رو توی ۲ هفته به MVP برسونم؛ اونم بدون اینکه دانش فنی عمیقی داشته باشم.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "سارا رضایی",
    role: "بنیان‌گذار استارتاپ",
  },
  {
    text: "رفع توهم مدل‌های زبانی توی کدیار فوق‌العاده‌ست. دقیقاً همون کدی رو میده که توی کل پروژه استفاده کردم.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "علی مرادی",
    role: "توسعه‌دهنده فرانت‌انت",
  },
  {
    text: "حافظه پروژه کدیار باعث میشه دیگه لازم نباشه هر دفعه کل کانتکست رو دوباره براش توضیح بدم.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "مریم حسینی",
    role: "توسعه‌دهنده فول‌استک",
  },
  {
    text: "بهترین جایگزین برای Cursor. بدون قطعی و با دسترسی مستقیم به Claude 3.5 Sonnet.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "رضا محمدی",
    role: "توسعه‌دهنده پایتون",
  },
  {
    text: "قیمت‌گذاری ریالی کدیار واقعاً برای ما که فریلنسر هستیم نجات‌بخش بود؛ دیگه نگران دلار نیستیم.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "غزل پارسا",
    role: "طراح محصول",
  },
  {
    text: "دسترسی به مدل‌های برتر دنیا بدون نیاز به تحریم‌شکن، تمرکز آدم رو روی کد زدن برمی‌گردونه.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "حسین ابراهیمی",
    role: "مهندس دواپس",
  },
  {
    text: "برای من که دانشجو هستم، کدیار مثل یک معلم خصوصی عمل میکنه که تمام کدهای قبلیمو میدونه.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "پویا قاسمی",
    role: "دانشجوی نرم‌افزار",
  },
  {
    text: "رابط کاربری کدیار خیلی بصریه. حتی برای کسایی که تازه شروع کردن هم استفاده از AI رو ساده کرده.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "نیلوفر کیانی",
    role: "مدیر محصول",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["نوین‌تک", "ایده‌پرداز", "نسل‌نو", "کوانتوم", "شتاب", "اوج"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">نظرات کاربران</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            از زبان کاربران کدیار
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            ببینید توسعه‌دهندگان و بنیان‌گذاران ایرانی چگونه با کدیار سرعت رشد خود را چند برابر کرده‌اند.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">مورد اعتماد پیشروان صنعت</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
