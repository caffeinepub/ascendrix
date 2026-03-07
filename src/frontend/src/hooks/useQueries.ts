import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactSubmission, ServiceInterest } from "../backend";
import { useActor } from "./useActor";

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<ContactSubmission[]>({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
    refetchOnWindowFocus: false,
  });
}

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
