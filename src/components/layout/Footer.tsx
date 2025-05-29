export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo */}
          <div>
            <img
              src="/logoking.png"
              alt="KingKang Logo"
              className="mx-auto md:mx-0 mb-2 w-24"
            />
            <p className="text-sm text-gray-400">
              Díaz Kauil - Pech - Coto - Ortega - Aguilar
            </p>
            <p className="text-sm text-gray-500">IDYGS92</p>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <a href="/privacidad" className="hover:underline">
                  Políticas y Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:underline">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-gray-300 hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.006 3.66 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.464h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.987C18.34 21.128 22 17.006 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-gray-300 hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 011.757 1.145 4.92 4.92 0 011.145 1.757c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.145 1.757 4.92 4.92 0 01-1.757 1.145c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 01-1.757-1.145 4.92 4.92 0 01-1.145-1.757c-.163-.457-.349-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 011.145-1.757 4.92 4.92 0 011.757-1.145c.457-.163 1.257-.349 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.15 0-3.508.012-4.743.069-.993.046-1.532.211-1.891.351a3.08 3.08 0 00-1.116.726 3.08 3.08 0 00-.726 1.116c-.14.359-.305.898-.351 1.891-.057 1.235-.069 1.593-.069 4.743s.012 3.508.069 4.743c.046.993.211 1.532.351 1.891.16.401.374.742.726 1.116.374.374.715.566 1.116.726.359.14.898.305 1.891.351 1.235.057 1.593.069 4.743.069s3.508-.012 4.743-.069c.993-.046 1.532-.211 1.891-.351a3.08 3.08 0 001.116-.726 3.08 3.08 0 00.726-1.116c.14-.359.305-.898.351-1.891.057-1.235.069-1.593.069-4.743s-.012-3.508-.069-4.743c-.046-.993-.211-1.532-.351-1.891a3.08 3.08 0 00-.726-1.116 3.08 3.08 0 00-1.116-.726c-.359-.14-.898-.305-1.891-.351-1.235-.057-1.593-.069-4.743-.069zm0 4.838a5.999 5.999 0 110 12 5.999 5.999 0 010-12zm0 1.838a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zm5.406-1.842a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-gray-300 hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.267c-.966 0-1.75-.792-1.75-1.766s.784-1.767 1.75-1.767c.966 0 1.75.793 1.75 1.767s-.784 1.766-1.75 1.766zm13.5 11.267h-3v-5.604c0-1.336-.026-3.054-1.86-3.054-1.863 0-2.149 1.454-2.149 2.957v5.701h-3v-10h2.882v1.367h.041c.402-.761 1.385-1.56 2.85-1.56 3.046 0 3.608 2.005 3.608 4.615v5.578z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6" />

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} KingKang. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
