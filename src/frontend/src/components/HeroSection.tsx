import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Dumbbell, Flame, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Users, label: "10K+ Members" },
  { icon: Dumbbell, label: "500+ Workouts" },
  { icon: Star, label: "Expert Guidance" },
];

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-energetic-blue px-3 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Flame className="w-3.5 h-3.5" />
              Your Fitness Journey Starts Here
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
              Transform
              <span className="block text-energetic-blue">Your Body,</span>
              <span className="block">Elevate Your Life</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Discover science-backed fitness programs, nutrition guidance, and
              mental wellness practices to help you achieve your healthiest,
              strongest self — at any level.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button
                onClick={() => handleScroll("#topics")}
                size="lg"
                className="gradient-blue text-white font-semibold px-7 rounded-xl border-0 shadow-glow hover:opacity-90 transition-opacity gap-2"
                data-ocid="hero.primary_button"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => handleScroll("#benefits")}
                variant="outline"
                size="lg"
                className="px-7 rounded-xl font-semibold border-border hover:bg-secondary"
                data-ocid="hero.secondary_button"
              >
                Learn More
              </Button>
            </div>

            {/* Stats chips */}
            <div className="flex flex-wrap gap-3">
              {stats.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground shadow-xs"
                >
                  <Icon className="w-3.5 h-3.5 text-energetic-blue" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto shadow-card-hover">
              <img
                src="/assets/generated/fitness-hero.dim_800x600.jpg"
                alt="Fitness hero"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            {/* Floating workout card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl p-4 shadow-card-hover border border-border min-w-[160px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center">
                  <Flame className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  Today's Workout
                </span>
              </div>
              <div className="text-2xl font-extrabold text-foreground">
                485 kcal
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Clock className="w-3 h-3" />
                45 min session
              </div>
            </motion.div>

            {/* Top-right badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-4 -right-4 lg:right-0 bg-white rounded-2xl p-3 shadow-card-hover border border-border"
            >
              <div className="text-center">
                <div className="text-xl font-extrabold text-warm-orange">
                  98%
                </div>
                <div className="text-xs font-medium text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
