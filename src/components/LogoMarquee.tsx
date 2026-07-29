import Image from "next/image";

export default function LogoMarquee() {
    const logos = ["exampleone", "exampletwo", "examplethree", "examplefour", "examplefive"];

    return (
        <section className="flex items-center justify-center gap-12 py-16">
            {logos.map((logo) => (
                <Image key={logo} src={`/logos/${logo}.svg`} alt={logo} width={120} height={40} className="invert" />
            ))}
        </section>
    );
}