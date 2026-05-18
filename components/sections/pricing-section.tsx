import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "استارتاپ",
    description: "مناسب برای فریلنسرها و شروع قدرتمند پروژه‌ها",
    price: "۳۵۰,۰۰۰",
    period: "تومان/ماه",
    features: ["دسترسی به Claude 3.5 Sonnet", "۱۰ پروژه فعال", "حافظه کانتکست ۱۰۰٪", "پشتیبانی استاندارد", "رفع تحریم تمام سرویس‌ها"],
    cta: "شروع کار",
    highlighted: false,
  },
  {
    name: "پرو",
    description: "پیشنهادی برای توسعه‌دهندگان حرفه‌ای و تیم‌ها",
    price: "۵۹۰,۰۰۰",
    period: "تومان/ماه",
    features: [
      "دسترسی به تمام مدل‌ها (GPT-4o, Claude)",
      "پروژه‌های نامحدود",
      "اولویت در پردازش",
      "پشتیبانی ویژه کدیار",
      "گزارش عملکرد تیمی",
      "یکپارچگی با زیرساخت ایران",
    ],
    cta: "خرید اشتراک پرو",
    highlighted: true,
  },
  {
    name: "کلید اختصاصی (BYOK)",
    description: "فقط از پلتفرم کدیار با کلید API خودتان استفاده کنید",
    price: "۲۵۰,۰۰۰",
    period: "تومان/ماه",
    features: [
      "استفاده از تمام امکانات پلتفرم",
      "محدودیت بر اساس کلید شما",
      "مدیریت متمرکز پروژه",
      "دسترسی به ابزارهای دیباگ",
      "بدون هزینه اضافه توکن",
    ],
    cta: "اتصال کلید",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">قیمت‌گذاری</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            شروع هوشمندانه، پرداخت منصفانه
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            بدون نیاز به اشتراک‌های ارزی دلاری و دغدغه پرداخت. کدیار متناسب با بودجه توسعه‌دهنده ایرانی طراحی شده است.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-zinc-900" : "text-zinc-100"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-display text-4xl font-bold ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-zinc-900" : "text-zinc-400"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#"
                className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                    : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
