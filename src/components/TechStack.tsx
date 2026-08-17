import PopIn from "@/components/PopIn";

export default function TechStack() {
    const stack = [
        {
            title: "Frontend",
            description: "I have experience in building responsive and interactive user interfaces using modern frontend technologies.",
            bullets: [
                "enhanced several projects",
                "provided clear and user friendly interfaces using React, Next.js, Tailwind CSS, HTML, CSS, JavaScript"
            ],
            tags: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],

        },
        {
            title: "Backend",
            description: "I have experience in developing scalable server-side applications using various backend technologies.",
            bullets: [
                "developed scalable server-side applications using Node.js",
                "Express",
                "Python",
                "Django",
                "and RESTful APIs"
            ],
            tags: ["Node.js", "Express", "Python", "Django", "RESTful APIs"]
        },
        {
            title: "DevOps",
            description: "I have experience in implementing CI/CD pipelines and managing cloud infrastructure.",
            bullets: [
                "implemented CI/CD pipelines",
                "containerized applications using Docker",
                "managed cloud infrastructure on AWS and GCP"
            ],
            tags: ["Docker", "AWS", "GCP", "CI/CD"]
        },
        {
            title: "Robotics",
            description: "I have experience in designing and programming robotic systems for various applications.",
            bullets: [
                "designed and programmed robotic systems using ROS",
                "Arduino",
                "Raspberry Pi for various applications"
            ],
            tags: ["ROS", "Arduino", "Raspberry Pi"]
        }

    ];

    return (
        <section id="techstack" className="p-8 scroll-mt-24">
            <div className="text-center">
                <p className="text-sm tracking-widest text-gray-400 uppercase font-bold ">What I've Built with</p>
                <h2 className="text-5xl md:text-6xl font-serif ">MY TECH STACK</h2>
                <div className="w-16 h-px bg-white/30 mx-auto my-6" />
            </div>



            <div className="grid  gap-8 mt-12">
                {stack.map((item, index) => (
                    <PopIn key={item.title} delay={index * 0.2}>
                        <div className="bg-white/5 backdrop-blur-md border border-white/4 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(255,255,255,0.1),0_0_80px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-xs tracking-widest text-blue-400 uppercase">Focus Area</p>
                                    <h3 className="font-serif text-3xl mt-2">
                                        <span className="text-blue-400 text-lg align-top">0{index + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-gray-400 mt-4">{item.description}</p>
                                </div>
                                <div className="md:border-l md:border-white/10 md:pl-8">
                                    <p className="text-xs tracking-widest text-gray-400 uppercase">What I've Built</p>
                                    <ul className="mt-3 space-y-3">
                                        {item.bullets.map((point) => (
                                            <li key={point} className="flex items-start gap-2 text-gray-300">
                                                <span className="text-blue-400 ">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full ">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </PopIn>
                ))}
            </div>



        </section>
    );
}