import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",     // Disable unused vars globally
      "@typescript-eslint/no-explicit-any": "off",    // Disable explicit any globally
      "react-hooks/rules-of-hooks": "error",          // Enforce hooks rules
      "react-hooks/exhaustive-deps": "warn"           // Warn for missing dependencies
    }
  }

];


export default eslintConfig;
