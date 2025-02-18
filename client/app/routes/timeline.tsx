import Grid from "~/components/grid";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timeline | Your timeline" },
    { name: "description", content: "Your timeline!" },
  ];
}

export default function Timeline() {
  const events = [{ id: 1, index: 0, emoji: "👶", description: "I was born" }];

  return (
    <main>
      <Grid events={events} />
    </main>
  );
}
