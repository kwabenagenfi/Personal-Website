"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();


    return (
        <nav className="flex items-center px-8 py-3 fixed top-0 w-full z-50 bg-black/70 backdrop-blur-sm">
            <div className="flex-1 flex justify-start pl-1">
                {pathname === "/" ? (
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-sm md:text-base whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer"
                    >
                        Kwabeha Genfi
                    </button>
                ) : (
                    <Link
                        href="/"
                        className="text-sm md:text-base whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer">
                        Kwabeha Genfi
                    </Link>
                )}
            </div>

            <div className="flex-1 flex justify-center ml-4 md:ml-0">

                <a
                    href="https://MACFOLIO_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/apple.svg"
                        alt="Mac Portfolio"
                        width={20}
                        height={20}
                        className="invert opacity-80 hover:opacity-100 transition-opaciity"
                    />
                </a>
            </div>


            <div className="flex-1 flex justify-end">
                <ul className="hidden md:flex gap-6">
                    <li><Link href="/#home">Home</Link></li>
                    <li><Link href="/#about">About</Link></li>
                    <li><Link href="/#projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>


            {isOpen && (
                <ul className="absolute top-full left-0 w-full flex flex-col items-center gap-6 bg-black/90 py-3 md:hidden">
                    <li><Link href="/#home" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/#about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

                </ul>
            )}

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "Menu"}
            </button>

        </nav>
    );
}