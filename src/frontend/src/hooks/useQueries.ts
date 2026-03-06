import { useMutation } from "@tanstack/react-query";
import type { ServiceInterest } from "../backend";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
      serviceInterest,
    }: {
      name: string;
      email: string;
      message: string;
      serviceInterest: ServiceInterest;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitContactForm(name, email, message, serviceInterest);
    },
  });
}
