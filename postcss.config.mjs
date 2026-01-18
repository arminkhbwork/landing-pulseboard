import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure PostCSS resolves modules from project directory
process.env.NODE_PATH = path.resolve(__dirname, "node_modules");

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
