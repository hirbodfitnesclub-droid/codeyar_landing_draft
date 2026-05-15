"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "این پلتفرم نحوه ساخت محصولات ما را کاملاً تغییر داد. ما MVP خود را به جای ۲ ماه، در ۲ هفته منتشر کردیم.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "سارا محمدی",
    role: "مدیر فنی در تک‌فلو",
  },
  {
    text: "بهترین سرمایه‌گذاریی که برای تیم مهندسی خود انجام دادیم. بازگشت سرمایه فوری و قابل توجه بود.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "امیر رضایی",
    role: "معاون مهندسی در اسکیل",
  },
  {
    text: "بالاخره ابزاری که واقعاً به وعده‌هایش عمل می‌کند. زمان استقرار ما از ساعت‌ها به دقایق کاهش یافت.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "مریم حسینی",
    role: "توسعه‌دهنده ارشد در نکسوس",
  },
  {
    text: "پیاده‌سازی این سیستم بسیار روان و سریع بود. رابط کاربری قابل تنظیم، آموزش تیم را بی‌دردسر کرد.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "داوود پارسا",
    role: "مدیر IT",
  },
  {
    text: "تیم پشتیبانی استثنایی است و ما را در تمام مراحل راه‌اندازی و فراتر از آن راهنمایی کردند.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "آیسا پناهی",
    role: "مدیر موفقیت مشتریان",
  },
  {
    text: "یکپارچه‌سازی بی‌نقص، عملیات تجاری و کارایی ما را بهبود بخشید. به شدت توصیه می‌شود.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "جواد قاسمی",
    role: "مدیرعامل کوانتوم",
  },
  {
    text: "ویژگی‌های قدرتمند و پشتیبانی سریع، جریان کاری ما را به طرز چشمگیری متحول کرده است.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "لیلا طاهری",
    role: "مدیر پروژه",
  },
  {
    text: "پیاده‌سازی روان فراتر از انتظارات بود. کل فرآیند کسب‌وکار ما را ساده‌تر کرد.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "محمد ابراهیمی",
    role: "تحلیلگر کسب‌وکار",
  },
  {
    text: "بهره‌وری تیم ما با طراحی کاربرپسند و ویژگی‌های قدرتمند به طرز شگفت‌آوری بهبود یافت.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "راضیه کرمی",
    role: "مدیر مارکتینگ",
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
            آنچه کاربران ما می‌گویند
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            ببینید مشتریان ما در مورد تجربه کار با ما چه می‌گویند.
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
