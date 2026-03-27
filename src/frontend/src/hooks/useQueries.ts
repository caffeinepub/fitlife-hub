import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useHealthTip() {
  const { actor, isFetching } = useActor();
  return useQuery<string>({
    queryKey: ["healthTip"],
    queryFn: async () => {
      if (!actor)
        return "Stay consistent — small daily habits lead to big results over time.";
      return actor.getHealthTipOfTheDay();
    },
    enabled: !!actor && !isFetching,
  });
}
