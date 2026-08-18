import Image from "next/image";
import PopIn from "@/components/PopIn";

export default function About() {
    const link = [
        { name: "GitHub", handle: "@kwabenagenfi", href: "https://github.com/kwabenagenfi", icon: "/icons/githublogo.webp" },
        { name: "LinkedIn", handle: "@kwabeha-genfi", href: "https://www.linkedin.com/in/kwabeha-genfi-a547182a3", icon: "/icons/LinkedIn_icon.webp" },
        { name: "Instagram", handle: "@kobegenfi", href: "https://www.instagram.com/kobegenfi", icon: "/icons/instagram.webp" },
        { name: "X", handle: "@kobekgenfi", href: "https://x.com/kobekgenfi", icon: "/icons/X.webp" },


    ];
    return (
        <section id="about" className="scroll-mt-24 grid md:grid-cols-2 gap-20 items-stretch">

            <PopIn>
                <div className=" relative rounded-2xl overflow-hidden">
                    <Image
                        src="/kobe6.jpg"
                        alt="Kobe"
                        width={500}
                        height={600}
                        className="rounded-2xl object-cover p-2 mt-10"
                    />
                </div>
            </PopIn>
            <PopIn delay={0.2}>
                <div className="mt-10 lg:min-w-[600px] lg:min-h-[700px] bg-purple-500/10 backdrop-blur-md border border-white/5 rounded-2xl p-4 hover:shadow-[0_0_25px_rgba(255,255,255,0.1),0_0_80px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                    <h2 className="text-4xl font-bold">Hey, I'm Kobe 🤟🏾</h2>
                    <p>Born and raised in Brooklyn, NY and currently in Cincinnati. I'm currently studying Computer Science with a minor in mathematics and on track to earn a Master's degree in Artificial Intelligence at the University of Cincinnati, with a focus on backend development and robotic systems. </p>
                    <p className="mt-4"><strong>Hobbies:</strong> Coding, Music production, Football, Cooking</p>
                    <p><strong>Favorite languages:</strong> Python, Java, Golang</p>

                    <h2 className="text-3xl font-bold mt-8">Connect with me:</h2>
                    <p className="mt-6">Feel free to reach out to me on any of the platforms below. I'm always open to networking, collaboration, and new opportunities!</p>
                    <p>Let's connect and create something great together!</p>


                    <div className="flex flex-col gap-4 mt-7 ">
                        {link.map((l) => (
                            <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                <div className={`w-8 h-8 overflow-hidden ${l.name === "GitHub" || l.name === "X" ? "rounded-full" : ""}`}>
                                    <Image
                                        src={l.icon}
                                        alt={l.name}
                                        width={32}
                                        height={32}
                                        className={`object-cover ${l.name === "Instagram" ? "scale-175" : ""}`}
                                    />
                                </div>
                                <span>{l.handle}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </PopIn>
        </section>
    );
}
