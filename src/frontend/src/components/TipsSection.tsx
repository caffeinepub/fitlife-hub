import { useHealthTip } from "@/hooks/useQueries";
import {
  Ban,
  Droplets,
  Moon,
  PersonStanding,
  Salad,
  SmilePlus,
} from "lucide-react";
import { motion } from "motion/react";

const tips = [
  {
    icon: Droplets,
    color: "text-sky-500",
    bg: "bg-sky-50",
    title: "Stay Hydrated",
    tip: "Drink at least 8 glasses of water daily. Proper hydration supports energy, focus, and recovery.",
  },
  {
    icon: Salad,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    title: "Eat More Veggies",
    tip: "Fill half your plate with colorful vegetables to get essential vitamins, minerals, and fiber.",
  },
  {
    icon: Moon,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    title: "Get 7–9 Hours Sleep",
    tip: "Quality sleep restores muscles, balances hormones, and sharpens cognitive function.",
  },
  {
    icon: PersonStanding,
    color: "text-orange-500",
    bg: "bg-orange-50",
    title: "Take Movement Breaks",
    tip: "Stand up and move for 5 minutes every hour to counteract the effects of prolonged sitting.",
  },
  {
    icon: SmilePlus,
    color: "text-violet-500",
    bg: "bg-violet-50",
    title: "Practice Gratitude",
    tip: "A daily gratitude practice reduces cortisol and boosts mental resilience and overall happiness.",
  },
  {
    icon: Ban,
    color: "text-rose-500",
    bg: "bg-rose-50",
    title: "Limit Processed Foods",
    tip: "Swap ultra-processed snacks for whole-food alternatives to reduce inflammation and improve energy.",
  },
];

export function TipsSection() {
  const { data: backendTip, isSuccess } = useHealthTip();

  return (
    <section id="tips" className="py-24 bg-section-tint">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-accent/15 text-warm-orange text-sm font-semibold px-3 py-1.5 rounded-full mb-4">
            Daily Habits
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Daily Health Tips
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Small, consistent habits compound into extraordinary results over
            time.
          </p>
        </motion.div>

        {/* Backend tip banner */}
        {isSuccess && backendTip && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 flex items-start gap-3"
          >
            <span className="text-energetic-blue text-lg mt-0.5">💡</span>
            <div>
              <span className="font-semibold text-foreground text-sm">
                Tip of the Day:{" "}
              </span>
              <span className="text-muted-foreground text-sm">
                {backendTip}
              </span>
            </div>
          </motion.div>
        )}

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="tips.list"
        >
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              data-ocid={`tips.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div
                className={`w-11 h-11 ${tip.bg} rounded-xl flex items-center justify-center mb-4`}
              >
                <tip.icon className={`w-5 h-5 ${tip.color}`} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tip.tip}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
