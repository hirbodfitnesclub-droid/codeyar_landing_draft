const metrics = [
  { value: "۹۹٫۹۹٪", label: "تضمین در دسترس بودن", description: "قابلیت اطمینان سازمانی" },
  { value: "۱۰میلیون+", label: "درخواست API در روز", description: "اثبات شده در مقیاس بالا" },
  { value: "<۵۰میلی‌ثانیه", label: "میانگین پاسخ", description: "سرعت خیره‌کننده" },
  { value: "۱۵۰+", label: "کشور", description: "دسترسی جهانی" },
]

export function ImpactSection() {
  return (
    <section className="px-6 py-24 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        {/* Impact Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">دستاوردهای ما</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">مورد اعتماد تیم‌ها در سراسر جهان</h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-balance">
            اعدادی که به جای ما سخن می‌گویند. ببینید چرا هزاران نفر ما را انتخاب می‌کنند.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-900/80 transition-all duration-300 group text-center relative overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <p className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                  {metric.value}
                </p>
                <p className="text-sm font-medium text-zinc-400 mb-1">{metric.label}</p>
                <p className="text-xs text-zinc-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
