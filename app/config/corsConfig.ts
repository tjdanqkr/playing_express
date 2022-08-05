import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  allowedHeaders: "*",
  origin: ["http://localhost:3000"],
  methods: "*",
};
