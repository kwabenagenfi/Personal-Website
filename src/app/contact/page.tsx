import ParticleBackground from "@/components/ParticleBackground";

export const metadata = {
    title: "Contact - Kwabeha Genfi",
    description: "Get in touch with Kwabeha Genfi for collaborations, inquiries, or just to say hello. Reach out via email or connect on social media.",
};

export default function Contact() {
    return (
        <div className="relative ">
            <ParticleBackground />
            <div className="relative z-10">
                <section id="contact" className="scroll-mt-24 min-h-screen pt-32 px-8 pb-20">
                    <div className="text-center">
                        <p className="text-sm tracking-widest text-gray-400 uppercase font-bold">Get In Touch</p>
                        <h2 className="text-5xl md:text-6xl font-serif">Let's Work Together</h2>
                        <div className="w-16 h-px bg-white/30 mx-auto my-6" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
                        <div>
                            <h3 className="text-3xl font-bold">Get In Touch</h3>
                            <p className="text-gray-300 text-lg mt-4">
                                I'm always interested in new opportunities and exciting projects.
                                Whether you have a project in mind or just want to chat about technology,
                                feel free to reach out!
                            </p>
                            <div className="flex flex-col gap-3 mt-6 text-gray-300">
                                <div>genfika@mail.uc.edu</div>
                                <div>Cincinnati, OH</div>
                            </div>
                        </div>

                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
                        >
                            <input type="hidden" name="access_key" value="ce9b468b-bf5b-4f37-8de5-984d1a16f3f8" />
                            <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                            <div>
                                <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                                <input
                                    type="text" id="name" name="name" placeholder="Your Name" required
                                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-white/30"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                                <input
                                    type="email" id="email" name="email" placeholder="your.email@example.com" required
                                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-white/30"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                                <textarea
                                    id="message" name="message" placeholder="Tell me about your project..." required rows={5}
                                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-white/30"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-white text-black rounded-full py-3 font-medium hover:bg-gray-200 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}