import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-15 py-5 bg-navy/85 backdrop-blur-[20px] border-b border-cyan/10 z-100">
      <div className="font-heading font-extrabold text-2xl text-white tracking-tight">
        <Image src="/logo.png" alt="Logo" width={180} height={60}/>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a
          href="https://wa.me/5541984777311"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5.5 py-2 bg-cyan text-navy font-bold rounded-lg text-[0.82rem] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(53,185,215,0.35)] hover:-translate-y-px"
        >
          Fale conosco
        </a>
      </div>
    </nav>
  );
}
