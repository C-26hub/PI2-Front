// src/services/authService.ts
import Cookies from "js-cookie";

export interface LoginResponse {
  success: boolean;
  user?: {
    name: string;
    email: string;
    role: "gestor" | "tecnico";
    token: string;
  };
  error?: string;
}

// PERFIL ÚNICO (GESTOR)
const PERFIL_PADRAO = {
  name: "Ana Cecília Lima",
  role: "gestor" as const, // Força sempre ser gestor
  token: "token-gestor-123",
};

export const login = async (email: string, senha: string): Promise<LoginResponse> => {
  console.log("Login Simulado (Modo Teste de Usabilidade):", { email });

  // Simula um delay para dar feedback visual (spinner)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // --- LÓGICA SIMPLIFICADA ---
  // Aceita qualquer coisa e sempre retorna sucesso como Gestor.
  return {
    success: true,
    user: {
      ...PERFIL_PADRAO,
      email: email, // Mantém o email que a pessoa digitou para parecer personalizado
    },
  };
};

export const logout = async (): Promise<void> => {
  Cookies.remove("ecosy_token");
  Cookies.remove("ecosy_user");
};

// Mocks auxiliares para não quebrar o resto
export const requestPasswordReset = async (email: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true };
};

export const resetPassword = async (token: string, novaSenha: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true };
};