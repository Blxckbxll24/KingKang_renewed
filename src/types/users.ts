// types/users.ts
import type { Role } from "./roles";

export interface User {
  id: number;
  username: string;
  password?: string; // en frontend no se envía contraseña siempre, depende de la operación
  email?: string;
  isActive: boolean;
  role: Role;
  roleId?: number;
}
