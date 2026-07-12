export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]): string {
  return inputs
    .flatMap((v) => {
      if (!v) return [];
      if (typeof v === "string") return [v];
      return Object.entries(v).filter(([, ok]) => ok).map(([k]) => k);
    })
    .join(" ");
}
