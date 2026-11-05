import "dotenv/config";
import { defineConfig } from "prisma/config";

// Prisma 7 CLI configuration (migrate, studio, db seed).
// DATABASE_URL falls back to the same default as src/config/env.js, so
// `npm install` (which runs `prisma generate`) works even before server/.env
// exists. A relative "file:./dev.db" path resolves against this server/ folder.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.js",
  },
  datasource: {
    url: process.env.DATABASE_URL ?? "file:./dev.db",
  },
});
