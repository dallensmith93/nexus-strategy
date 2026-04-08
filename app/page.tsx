import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-agency-base">
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
      </main>
    </div>
  );
}
