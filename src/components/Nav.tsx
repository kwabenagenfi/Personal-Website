"use client";
import { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="flex items-center justify-between px-8 py-6 fixed top-0 w-full z-50 bg-black/70 backdrop-blur-sm">
            <div>Kwabeha Genfi</div>

            <ul className="hidden md:flex gap-6">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {isOpen && (
                <ul className="absolute top-full left-0 w-full flex flex-col items-center gap-6 bg-black/90 py-6 md:hidden">
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>

                </ul>
            )}

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "Menu"}
            </button>

        </nav>
    );
}