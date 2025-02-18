import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timeline" },
    { name: "description", content: "Your timeline!" },
  ];
}

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
    </main>
  );
}
