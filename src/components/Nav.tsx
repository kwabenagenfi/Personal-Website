"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="flex items-center justify-between px-8 py-3 fixed top-0 w-full z-50 bg-black/70 backdrop-blur-sm">
            <div>Kwabeha Genfi</div>

            <ul className="hidden md:flex gap-6">
                <li><Link href="/#home">Home</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/#projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

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