import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  ChartNoAxesCombined,
  Package,
  Users,
  ClipboardList,
  LogOut,
  Menu,
  X,
  Layers,
  UserLock,
  MessageSquareMore,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <ChartNoAxesCombined className="w-5 h-5" aria-hidden="true" />,
    },
    {
      label: "Categorías",
      path: "/categorias",
      icon: <Layers className="w-5 h-5" aria-hidden="true" />,
    },
    {
      label: "Productos",
      path: "/productos",
      icon: <Package className="w-5 h-5" aria-hidden="true" />,
    },
    {
      label: "Roles",
      path: "/roles",
      icon: <UserLock className="w-5 h-5" aria-hidden="true" />,
    },
    {
      label: "Usuarios",
      path: "/usuarios",
      icon: <Users className="w-5 h-5" aria-hidden="true" />,
    },
    {
      label: "Mensajes",
      path: "/mensajes",
      icon: <MessageSquareMore className="w-5 h-5" aria-hidden="true" />,
    },
    {
      label: "Órdenes",
      path: "/ordenes",
      icon: <ClipboardList className="w-5 h-5" aria-hidden="true" />,
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside
      className={`flex flex-col bg-gradient-to-b from-red-500 to-red-500 text-white shadow-lg min-h-screen
        transition-width duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-16"}`}
      aria-label="Sidebar de navegación"
      role="navigation"
    >
      {/* Header */}
      <div className="flex flex-col px-4 py-3 border-b border-red-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logoking.png" alt="KingKang Logo" className="h-10 w-auto" />
            {isOpen && <h1 className="text-xl font-bold whitespace-nowrap">KingKang</h1>}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar sidebar" : "Abrir sidebar"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Hora actual */}
        {isOpen && (
          <div className="mt-2 text-lg font-mono text-center tracking-widest">
            {formattedTime}
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4">
        <ul role="menu" className="space-y-1">
          {menuItems.map(({ label, path, icon }) => {
            const isActive = location.pathname === path;
            return (
              <li key={label} role="none">
                <NavLink
                  to={path}
                  role="menuitem"
                  tabIndex={0}
                  className={({ isActive }) =>
                    `flex items-center gap-3 w-full px-3 py-2 rounded-md
                    transition-colors
                    ${
                      isActive
                        ? "bg-red-700 font-semibold"
                        : "hover:bg-red-700 focus:bg-red-700 focus:outline-none"
                    }`
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {icon}
                  {isOpen && <span className="whitespace-nowrap">{label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-2 py-4 border-t border-red-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Cerrar sesión"
        >
          <LogOut className="w-5 h-5" aria-hidden="true" />
          {isOpen && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
}
