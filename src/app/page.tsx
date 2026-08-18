import Image from "next/image";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import ParticleBackgroundBack from "@/components/ParticleBackgroundBack";
import CornerShapes from "@/components/CornerShapes";
import Journey from "@/components/Journey";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ParticleBackgroundBack />
      <ParticleBackground />
      <CornerShapes />
      <div className="relative z-10 flex flex-col flex-1 w-full items-center">
        <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-20 px-8 sm:items-start">
          <Hero />
          <LogoMarquee />
          <About />
          <TechStack />
          <Projects />
          <Journey />
          <section className="text-center py-20">
            <h2 className="text-3xl md:text-4xl font-serif">Let's build something together</h2>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Get In Touch
            </Link>
          </section>
        </main >
      </div >
    </div>
  );
}
