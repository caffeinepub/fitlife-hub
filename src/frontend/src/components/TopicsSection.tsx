import { Apple, ArrowRight, Brain, Dumbbell, Heart } from "lucide-react";
import { motion } from "motion/react";

const topics = [
  {
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-50",
    title: "Cardio",
    description:
      "Boost your cardiovascular health with consistent aerobic exercise. Improve endurance, strengthen your heart, and burn calories effectively.",
  },
  {
    icon: Dumbbell,
    color: "text-energetic-blue",
    bg: "bg-blue-50",
    title: "Strength Training",
    description:
      "Build muscle, increase metabolism, and strengthen your bones. Resistance training transforms your body and improves daily functionality.",
  },
  {
    icon: Apple,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    title: "Nutrition",
    description:
      "Fuel your body with the right nutrients to maximize performance and recovery. Learn how balanced eating supports your fitness goals.",
  },
  {
    icon: Brain,
    color: "text-violet-500",
    bg: "bg-violet-50",
    title: "Mental Wellness",
    description:
      "Achieve balance through mindfulness, stress management, and quality sleep. A healthy mind is the foundation of a healthy body.",
  },
];

export function TopicsSection() {
  return (
    <section id="topics" className="py-24 bg-section-tint">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/10 text-energetic-blue text-sm font-semibold px-3 py-1.5 rounded-full mb-4">
            Explore Topics
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Explore Key Fitness Topics
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Dive deep into the pillars of health — from movement to mindset.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="topics.list"
        >
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              data-ocid={`topics.item.${i + 1}`}
              className="group bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${topic.bg} rounded-xl flex items-center justify-center mb-4`}
              >
                <topic.icon className={`w-6 h-6 ${topic.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {topic.description}
              </p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-energetic-blue group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
