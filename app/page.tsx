import { Hero, Skills, Encryption, Projects } from "@/components/main";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
