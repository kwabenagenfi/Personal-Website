"use client";
import { motion } from "framer-motion";
import PopIn from "@/components/PopIn";

export default function Journey() {
    const Journey = [
        {
            title: "Bachelors of Science in Computer Science",
            org: "University of Cincinnati",
            date: "Aug 2023 - May 2028",
            description: "Minor in mathematics, pursuing with a focus on software engineering and machine learning.",
        },
        {
            title: "Contract Web Application Developer",
            org: "Sam Tires",
            date: "Jan 2025 - Mar 2025",
            description: "Worked on a web application for a local tire business based in cincinnati and atlanta.",
        },
        {
            title: "Contracted Mobile Application Developer",
            org: "Sichauns Palace",
            date: "May 2025 - Aug 2025",
            description: "Built a mobile application for the internal affairs of a local food business in regards to inventory and order tracking.",
        },
        {
            title: "Software Engineer Intern",
            org: "Fomena",
            date: "Jan 2026 - Aug 2026",
            description: "Worked on a team of 4 to develop a web application for internal use, utilizing React, Node.js, and PostgreSQL.",
        },
        {
            title: "Seeking Software Engineer Internship",
            org: "Any Company",
            date: "Jan 2027 - Aug 2027",
            description: "Looking for an opportunity to gain experience and apply my skills and knowledge in more real-world settings.",
        }
    ]

    return (
        <section id="journey" className="scroll-mt-24 p-8">
            <div className="text-center">
                <p className="text-sm tracking-widest text-gray-300 uppercase font-bold">Where I've been</p>
                <h2 className="text-5xl md:text-7xl font-serif">My Journey</h2>
                <div className="w-16 h-px bg-white/30 mx-auto my-6" />
            </div>

            <div className="relative max-w-5xl mx-auto mt-16">
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />

                <div className="flex flex-col gap-16">
                    {Journey.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={item.title} className="relative grid md:grid-cols-2 gap-12">
                                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full bg-blue-600 z-10" />

                                < div className={` pl-12 md:pl-0 ${isLeft ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                                    <PopIn delay={index * 0.1}>
                                        <motion.div
                                            initial={{ rotateY: isLeft ? -90 : 90 }}
                                            whileInView={{ rotateY: 0 }}
                                            viewport={{ once: false, amount: 0.4 }}
                                            transition={{ duration: 0.7 }}
                                            style={{
                                                transformPerspective: 1000,
                                                transformOrigin: isLeft ? "right center" : "left center",
                                            }}

                                        >
                                            <div className="bg-purple-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(255,255,255,0.1),0_0_80px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                                                <p className="text-gray-400 text-xs tracking-widest uppercase">{item.date}</p>
                                                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                                                <p className="text-gray-400">{item.org}</p>
                                                <p className="text-green-400 mt-2">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    </PopIn>
                                </div>
                            </div>
                        );

                    })}
                </div>
            </div>
        </section>
    )
}