import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
  // Carga las variables de entorno de la aplicación a las variables de entorno de nivel de nodo.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
  });
};
