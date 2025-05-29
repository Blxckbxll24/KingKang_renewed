import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-red-200 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
  <a href="/">
    <img
      src="/logoking.png"
      alt="Logo KingKang"
      className="h-25 w-auto"
    />
  </a>
</div>


        <h2 className="text-3xl font-extrabold text-center text-red-600">Inicia Sesión</h2>

        <form className="space-y-5">
          {/* Email */}
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Botón */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-full shadow-md transition duration-300"
            >
              Ingresar
            </button>
          </div>

          
          <div className="text-sm text-center">
            <a href="registro" className="text-red-500 hover:underline">
              ¿No tienes una cuenta? ¡Regístrate!
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
