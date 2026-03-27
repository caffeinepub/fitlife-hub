import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Tag } from "lucide-react";
import { motion } from "motion/react";

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-orange-100 text-orange-700",
};

const resources = [
  {
    title: "Beginner Running Plan",
    level: "Beginner",
    description:
      "A progressive 8-week running plan that takes you from couch to 5K. Perfect for anyone starting their fitness journey.",
  },
  {
    title: "HIIT Workout Guide",
    level: "Intermediate",
    description:
      "High-intensity interval training routines designed to maximize fat burn and improve cardiovascular fitness in 30 minutes.",
  },
  {
    title: "Meal Prep 101",
    level: "Beginner",
    description:
      "Master the art of weekly meal prep with easy, nutritious recipes that keep you fueled and on track with your health goals.",
  },
  {
    title: "Meditation for Athletes",
    level: "Intermediate",
    description:
      "Guided mindfulness practices specifically designed to enhance athletic performance, focus, and post-workout recovery.",
  },
  {
    title: "Strength Basics",
    level: "Beginner",
    description:
      "Learn proper form for the foundational lifts: squat, deadlift, press, and row. Build strength safely from the ground up.",
  },
  {
    title: "Sleep Optimization Guide",
    level: "Advanced",
    description:
      "Science-backed strategies to optimize your sleep for maximum recovery, hormone balance, and next-day performance.",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block bg-primary/10 text-energetic-blue text-sm font-semibold px-3 py-1.5 rounded-full mb-4">
            Resources
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Your Wellness Toolkit
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Curated guides, plans, and programs to accelerate your health
            journey.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="resources.list"
        >
          {resources.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              data-ocid={`resources.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-foreground text-lg leading-snug">
                  {res.title}
                </h3>
                <span
                  className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    levelColors[res.level] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {res.level}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {res.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-xl border-border font-semibold gap-2 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                data-ocid={`resources.item.${i + 1}.button`}
              >
                View Resource
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
