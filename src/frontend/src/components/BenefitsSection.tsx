import { CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    label: "Boosts Energy",
    detail: "Feel more energized throughout your entire day.",
  },
  {
    label: "Improves Mood",
    detail: "Release endorphins and reduce stress hormones naturally.",
  },
  {
    label: "Strengthens Heart",
    detail: "Lower risk of cardiovascular disease significantly.",
  },
  {
    label: "Better Sleep",
    detail: "Fall asleep faster and enjoy deeper, restorative rest.",
  },
  {
    label: "Weight Management",
    detail: "Maintain healthy weight through consistent movement.",
  },
  {
    label: "Increases Longevity",
    detail: "Active people live longer, healthier, fuller lives.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block bg-primary/10 text-energetic-blue text-sm font-semibold px-3 py-1.5 rounded-full mb-4">
              Why Exercise?
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-8 leading-tight">
              Why Regular Exercise
              <span className="block text-energetic-blue">
                Changes Everything
              </span>
            </h2>
            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-energetic-blue mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">
                      {b.label}
                    </span>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {b.detail}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="gradient-blue rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10" />

              <TrendingUp className="w-12 h-12 mb-6 opacity-90" />
              <div className="text-7xl font-extrabold mb-2 leading-none">
                30
              </div>
              <div className="text-2xl font-bold opacity-90 mb-4">min/day</div>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                Just 30 minutes of moderate exercise per day is enough to unlock
                dramatic improvements in energy, mood, and long-term health
                outcomes.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3x", label: "More Energy" },
                  { value: "50%", label: "Less Stress" },
                  { value: "7+", label: "Yrs Longer" },
                  { value: "40%", label: "Heart Risk ↓" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/15 rounded-xl p-3 text-center"
                  >
                    <div className="text-2xl font-extrabold">{stat.value}</div>
                    <div className="text-xs opacity-80 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
