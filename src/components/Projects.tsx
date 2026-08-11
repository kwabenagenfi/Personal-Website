import Image from "next/image";
import PopIn from "@/components/PopIn";

export default function Projects() {
    const projects = [
        {
            title: "project 1",
            description: "This is a description of project 1.",
            tags: ["flask", "React Native", "Python", "Firebase"],
            image: "/prodset.jpg",
        },
        {
            title: "project 2",
            description: "This is a description of project 2.",
            tags: ["flask", "React Native", "Python", "Firebase"],
            image: "/prodset.jpg",
        },
        {
            title: "project 3",
            description: "This is a description of project 3.",
            tags: ["flask", "React Native", "Python", "Firebase"],
            image: "/prodset.jpg",
        },
        {
            title: "project 4",
            description: "This is a description of project 4.",
            tags: ["flask", "React Native", "Python", "Firebase"],
            image: "/prodset.jpg",
        },
        {
            title: "project 5",
            description: "This is a description of project 5.",
            tags: ["flask", "React Native", "Python", "Firebase"],
            image: "/prodset.jpg",
        },
        {
            title: "project 6",
            description: "This is a description of project 6.",
            tags: ["flask", "React Native", "Python", "Firebase"],
            image: "/prodset.jpg",
        },

    ];
    return (
        <section id="projects" className="scroll-mt-24 p-2">
            <div className="text-center">
                <p className="text-sm tracking-widest text-gray-400 uppercase font-bold">selected works</p>
                <h2 className="text-5xl md:text-6xl font-serif">Projects</h2>
                <div className="w-16 h-px bg-white/30 mx-auto my-6" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {projects.map((project, index) => (
                    <PopIn key={project.title} delay={index * 0.15} >
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(255,255,255,0.1),0_0_80px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                            <div className="relative w-full h-[300px]">
                                <Image src={project.image} alt={project.title} fill className="object-cover" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold ">{project.title}</h3>
                                <p className="text-gray-400 mt-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </PopIn>

                ))}
            </div>

        </section>
    )
}
