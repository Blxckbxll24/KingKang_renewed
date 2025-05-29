import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-red-500 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logoking.png"
            alt="KingKang Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-white tracking-wide">
            KingKang
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
          <a href="/productos" className="hover:text-orange-300 transition">Productos</a>
          <a href="/nosotros" className="hover:text-orange-300 transition">Nosotros</a>
          <a href="/contacto" className="hover:text-orange-300 transition">Contacto</a>
          <a href="/login" className="hover:text-orange-300 transition">Iniciar sesión</a>
          <a href="/carrito" className="hover:text-orange-300 transition">Carrito</a>
          <a href="/perfil" className="hover:text-orange-300 transition">Mi Perfil</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-white"
          aria-label="Toggle menú"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-red-500 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 space-y-2 text-white text-base font-medium">
          <a href="/productos" className="hover:text-orange-300 transition">Productos</a>
          <a href="/nosotros" className="hover:text-orange-300 transition">Nosotros</a>
          <a href="/contacto" className="hover:text-orange-300 transition">Contacto</a>
          <a href="/login" className="hover:text-orange-300 transition">Iniciar sesión</a>
          <a href="/carrito" className="hover:text-orange-300 transition">Carrito</a>
          <a href="/perfil" className="hover:text-orange-300 transition">Mi Perfil</a>
        </nav>
      </div>
    </header>
  );
}
