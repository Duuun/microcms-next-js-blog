import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "dmurakami-blog",
  apiKey: process.env.API_KEY,
});
