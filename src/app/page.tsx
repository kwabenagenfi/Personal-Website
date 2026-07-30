import Image from "next/image";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-20 px-14  bg-white dark:bg-black sm:items-start">
        <Hero />
        <LogoMarquee />
        <About />
      </main >
    </div >
  );
}
