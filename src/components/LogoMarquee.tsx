import Image from "next/image";

export default function LogoMarquee() {
    const logos = ["exampleone", "exampletwo", "examplethree", "examplefour", "examplefive"];
    const oneset = [...logos, ...logos];
    const allLogos = [...oneset, ...oneset];

    return (
        <section className="py-16 overflow-hidden w-full md:w-[600px] mx-auto fade-edges">
            <div className="flex animate-[scroll_10s_linear_infinite] gap-12">
                {allLogos.map((logo, index) => (
                    <Image key={index} src={`/logos/${logo}.svg`} alt={logo} width={60} height={20} className="invert" />
                ))}
            </div>
        </section>
    );
}