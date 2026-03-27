import { Zap } from "lucide-react";

const footerLinks = {
  Resources: [
    "Beginner Running Plan",
    "HIIT Workout Guide",
    "Meal Prep 101",
    "Sleep Optimization",
  ],
  Topics: ["Cardio", "Strength Training", "Nutrition", "Mental Wellness"],
  Company: ["About Us", "Blog", "Privacy Policy", "Contact"],
};

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-extrabold text-xl mb-4">
              <span className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </span>
              FitLife<span className="text-energetic-blue">Hub</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your comprehensive guide to fitness, nutrition, and mental
              wellness. Build better habits, live a longer, healthier life.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-white/70 text-sm hover:text-white transition-colors"
                      data-ocid="footer.link"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-sm">
            © {year} FitLifeHub. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
