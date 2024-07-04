import { createClient } from "microcms-js-sdk";

export const client = createClient({
  apiKey: process.env.MICROCMS_API_KEY || "",
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  retry: true,
});
