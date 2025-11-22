import Cookies from "js-cookie";

export interface LoginResponse {
  success: boolean;
  user?: {
    name: string;
    email: string;
    role: "gestor" | "tecnico";
    token: string; // Simulando um JWT
  };
  error?: string;
}

const MOCK_USERS = [
  {
    email: "ana@ipa.gov.br",
    password: "123", 
    name: "Ana Cecília",
    role: "gestor" as const,
  },
  {
    email: "jonas.pereira@ipa.pe.gov.br",
    password: "123",
    name: "Jonas Pereira",
    role: "tecnico" as const,
  },
];

export const login = async (email: string, senha: string): Promise<LoginResponse> => {
  console.log("Chamando API de Login (Mock)...", { email });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = MOCK_USERS.find((u) => u.email === email && u.password === senha);

  if (user) {
    return {
      success: true,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        token: "fake-jwt-token-123456", // Token falso
      },
    };
  }

  return { success: false, error: "Email ou senha inválidos." };
};

export const logout = async (): Promise<void> => {
  Cookies.remove("ecosy_token");
  Cookies.remove("ecosy_user");
  
// No futuro: Chama o backend para invalidar a sessão
  // await fetch('/api/auth/logout', { method: 'POST' });
  
  console.log("Usuário deslogado com sucesso.");
};