export default function Nav() {
    return (
        <nav className="flex items-center justify-between px-8 py-6 fixed top-0 w-full">
            <div>Kwabeha Genfi</div>


            <ul className="flex gap-6">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>

        </nav>
    );
}