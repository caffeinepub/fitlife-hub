import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  let healthTips = [
    "Drink more water! Staying hydrated is essential for energy and health.",
    "Take small walks today – moving even a little helps your fitness.",
    "Remember to stretch. Flexibility improves your daily life.",
    "Sleep well! Good rest helps the mind, body, and immune system.",
    "Eat more fruits and vegetables – your body will thank you.",
    "Take deep breaths and relax often to reduce stress.",
    "Wash your hands to protect yourself from germs.",
    "Try some squats or pushups today – build that strength!",
    "Have a laugh – it's great for your heart and mind.",
    "Consistency is key. Small, healthy habits add up!",
  ];

  public query ({ caller }) func getHealthTipOfTheDay() : async Text {
    let currentTime = Time.now();
    let day = (currentTime / 86_400_000_000_000);
    let index = day % healthTips.size();
    healthTips[index.toNat()];
  };
};
