import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">ایده‌ات را نصفه رها نکن.</h2>
        <p className="text-lg text-zinc-500 mb-10 text-balance">
          کدیار تمام موانع فنی و تحریمی را از پیش پای شما برمی‌دارد تا فقط روی خلق محصول و ارزش تمرکز کنید.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#pricing">
            <LiquidCtaButton>شروع کدنویسی با کدیار</LiquidCtaButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
